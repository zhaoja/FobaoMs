<template>
	<div id="">
		
	 	<UserTable :seachTableDate="data" @onSearch = "onSearch" @onOprationClick = 'onOprationClick' @onChange = 'onChange'/>
	</div>
		 
</template>

<script>
	import UserTable from '../../components/component/SearchTable'
    import { mapState } from 'vuex'
    let testData = {
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

    let tableData = [{
                    id: '32141',
                    name: '张军',
                    phone:'15010971578',
                    idcard:'130221167008273849',
                    state1:'2011-05-05',
                    state2:'2011-05-05',
                    freeze:false
                }, {
                    id: '321411',
                    name: '张军',
                    phone:'15010971578',
                    idcard:'130221167008273849',
                    state1:'2011-05-05',
                    state2:'2011-05-05' ,
                    freeze:true
                }, {
                    id: '321412',
                    name: '张军',
                    phone:'15010971578',
                    idcard:'130221167008273849',
                    state1:'2011-05-05',
                    state2:'2011-05-05' ,
                    freeze:false 
                }, {
                    id: '321413',
                    name: '张军',
                    phone:'15010971578',
                    idcard:'130221167008273849',
                    state1:'审核中',
                    state2:'待制卡'  ,
                    freeze:true 
                }, {
                    id: '321414',
                    name: '张军',
                    phone:'15010971578',
                    idcard:'130221167008273849',
                    state1:'审核中',
                    state2:'待制卡' ,
                    freeze:true  
    }]
    export default {
    	components: {
	        UserTable
        },
        data(){
       		return{
				data: testData
       		}
		},
        computed: {
            ...mapState({
                cardlist: state => state.phoneCard.carddata
              })
        },
        created() {
            this.$store.dispatch('getUserList');
        },
        methods: {
            onSearch(searchData) {
                console.log('查询条件', searchData)
                this.data.tableGroup.tData = tableData
                this.data.pagination = {
                    total: 120,  // type = number
                    currentPage: 1,  // type = number 当前第几页 
                }
            },
            onOprationClick(data, type) {
                console.log('数据和类型', data,type)
            },
            onChange(paginationData) {
                console.log('分页数据:', paginationData)
                this.data.tableGroup.tData = tableData
            }

        }
         
    }
</script>

<style>

</style>