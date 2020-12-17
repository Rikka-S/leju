<template>
	<view>
		<view class="logo">
			<image class="logo-img" src="../../../static/icons/leju-logo.png" mode=""></image>
		</view>
		<view class="form">
			<input type="text" v-model="acc" placeholder='用户名' />
			<input type="password" v-model="pas" placeholder='密码' />
			<button type="default" @click="dologin">登录</button>
			<view class="help">
				<view class="retrieve">
					找回密码
				</view>
				<view class="reg" @tap='toReg'>
					注册账号
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		login,
		getMemberInfo
	} from "../../../api/user/login/login.js"
	export default {
		data() {
			return {
				acc: 'rikka',
				pas: "123456"
			};
		},
		methods: {
			toReg(){
				uni.navigateTo({
					url:"../reg/reg" 
				})
			},
			async dologin() {
				var res = await login({
					username: this.acc,
					password: this.pas
				})
				if (res.success) {
					uni.setStorageSync('token', res.data.token)
					var userInfo = await getMemberInfo()
					uni.setStorageSync('userInfo',userInfo.data.userInfo)
					uni.switchTab({
						url:'../user'
					})
					// uni.navigateBack({
					// 	delta:1
					// })
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.form {
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

		.help {
			display: flex;
			justify-content: center;
			margin-top: 30px;

			view {
				text-align: center;
				width: 200rpx;
			}

			.retrieve {
				border-right: 1rpx solid #000000;
			}
		}
	}
</style>
