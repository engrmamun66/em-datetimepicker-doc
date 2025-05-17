<script setup>
import { onMounted, inject } from 'vue';
import showCode from '../../components/showCode.vue'
import Tabs from '../../components/tabs.vue'
const version = inject('version')

let script_js = `<link rel="stylesheet" href="http://localhost:3200/assets/em-datetimepicker-documentaion.min.css">`
let script_file = `<script src="http://localhost:3200/assets/em-datetimepicker-documentaion.min.js">` + '<' + '/' + 'script' + '>'


const CODES = {
     initlization_picker_example1: `
          let pickerElement = document.getElementById('myInput')
          if(pickerElement) pickerElement.emDateTimePicker({
               "startDate": new Date(),
               "endDate": new Date(),
          })
     `
}
 


</script>

<template>
     <h1>Introduction</h1> 
     <div>
          
          <div class="hl low-b">Em-DateTimePicker </div> is a vanila javascript cdn solution to use, date time picker in any website with any platform.
          <span class="hl red mt-2">HTML</span>
          <span class="hl cayan">Vue</span>
          <span class="hl yellow">React</span>
          <span class="hl green">Angular</span>
          
     </div>

     <h1>Script Loading Process</h1> 

      <Tabs :tabs="['CSS', 'Script']">
          <template #slot="{i}">
               <showCode v-show="i==0" lang="html" :inTabs="true" :code="script_js"></showCode>
               <showCode v-show="i==1" lang="html" :inTabs="true" :code="script_file"></showCode>
          </template>
      </Tabs>
 

      <h2> How to initialize </h2>

      <Tabs :tabs="['Example-1', 'Example-1']">
          <template #slot="{i}">
               <showCode v-show="i==0" lang="javascript" :inTabs="true" :code="CODES.initlization_picker_example1">
                    asdfasdfasdf
               </showCode>
               <showCode v-show="i==1" lang="javascript" :inTabs="true" :code="script_file"></showCode>
          </template>
      </Tabs>

    

</template>

<style>
  
</style>

