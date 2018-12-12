import $http from '../utils/http.js'
import axios from 'axios'

export default {
    state: {
        top: {},
        left: {
//          menuLabel: true,
            menu: [],
            breadcrumb: [],
            brDic:[]
        }
    },
    actions: {
        showLeft({ commit, state }, items) {
            var data = items
            commit('showLeftOk', data)
        },
        showMenu({ commit, state }, items) {
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
			"nav": "首页",
			"path": "/home",
			"icon": "el-icon-date"
		}, {
			"nav": "人员管理",
			"path": "component",
			"icon": "el-icon-mobile-phone",
			"groups": [
				{
					"options": [
						{
							"title": "组织结构管理",
							"path": "/component/form",
							"icon":"el-icon-picture-outline"
						}, {
							"title": "职务结构管理",
							"path": "/component/table",
							"icon":"el-icon-picture-outline"
						}, {
							"title": "成员管理",
							"path": "/component/tree",
							"icon":"el-icon-picture-outline"
						}, {
							"title": "权限管理",
							"path": "/component/list",
							"icon":"el-icon-picture-outline"
						}
					]
				} 
			]
		} , {
			"nav": "其他",
			"path": "/others",
			"icon": "el-icon-tickets"
		}]
 			commit('showMenuOk', ndata)
        },
        showBreadcrumb({ commit, state }, items) {
            var data = items.split('/')
            //splice(index,len,[item])   
            if(data[0]==''){
                data.splice(0,1)
            }
            commit('showBreadcrumbOk',data)
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
	        	brDic["calendar"] ="项目日程安排"
	        	brDic["component"] = "人员管理",
	        	brDic["form"] = "组织结构管理",
	        	brDic["table"] = "职务结构管理",
	        	brDic["tree"] = "成员管理",
	        	brDic["list"] = "权限管理",
	        	brDic["others"] = "其他",
        	 
        	
            state.left.breadcrumb = data;
            state.left.brDic = brDic;
            
        }
    }
}