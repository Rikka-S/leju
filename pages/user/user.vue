<template>
	<view>
		<view class="user-info" @tap='goUserCenter'>
			<view class="head">
				<image :src="userInfo.icon" mode=""></image>
			</view>
			<view class="name" v-if="!isLogin">
				<view class="">hi~</view>
				<view class="">你还没有登录</view>
			</view>
			<view class="name" v-if="isLogin">
				<view class="">{{userInfo.nickname}}</view>
				<view class="">用户名:{{userInfo.username}}</view>
			</view>
		</view>
		<view class="btn-box" v-if="!isLogin">
			<navigator class="btn reg">注册</navigator>
			<navigator url="./login/login" class="btn login">登录</navigator>
		</view>
		<view class="order">
			<view class="header">
				我的订单
			</view>
			<view class="menu">
				<navigator class="li" v-for="item in orderMenu" :key='item.type' :url="`../car/order/order?type=${item.type}`">
					<image :src="item.url" mode="">
					</image>
					<view class="">
						{{item.name}}
					</view>
				</navigator>
			</view>
		</view>

		<view class="more">
			<uni-grid :column="3" :show-border="false">
				<uni-grid-item style="width: 222rpx;height: 222rpx;" v-for="(item,index) in moreLs" :key='index'>
					<navigator :url="item.url">
						<view class="li">
							<image :src="item.src" mode=""></image>
							<view class="">{{item.name}}</view>
						</view>
					</navigator>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import mix from "../../mixins/index.js"
	export default {
		components: {
			uniGrid,
			uniGridItem
		},
		mixins: [mix],
		data() {
			return {
				isLogin: false,
				userInfo: '',
				orderMenu: [{
						url: '../../static/icons/icon-pay.png',
						name: "带付款",
						type: 0
					},
					{
						url: '../../static/icons/icon-pay.png',
						name: "已付款",
						type: 1
					},
					{
						url: '../../static/icons/icon-pay.png',
						name: "已发货",
						type: 2
					},
					{
						url: '../../static/icons/icon-pay.png',
						name: "已收货",
						type: 3
					},
					{
						url: '../../static/icons/icon-pay.png',
						name: "售后",
						type: 4
					}
				],
				moreLs: [{
						src: "../../static/icons/zan.png",
						name: "收藏"
					}, {
						src: "../../static/icons/zan.png",
						name: "品牌"
					}, {
						src: "../../static/icons/zan.png",
						name: "文章"
					}, {
						src: "../../static/icons/zan.png",
						name: "地址",
						url: './address/address'
					}, {
						src: "../../static/icons/zan.png",
						name: "卡包"
					}, {
						src: "../../static/icons/zan.png",
						name: "购物车",
						url: "../car/car"
					}, {
						src: "../../static/icons/zan.png",
						name: "客服"
					},
					{
						src: "../../static/icons/zan.png",
						name: "测试"
					},
					{
						src: "../../static/icons/zan.png",
						name: "支付0.01元"
					},
				]
			};
		},
		methods: {
			goUserCenter() {
				uni.navigateTo({
					url: './usercenter/usercenter'
				})
			}
		},
		onShow() {
			this.userInfo = uni.getStorageSync('userInfo')
			this.isLogin = this.checkHasLogined();
		}
	}
</script>

<style lang="scss" scoped>
	.user-info {
		height: 150rpx;
		display: flex;
		margin: 80rpx 0 30rpx 40rpx;

		.head {
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
			overflow: hidden;
			background-color: #FFFFFF;

			image {
				width: 150rpx;
				height: 150rpx;
			}
		}

		.name {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 20rpx 0;
			margin-left: 40rpx;
		}
	}

	.btn-box {
		display: flex;
		justify-content: center;
		margin-bottom: 40rpx;

		.btn {
			width: 182rpx;
			height: 76rpx;
			border: 1px solid #354e44;
			margin: 20rpx;
			text-align: center;
			line-height: 76rpx;
			border-radius: 10rpx;
		}

		.login {
			background-color: #354e44;
			color: #FFFFFF;
		}
	}

	.order {
		background-color: #FFFFFF;
		width: 670rpx;
		margin: 0 auto;
		padding: 20rpx 40rpx;
		box-sizing: border-box;
		border-radius: 20rpx;

		.header {
			height: 76rpx;
			line-height: 76rpx;
			border-bottom: 1px solid #000000;

		}

		.menu {
			display: flex;
			justify-content: space-around;
			margin-top: 20rpx;

			.li {
				text-align: center;
				font-size: 26rpx;

				image {
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	}

	.more {
		width: 670rpx;
		box-sizing: border-box;
		margin: 40rpx auto;
		background-color: #FFFFFF;
		padding-top: 20rpx;
		border-radius: 20rpx;

		.li {
			text-align: center;
			font-size: 26rpx;

			image {
				width: 50rpx;
				height: 50rpx;
				margin: 15px auto;
			}
		}
	}
</style>
