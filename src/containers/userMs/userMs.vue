<template>
	<div class="userms">
		<UserTable :seachTableDate="userlist" @onSearch="onSearch" @onOprationClick='onOprationClick' @onChange='onChange' @onSerachOprationClick='onSerachOprationClick' />
	</div>

</template>

<script>
	import UserTable from '../../components/component/SearchTable'
	import { mapState } from 'vuex'

	export default {
		components: {
			UserTable
		},
		computed: {
			...mapState({
				userlist: state => state.userMs.userMs.userdata
			})
		},
		created() {
          	this.$store.dispatch('getUserList');
		},
		methods: {
			onSearch(searchData) {
				console.log('查询条件', searchData,this.userlist)
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
				console.log('查询结果：', searchData, '哪个按钮：', type)
			}
		}

	}
</script>

<style>
.userms .el-switch__label.is-active {
    color: #000000;
}
</style>