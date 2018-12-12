<!--
	作者：offline
	时间：2017-12-26
	描述：Table组件
-->
<template>
	<div>
		<!--<h3>{{tableData.tTitle}}</h3>-->
		<div class="searchGroup">
			<span class="input" v-for="sea in tableData.searchGroup">
				{{sea.cname}} ： 
				<el-input
				  	placeholder="请输入..."  v-model="input10" @change="seachTable" style="width: 200px;">
				  	<i class="el-icon-edit el-input__icon"  slot="suffix"></i>
				</el-input>
			</span>
		</div>


	    <el-table  :data="tableData.tData" style="width: 100%;">
	        <el-table-column v-for="th in tableData.tHead"  v-bind:prop="th.name" v-bind:label="th.cname">
	        </el-table-column>
	        <el-table-column
		      fixed="right"
		      label="操作"
		      width="120">
		      <template slot-scope="scope">
		        <el-button v-for="eb in tableData.editBtn" @click="handClick(scope.row,eb.act)" type="text" size="small">{{eb.name}}</el-button>
		      </template>
		    </el-table-column>
	    </el-table>
 
		 <el-pagination
		  background
	      @size-change="handleSizeChange" 
	      @current-change="handleCurrentChange"
	      :current-page="currentPage"
	      :page-sizes="[100, 200, 300, 400]"
	      :page-size="100"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="400">
	    </el-pagination>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
    export default {
       	props:['tableData'],   //props以数组的形式定义属性           
       	components: {
	         
      	},
       	data(){
       		return{
//     			input10:"" ,
       		 	currentPage:1
       		}
       	},
       	methods:{
       		seachTable(value){
       			console.log(value)
       		},
       		handClick(a,b){
       			console.log(a,b)
       		},
   		 	handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
	      	},
	      	handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
	      	}
       	}
    }
</script>

<style>
.searchGroup {
	padding-bottom: 20px;
}
.searchGroup .input {
	margin-right: 30px;
}
.searchGroup .input  input{
	height: 32px !important;
	border: 1px solid rgba(0,0,0,0.15)!important;
	border-radius: 4px!important;
}
 
.el-table thead tr:nth-child(1) th.is-leaf {
	border-bottom: 1px solid #fff;
	background: #fafafa!important;
}

.el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #e8e8e8;
}
.el-table__row{
	height: 50px;
}
.el-table tbody tr td{
    padding: 2px 0 !important;
    min-width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    /* position: relative; */
} 
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    margin: 0 2px;
    color: rgba(0, 0, 0, 0.65);
    min-width: 30px;
    /*background: #FFFFFF;*/
    border: 1px solid #D9D9D9;
    border-radius: 6px;
}

.el-pagination {
	margin-top: 40px;
	text-align: right;
}
.el-pagination__total{
	float: left;
    margin-top: -30px;
}

</style>