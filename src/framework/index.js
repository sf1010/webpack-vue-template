import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from '../layout/App';
import { Button } from 'ant-design-vue';// https://www.antdv.com/docs/vue/introduce-cn/

import '@/assets/styles/normalize.min.css';

Vue.use(Button);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
