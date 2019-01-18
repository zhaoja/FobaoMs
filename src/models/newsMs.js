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
		newsMs:{
			newsdata:seachTable,
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
		getNewsList({commit,state}, items) {
	
            var dataFormat = {
				searchGroup: {
					rowNum: 3,
					labelWidth: '100px', // 总体的labelWidth 可以单独为每一项设置
				 	searchBtnHidden: false, // 可选值 
					clearBtnHidden: false, // 可选值 是否显示按钮
					items: [
					{key: '', name: '栏目名称', type: 'select',options: [
						{
							value: '111', //值
							label: '111', //显示的中文
						}]
					},
					{key: '', name: '时间', type: 'dataPick',dataPickType:'daterange'}],
					actions: [
                    {
                        key: 'newNews', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
                        name: '新增',  // 操作按钮名字
                        // size: 'small', // 可选 用于按钮大小
                        type: 'primary',  // 可选 按钮类型
                	}]
				},
				tableGroup: {
					tHeadData: [
						{prop: "name",name: '标题'}, 
						{prop: "name",name: '栏目'}, 
						{prop: "name",name: '发布时间'}, 
						{prop: "name",name: '发布人'} 
					],
					Opration: {
						width: '200',
						actions: [{
								key: 'detail', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
								name: '详情', // 操作按钮名字
								size: 'small', // 可选 用于按钮大小
								type: 'text', // 可选 按钮类型
						},{
								key: 'edit', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
								name: '编辑', // 操作按钮名字
								size: 'small', // 可选 用于按钮大小
								type: 'text', // 可选 按钮类型
						},{
								key: 'delect', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
								name: '删除', // 操作按钮名字
								size: 'small', // 可选 用于按钮大小
								type: 'text', // 可选 按钮类型
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
 
			commit('getNewsListSuccess', dataFormat)
		},
		//查看详情
		getNewsListDetails({ commit, state }, items) {
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
 
			commit('getNewsListDetailsSuccess', dataFormat)
		}
	},
	mutations: {
		getNewsListSuccess(state, data) {

			state.newsMs.newsdata = data;
//			console.log(state, 1111,data)
		},
		getNewsListDetailsSuccess(state, data) {

			state.newsMs.details = data;
			console.log(state, data)
		}
	}
}