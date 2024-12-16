<script setup>
import { useRoute, useRouter } from "vue-router";
import { provide, inject, ref, computed } from 'vue';
import SideBar from './components/sidebar.vue'

const version = inject('version')


let route = useRoute();
let router = useRouter(); 
console.log({route, router});
</script>

<template>
    <SideBar>
        <ul>
            <li><router-link :to="{name: 'home', params: {version}}">Home</router-link></li>
        </ul>
        <routerView />
    </SideBar>
    
</template>

