<template>
	<div id="">
		
	 	<UserTable :tableData="cardlist"/>
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
                cardlist: state => state.phoneCard.carddata
              })
        },
        created() {
            this.$store.dispatch('getUserList');
        }, 
         
    }
</script>

<style>

</style>