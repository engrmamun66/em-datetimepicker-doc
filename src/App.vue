<script setup>
import { provide, inject, ref, computed } from 'vue';
import AppHolder from './AppHolder.vue';
</script>

<template>
    <ul>
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li> <router-link :to="{name: 'contact'}">Contact</router-link></li>   
    </ul>
    <routerView />
    
</template>

