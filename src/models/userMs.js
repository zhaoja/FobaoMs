var textdata = [{
	name: '王军',
	phone: '15010971578',
	idcard: '130221167008273849',
	state1: '2011-05-05',
	state2: '2011-05-05',
	freeze: false
}, {
	name: '王军',
	phone: '15010971578',
	idcard: '130221167008273849',
	state1: '2011-05-05',
	state2: '2011-05-05',
	freeze: true
}, {
	name: '王军',
	phone: '15010971578',
	idcard: '130221167008273849',
	state1: '2011-05-05',
	state2: '2011-05-05',
	freeze: false
}, {
	name: '王军',
	phone: '15010971578',
	idcard: '130221167008273849',
	state1: '审核中',
	state2: '待制卡',
	freeze: true
}, {
	name: '王军',
	phone: '15010971578',
	idcard: '130221167008273849',
	state1: '审核中',
	state2: '待制卡',
	freeze: true
}];

import seachTable from '@/utils/seachTable.js'
 
export default {
	state: {
		userMs:{
			userdata:seachTable,
			detail:{
				detail:[
					{name:'姓名',value:'王军'},
	            	{name:'手机号',value:'12312312332'},
	            	{name:'身份证号',value:'12312312332'},
	            	{name:'养老助残卡号',value:'12312312332'},
	            	{name:'注册时间',value:'12312312332'},
				],
				receiptInfo:seachTable,
				operationRecord:{}
			}
		}
	},
	actions: {
		//用户列表
		getUserList({commit,state}, items) {
	
            var dataFormat = {
				searchGroup: {
					rowNum: 3,
					labelWidth: '100px', // 总体的labelWidth 可以单独为每一项设置
				 	searchBtnHidden: false, // 可选值 
					clearBtnHidden: false, // 可选值 是否显示按钮
					items: [
					{key: '', name: '手机号', type: 'input' },
					{key: '', name: '身份证号', type: 'input'}]
				},
				tableGroup: {
					tHeadData: [
						{prop: "name",name: '姓名'}, 
						{prop: "name",name: '手机号'}, 
						{prop: "name",name: '身份证号'}, 
						{prop: "name",name: '养老助残卡号'}, 
						{prop: "name",name: '注册时间'}, 
						{prop: "name",name: '最后登录时间'}, 
					],
					Opration: {
						width: '200',
						actions: [{
								key: 'detail', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
								name: '详情', // 操作按钮名字
								size: 'small', // 可选 用于按钮大小
								type: 'text', // 可选 按钮类型
						},{
							key: "freeze",
							name: "正常",
							name2: "冻结",
						}]
					}
				}
			};
			 
            dataFormat.tableGroup.tData = textdata;
            dataFormat.pagination = {
				total: 10,  
				currentPage: 1,  
				pageSize: 1
			}
 
			commit('getUserListSuccess', dataFormat)
		},
		//查看详情
		getUserListDetails({ commit, state }, items) {
//			console.log(items)
			var dataFormat1 = {
				searchGroup: {
					searchBtnHidden: true, // 可选值 
					clearBtnHidden: true, // 可选值 是否显示按钮
				},
				tableGroup: {
					tHeadData: [
						{prop: "name",name: '收货人姓名'}, 
						{prop: "name",name: '性别'}, 
						{prop: "name",name: '手机号'}, 
						{prop: "name",name: '地址'}, 
						{prop: "name",name: '常用地址'} 
					],
					 tData : textdata
				},
				pagination : {
					total: 10,  
					currentPage: 1,  
					pageSize: 1
				}
			};
			 var dataFormat2 = {
				searchGroup: {
					searchBtnHidden: true, // 可选值 
					clearBtnHidden: true, // 可选值 是否显示按钮
				},
				tableGroup: {
					tHeadData: [
						{prop: "name",name: '操作时间'}, 
						{prop: "name",name: '模块名称'}, 
						{prop: "name",name: '页面名称'}, 
						{prop: "name",name: 'URL'}
					],
					 tData : textdata
				},
				pagination : {
					total: 10,  
					currentPage: 1,  
					pageSize: 1
				}
			};
			let dataFormat = {
				detail:[
	            	{name:'姓名',value:'王军'},
	            	{name:'手机号',value:'12312312332'},
	            	{name:'身份证号',value:'12312312332'},
	            	{name:'养老助残卡号',value:'12312312332'},
	            	{name:'注册时间',value:'12312312332'},
				],
				receiptInfo:dataFormat1,
				 
				operationRecord:dataFormat2
			}
 
			commit('getUserListDetailsSuccess', dataFormat)
		}
	},
	mutations: {
		getUserListSuccess(state, data) {

			state.userMs.userdata = data;
//			console.log(state, 1111,data)
		},
		getUserListDetailsSuccess(state, data) {

			state.userMs.details = data;
			console.log(state, data)
		}
	}
}