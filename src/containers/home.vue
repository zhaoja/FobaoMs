<template>
	<el-row>
 	  	<el-tabs v-model="activeName">
		  	<el-tab-pane
			    key="1"
			    label="工作日历"
			    name="first"
			  	>
	   	 		<Calender/>
	  		</el-tab-pane>
	  			<el-tab-pane
			    key="2"
			    label="项目树"
			    name="second"
			  	>
	   	 		<Tree/>
	  		</el-tab-pane>
		</el-tabs>
 	</el-row>
 
</template>
<script type="text/javascript">
    import Calender from '../components/component/calendar'
    import Tree from '../components/component/tree'
    export default {
    	data(){
    		return{
    			activeName: 'first'
    		}
    	},
        components: {
            Calender, Tree
        }
    }
</script>
<style>
 
</style>