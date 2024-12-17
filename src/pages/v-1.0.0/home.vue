<script setup>
import { onMounted, inject } from 'vue';
import showCode from '../../components/showCode.vue'
import Tabs from '../../components/tabs.vue'
import Note from '../../components/note.vue'
import numberedList from '../../components/numberedList.vue'
import myTable from '../../components/myTable.vue'
const version = inject('version')

let script_js = `<link rel="stylesheet" href="http://localhost:3200/assets/em-datetimepicker-documentaion.min.css">`
let script_file = `<script src="http://localhost:3200/assets/em-datetimepicker-documentaion.min.js">` + '<' + '/' + 'script' + '>'
 
 

</script>

<template>
     <h1>Markup</h1> 
     <p>
          The following are examples of supported markup. On their own, these will not provide a datepicker widget; you will need to instantiate the datepicker on the markup.
     </p>

     <h1>Script Loading Process</h1> 

      <Tabs :tabs="['CSS', 'Script']">
          <template #slot="{i}">
               <showCode v-show="i==0" lang="javascript" :inTabs="true" :code="script_js"></showCode>
               <showCode v-show="i==1" lang="javascript" :inTabs="true" :code="script_file"></showCode>
          </template>
      </Tabs>

     <numberedList :use-border="false" >
          <li>ONe</li>
          <li>Two </li>
          <li>Three</li>
     </numberedList>

     <div class="row">
          <!-- <div class="col-6">
               <Note></Note>
          </div>
          <div class="col-6">
               <Note></Note>
          </div>
          <div class="col-6">
               <Note></Note>
          </div> -->
     </div>


     <myTable></myTable>


      

<!-- 
     <hr v-for="x in 100" >

     <h3 id="TEST">asdf</h3> -->

</template>

<style>
  
</style>

