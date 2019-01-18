// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入日历插件
import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

//import 'bootstrap/dist/js/bootstrap.min'
//import '../static/fullcalendar/js/fullcalendar.min.js'
//import '../static/fullcalendar/css/fullcalendar.min.css'
// import '../static/fullcalendar/css/ace.css'
// import 'font-awesome/css/font-awesome.min.css'
 
import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.$http = axios

//import Login from './models/Login'
//import Calendar from './models/calendar'
//import Tree from './models/tree'
//import Layout from './models/layout'
//import Table from './models/table'
//import Staff from './models/staff'

// models 层
//项目文件
import Layout from './models/layout' //项目框架
import UserMs from './models/userMs' //用户管理
import PhoneCardMs from './models/phoneCard' //手机卡
import NewsMs from './models/newsMs' //用户管理

Vue.config.productionTip = false
/*  eslint-disable no-new */
Vue.use(Vuex)
Vue.use(ElementUI)

const store = new Vuex.Store({
  modules: {
    layout: Layout,
    userMs:UserMs,
    newsMs:NewsMs,
    phoneCardMs:PhoneCardMs,
  }
})
 
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
