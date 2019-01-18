<template>
	<div class="Newsms">
		<NewsTable 
			:seachTableDate="Newslist" 
			@onSearch="onSearch" 
			@onOprationClick='onOprationClick' 
			@onChange='onChange' 
			@onSerachOprationClick='onSerachOprationClick' />
	</div>

</template>

<script>
	import NewsTable from '../../components/component/SearchTable'
	import { mapState } from 'vuex'

	export default {
		components: {
			NewsTable
		},
		computed: {
			...mapState({
				Newslist: state => state.newsMs.newsMs.newsdata
			})
		},
		created() {
          	this.$store.dispatch('getNewsList');
		},
		methods: {
			onSearch(searchData) {
				console.log('查询条件', searchData,this.Newslist)
//				this.data.tableGroup.tData = tableData // 模拟查询
//				this.data.pagination = { // 点击查询分页信息页需要修改
//					total: 120, // 需要修改
//					currentPage: 1, // 默认就是1
//				}
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
				this.$router.push({
					path: `${this.$route.path}Edit`,
				})
				console.log('查询结果：', searchData, '哪个按钮：', type)
			}
		}

	}
</script>

<style>
 
</style>