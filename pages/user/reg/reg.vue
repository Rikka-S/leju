<template>
	<view>
		<view class="logo" @tap='chooseIcon'>
			<image class="logo-img" src="../../../static/icons/leju-logo.png" mode=""></image>
		</view>
		<view class="from" >
			<form @submit="doReg" @reset="">
				<input type="text" name="phone" placeholder='手机号' />
				<input type="password" name="password" placeholder='登录密码' />
				<input type="text" name="username" placeholder='用户名' />
				<input type="text" name='nickname' placeholder='昵称' />
				<input type="text" placeholder='验证码' />
				<button type="default" form-type="submit" >注册</button>
			</form>
		</view>
	</view>
</template>

<script>
	import {register} from "@/api/user/login/login.js"
	export default {
		data() {
			return {
				userInfo: []
			};
		},
		methods: {
			doReg(e) {
				register(e.detail.value).then(res=>{
					if(res.success){
						uni.showToast({
							title:"注册成功"
						})
						uni.navigateTo({
							url:'../login/login'
						})
					}
				})
			},
			chooseIcon() {
				uni.chooseImage({
					success(res) {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.from {
		width: 610rpx;
		margin: 0 auto;

		input {
			height: 100rpx;
			padding: 0 40rpx;
			box-sizing: border-box;
			margin: 20px auto;
			box-shadow: 0 0 30px 0 rgba(43, 86, 112, .1);
			;
			border-radius: 60rpx;
		}

		button {
			margin-top: 80rpx;
			background-color: #354e44;
			color: #fff;
			border-radius: 60rpx;
		}
	}
</style>
