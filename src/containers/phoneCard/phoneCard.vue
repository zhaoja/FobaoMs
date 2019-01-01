<template>
	<div id="">
		<UserTable :seachTableDate="data" @onSearch = "onSearch" @onOprationClick = 'onOprationClick' @onChange = 'onChange' @onSerachOprationClick = 'onSerachOprationClick'/>
	</div>
		 
</template>

<script>
	import UserTable from '../../components/component/SearchTable'
    import { mapState } from 'vuex'
    let testData = {
            searchGroup: {
                rowNum: 3,
                labelWidth: '100px',  // 总体的labelWidth 可以单独为每一项设置
                // searchBtnHidden: false, // 可选值 
                clearBtnHidden: true,  // 可选值 是否显示按钮
                items: [
                    {	
                        key: 'time',
                        name: '时间',
                        type: 'dataPick',
                        dataPickType: 'daterange',  // 时间段选择
                        // valueFormat: 'yyyy-MM-dd', // 可选  设置获取的时间格式 默认就是 yyyy-MM-dd
                    },
                    {	
                        key: 'cardNumber',
                        name: '身份证号',
                        type: 'input',
                    },
                    {	
                        key: 'selectType',
                        name: '配送状态',
                        type: 'select',
                        options: [{
                            value: '选项1',
                            label: '未配送'
                        },{
                            value: '选项2',
                            label: '已配送',
                            disabled: true   // 是否不可以选择
                        }],
                    },
                    {
                        key: 'selectType',
                        name: '支付渠道',
                        type: 'select',
                        options: [{
                            value: '选项1',
                            label: '支付宝'
                        },{
                            value: '选项2',
                            label: '微信',
                            disabled: true   // 是否不可以选择
                        }],
                    },
                    {	
                        key: 'name3',
                        name: '姓名',
                        type: 'input',
                    },
                    {	
                        key: 'goodType',
                        name: '商品类型',
                        type: 'select',
                        value: '',
                        // clearable: false,  // 是否可以清空
                        // disabled: false,  // 是否可选
                        options: [{
                            value: '选项1',
                            label: '小吃'
                        },{
                            value: '选项2',
                            label: '零食',
                            disabled: true   // 是否不可以选择
                        }],
                    },
                    
                ],
                actions: [{
                        key: 'export', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
                        name: '导出',  // 操作按钮名字
                        // size: 'small', // 可选 用于按钮大小
                        type: 'primary',  // 可选 按钮类型
                    },
                    {
                        key: 'addNew', // 可选(如果用多个方法时，必填 不然无法区分点击了哪个方法) 用于回传确定点击的是那个方法
                        name: '新增',  // 操作按钮名字
                        // size: 'small', // 可选 用于按钮大小
                        type: 'primary',  // 可选 按钮类型
                }]
            },
            tableGroup: {
                tHeadData: [
                    {prop: "name", name:'姓名', width: "150"}, // width 可选 可以不写
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
                        type: 'text',  // 可选 按钮类型
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
            // ...mapState({
            //     cardlist: state => state.phoneCard.carddata
            //   })
        },
        created() {
            // this.$store.dispatch('getUserList');
        },
        methods: {
            onSearch(searchData) {
                console.log('查询条件', searchData)
                this.data.tableGroup.tData = tableData  // 模拟查询
                this.data.pagination = {  // 点击查询分页信息页需要修改
                    total: 120,  // 需要修改
                    currentPage: 1, // 默认就是1
                }
            },
            onOprationClick(data, type) {
                if (type === 'detail') {
                    var params ={
                        id : data.idcard
                    }
                    this.$router.push({path:`${this.$route.path}Details`, query:params})
                } else if (type === 'edit') {
                     var params ={
                        id : data.idcard
                    }
                    this.$router.push({path:`${this.$route.path}Edit`, query:params})
                }
            },
            onChange(paginationData) {
                console.log('分页数据:', paginationData)
                this.data.tableGroup.tData = tableData  // 模拟查询
            },
            onSerachOprationClick(searchData, type) {
                console.log('查询结果：', searchData, '哪个按钮：', type)
            }
        }
         
    }
</script>

<style>

</style>