<template>
  <div class="code-view-wrapper">
    <div>
      <slot name="header"></slot>
    </div>
    <span class="copycode" tooltipp="copy" flow="left" @click="copyToClipBoard">
      <i class="bx bxs-copy"></i>
    </span>
    <span class="copied" v-if="copied">Copied</span>
    <pre ref="pretag"class="line-numbers"><code v-html="highlightCode(code)"></code></pre>
    <div>
      <slot></slot>
    </div>
  </div>
  
</template>

<script setup>
import {ref, onMounted } from 'vue'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/github.css'

import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)

import { html as beautifyHtml } from 'js-beautify';

let props = defineProps({
    lang: {
      type: String,
      required: true,
      default: 'html',
      validation(val){
        return ['html', 'javascript'].includes()
      }
    },
    code: {
      type: String,
      required: true,
      default: '',
    },
    inTabs: {
      type: Boolean,
      required: true,
      default: false,
    },
    trimCount: {
      type: String,
      required: false,
      default: 'standard', 
    },
})



let pretag = ref(null)
let copied = ref(false)
let contenteditable = ref(false)


function fixIndentaion(code, lang){
  if(lang === 'javascript'){
    let lines = []
    
    if(props.trimCount == 'standard'){
      lines = String(code).split('\n').map((line, i) => line.replace(new RegExp(`^\\s{8}`), ''), '')
    }
    else {
      lines = String(code).split('\n').map((line, i) => line.replace(new RegExp(`^\\s{7}`), ''), '')
    }
 
    return lines.join('\n')
    
  } else {
    return code
  }
}

function highlightCode(code) {
  const language = props.lang === 'javascript' ? 'javascript' : 'xml';
  code = fixIndentaion(code, language)
  const source = language === 'xml'
    ? beautifyHtml(code, {
        indent_size: 2,
        preserve_newlines: true,
        wrap_line_length: 60,
      })
    : code;

  return hljs.highlight(source, { language }).value;
}



function copyToClipBoard() { 
  contenteditable.value = true;
    const preElement = pretag.value;
    if (preElement) {
      const range = document.createRange();
      const selection = window.getSelection();

      range.selectNodeContents(preElement);
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          copied.value = true;
          setTimeout(() => {
            copied.value = false;
          }, 1000);
        }
      } catch (err) {
        console.error("Error copying content: ", err);
      }

      selection.removeAllRanges();
      contenteditable.value = false;
    }
} 
   
</script>

<style>
/* Your CSS remains mostly unchanged */
.code-view-wrapper {
  position: relative;
}

.code-view-wrapper pre {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  background-color: #ececec; 
  overflow: auto;
  font-size: 0.9rem;
  padding-right: 40px;
}
.code-view-wrapper pre.in-tabs {
  margin-top: 10px;
}

.code-view-wrapper pre:focus-visible {
  outline: none;
}

.code-view-wrapper pre[class*="language-"].line-numbers {
  position: relative;
  padding-left: 1.8em;
  counter-reset: linenumber;
  line-height: 25px;
}

code[class*="language-"], pre[class*="language-"] {
    line-height: 2; 
}

.copycode {
  position: absolute;
  right: 10px;
  top: 13px;
  z-index: 9;
  cursor: pointer;
  padding: 2px 5px 0px 5px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: #656f7d;
}

.copycode:hover,
.copycode:has(~ .copied) {
  background-color: #2e323a;
}

.copycode:hover > i,
.copycode:has(~ .copied) > i {
  color: white;
}

.copycode ~ .copied {
  position: absolute;
  right: 32px;
  top: 13px;
  z-index: 9;
  cursor: pointer;
  background-color: #2e323a;
  padding: 0px 4px;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  padding: 4px 8px;
  border-radius: 3px;
  animation: copied-slideright 0.2s ease-in-out;
}

@keyframes copied-slideright {
  0% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
