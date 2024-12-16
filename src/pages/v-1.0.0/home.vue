<script setup>
import { onMounted, inject } from 'vue';
import showCode from '../../components/showCode.vue'
import Tabs from '../../components/tabs.vue'
const version = inject('version')

 
 

</script>

<template>
     <h1>Markup</h1> 
     <p>
          The following are examples of supported markup. On their own, these will not provide a datepicker widget; you will need to instantiate the datepicker on the markup.
     </p>

     <h1>Script Loading Process</h1> 

    

      <showCode lang="html" :code="`<h1>Hello world</h1>`"></showCode>
      <showCode lang="html" :code="`<h1>Hello world</h1>`"></showCode>
     
      <showCode lang="javascript" :code="`let name = 'Abdullah Al-Mamun'`"></showCode>

      <Tabs :tabs="['JQuery', 'Javascript']">
          <template #slot="{i}">
               <showCode v-show="i==0" lang="javascript" :inTabs="true" :code="`let name = 'Jquery Example'`"></showCode>
               <showCode v-show="i==1" lang="javascript" :inTabs="true" :code="`let name = 'Javascript Example'`"></showCode>
          </template>
      </Tabs>


      

<!-- 
     <hr v-for="x in 100" >

     <h3 id="TEST">asdf</h3> -->

</template>

<style>
  
</style>

