import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../containers/layout.vue';
import Home from '@/containers/home'
import Login from '@/containers/login'
import Calendar from '@/components/component/calendar'
//import CalendarDetails from '@/components/component/calendarDetails'
import Organization from '@/containers/staff/organization'
import Job from '@/containers/staff/job'
import Member from '@/containers/staff/member'
import Limit from '@/containers/staff/limit'

import Form from '@/components/component/form'
import Table from '@/components/component/table'
        
import McardApply from '@/containers/businessMage/McardApply'
import McardSearch from '@/containers/businessMage/McardSearch'
import AccountSearch from '@/containers/businessMage/AccountSearch'
import CardFind from '@/containers/businessMage/CardFind'
import Function from '@/containers/businessMage/Function'
import F0F from '@/components/FOF'

import UserMs from '@/containers/userMs/userMs'
import UserMsDetails from '@/containers/userMs/userMsDetails'
import PhoneCard from '@/containers/phoneCard/phoneCard'
import NewPhoneCard from '@/containers/phoneCard/NewPhoneCard'
import PhoneCardDetails from '@/containers/phoneCard/phoneCardDetails'
 
Vue.use(Router)

export default new Router({
		hashbang: true,
	    routes:[
            {path:"/",component:Layout,children:[
            	
                {path:"/userMs",name:"用户管理",component:UserMs},
                {path:"/userMsDetails",name:"详情",component:UserMsDetails},
                {path:"/phoneCard",name:"北京通手机卡",component:PhoneCard},
                {path:"/PhoneCardDetails",name:"详情",component:PhoneCardDetails},
                {path: '/phoneCardNew', name: '北京通手机卡', component: NewPhoneCard},
                
//              {path:"/businessMage",name:"业务管理",component:busManage},
//              {path:"/govBusiness",name:"政府业务",component:govBusiness},
                // {path:"/businessMage/govBusiness/mcardApply",name:"制卡申请",component:McardApply},
                // {path:"/businessMage/govBusiness/mcardSearch",name:"制卡查询",component:McardSearch},
                // {path:"/businessMage/govBusiness/accountSearch",name:"账户查询",component:AccountSearch},
                // {path:"/businessMage/govBusiness/cardFind",name:"卡片挂失",component:CardFind},
                // {path:"/businessMage/govBusiness/function",name:"功能介绍",component:Function},
//              {path:"/unitBusiness",name:"理事单位业务",component:unitBusiness},
                {path:"*",name:"404",component:F0F},
                
//              {path:"",name:"首页",component:Home},
//              {path:"home",name:"首页",component:Home},
//              {path:"/component/calendarDetails",name:"日程表",component:CalendarDetails},
                {path:"/component/form",name:"组织机构管理",component:Organization},
                {path:"/component/table",name:"表单",component:Job},
                {path:"/component/tree",name:"表单",component:Member},
                {path:"/component/list",name:"表单",component:Limit},
//              {path:"/component/tree",name:"表单",component:Form},
//              {path:"/component/form",name:"表单",component:Form},
//              {path:"/component/table",name:"表格",component:Table},
//              {path:"/component/tree",name:"树"},
//              {path:"/component/list",name:"表单"},
                {path:"others",name:"其他"}
                
            ]
        },
        {path:"/login",name:"登录",component:Login},
//      {path:"/",name:"告警报告",component:Calendar},
        {path:"*"}
    ]
})
