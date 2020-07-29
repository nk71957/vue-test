import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Load vuex
Vue.use(Vuex);
// Load Bootstap
Vue.use(BootstrapVue)

//Create store
export default new Vuex.Store({
    modules :{
        todos
    }
});
