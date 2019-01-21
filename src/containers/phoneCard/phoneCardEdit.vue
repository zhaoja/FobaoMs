<template>
	<div class="phoneDetail">
		<div class="edit1" v-if="editor==1">
			<h4>服务描述：</h4>
			<UEditor :config="config1" ref="ueditor" id = "ue1"></UEditor>
		</div>
		<div class="edit2" v-if="editor==2">
			<h4>新增和編輯商品：</h4>
			<div class="detail-container">
				<el-form ref="phoneCardForm" label-width="180px">
					<el-form-item label="商品名称：">
						<el-input v-model="phoneCardForm.commoName"></el-input>
					</el-form-item>
					<el-form-item label="价格（元）：">
						<el-input v-model="phoneCardForm.price"></el-input>
					</el-form-item>
					<el-form-item label="总量（件）：">
						<el-input v-model="phoneCardForm.total"></el-input>
					</el-form-item>
					<el-form-item label="广告图：">
						<el-upload class="upload-demo" action="http://192.168.0.35/file/uploads" 
							:on-preview="handlePreview" 
							:on-remove="handleRemove" 
							:on-success="handleSuccess"
							:file-list="imgfileList" 
							list-type="picture">
							<el-button size="small" type="primary">点击上传</el-button>
							<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
						</el-upload>

					</el-form-item>
					<el-form-item label="商品介绍：">
						<UEditor :config="config" ref="ueditor" id = "ue2"></UEditor>
					</el-form-item>

				</el-form>
			</div>
		</div>

		<div class="btns">
			<!--<el-button type="primary" icon="plus" @click="getContent">提交111</el-button>-->
				<!--<el-button icon="plus" @click="getContent">重置</el-button>-->

			<el-button type="primary" @click="onSubmit">提交</el-button>
			<el-button>取消</el-button>

		</div>
	</div>

</template>

<script>
	import { mapState } from 'vuex'
	import UEditor from '@/components/component/UEditor'
	import { Http } from '@/server/index.js'

	export default {
		name: 'hello',
		components: {
			UEditor
		},
		data() {
			return {
				//页面表单
				phoneCardForm: {
					commoName: '',
					price: null,
					total: null,
					adver_pic:'',
					contents: '',
				}, //334/335
				imgfileList: [{name: '',url: ''}],
				editor: 1,
	        	config1: {
		             //可以在此处定义工具栏的内容
	//	            toolbars: [
	//	              ['fullscreen', 'source','|', 'undo', 'redo','|','bold', 'italic', 'underline', 'fontborder', 'strikethrough',
	//	                '|','superscript','subscript','|', 'forecolor', 'backcolor','|', 'removeformat','|', 'insertorderedlist', 'insertunorderedlist',
	//	                '|','selectall', 'cleardoc','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify','|',
	//	                'link','unlink']
	//	            ], 
					// 如果需要上传功能,找后端小伙伴要服务器接口地址
			        // serverUrl: 'http://api.demo.com/ueditor/upload',
		            autoHeightEnabled: false,
		            autoFloatEnabled: true,　　//是否工具栏可浮动
		            initialContent:'请输入内容',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
		            autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
		            initialFrameWidth: null,
		            initialFrameHeight: 450,
		            BaseUrl: '',
		            UEDITOR_HOME_URL: '/static/UEditor/'
	        	},
	        	config: {
		             //可以在此处定义工具栏的内容
	//	            toolbars: [
	//	              ['fullscreen', 'source','|', 'undo', 'redo','|','bold', 'italic', 'underline', 'fontborder', 'strikethrough',
	//	                '|','superscript','subscript','|', 'forecolor', 'backcolor','|', 'removeformat','|', 'insertorderedlist', 'insertunorderedlist',
	//	                '|','selectall', 'cleardoc','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify','|',
	//	                'link','unlink']
	//	            ], 
					// 如果需要上传功能,找后端小伙伴要服务器接口地址
			        // serverUrl: 'http://api.demo.com/ueditor/upload',
		            autoHeightEnabled: false,
		            autoFloatEnabled: true,　　//是否工具栏可浮动
		            initialContent:'请输入内容',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
		            autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
		            initialFrameWidth: null,
		            initialFrameHeight: 450,
		            BaseUrl: '',
		            UEDITOR_HOME_URL: '/static/UEditor/'
	        	},
				addFormVisible: false,

			}
		},
		mounted() {
		 
			if(this.$route.path == "/phoneCardDService") {
				this.editor = 1;
			} else if(this.$route.path == "/phoneCardEdit") {
				this.editor = 2;
			};
			//显示图片列表
			this.showImgs();
			
		},
		methods: {
			//图片上传
			showImgs(){
				console.log(this.$route.query)
				if(!this.$route.query.data){
					 
				}else{
					this.phoneCardForm = this.$route.query.data;
					var adPicString = this.$route.query.data.adver_pic.split(',');
					var arry = []
					adPicString.forEach(function(currentValue, index, arr) {
						var obj = {
							name: currentValue,
							url: currentValue
						}
						arry.push(obj)
					})
					this.imgfileList = arry;
				}
 				
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleSuccess(response, file, fileList){
//				console.log(response.data[0].id,file,fileList,666)
				if(this.form.adver_pic==""){
				 
					this.form.adver_pic = this.form.adver_pic + response.data[0].id ;
				}else{
				 
					this.form.adver_pic = this.form.adver_pic +','+ response.data[0].id;
				}
					console.log(this.form.adver_pic )
			},
			//
			openWindow: function() {
				this.addFormVisible = true;
			},
			//获取文档内容
//			getContent: function() {
//		        let content = this.$refs.ueditor.getUEContent();
//		        console.log(content);
//		        alert(content);
//			},
			onSubmit() {
					let content = this.$refs.ueditor.getUEContent();
					// this.phoneCardForm.contents = content
//		        console.log(this.$refs.ueditor.getUEContent())
//       		$content = htmlspecialchars(stripslashes(input('content','','trim')));
	 			Http({url:'/web/mobileCardAdmin/editMobileCard',data:{
	 				"param": {
					    "commoName": this.phoneCardForm.commoName,
					    "id": 0,
					    "picture": parseFloat(this.phoneCardForm.adver_pic),
					    "price": parseFloat(this.phoneCardForm.price),
					    "product_desc":content,
					    "total": parseFloat(this.phoneCardForm.total)
					  }
	 			}})
	          	.then(data => {
	            	if (data.code === 1) {
						 alert("修改成功!")
	            	}else{
	            		alert("请填写全部")
	            	}
	          	}).catch(function (error) {
				    console.log(error);
			  	});	
			}
		}
	}
</script>

<style lang="less">
	.phoneDetail {
		.btns {
			text-align: center;
			margin-top: 10px;
		}
		input[type=file] {
		    display: none !important;
		}
	}
</style>