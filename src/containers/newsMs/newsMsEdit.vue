<template>
	<div class="detail">
	 	<div class="detail-inner">
	 		
	 		<div class="detail-container">
	 			<div class="detail-title" style="margin-top: 0;">新增栏目</div>
		 		<el-form ref="form" :model="form" label-width="180px">
		 			<el-form-item label="栏目名称：">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">确认</el-button>
						<el-button>取消</el-button>
					</el-form-item>
		 		</el-form>
		 		<hr />
	 			<div class="detail-title" style="margin-top: 0;">新增资讯</div>
	 			<el-form ref="form" :model="form" label-width="180px">
	 				<el-form-item label="选择栏目：">
						<el-select v-model="form.region" placeholder="请选择栏目名称" size="250">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="标题：">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					 <el-form-item label="资讯内容：">
						<UEditor :config="config" ref="ueditor" ></UEditor>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">确认</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
	 		</div>
	 	</div>
	 	 
	</div>
		 
</template>

<script>
    import { mapState } from 'vuex'
	import UserTable from '../../components/component/table'
	import UEditor from '@/components/component/UEditor'

    export default {
    	components: {
	        UserTable, UEditor
	    },
    	data(){
    		return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},          	
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
				
			}
    	},

        computed: {
            ...mapState({
                details: state => state.userMs.details,
                
          	})
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
	        },
	        onSubmit(){
	        	
	        }
	      },
        onSubmit() {
			console.log('submit!');
		}
    }
</script>
<style lang="less">
.detail-title{
	font-family: PingFangSC-Medium;
	font-size: 16px;
	color: rgba(0,0,0,0.85);
	line-height: 24px;
	margin-top: 30px;
	margin-bottom: 15px;
	font-weight: 600;
}
.detail-container {
	.el-form-item {
		.el-form-item__label {
			line-height: 32px;
		}
		.el-input {
			max-width: 250px;
		}
		.el-form-item__content {
			line-height: 32px;
			.el-input__icon {
				line-height: 25px;
			}
			.el-input__inner {
				height: 32px;
				border: 1px solid rgba(0, 0, 0, 0.15);
				border-radius: 4px !important;
			}
		}
	}
	.el-textarea {
		max-width: 300px;
	}
}

</style>
