export default {
    state:{
        carddata:{
        	tTitle:"",
        	seach:true,
        	showOpration:true,
        	pagination:true,
        	searchGroup:[],
        	tHead:[],
            tData: [],
            editBtn:[],
        },
         
    },
    actions: {
        getUserList({commit, state},items){
        	 
//       	var data = {};
//	  		data.tTitle = "北京通手机卡";
//	  		data.seach = true;
//	  		data.showOpration = true;
//	  		data.pagination = true;
//	  		data.searchGroup = [
//		  		{name:'phone',cname:'时间'},
//		  		{name:'idcard',cname:'身份证号'},
//		  		{name:'idcard',cname:'配送状态'},
//		  		{name:'idcard',cname:'支付渠道'},
//		  		{name:'idcard',cname:'姓名'},
//		  		{name:'idcard',cname:'商品类型'},
//	  		]
//	    	data.tHead = [
//	    		{name:"name",cname:'姓名'},
//	    		{name:"phone",cname:'身份证号'},
//	    		{name:"idcard",cname:'收件人'},
//	    		{name:"idcard",cname:'联系电话'},
//	    		{name:"state1",cname:'收件地址'},
//	    		{name:"state2",cname:'购买数量'},
//	    		{name:"state2",cname:'支付渠道'},
//	    		{name:"state2",cname:'支付金额'},
//	    		{name:"state2",cname:'支付状态'},
//	    		{name:"state2",cname:'支付时间'},
//	    		{name:"state2",cname:'订单号'},
//			]
//	    	data.tData = [{
//	            name: '王军',
//	            phone:'15010971578',
//	            idcard:'130221167008273849',
//	            state1:'2011-05-05',
//	            state2:'2011-05-05'   ,
//	            freeze:false
//	          }, {
//	            name: '王军',
//	            phone:'15010971578',
//	            idcard:'130221167008273849',
//	            state1:'2011-05-05',
//	            state2:'2011-05-05' ,
//	            freeze:true
//	          }, {
//	            name: '王军',
//	            phone:'15010971578',
//	            idcard:'130221167008273849',
//	            state1:'2011-05-05',
//	            state2:'2011-05-05' ,
//	            freeze:false 
//	          }, {
//	            name: '王军',
//	            phone:'15010971578',
//	            idcard:'130221167008273849',
//	            state1:'审核中',
//	            state2:'待制卡'  ,
//	            freeze:true 
//	          }, {
//	            name: '王军',
//	            phone:'15010971578',
//	            idcard:'130221167008273849',
//	            state1:'审核中',
//	            state2:'待制卡' ,
//	            freeze:true  
//	          }, 
//	    	];
//	    	data.editSwitch = [
////	    		{name1:"冻结",name2:"解冻",act:"freeze"},
//	    	];
//	   		data.editBtn = [
////          	{name:"冻结",act:"freeze"},
////          	{name:"解冻",act:"defrost"},
//          	{name:"详情",act:"detail"},
//          ]
//	   		commit('getUserListSuccess', data)
        },	   		

        getUserListDetails({commit, state},items){
        	console.log(items)
        
	    	commit('getUserListDetailsSuccess', data)
        }
    },
    mutations: {
        getUserListSuccess(state, data) {
  
            state.carddata = data;
            console.log(state, data)
        } ,
        getUserListDetailsSuccess(state, data) {
  
            state.details = data;
            console.log(state, data)
        } 
    }
}
   