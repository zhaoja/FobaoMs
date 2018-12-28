<template>
	<el-col :span="20" class="top">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#fff" text-color="#ccc" active-text-color="#ffd04b">
			
			<!--<el-menu-item index="1">处理中心</el-menu-item>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
			</el-submenu>
			<el-menu-item index="3">
				<a href="#" target="_blank">其他选项</a>
			</el-menu-item>-->
			<div class="logout">
				<a href="#"  @click="logout">
					退出登录
				</a>
			</div>
			<el-menu-item index="4" class="pull-right user">
				 
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
					    <img class="nav-user-photo" src="../../imgs/user.jpg" alt="Jason's Photo">
					    <span class="user-info">
							<small>欢迎,</small>
							Jason
						</span>
						<i class="el-icon-caret-bottom el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown" class="out-user-menu">

						<ul class="user-menu dropdown-yellow" style="left: 326px;width: 250px; right: auto; top: 14px;">
							<li>
								<a href="#">
									<i class="el-icon-mobile-phone"></i> 设置
								</a>
							</li>

							<li>
								<a href="#">
									<i class="el-icon-info"></i> 其他
								</a>
							</li>

							<li class="divider"></li>

							
						</ul>
					</el-dropdown-menu>
				</el-dropdown>
			</el-menu-item>
			
			<!--<el-menu-item index="5" class="pull-right">
				<el-badge :value="12" class="item">
					<i class="el-icon-bell"></i>
				</el-badge>
			</el-menu-item>
			<el-menu-item index="6" class="pull-right">
				<el-badge :value="3" class="item">
					<i class="el-icon-message"></i>
				</el-badge>
			</el-menu-item>-->
		</el-menu>
	</el-col>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		data() {
			return {
				activeIndex: '1',
				index: '',
			}
		},
		computed: {
			...mapState({
				
			})
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath)
			},
			logout(){
				this.$router.push({ path: 'login' })
			}
		}
	}
</script>
<style scoped="scoped">
	.top {
		position: relative;
		z-index: 1;
	}
	
	
	.top .el-dropdown {
		color: #fff !important;
	}
	
	.top .el-dropdown .el-icon-caret-bottom {
		color: #fff !important;
	}
	
	.top i {
		color: #fff !important;
	}
	
	.top .user-menu {
		padding: 0 25px 0 0 !important;
	}
	
	.top .user-menu li {
		list-style: none;
		padding: 0;
		margin: 0;
		width: 100%;
	}
	
	.top .user-menu li a {
		display: inline-block;
		width: 100%;
		text-decoration: none !important;
	}
	
	.top .user-menu li a:hover {
		text-decoration: none;
	}
	
	.top .user-menu li i {
		margin-right: 15px;
	}
	
	.top .el-badge {
		height: 22px !important;
		line-height: 22px;
	}
	.top .user{
		background: #C0C0C0 !important;
	}
	.logout{
		float: right;
		height: 100%;
		line-height: 60px;
		padding: 0 20px;
	}
	.logout a{
		color: #4BA8FE;
	}
	 
</style>