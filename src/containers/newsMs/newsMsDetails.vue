<template>
	<div class="detail">
	 	<div class="detail-inner">
	 		<div class="detail-title" style="margin-top: 0;">资讯详情</div>
	 		<div class="detail-container">
	 			<ul class="detail-ul"> 
	 				<li><span>标题： </span>1111111</li>
	 				<li><span>栏目： </span>1111111</li>
	 				<li><span>发布时间： </span>1111111</li>
	 				<li><span>发布人： </span>1111111</li>
	 			</ul>
	 			<div><span>内容：</span>阿达率达大家可拉到家里开始就打开垃圾的快乐暑假；
	 				的可是觉得亏了几十但卡洛斯；京东卡垃圾萨克进度款辣椒水大家都爱上的仨京东卡垃圾大家撒就打算
	 			</div>
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