import { createRouter, createWebHashHistory, isNavigationFailure } from "vue-router";

import HomeView from "./pages/home.vue";
import ContactView from "./pages/contact.vue";
import ErrorView from "./pages/error.vue";

const routes = [
    {
        path: "/",
        name: 'home',
        component: HomeView,
    },
    {
        path: "/contact",
        name: 'contact',
        component: ContactView,
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

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// Global Navigation Guard to Detect Navigation Failures
router.beforeEach((to, from, next) => {
    next();
});

router.afterEach((to, from, failure) => {
    if (failure && isNavigationFailure(failure)) {
        console.error("Navigation Failure:", failure);
    }
});
