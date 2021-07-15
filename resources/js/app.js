import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import store from '@/services/store';
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

import { BootstrapVue } from 'bootstrap-vue';
Vue.use(BootstrapVue);

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading, {
  color: '#81aee9',
  loader: 'dots',
  canCancel: false
});

import '../sass/initial.scss';

import VueSocketio from 'vue-socket.io';
import SocketIO, { Socket } from 'socket.io-client';

if (Number(process.env.MIX_LOCAL_MODE) === 1) {
  Vue.use(new VueSocketio({ connection: SocketIO('http://localhost:3011') }));
} else {
  Vue.use(
    new VueSocketio({
      connection: SocketIO(
        `${process.env.MIX_APP_URL}:${process.env.MIX_SOCKET_PORT}`
      )
    })
  );
}

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app');
