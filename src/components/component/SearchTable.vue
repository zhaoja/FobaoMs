<!--
	作者：王小龙
	时间：2018-12-31
	描述：SearchTable组件 用户查询页
-->
<template>
	<div>
		<!--<h3>{{tableData}}</h3>-->
		<div class="search-panel-container">
			<div class = "panel-input" v-for = "formItem in formList" :key = "formItem.key" :style = "{width: (100/seachTableDate.searchGroup.rowNum+'%')}">
				<label :style = "{ width: formItem.labelWidth || seachTableDate.searchGroup.labelWidth || 'auto'}">{{formItem.name}}：</label>
				<el-input
					v-if = "formItem.type === 'input'"
				  	:placeholder = "formItem.placeholder ? formItem.placeholder : '请输入...'" 
					v-model = "formItem.value"
					>
				</el-input>
				<el-select 
					v-if = "formItem.type === 'select'"
				  	:placeholder = "formItem.placeholder ? formItem.placeholder : '请选择'" 
					v-model = "formItem.value"
					:clearable = "formItem.clearable"
					:disabled = "formItem.disabled"
					>
					<el-option
						v-if = "formItem.options"
						v-for = "item in formItem.options"
						:key = "item.value"
						:label = "item.label"
						:value = "item.value"
						:disabled = "item.disabled">
					</el-option>
				</el-select>
				<el-date-picker
					v-if = "formItem.type === 'dataPick'"
					:value-format = "formItem.valueFormat ? formItem.valueFormat : 'yyyy-MM-dd'"
					:type = "formItem.dataPickType ? formItem.dataPickType : 'date'"
				  	:placeholder = "formItem.placeholder ? formItem.placeholder : '选择日期'" 
					:start-placeholder = "formItem.startPlaceholder ? formItem.startPlaceholder : '开始日期'"
      				:end-placeholder = "formItem.EndPlaceholder ? formItem.EndPlaceholder : '结束日期'"
					v-model = "formItem.value">
				</el-date-picker>	
			</div>
			<div class = "serach-btn">
				<el-row>
					<el-button type = "primary" @click= "handleSearch">查&nbsp;&nbsp;询</el-button>
					<el-button type = "info" @click= "handleClear">重&nbsp;&nbsp;置</el-button>
				</el-row>
			</div>
		</div>

	    <el-table  :data="tableData.tData" style="width: 100%;">
	        <el-table-column v-for="th in tableData.tHead" :key = "th.name"  v-bind:prop="th.name" v-bind:label="th.cname">
	        </el-table-column>
	        <el-table-column
		      fixed="right"
		      label="操作"
		      width="250" v-if="tableData.showOpration">
		      <template slot-scope="scope">
		      	<el-switch style="float: left;margin-right: 10px; margin-top: 7px;" v-for="eb in tableData.editSwitch" v-model="scope.row.freeze" @change="change(scope.row,eb.act)" :active-text="eb.name1" :inactive-text="eb.name2"></el-switch>
		        <el-button v-for="eb in tableData.editBtn" @click="handClick(scope.row,eb.act)" type="text" size="small">{{eb.name}}</el-button>
		      </template>
		    </el-table-column>
	    </el-table>
		 <el-pagination
		 	v-if="tableData.pagination"
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
	import { mapState } from 'vuex';
	import _ from 'lodash';
    export default {
       	props:{
			tableData: Object,
			seachTableDate: {
				type: Object,
				// required: true,
				default: () =>  {
					return {
						searchGroup: {
							rowNum: 3,
							labelWidth: '120px',
							items: [
								{	
									key: 'name',
									name: '姓名',
									type: 'input',
									value: '123',
									labelWidth: '80px',
									placeholder: '请输入...'
								},
								{	
									key: 'selectType',
									name: '选择框',
									type: 'select',
									value: '',
									// clearable: false,  // 是否可以清空
									// disabled: false,  // 是否可选
									options: [{
										value: '选项1',
          								label: '黄金糕'
									},{
										value: '选项2',
										label: '黄金糕',
										disabled: true
									}],
									labelWidth: '80px',
									// placeholder: ''
								},
								{	
									key: 'name3',
									name: '姓名',
									type: 'input',
									value: '123',
									labelWidth: '80px',
									placeholder: '请输入...'
								},
								{	
									key: 'name2',
									name: '姓名',
									type: 'dataPick',
									value: '',
									labelWidth: '80px',
									// valueFormat: 'yyyy-MM-dd',  // 设置获取的时间格式 默认就是 yyyy-MM-dd
									placeholder: ''
								},
								{	
									key: 'name22',
									name: '时间',
									type: 'dataPick',
									dataPickType: 'daterange',  // 时间段选择
									// valueFormat: 'yyyy-MM-dd',
									value: '123',
									labelWidth: '80px',
									placeholder: ''
								},
							]
						}
					}
				}
			}
		},   //props以数组的形式定义属性
		mounted() {
			this.formList = _.cloneDeep(this.seachTableDate).searchGroup.items
		},      
       	components: {
	         
      	},
       	data(){
       		return{
				formList: [],
       			input:"" ,
				valueChose:true,
       		 	currentPage:1
       		}
       	},
       	methods:{
			handleSearch() {
				let searchData = {};
				this.formList.forEach(item => {
					searchData[item.key] = item.value;
				});
				console.log(searchData,'searchData')
			},
			handleClear() {
				this.formList = _.cloneDeep(this.seachTableDate).searchGroup.items
			},
       		seachTable(value){
       			console.log(value)
       		},
       		handClick(a,b){
				var params ={
					id : a.idcard
				}
				console.log(`${this.$route.path}Details`)
       			this.$router.push({path:`${this.$route.path}Details`,query:params})
//				this.$store.dispatch('getUserListDetails',params)
       		},
   		 	handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
	      	},
	      	handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
	      	},
	      	change(a,b){
	      		console.log(this.valueChose)
	      		console.log(a,b)
//	      		this.valueChose = false
	      	},
	      	onSubmit(){
	      		
	      	}
       	}
    }
</script>

<style lang = "less" >
.search-panel-container {
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 12px;
	.serach-btn {
		width: 100%;
		text-align: center;
		margin-top: 6px; 
		.el-button {
			&+.el-button {
				margin-left: 12px;
			}
		}
		
	};
	.panel-input {
		padding: 6px 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		&>label {
			text-align: right;
		}
		.el-date-editor--daterange {
			height: 32px;
			border: 1px solid rgba(0, 0, 0, 0.15);
			border-radius: 4px !important;
			.el-input__icon, .el-range-separator {
				line-height: 25px;
			}
		}
		.el-input, .el-select, .el-date-editor{
			flex: 1;
			.el-input__inner {
				height: 32px;
				border: 1px solid rgba(0, 0, 0, 0.15);
				border-radius: 4px !important;
			}
		}
		.el-input__suffix {
			.el-input__icon {
				line-height: 24px;
			}
		}
	}
	.el-button {
		padding: 8px 12px;
		margin: 5px 0;
	}
	.el-input__icon {
		line-height: 32px;
	}
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
.el-switch span{
	font-size: 13px !important;
}
</style>