<script setup>
import { useRoute, useRouter } from "vue-router";
import { provide, inject, ref, computed } from 'vue';
import SideBar from './components/sidebar.vue'

let route = useRoute();
let router = useRouter(); 
</script>

<template>
    <SideBar>
        <ul>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li> <router-link :to="{name: 'contact'}">Contact</router-link></li>   
        </ul>
        <routerView />
    </SideBar>
    
</template>

