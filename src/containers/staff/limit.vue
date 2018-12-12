<!--
	作者：offline
	时间：2017-12-28
	描述：组织结构管理
-->
<template>
	<el-row>
	  <el-col :span="24" class="inner"><jobTable :tableData="job"/></el-col>
	  </el-col>
	</el-row>
 
</template>

<script>
	import jobTable from '../../components/component/table'
    import { mapState } from 'vuex'
    
    export default {
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