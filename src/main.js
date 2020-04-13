// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/axios'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import { v4 as uuidv4 } from 'uuid';
import jquery from 'jquery'

Vue.use(ViewUI)
Vue.prototype.uuidv4 = uuidv4;  //全局uuid唯一识别码
Vue.prototype.$echarts = echarts;  //全局echarts图表
Vue.prototype.bus = new Vue();  //全局bus事件
Vue.prototype.$ = jquery; //引入jquery
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
