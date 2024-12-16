<script setup>
import { onMounted, inject } from 'vue';
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


      <routerView></routerView>

<!-- 
     <hr v-for="x in 100" >

     <h3 id="TEST">asdf</h3> -->

</template>

<style>
  
</style>

