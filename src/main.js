import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-icons/iconfont/material-icons.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

/* add font awesome icon component */
createApp(App)
    .component("fa", FontAwesomeIcon)
    .use(store).use(router).mount('#app')
