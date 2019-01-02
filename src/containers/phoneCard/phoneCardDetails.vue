<template>
	<div class="detail">
	 	<div class="detail-inner">
	 		<div class="detail-title" style="margin-top: 0;">用户信息</div>
	 		<div class="detail-container">
	 			<ul class="detail-ul">
	 				<li v-for="de in detail" :key="de.value">
	 					<span>{{de.name}}： </span>{{de.value}}
	 				</li>
	 			</ul>
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
					 { name:'姓名',value:'123123'},
					{ name:'身份证', value:'21312'}, 
					{ name:'收件人', value:'qwe'}, 
					{ name:'联系电话',value:''}, 
					{ name:'收件地址',value:''}, 
					{ name:'商品类型',value:''}, 
					{ name:'购买数量',value:''}, 
					{ name:'支付渠道',value:''}, 
					{ name:'支付金额',value:''}, 
					{ name:'支付状态',value:''}, 
					{ name:'支付时间',value:''}, 
					{ name:'订单号', value:''}, 
					{ name:'支付流水号',value:''}, 
					{ name:'快递单号',value:''}, 
					{ name:'配送状态',value:''}, 
					{ name:'配送信息',value:''}
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
.detail-container .detail-ul:after{display:block;clear:both;content:"";visibility:hidden;height:0}
.detail-container .detail-ul{zoom:1}
.detail-container .detail-ul{margin: 0;padding: 0;list-style: none;border-bottom: 1px solid #E8E8E8;}
.detail-container .detail-ul li{float: left;width: 33%;margin-bottom: 15px;}
.detail-container .detail-ul li span{
	font-size: 14px;
	color: rgba(0,0,0,0.85);
	line-height: 22px;
}

</style>