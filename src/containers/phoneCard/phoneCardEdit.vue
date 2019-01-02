<template>
	<div class="detail">
	 	<div class="detail-inner">
	 		<div class="detail-title" style="margin-top: 0;">用户信息</div>
	 		<div class="detail-container">
	 			<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="姓名">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="身份证号">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="收件人">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="联系电话">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="收货地址">
						<el-input type="textarea" v-model="form.desc" :rows = "3" resize = "none"></el-input>
					</el-form-item>
					<el-form-item label="商品类型">
						<el-select v-model="form.region" placeholder="请选择活动区域" size="250">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="购买数量">
						<el-input v-model="form.name"></el-input>
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

    export default {
    	components: {
	        UserTable
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
				}
			}
    	},

        computed: {
            ...mapState({
                details: state => state.userMs.details,
                
              })
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
