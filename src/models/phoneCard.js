const TEXTDATA =  []
import seachTable from '@/utils/seachTable.js'
import { Http } from '../server/index.js'
export default {
   state: {
		phoneCardMs:{
			phoneCardData:seachTable,
			detail:{},
			phoneCardOrderData:seachTable,
		}
	},
    actions: {
    	//商品列表
        phoneCardList({commit, state},items){
			let phoneCardListData = {
				searchGroup: {
					rowNum: 3,
					labelWidth: '100px', // 总体的labelWidth 可以单独为每一项设置
					searchBtnHidden: true, // 可选值 
					clearBtnHidden: true, // 可选值 是否显示按钮
					actions: [
						{
							key: 'newPhoneCard', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
							name: '新增', // 操作按钮名字
							type: 'primary', // 可选 按钮类型
						}
					]
				},
				tableGroup: {
					tHeadData: [{
							prop: "commoName",
							name: '商品名称',
							width: "150"
						}, // width 可选 可以不写
						{
							prop: "price",
							name: '价格（元）',
							width: "150"
						},
						{
							prop: "total",
							name: '总量（件）'
						},
						{
							prop: "sales",
							name: '销售量（件）'
						},
						{
							prop: "ramaining",
							name: '剩余（件）'
						},
						{
							prop: "on_time",
							name: '上架时间'
						},
						
						{
							prop: "off_time",
							name: '下架时间'
						},
					],
					tData:TEXTDATA,
					Opration: { // 可选 没有的话 不显示操作列表
						oprationName: '操作中', // 可选  默认叫操作
						fixed: 'right', // 可选 默认是 right
						width: '250', // 可选 默认 自适应
						
						actions: [
							{
								key: "updown",
								name: "上架",
								name2: "下架",
							},
							{
								key: 'edit', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
								name: '编辑', // 操作按钮名字
								size: 'small', // 可选 用于按钮大小
								type: 'text', // 可选 按钮类型
							},{
								key: 'detail', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
								name: '详情', // 操作按钮名字
								size: 'small', // 可选 用于按钮大小
								type: 'text', // 可选 按钮类型
							},
							
						]
					}
				},
				pagination: {
					total: 100, // type = number
					currentPage: 1, // type = number 当前第几页 
					pageSize: 10
				}
			};
			Http({url: '/web/mobileCardAdmin/getMobileCards', data: {}})
            .then(data => {
              	if (data.code === 1) {
              		phoneCardListData.tableGroup.tData = data.data.values;
              		phoneCardListData.pagination ={
              			total: phoneCardListData.tableGroup.tData.length, // type = number
						currentPage: 1, // type = number 当前第几页 
						pageSize: phoneCardListData.tableGroup.tData.length
              		};
	
			 		commit("phoneCardListSuccess", phoneCardListData)
              	}
              	else{
              		console.log(data.desc)
              	}
            }).catch(function (error) {
			    console.log(error);
		  	});		
        },	 	   		
		/////////////////////////
		newPhoneCard(){
			alert(1)
		},
		//订单列表
		phoneCardOrderList({commit, state},item){
			let phoneCardOrderListData = {
					searchGroup: {
						rowNum: 3,
						labelWidth: '100px', // 总体的labelWidth 可以单独为每一项设置
						// searchBtnHidden: false, // 可选值 
						clearBtnHidden: true, // 可选值 是否显示按钮
						items: [{
								key: 'time',
								name: '时间',
								type: 'dataPick',
								dataPickType: 'daterange', // 时间段选择
								// valueFormat: 'yyyy-MM-dd', // 可选  设置获取的时间格式 默认就是 yyyy-MM-dd
							},
							{
								key: 'cardNumber',
								name: '身份证号',
								type: 'input',
							},
							{
								key: 'selectType',
								name: '配送状态',
								type: 'select',
								options: [{
									value: '选项1',
									label: '正在出库'
								},{
									value: '选项1',
									label: '已发货'
								},{
									value: '选项1',
									label: '配送中'
								}, {
									value: '选项2',
									label: '已送达',
									disabled: false // 是否不可以选择
								}],
							},
							{
								key: 'selectType',
								name: '支付渠道',
								type: 'select',
								options: [{
									value: '选项1',
									label: '支付宝'
								}, {
									value: '选项2',
									label: '微信',
									disabled: true // 是否不可以选择
								},{
									value: '选项1',
									label: '云闪付'
								}],
							},
							{
								key: 'name3',
								name: '姓名',
								type: 'input',
							},
							{
								key: 'goodType',
								name: '商品类型',
								type: 'select',
								value: '',
								// clearable: false,  // 是否可以清空
								// disabled: false,  // 是否可选
								options: [{
									value: '选项1',
									label: '北京通手机卡'
								}, {
									value: '选项2',
									label: '北京通手机卡纪念封',
								}],
							},
			
						],
						actions: [{
								key: 'export', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
								name: '导出', // 操作按钮名字
								// size: 'small', // 可选 用于按钮大小
								type: 'primary', // 可选 按钮类型
							},
							{
								key: 'addNew', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
								name: '新增', // 操作按钮名字
								// size: 'small', // 可选 用于按钮大小
								type: 'primary', // 可选 按钮类型
							}
						]
					},
					tableGroup: {
						tHeadData: [{
								prop: "name",
								name: '姓名',
								width: "150"
							}, // width 可选 可以不写
							{
								prop: "phone",
								name: '身份证号',
								width: "150"
							},
							{
								prop: "idcard",
								name: '联系电话'
							},
							{
								prop: "state1",
								name: '收件地址'
							},
							{
								prop: "state2",
								name: '购买数量'
							},
						],
						tData: TEXTDATA ,
						Opration: { // 可选 没有的话 不显示操作列表
							oprationName: '操作中', // 可选  默认叫操作
							fixed: 'right', // 可选 默认是 right
							width: '200', // 可选 默认 自适应
							actions: [{
									key: 'detail', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
									name: '详情', // 操作按钮名字
									size: 'small', // 可选 用于按钮大小
									type: 'text', // 可选 按钮类型
								}
							]
						}
					},
					pagination: {
						total: 100, // type = number
						currentPage: 1, // type = number 当前第几页 
						pageSize: 10
					}
				}
			
			
			Http({url: '/web/order/getOrders', data: item})
            .then(data => {
              	if (data.code === 1) {
              		
              		phoneCardOrderListData.tableGroup.tData = data.data.list;
          		 	phoneCardOrderListData.pagination = {
						total: data.data.data.pageData.totalCount, // type = number
						currentPage: data.data.data.pageData.pageNo, // type = number 当前第几页 
						pageSize: data.data.data.pageData.pageSize
					};
			 		commit("phoneCardOrderListSuccess", phoneCardOrderListData)
              	}
              	else{
              		console.log(data.desc)
              	}
            }).catch(function (error) {
			    console.log(error);
		  	});	
		  	
        },	 
        getUserListDetails({commit, state},items){
        	console.log(items)
//	    	commit('getUserListDetailsSuccess', data)
        }
        
        
    },
    mutations: {
        phoneCardListSuccess(state, data) {
  				console.log(data)
	
         state.phoneCardMs.phoneCardData = data;
//          console.log(state, data)
        } ,
        getUserListDetailsSuccess(state, data) {
  
            state.details = data;
            console.log(state, data)
        } ,
        phoneCardOrderListSuccess(state, data){
        	state.phoneCardMs.phoneCardOrderData = data;
        }
    }
}
   