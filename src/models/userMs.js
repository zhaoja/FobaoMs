export default {
	state: {
		userdata: {
			tTitle: "",
			showOpration: true,
			pagination: true,
			searchGroup: {
				searchInput: [
					{
						name: '',
						cname: ''
					}
				],
				searchSelect: [
					{ 	name: '',
						cname: '',
						option:[
							{name:"",value:""},
							{name:"",value:""},
							{name:"",value:""},
						]
					},
				],
				searchBtn: [
					{name:""}
				],
			},

			tHead: [],
			tData: [],
			editBtn: [],
		},
//		details: {
//			basicInfo: [{
//					name: '姓名',
//					value: '王军'
//				},
//				{
//					name: '手机号',
//					value: '12312312332'
//				},
//				{
//					name: '身份证号',
//					value: '12312312332'
//				},
//				{
//					name: '养老助残卡号',
//					value: '12312312332'
//				},
//				{
//					name: '注册时间',
//					value: '12312312332'
//				},
//			],
//			receiptInfo: {
//				tTitle: "",
//				seach: false,
//				showOpration: false,
//				pagination: false,
//				searchGroup: [],
//				tHead: [],
//				tData: [],
//				editBtn: [],
//			},
//			operationRecord: {
//				tTitle: "",
//				seach: false,
//				showOpration: false,
//				pagination: true,
//				searchGroup: [],
//				tHead: [],
//				tData: [],
//				editBtn: [],
//			}
//		}
	},
	actions: {
		getUserList({
			commit,
			state
		}, items) {

			var data = {};
			data.tTitle = "组织管理";
			data.showOpration = true;
			data.pagination = true;
			data.searchGroup = {
				searchInput: [{
						name: 'phone',
						cname: '手机号'
					},
					{
						name: 'idcard',
						cname: '身份证号'
					},
				],
				searchSelect: [],
				searchBtn: [
					{name:"查询"}
				],
			}

			data.tHead = [{
					name: "name",
					cname: '姓名'
				},
				{
					name: "phone",
					cname: '手机号'
				},
				{
					name: "idcard",
					cname: '身份证号'
				},
				{
					name: "idcard",
					cname: '养老助残卡号'
				},
				{
					name: "state1",
					cname: '注册时间'
				},
				{
					name: "state2",
					cname: '最后登录时间'
				}
			]
			data.tData = [{
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
			}, ];
			data.editSwitch = [{
				name1: "冻结",
				name2: "解冻",
				act: "freeze"
			}, ];
			data.editBtn = [
				//          	{name:"冻结",act:"freeze"},
				//          	{name:"解冻",act:"defrost"},
				{
					name: "详情",
					act: "detail"
				},
			]
			commit('getUserListSuccess', data)
		},

		getUserListDetails({
			commit,
			state
		}, items) {
			console.log(items)
			var data = {
				receiptInfo: {
					tTitle: "组织管理",
					seach: false,
					showOpration: false,
					pagination: false,
					tHead: [{
							name: "name",
							cname: '收货人姓名'
						},
						{
							name: "phone",
							cname: '性别'
						},
						{
							name: "idcard",
							cname: '手机号'
						},
						{
							name: "idcard",
							cname: '地址'
						},
						{
							name: "state1",
							cname: '常用地址'
						},
					],
					tData: [{
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
					}]
				},
				operationRecord: {
					tTitle: "组织管理",
					seach: false,
					showOpration: false,
					pagination: true,
					tHead: [{
							name: "name",
							cname: '操作时间'
						},
						{
							name: "phone",
							cname: '模块名称'
						},
						{
							name: "idcard",
							cname: '页面名称'
						},
						{
							name: "idcard",
							cname: 'url'
						}
					],
					tData: [{
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
					}, ]
				}
			};

			commit('getUserListDetailsSuccess', data)
		}
	},
	mutations: {
		getUserListSuccess(state, data) {

			state.userdata = data;
			console.log(state, data)
		},
		getUserListDetailsSuccess(state, data) {

			state.details = data;
			console.log(state, data)
		}
	}
}