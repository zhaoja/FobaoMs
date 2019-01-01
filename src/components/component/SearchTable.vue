<!--
	作者：王小龙
	时间：2018-12-31
	描述：SearchTable组件 用户查询页
-->
<template>
	<div>
		<!--搜索组件-->
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
		<!--搜索组件-->
		<!--table组件-->
	    <el-table  :data="seachTableDate.tableGroup.tData" style="width: 100%;">
	        <el-table-column v-for="th in seachTableDate.tableGroup.tHeadData" :key = "th.prop" :prop = "th.prop" :label = "th.name" :width = "th.width">
	        </el-table-column>
	        <el-table-column
		      :fixed = "seachTableDate.tableGroup.Opration.fixed ? seachTableDate.tableGroup.Opration.fixed : 'right'"
		      :label = "seachTableDate.tableGroup.Opration.oprationName ? seachTableDate.tableGroup.Opration.oprationName : '操作'"
		      :width = "seachTableDate.tableGroup.Opration.width" v-if = "seachTableDate.tableGroup.Opration">
		      <template slot-scope="scope">
		        <el-button v-for = "action in seachTableDate.tableGroup.Opration.actions" :key = "action.name" @click = "handleOprationClick(scope.row, action.key)" :type = "action.type" :size = "action.size">{{action.name}}</el-button>
			  </template> 
		    </el-table-column>
	    </el-table>
		<!--table组件-->
		<!--分页组件-->
		<el-pagination
		 	v-if="seachTableDate.pagination"
		  background
	      @size-change = "handleSizeChange" 
	      @current-change = "handleCurrentChange"
	      :current-page = "seachTableDate.pagination.currentPage"
	      :page-sizes = "[10, 20, 50, 100]"
	      :page-size = "seachTableDate.pagination.pageSize ? seachTableDate.pagination.pageSize : 10"
	      layout = "total, sizes, prev, pager, next, jumper"
	      :total = "seachTableDate.pagination.total">
	    </el-pagination>
		<!--分页组件-->
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
									value: '',
									labelWidth: '80px',
									placeholder: ''
								},
							]
						},
						tableGroup: {
							keyName: 'id',
							tHeadData: [
								{prop: "name", name:'姓名', width: "150"},
								{prop: "phone", name:'身份证号', width: "150"},
								{prop: "idcard", name:'联系电话'},
								{prop: "state1", name:'收件地址'},
								{prop: "state2", name:'购买数量'},
							],
							tData: [{
								id: '32141',
								name: '王军',
								phone:'15010971578',
								idcard:'130221167008273849',
								state1:'2011-05-05',
								state2:'2011-05-05',
								freeze:false
							}, {
								id: '321411',
								name: '王军',
								phone:'15010971578',
								idcard:'130221167008273849',
								state1:'2011-05-05',
								state2:'2011-05-05' ,
								freeze:true
							}, {
								id: '321412',
								name: '王军',
								phone:'15010971578',
								idcard:'130221167008273849',
								state1:'2011-05-05',
								state2:'2011-05-05' ,
								freeze:false 
							}, {
								id: '321413',
								name: '王军',
								phone:'15010971578',
								idcard:'130221167008273849',
								state1:'审核中',
								state2:'待制卡'  ,
								freeze:true 
							}, {
								id: '321414',
								name: '王军',
								phone:'15010971578',
								idcard:'130221167008273849',
								state1:'审核中',
								state2:'待制卡' ,
								freeze:true  
							}],
							Opration: {  // 可选 没有的话 不显示操作列表
								oprationName: '操作中', // 可选  默认叫操作
								fixed: 'right',  // 可选 默认是 right
								width: '200',  // 可选 默认 自适应
								actions: [{
									key: 'detail', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
									name: '详情',  // 操作按钮名字
									size: 'small', // 可选 用于按钮大小
									type: 'button',  // 可选 按钮类型
								},
								{
									key: 'edit', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
									name: '编辑',  // 操作按钮名字
									size: 'small', // 可选 用于按钮大小
									type: 'text',  // 可选 按钮类型
								}
								]
							}
						},
						pagination: {
							total: 100,  // type = number
							currentPage: 1,  // type = number 当前第几页 
							pageSize: 10
						}
					}
				}
			}
		},   //props以数组的形式定义属性
		mounted() {
			this.formList = _.cloneDeep(this.seachTableDate).searchGroup.items;  // 将搜索组件的 input数组copy
			this.currentPage = this.seachTableDate.pagination.currentPage;  // 获取初始的currentPage
			this.pageSize = this.seachTableDate.pagination.pageSize;	// 获取初始的pageSize
		},      
       	components: {
	         
      	},
       	data(){
       		return{
				formList: [],
				currentPage: 0,
				pageSize: 0,
       		}
		},
		computed: {
			/**
			 * @description 计算searchData 获取到各个input类型组件中的value 同时将分页组件的数据放到搜索条件中
			 * @return (Object) searchData 包括分页信息的搜索条件
			 */
			searchData() {
				let searchData = {};
				this.formList.forEach(item => {
					searchData[item.key] = item.value;
				});
				searchData = Object.assign({}, searchData, {
					currentPage: this.currentPage,
					pageSize: this.pageSize
				})
				return searchData
			}
		},   
       	methods:{
			/**
			 * @description 点击查询 向父组件发送查询数据
			 */
			handleSearch() {
				this.$emit('onSearch', this.searchData);
			},
			/**
			 * @description 点击查询 清空数据 并向触发父组件 onClear方法
			 */
			handleClear() {
				this.formList = _.cloneDeep(this.seachTableDate).searchGroup.items;
				this.$emit('onClear', '点击了清除');
			},
			/**
			 * @description 点击表格中的按钮
			 * @augments （Object） data  table当前行的数据
			 * @augments （String） type  当前点击的按钮类型  这个类型是有父组件提供tableGroup > opration > actions 中的key值 用来让父组件区分具体点击了哪个方法
			 */
       		handleOprationClick(data, type){
				this.$emit('onOprationClick', data, type);
			},
			/**
			 * @description 分页的更换分页pageSize方法  会触发父组件onSizeChange方法 用的情况比较少
			 * @augments （Number） val  当前的pageSize
			 */
   		 	handleSizeChange(val) {
				this.pageSize = val;
				if (Math.ceil(this.seachTableDate.pagination.total/this.pageSize) >= this.currentPage) {
					this.$emit('onChange', this.searchData);
				}
				this.$emit('onSizeChange', val);
			},
			/**
			 * @description 分页改变的方法 只要改变分页就会触发  并触发父组件onChange方法，将查询值及分页信息 传递到父组件
			 * @augments （Number） val  当前的pageSize
			 */
	      	handleCurrentChange(val) {
				this.currentPage = val
				this.$emit('onChange', this.searchData);
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