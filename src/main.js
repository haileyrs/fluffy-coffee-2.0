import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import hdr from './components/Header';
import ftr from './components/Footer';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;

Vue.component("hdr", hdr);
Vue.component("ftr", ftr);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuelidate);


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');