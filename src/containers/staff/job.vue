<!--
	作者：offline
	时间：2017-12-28
	描述：组织结构管理
-->
<template>
	<el-row>
	  <el-col :span="15" class="inner"><jobTable :tableData="job"/></el-col>
	  <el-col :span="9" class="inner">
	  	<jobTable :tableData="member"/>
	  	<h3>权限</h3>
	  </el-col>
	</el-row>
</template>

<script>
	import jobTable from '../../components/component/table'
    import { mapState } from 'vuex'
    
    export default {
    	data(){
       		return{
       			 
       			dialogFormVisible: false,
		        form: {
		          name: '',
		          region: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: ''
		        },
		        formLabelWidth: '120px'
       		}
       	},
    	components: {
	        jobTable
	      },
        computed: {
            ...mapState({
                job: state => state.staff.staffData.job,
                member: state => state.staff.staffData.member,
              })
        },
        created() {
            this.$store.dispatch('getJob');
            this.$store.dispatch('getMember');
            
        }
    }
</script>

<style scoped="scoped">
	.inner div{
		border: 1px solid #ccc;
		padding: 10px;
	}	
</style>