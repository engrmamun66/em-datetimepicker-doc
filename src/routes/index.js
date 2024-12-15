import { createRouter, createWebHashHistory } from "vue-router";
import v_1_0_0 from "./v-1.0.0";
import helper from "../utilities/helper";
let version = helper.localStorage('doc_version').value
 

let routes;

switch (version) {
    case 'v-1.0.0':
        routes = v_1_0_0
        break;

    default:
        routes = v_1_0_0
        break;
}


export const router = createRouter({
    routes,
    history: createWebHashHistory(),
});
 
router.beforeEach((to, from, next) => {
    next();
});
 
