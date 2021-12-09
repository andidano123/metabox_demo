// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
import FlashMessage from '@smartweb/vue-flash-message';
import store from './store/index.js'
import global from "./global.js"

Vue.use(Toast);
Vue.config.productionTip = false
Vue.use(VueI18n);
Vue.use(FlashMessage);

const initLang = (() => {
  let lang = window.localStorage.getItem(global.LANG_KEY);  
  if(lang == "CN") return "chs";
  return lang || 'en'
})();
const i18n = new VueI18n({
  locale: initLang, // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
  messages: {
    'chs': require('./assets/lang/chs.json'), 
    'en': require('./assets/lang/en.json')
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
