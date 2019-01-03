<template>
	<div class="phoneDetail">
		<h4>新增订单：</h4>
		<div class="detail-container">
			<el-form ref="form" :model="form" label-width="180px">
				<el-form-item label="姓名：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="身份证：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="收件人：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
			 	<el-form-item label="联系电话：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				 <el-form-item label="收件地址：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="商品类型：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="购买数量：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>

			</el-form>
		</div>
		 
		<div class="btns">
			<!--<el-button type="primary" icon="plus" @click="getContent">提交</el-button>
				<el-button icon="plus" @click="getContent">重置</el-button>-->
			 
				<el-button type="primary" @click="onSubmit">提交</el-button>
				<el-button>取消</el-button>
			 
		</div>
	</div>

</template>

<script>
	import { mapState } from 'vuex'
	import UEditor from '@/components/component/UEditor'

  export default{
      name: 'hello',
      components: {UEditor},
      data(){
        return {
        	editor:1,
          	config: {
	             //可以在此处定义工具栏的内容
//	            toolbars: [
//	              ['fullscreen', 'source','|', 'undo', 'redo','|','bold', 'italic', 'underline', 'fontborder', 'strikethrough',
//	                '|','superscript','subscript','|', 'forecolor', 'backcolor','|', 'removeformat','|', 'insertorderedlist', 'insertunorderedlist',
//	                '|','selectall', 'cleardoc','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify','|',
//	                'link','unlink']
//	            ], 
	            autoHeightEnabled: false,
	            autoFloatEnabled: true,　　//是否工具栏可浮动
	            initialContent:'请输入内容',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
	            autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
	            initialFrameWidth: null,
	            initialFrameHeight: 450,
	            BaseUrl: '',
	            UEDITOR_HOME_URL: 'static/ueditor/'
          	},
          	addFormVisible: false,
          	//新增页面表单
          	form: {
				name: '',
			}
        }
      },
      mounted(){
      	if(this.$route.path=="/phoneCardDService"){
      		this.editor = 1;
      	}else if(this.$route.path=="/phoneCardEdit"){
      		this.editor = 2;
      	}
      	
      },
      methods: {
        openWindow: function(){
            this.addFormVisible = true;
        },
        //获取文档内容
        getContent: function(){
          let content = this.$refs.ueditor.getUEContent();
          console.log(content);
          alert(content);
        }
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
