/*
 * 查询表格格式化
 * zhaojia
 * 2019-01-02
 */
let tableFormat = {
	//查詢表單
	searchGroup: {
		rowNum: 3,
		labelWidth: '100px', // 总体的labelWidth 可以单独为每一项设置
		// searchBtnHidden: false, // 可选值 
		clearBtnHidden: true, // 可选值 是否显示按钮
		items: [{
				key: '', //字段名
				name: '', //字段中文名称
				type: '', //dataPick ，input，select
				dataPickType: '', // dataPick时的时间段选择 daterange
			 	valueFormat: 'yyyy-MM-dd', //dataPick时， 可选  设置获取的时间格式 默认就是 yyyy-MM-dd
				options: [{
					value: '', //值
					label: '', //显示的中文
					disabled: true // 是否不可以选择
				}]
			}  
		],
		actions: [{ //按鈕組
				key: '', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
				name: '', // 操作按钮名字
			 	size: 'small', // 可选 用于按钮大小
				type: '', // 可选 按钮类型
			}
		]
	},
	//表格
	tableGroup: {
		//表頭
		tHeadData: [{
				prop: "",
				name: '',
				width: ""
			} 
		],
		//表數據
		tData: [],
		//操作列
		Opration: { // 可选 没有的话 不显示操作列表
			oprationName: '', // 可选  默认叫操作
			fixed: '', // 可选 默认是 right
			width: '', // 可选 默认 自适应
			actions: [{
					key: '', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
					name: '', // 操作按钮名字
					name2:'',
					size: '', // 可选 用于按钮大小
					type: '', // 可选 按钮类型
				}
			]
		}
	},
	//分頁
	pagination: {
		total: 0, // type = number
		currentPage: 1, // type = number 当前第几页 
		pageSize: 1
	}
}
export default tableFormat