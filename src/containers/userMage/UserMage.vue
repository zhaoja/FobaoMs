<template>
	<div id="">
	 	<UserTable :tableData="userlist"/></el-col>
	</div>
		 
</template>

<script>
	import UserTable from '../../components/component/table'
    import { mapState } from 'vuex'
    
    export default {
    	components: {
	        UserTable
	      },
        computed: {
            ...mapState({
                userlist: state => state.userMage.userdata
              })
        },
        created() {
            this.$store.dispatch('getUserList');
        }, 
    }
</script>

<style>

</style>