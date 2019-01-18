import $http from '../utils/http.js'
import axios from 'axios'

export default {
	state: {
		top: {},
		left: {
			//          menuLabel: true,
			menu: [],
			breadcrumb: [],
			brDic: []
		}
	},
	actions: {
		showLeft({
			commit,
			state
		}, items) {
			var data = items
			commit('showLeftOk', data)
		},
		showMenu({
			commit,
			state
		}, items) {
			//axios.get('api/nav').then((res) => {
			//     var result = res.data 
			//})

			//          $http.get("api/nav", items).then(({ status, msg, data }) => {
			//              if(status == "success") {
			//                  var ndata = []
			//                  ndata = data.menu
			//                  commit('showMenuOk', ndata)
			//              }
			//          })
			var ndata = [{
					"title": "用户管理",
					"path": "/userMs",
					"icon": "fa fa-user"
				},
				{
					"title": "理事单位业务",
					"path": "/unitBusiness",
					"icon": "fa fa-user",
					"options": [{
						"title": "北京通手机卡",
						"path": "/phoneCardbjt",
						"options": [{
							"title": "服务描述",
							"path": "/phoneCardDService",
						},{
							"title": "商品管理",
							"path": "/phoneCard",
						},{
							"title": "订单管理",
							"path": "/phoneCardOrder",
						}]
					}]
				},
				{
					"title": "资讯管理",
					"path": "/newsMs",
					"icon": "fa fa-user",
				},
//				{
//					"title": "业务管理",
//					"path": "businessMage",
//					"icon": "fa fa-database",
//					"options": [{
//							"title": "政府业务",
//							"path": "/businessMage/govBusiness",
//							"icon": "el-icon-picture-outline",
//							"options": [{
//								"title": "制卡申请",
//								"path": "/businessMage/govBusiness/mcardApply",
//								"icon": "el-icon-picture-outline"
//							}, {
//								"title": "制卡查询",
//								"path": "/businessMage/govBusiness/mcardSearch",
//								"icon": "el-icon-picture-outline"
//							}, {
//								"title": "账户查询",
//								"path": "/businessMage/govBusiness/accountSearch",
//								"icon": "el-icon-picture-outline"
//							}, {
//								"title": "卡片挂失",
//								"path": "/businessMage/govBusiness/cardFind",
//								"icon": "el-icon-picture-outline"
//							}, {
//								"title": "功能介绍",
//								"path": "/businessMage/govBusiness/function",
//								"icon": "el-icon-picture-outline"
//							}, ]
//
//						},
//
//					]
//				}
			]
			commit('showMenuOk', ndata)
		},
		showBreadcrumb({
			commit,
			state
		}, items) {
			var data = items.split('/')
			//splice(index,len,[item])   
			if(data[0] == '') {
				data.splice(0, 1)
			}
			commit('showBreadcrumbOk', data)
		}
	},
	mutations: {
		showLeftOk(state, data) {
			state.left.menuLabel = data
		},
		showMenuOk(state, data) {
			state.left.menu = data
		},
		showBreadcrumbOk(state, data) {

			var brDic = new Array();
			brDic["userMs"] = "用户管理",
				brDic["phoneCard"] = "北京通手机卡",
				brDic["newsMs"] = "咨询管理",

				//	        	brDic["userMage"] ="用户管理",
				brDic["businessMage"] = "业务管理",
				brDic["govBusiness"] = "政府业务",
				brDic["unitBusiness"] = "理事单位业务",

				brDic["mcardApply"] = "制卡申请",
				brDic["mcardSearch"] = "制卡查询",
				brDic["accountSearch"] = "账户查询",
				brDic["cardFind"] = "卡片挂失",
				brDic["function"] = "功能介绍",

				//	        	brDic["calendar"] ="项目日程安排"
				//	        	brDic["component"] = "人员管理",
				//	        	brDic["form"] = "组织结构管理",
				//	        	brDic["table"] = "职务结构管理",
				//	        	brDic["tree"] = "成员管理",
				//	        	brDic["list"] = "权限管理",
				//	        	brDic["others"] = "其他",

				state.left.breadcrumb = data;
			state.left.brDic = brDic;

		}
	}
}