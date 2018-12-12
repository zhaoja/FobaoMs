export default {
    state:{
        userdata:{
        	tTitle:"",
        	searchGroup:[],
        	tHead:[],
            tData: [],
            editBtn:[]
        }
    },
    actions: {
        getUserList({commit, state},items){
        	 
         	var data = {};
	  		data.tTitle = "组织管理"
	  		data.searchGroup = [
	  		{name:'idcard',cname:'身份证号'},
	  		{name:'phone',cname:'手机号'},
	  		]
	    	data.tHead = [
	    		{name:"name",cname:'姓名'},
	    		{name:"phone",cname:'手机号'},
	    		{name:"idcard",cname:'身份证号'},
	    		{name:"state1",cname:'核卡状态'},
	    		{name:"state2",cname:'制卡状态'},
			]
	    	data.tData = [{
	            name: '王军',
	            phone:'15010971578',
	            idcard:'130221167008273849',
	            state1:'审核中',
	            state2:'待制卡'   
	          }, {
	            name: '王军',
	            phone:'15010971578',
	            idcard:'130221167008273849',
	            state1:'审核中',
	            state2:'待制卡'   
	          }, {
	            name: '王军',
	            phone:'15010971578',
	            idcard:'130221167008273849',
	            state1:'审核中',
	            state2:'待制卡'   
	          }, {
	            name: '王军',
	            phone:'15010971578',
	            idcard:'130221167008273849',
	            state1:'审核中',
	            state2:'待制卡'   
	          }, {
	            name: '王军',
	            phone:'15010971578',
	            idcard:'130221167008273849',
	            state1:'审核中',
	            state2:'待制卡'   
	          }, 
	    	];
	   		data.editBtn = [
            	{name:"添加",act:"addChildOgn"},
            	{name:"修改",act:"updata"},
            	{name:"删除",act:"delete"},
            ]
	   		commit('getUserListSuccess', data)
        }
    },
    mutations: {
        getUserListSuccess(state, data) {
  
            state.userdata = data;
            console.log(state, data)
        } 
    }
}
   