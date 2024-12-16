<script setup>
import { onMounted, inject } from 'vue';
import showCode from '../../components/showCode.vue'
const version = inject('version')


onMounted(()=>{
     console.log('home.vue');
})
 

</script>

<template>
     <h1>Hello World</h1>
     <h2>V-1.0.0</h2> 

     <ul>
        <li><router-link :to="{name: 'contact', params: {version}}">Contact page</router-link></li> 
      </ul>

      <showCode lang="html" :code="`<h1>Hello world</h1>`"></showCode>
      <showCode lang="html" :code="`<h1>Hello world</h1>`"></showCode>
     
      <showCode lang="javascript" :code="`let name = 'Abdullah Al-Mamun'`"></showCode>

     <routerView></routerView>

<!-- 
     <hr v-for="x in 100" >

     <h3 id="TEST">asdf</h3> -->

</template>

<style>
  
</style>

