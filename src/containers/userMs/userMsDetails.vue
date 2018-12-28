<template>
	<div class="detail">
	 	<div class="detail-inner">
	 		<div class="detail-title" style="margin-top: 0;">用户信息</div>
	 		<div class="detail-container">
	 			<ul class="detail-ul">
	 				<li v-for="de in detail">
	 					<span>{{de.name}}： </span>{{de.value}}
	 				</li>
	 			</ul>
	 		</div>
	 	</div>
	 	<div class="detail-inner">
	 		<div class="detail-title">常用收获信息</div>
	 		<div class="detail-container">
	 			<!--{{details}}-->
	 			<UserTable :tableData="details.receiptInfo"/></el-col>
	 		</div>
	 	</div>
	 	<div class="detail-inner">
	 		<div class="detail-title">操作记录</div>
	 		<div class="detail-container">
	 			<UserTable :tableData="details.operationRecord"/></el-col>
	 		</div>
	 	</div>
	</div>
		 
</template>

<script>
    import { mapState } from 'vuex'
	import UserTable from '../../components/component/table'

    export default {
    	components: {
	        UserTable
	      },
    	data(){
    		return {
    			 detail:[
	            	{name:'姓名',value:'王军'},
	            	{name:'手机号',value:'12312312332'},
	            	{name:'身份证号',value:'12312312332'},
	            	{name:'养老助残卡号',value:'12312312332'},
	            	{name:'注册时间',value:'12312312332'},
	            ]
    		}
    	},
        computed: {
            ...mapState({
                details: state => state.userMs.details,
                
              })
        },
        created() {
//          this.$store.dispatch('getUserList');
			var params = this.$route.query.id 
			this.$store.dispatch('getUserListDetails',params)

        }, 
    }
</script>

<style>
.detail{}
.detail-inner{}
.detail-title{
	font-family: PingFangSC-Medium;
	font-size: 16px;
	color: rgba(0,0,0,0.85);
	line-height: 24px;
	margin-top: 30px;
	margin-bottom: 15px;
	font-weight: 600;
}
.detail-container{}
.detail-container .detail-ul{margin: 0;padding: 0;list-style: none;border-bottom: 1px solid #E8E8E8;height: 100px;}
.detail-container .detail-ul li{float: left;width: 33%;margin-bottom: 15px;}
.detail-container .detail-ul li span{
	font-size: 14px;
	color: rgba(0,0,0,0.85);
	line-height: 22px;
}

</style>