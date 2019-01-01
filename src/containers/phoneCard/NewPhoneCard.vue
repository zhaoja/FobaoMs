<template>
	<div id="">
		
	 	<UserTable :tableData="cardlist" @onSearch = "onSearch" @onOprationClick = 'onOprationClick' @onChange = 'onChange'/>
	</div>
		 
</template>

<script>
	import UserTable from '../../components/component/SearchTable'
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
        methods: {
            onSearch(searchData) {
                console.log('查询条件', searchData)
            },
            onOprationClick(data, type) {
                console.log('数据和类型', data,type)
            },
            onChange(paginationData) {
                console.log('分页数据:', paginationData)
            }

        }
         
    }
</script>

<style>

</style>