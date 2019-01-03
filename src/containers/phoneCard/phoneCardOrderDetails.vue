<template>
	<div class="detail">
	 	<div class="detail-inner">
	 		<div class="detail-title" style="margin-top: 0;">訂單詳情</div>
	 		<div class="detail-container">
	 			<ul class="detail-ul">
	 				<li><span>姓名：      </span> {{form.name}} </li>
					<li><span>身份证：  </span>{{form.name}}   </li>
					<li><span>收件人：  </span>{{form.name}}   </li>
					<li><span>联系电话：</span>{{form.name}}    </li>
					<li><span>收件地址：</span>{{form.name}}    </li>
					<li><span>商品类型：</span>{{form.name}}    </li>
					<li><span>购买数量：</span>{{form.name}}    </li>
					<li><span>支付渠道：</span> {{form.name}}   </li>
					<li><span>支付金额：</span> {{form.name}}   </li>
					<li><span>支付状态：</span> {{form.name}}   </li>
					<li><span>支付时间：</span> {{form.name}}   </li>
					<li><span>订单号：     </span> {{form.nam  </li>
					<li><span>支付流水号  </span>{{form.name}}  </li>
					<li><span>快递单号： </span> {{form.name}}  </li>
					<li><span>配送状态： </span> {{form.name}}  </li>
					<li><span>配送信息： </span> {{form.name}}  </li>
	 			</ul>
	 		</div>
	 	</div>
	 	 
	</div>
	<!--<div class="phoneDetail">
		<h4>订单詳情：</h4>
		<div class="detail-container">
			<el-form ref="form" :model="form" label-width="180px">
				
			</el-form>
		</div>

	</div>-->

</template>

<script>
	import { mapState } from 'vuex'
	import UEditor from '@/components/component/UEditor'

	export default {
		name: 'hello',
		components: {
			UEditor
		},
		data() {
			return {

				//新增页面表单
				form: {
					name: '666',
				}
			}
		},
		mounted() {
			if(this.$route.path == "/phoneCardDService") {
				this.editor = 1;
			} else if(this.$route.path == "/phoneCardEdit") {
				this.editor = 2;
			}

		},
		methods: {
			openWindow: function() {
				this.addFormVisible = true;
			},
			//获取文档内容
			getContent: function() {
				let content = this.$refs.ueditor.getUEContent();
				console.log(content);
				alert(content);
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
	}
</style>