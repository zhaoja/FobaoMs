<template>
    <div>
        <Left></Left>
        <Top></Top>
        <el-col :span="20" class="pull-right maincontainer">
        	
         	<el-col class="breadCrumb ace-save-state">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<span class="el-breadcrumb__item breadcrumbItem1">当前位置为 : </span>
					<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item v-for="br in breadcrumb"  :key="br">{{brDic[br]}}</el-breadcrumb-item>
				</el-breadcrumb>
			</el-col>
	        <el-col class="title">
	        	{{brDic[breadcrumb[breadcrumb.length-1]]}}
	        </el-col>
	       		
		 	<div class="col-md-12">
    			<router-view class="inner"></router-view>
		 	</div> 
     	</el-col>
    </div>
</template> 
<script>
    import Top from '../components/layout/top'
    import Left from '../components/layout/left'
	import { mapState } from 'vuex'

    export default {
      components: {
        Top,
        Left
      },
      computed: {
			...mapState({
				breadcrumb: state => state.layout.left.breadcrumb,
				brDic: state => state.layout.left.brDic
			})
		},
		mounted(){
//			console.log(this.breadcrumb,this.brDic)
		}
    }
</script>
<style>
	body{background: #fafafa;font-family:"Microsoft YaHei";
		font-family: HelveticaNeue;
		font-size: 14px;
		color: rgba(0,0,0,0.65);
	}
 
	.breadCrumb{
		position: relative;
    	z-index: auto;
    	background: #ffffff;
     	height: 30px;
     	padding: 8px 30px;
	}
	.breadcrumbItem1{
	    margin-right: 10px;
	}
	.title{
	    background: #ffffff;
	    height: 60px;
	    line-height: 50px;
	    font-size: 20px;
	    padding-left: 30px;
	    font-weight: bold;
 	}
 	.inner{
     	background: #fff;
    	margin: 15px 0px;
    	padding: 30px;
    	min-height: 500px;
    	border-radius: 2px;
  	}
</style>