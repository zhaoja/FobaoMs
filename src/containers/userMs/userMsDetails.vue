<template>
	<div class="detail">
	 	<div class="detail-inner">
	 		<div class="detail-title" style="margin-top: 0;">用户信息</div>
	 		<div class="detail-container">
	 			<ul class="detail-ul"> 
	 				<li v-for="de in details.detail" :key="de.value">
	 					<span>{{de.name}}： </span>{{de.value}}
	 				</li>
	 			</ul>
	 		</div>
	 	</div>
	 	<hr />
	 	<div class="detail-inner">
	 		<div class="detail-title">常用收获信息</div>
	 		<div class="detail-container"> 
	 			<!--{{details.receiptInfo}}-->
				<personTable :seachTableDate="details.receiptInfo"
					 @onOprationClick='onOprationClick' 
					 @onChange='onChange' @onSerachOprationClick='onSerachOprationClick' />
 
	 		</div>
	 	</div>
	 	<div class="detail-inner">
	 		<div class="detail-title">操作记录</div>
	 		<div class="detail-container">
	 			<personTable :seachTableDate="details.operationRecord"
					 @onOprationClick='onOprationClick' 
					 @onChange='onChange' @onSerachOprationClick='onSerachOprationClick' />
	 		</div>
	 	</div>
	</div>
		 
</template>

<script>
    import { mapState } from 'vuex'
	import PersonTable from '../../components/component/SearchTable'

    export default {
    	components: {
	        PersonTable
	      },
    	 
        computed: {
            ...mapState({
            	details: state => state.userMs.userMs.details 
                
              })
        },
        created() {
//          this.$store.dispatch('getUserList');
			var params = this.$route.query.id 
			this.$store.dispatch('getUserListDetails',params)
		 
        }, 
        methods: {
			onSearch(searchData) {
				 
			},
			onOprationClick(data, type) {
				if(type === 'detail') {
					var params = {
						id: data.idcard
					}
					this.$router.push({
						path: `${this.$route.path}Details`,
						query: params
					})
				} else if(type === 'edit') {
					var params = {
						id: data.idcard
					}
					this.$router.push({
						path: `${this.$route.path}Edit`,
						query: params
					})
				}
			},
			onChange(paginationData) {
				console.log('分页数据:', paginationData)
//				this.data.tableGroup.tData = tableData // 模拟查询
			},
			onSerachOprationClick(searchData, type) {
				console.log('查询结果：', searchData, '哪个按钮：', type)
			}
        }
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
.detail-container .detail-ul{margin: 0;padding: 0;list-style: none;height: 100px;}
.detail-container .detail-ul li{float: left;width: 33%;margin-bottom: 15px;}
.detail-container .detail-ul li span{
	font-size: 14px;
	color: rgba(0,0,0,0.85);
	line-height: 22px;
}

</style>