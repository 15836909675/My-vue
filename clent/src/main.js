import Vue from 'vue'
import App from './App'
import router from './router'
import "./utils/flexble.js"
import delio from "./components/loaging"
import { TimePicker } from 'element-ui';
// import "./static/scss/common.scss"
Vue.config.productionTip = false
Vue.component("dilod",delio)
Vue.use(TimePicker)
Vue.component("el-time-select", TimePicker);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
