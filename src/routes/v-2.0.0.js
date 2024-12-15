import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from '../pages/v-2.0.0/home.vue'
import ContactView from '../pages/v-2.0.0/contact.vue'
import PersonView from '../pages/v-2.0.0/contact-child/person.vue'
import CompanyView from '../pages/v-2.0.0/contact-child/company.vue'

import ErrorView from '../pages/error.vue'

const routes = [
    {
        path: "/v-2.0.0/",
        name: 'home',
        component: HomeView,
    },
    {
        path: "/v-2.0.0/contact",
        name: 'contact',
        component: ContactView,
        children: [
            {
                path: 'person',
                name: 'contact > person',
                component: PersonView,
            },
            {
                path: 'company',
                name: 'contact > company',
                component: CompanyView,
            },
        ],
    },
    {
        path: "/*",
        name: 'error',
        component: ErrorView,
    },
    // Catch-all route for 404 errors
    { 
        path: '/:pathMatch(.*)*',
        name: 'NotFound', 
        component: ErrorView
    },
];

export default routes;
