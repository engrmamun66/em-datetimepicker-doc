<script setup>
import { useRoute, useRouter } from "vue-router";
import { provide, inject, ref, computed } from 'vue';
import AppHolder from './AppHolder.vue';
let route = useRoute();
let router = useRouter();
console.log({route, router});
</script>

<template>
    <ul>
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li> <router-link :to="{name: 'contact'}">Contact</router-link></li>   
    </ul>
    <routerView />
    
</template>

