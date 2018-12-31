<template>
	<el-col :span="4" class="sidebar">
		<el-col :span="24" class="logo">
			<!--<img src="../../imgs/logo.png" />-->
			<div>智慧为老服务平台</div>
			<div>ZHWL  BACKSTAGE  SYSTEM</div>
		</el-col>
		
		<el-menu default-active="1" 
			class="el-menu-vertical-demo" 
			:default-active="this.$route.path" 
			:collapse="isCollapse" :router="true" 
			:unique-opened="true" 
			background-color="#132347" text-color="#AEB4C2" active-text-color="#fff" 
			@open="handleOpen" 
			@close="handleClose" 
			@select="handleSelect">
			<el-menu-item :index="nav.path" v-for="nav in menu" :key="nav.title" v-if="!nav.options">
				<i v-bind:class="nav.icon"></i>
				<span slot="title">{{nav.title}}</span>
			</el-menu-item>
			
			<el-submenu :index="nav.path"  v-for="nav in menu" :key="nav.title" v-if="nav.options">				
				<template slot="title" >
					<i v-bind:class="nav.icon"></i>
					<span slot="title">{{nav.title}}</span>
				</template>
				
				<el-submenu :index="nav2.path" v-for="nav2 in nav.options" :key="nav2.title" v-if="nav2.options" >
					<template slot="title">{{nav2.title}}</template>
					<el-menu-item :index="nav3.path" v-for="nav3 in nav2.options" :key="nav3.title">{{nav3.title}}</el-menu-item>
				</el-submenu>
				<el-menu-item :index="nav2.path" v-for="nav2 in nav.options" :key="nav2.title" v-if="!nav2.options" >
					{{nav2.title}}
				</el-menu-item>	
				
			</el-submenu>
		</el-menu>
			 
	</el-col>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				isCollapse: false,
				tabIndex:''
			}
		},
		computed: {
			...mapState({
				menuLabel: state => state.layout.left.menuLabel,
				menu: state => state.layout.left.menu,
			})
		},
		created() {
			this.$store.dispatch('showMenu');
			a()
		},
		methods: {
			open: function(bool) {
				bool ? bool = false : bool = true
				this.$store.dispatch('showLeft', bool)
			},
			handleOpen(key, keyPath) {
				this.$store.dispatch('showBreadcrumb', key)
			},
			handleClose(key, keyPath) {
				this.$store.dispatch('showBreadcrumb', key)
			},
			handleSelect(key, keyPath) {
				this.$store.dispatch('showBreadcrumb', key)
			}

		}
	};

	function a() {
		setTimeout(function() {
			var aa = $(".sidebar .el-menu-vertical-demo").children().children().children("ul");
			for(var i = 0; i <= aa.length - 1; i++) {
				if(aa[i].childNodes.length === 0) {
					aa[i].parentNode.children[0].children[1].remove()
					//					console.log(aa[i].parentNode.children[0].children[1])
				}
			}
		}, 500)

	}
</script>
<style scoped="scoped">
	.el-menu {
		border-right: none
	}
 	.logo {
		float: left;
		height: 90px;
		overflow: hidden;
		background: #132347;
		text-align: center;
		border-bottom: 1px solid #314E8C;
	}
 
 	.logo div:nth-child(1) {
	 	height: 50px;
		color: #fff;
		line-height: 55px;
		font-size: 22px;
	}
	 .logo div:nth-child(2){
		ont-size: 12px;
		color: #99ACD6;
	}
	.el-menu-vertical-demo{
		margin-top: 90px;
	}
	.sidebar {
		/*max-width: 260px;*/
		width: 16.66667% !important;
		background: #172951;
	}
	.sidebar i{
		margin-right: 10px;
	}
 
	.sidebar .is-active{
	    color: #fff;
	    background: #2F4377 !important;
	    border-left: 4px solid #1890FF ;
	}
	.sidebar .is-opened{
	 	background: #172951 !important;
	    border-left: 0 !important;
	}
	
	.sidebar:before {
		content: "";
		display: block;
		top: 0px;
		bottom: 0;
		z-index: -1;
		background-color: inherit;
		border-style: inherit;
		border-color: inherit;
		border-width: inherit;
		box-shadow: 2px 0px 19px #ccc;
		background: #172951;
	}
	
	.sidebar .el-submenu__title li {
		padding: 0px !important;
	}
	
	.sidebar .el-menu-item-group>ul {
		margin-left: -10px;
		margin-top: -12px;
	}
	
	.sidebar .el-submenu__title {
		padding: 0 !important;
	}
	
	.el-menu-item {
		background-color: rgba(255, 255, 255, 0)!important;
		width: 100%;
	}
	/*.sidebar .el-submenu__title:hover{
		background: #f8f8f8 !important;
	}
	.sidebar .el-menu-item:hover{
			background: #f8f8f8 !important;
	}*/
</style>