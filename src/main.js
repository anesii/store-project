import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from './product.js'
import VueConfetti from 'vue-confetti';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueConfetti);

export const eventBus = new Vue();

const router = new VueRouter({
   routes: Routes,
   mode:'history'
});

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
