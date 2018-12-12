<!--
	作者：zhaojia
	时间：2017-12-27
	描述：日历
-->
<template>
	<div class="dialog bg">
		<div class="loginPage">
			<h1>{{loginName}}</h1>
			<el-form>
				<el-form-item v-for="fn in formName" v-bind:label="fn.cname">
					<el-input type="text" id="user" v-bind:placeholder="fn.cname" v-model="fn.value" @blur="inputBlur(fn.name,fn.value)"></el-input>
					<p>{{fn.error}}</p>
				</el-form-item>
					
				<el-button type="primary" @click="submitForm(formName)" v-bind:disabled="beDisabled">提交</el-button>
				<el-button @click="resetForm">重置</el-button>
				<el-button @click="gotoPage(2)" type="text" class="pull-right" >注册</el-button>
				<el-button @click="gotoPage(1)" type="text" class="pull-right" >登录</el-button>

			</el-form>
		</div>
	</div>
</template>

<script>
	import Axios from 'axios'
	import { mapState } from 'vuex'
	
	  
	export default {
		name: '',
		data() {
			return {
				beDisabled: true
//              beShow: false//传值给父组件
			}
		},
		computed: {
			...mapState({
				formName: state => state.login.loginData.formName,
				loginName: state => state.login.loginData.loginName
			})
		},
		created() {
			this.$store.dispatch('getLogin', 1);
//			this.urlRoot()
		},
		methods: {
			urlRoot:function() {
			} ,
			gotoPage: function(a){
				this.$store.dispatch('getLogin', a);
			},
			resetForm: function() {
				for(var i = 0; i < this.formName.length; i++) {
					this.formName[i].value = '';
					this.formName[i].error = '';
				}
			},
			submitForm: function(formName) {
				//与父组件通信传值
				
				console.log(formName)
				this.$router.push({ path: 'home' })
				//this.$emit('showState', [this.beShow,this.formName.user])
				//提交user password
//				var user = this.formName.user,
//				password = this.formName.password;
//				console.log(user, password)
//				Axios.get('../../src/php/login.php?user=' + user + '&password=' + password)
//					.then(function(res) {
//						console.log(res)
//
//					})
//					.catch(function() {
//
//					})
			},
			inputBlur: function(errorItem, inputContent) {

				for(var i = 0; i < this.formName.length; i++) {
					if(inputContent === '' && this.formName[i].name == errorItem) {
						this.formName[i].error = this.formName[i].cname + "不能为空"
					} else {
						this.formName[i].error = '';
					}
					//对于按钮的状态进行修改
					if(this.formName[i].value == '') {

						this.beDisabled = true;

					} else {
						this.beDisabled = false;
					}
				}
			}
		} 
	}
 
</script>

<style>
	/*body{
		background-image: url(../imgs/bg2017.jpg);
		background-size:100% 100%;
	}*/
	.dialog {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .8);
	}
	
	.loginPage {
		position: absolute;
		top: 30%;
		left: 50%;
		margin-top: -150px;
		margin-left: -175px;
		width: 350px;
		min-height: 300px;
		padding: 30px 20px 20px;
		border-radius: 8px;
		box-sizing: border-box;
		background-color: #fff;
		border: 1px solid #dfe4ed;
		/*opacity: 0.8;*/
	}
	
	.loginPage p {
		color: red;
		text-align: left;
	}
</style>