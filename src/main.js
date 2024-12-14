import './assets/css/module.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { send_css_in_header, minified_css } from './minified-css';
import { emitter, utils } from './import-hub';
import moment from 'moment/moment';

send_css_in_header(minified_css);

globalThis.moment = moment;  


/* -------------------------------------------------------------------------- */
/*                               Start Observer                               */
/* -------------------------------------------------------------------------- */
let observation_timeout = null;
const observer = new MutationObserver(function (mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type === 'childList') {
            clearTimeout(observation_timeout);
            observation_timeout = setTimeout(() => {
                emitter.emit('observed', {mutation});
            }, 10);
        }
    }
});
observer.observe(document.body, { childList: true, subtree: true });
/* ------------------------------ End Observer ------------------------------ */


globalThis.printWarning = function(message='This is a warning', {size='22px'}={}){
    console.log(`%c ${message}`, `color:red;font-size:${size};background-color:yellow;padding:10px 20px 10px 10px;border-radius:5px;margin:10px 0px;font-family: system-ui;border:1px solid red`)
}

function mountTheApp(){
    try {
        const app = createApp(App)
        app.use(createPinia())
        let app_div = document.createElement('div');
        app_div.id = 'em-datepicker-doc';
        app_div.style.display = 'none';
        document.body.append(app_div);
        app
        .provide('utils', utils)
        .provide('emitter', emitter)
        .mount('#em-datepicker-doc');
    } catch (error) {
        console.log({error});
    }
}

if(document.readyState === 'loading'){
    window.addEventListener("DOMContentLoaded", (e) => {
        mountTheApp();
    })
} else {
    mountTheApp();
}

