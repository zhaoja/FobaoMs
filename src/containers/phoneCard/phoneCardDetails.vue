<template>
	<div class="phoneDetail">
		<div class="edit2" >
			<h4>商品詳情：</h4>
			<div class="detail-container">
				<el-form ref="form" :model="form" label-width="180px">
					<el-form-item label="商品名称：">
						{{form.commoName}}
					</el-form-item>
					<el-form-item label="价格（元）：">
						{{form.price}}
					</el-form-item>
					<el-form-item label="总量（件）：">
						{{form.total}}
					</el-form-item>
				 	<el-form-item label="广告图：">
						<img :src="img" v-for="img in form.adver_pic" :key="img"/>
					</el-form-item>
					<el-form-item label="商品介绍：">
						<div v-html="form.contents"></div>
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
          	//页面表单
          	form: {
				commoName: '',
				price:null,
				total:null,
				adver_pic:[],
				contents:'',
			}
        }
      },
      mounted(){
      	  	this.form = this.$route.query.data;
      	  	var adPicString = this.$route.query.data.adver_pic.split(',');
      	  	this.form.adver_pic = adPicString;
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
