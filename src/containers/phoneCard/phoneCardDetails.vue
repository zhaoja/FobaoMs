<template>
	<div class="phoneDetail">
		 
		<div class="edit2" >
			<h4>商品詳情：</h4>
			<div class="detail-container">
				<el-form ref="form" :model="form" label-width="180px">
					<el-form-item label="商品名称：">
						{{form.name}}
					</el-form-item>
					<el-form-item label="价格（元）：">
						{{form.name}}
					</el-form-item>
					<el-form-item label="总量（件）：">
						{{form.name}}
					</el-form-item>
				 	<el-form-item label="广告图：">
						{{form.name}}
					</el-form-item>
					<el-form-item label="商品介绍：">
						{{form.name}}
					</el-form-item>
	
				</el-form>
			</div>
		</div> 
	</div>

</template>

<script>
	import { mapState } from 'vuex'
 
  export default{
      name: 'hello',
       data(){
        return {
         
          	//新增页面表单
          	form: {
				name: '去222121',
			}
        }
      },
      mounted(){
      	  
      },
      methods: {
         
      }
  }

</script>

<style lang="less">
	.phoneDetail{
		.btns{
			text-align: center;
			margin-top: 10px;
		}
	}
</style>
