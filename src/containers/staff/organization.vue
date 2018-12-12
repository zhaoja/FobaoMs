<!--
	作者：offline
	时间：2017-12-28
	描述：组织结构管理
-->
<template>
	<el-row>
	  <el-col :span="15" class="inner">
	  	<el-button type="primary" icon="el-icon-search"  @click="dialogFormVisible('org')">添加</el-button>
	  	<OrganizationTable :tableData="organization"/>
	  	<Dialogform  :dialogData="dialog"/>
	  </el-col>
	  
	  <el-col :span="9" class="inner"><OrganizationTable :tableData="jobBinding"/></el-col>
	</el-row>
 
</template>

<script>

	import OrganizationTable from '../../components/component/table'
	import Dialogform from '../../components/component/dialog'
    import { mapState } from 'vuex'
    
    export default {
    	components: {
	        OrganizationTable, Dialogform
	      },
        computed: {
            ...mapState({
                organization: state => state.staff.staffData.organization,
                jobBinding: state => state.staff.staffData.jobBinding,
                dialog: state => state.staff.staffData.dialog,
                
             })
        },
        created() {
        	console.log(this.dialog,1111)
            this.$store.dispatch('getOrganization');
            this.$store.dispatch('getJobBinding');
        },
        methods:{
        	dialogFormVisible(a){
//	        	alert(a)
//	        	dialogFormVisible = true;
    			this.$store.dispatch('getDialogForm',"org");
        	}
        }
    }
</script>

<style scoped="scoped">
	.inner div{
		border: 1px solid #ccc;
		padding: 10px;
	}	
</style>