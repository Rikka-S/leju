<template>
	<view>
		<view class="order-info">
			<view class="header">
				<text>订单编号:{{order.orderSn}}</text>
			</view>
			<view class="order-main">
				<image :src="order.productPic" mode=""></image>
				<view class="text">
					<view class="name-price">
						<text>{{order.productName}}</text>
						<text>￥{{order.productPrice}}元</text>
					</view>
					<view class="id-num">
						<text>编号:{{order.productSkuId}}</text>
						<text>x{{order.productQuantity}}</text>
					</view>
					<view class="color">
						规格:<text v-for="(el,index) in order.productAttr" :key='index'>{{el.key}}:{{el.value}}</text>
					</view>
				</view>
			</view>
			<view class="total">
				合计：{{order.totalAmount}}元
			</view>
		</view>
		<view class=""><input type="text" v-model="reason" placeholder="原因" />
			<input type="text" v-model="description" placeholder="描述" /></view>
		<view class="">上传图片总大小不能超过3m，单个文件大小不能超过1m，图片总个数不能超过3张</view>
		<uni-icons type="plusempty" size="40" @tap='upload'></uni-icons>上传图片
		<image :src="item" mode="" v-for="item in imgLs" :key='item'></image>
		<button type="default" @tap='submit'>提交</button>
	</view>
</template>

<script>
	import baseUrl from "@/api/baseUrl.js"
	import {
		uploadImg,
		addOrderReturnApply
	} from "@/api/car/returnOrder.js"
	export default {
		data() {
			return {
				order: {},
				reason: '',
				description: "",
				imgLs: []
			};
		},
		methods: {
			async submit() {
				var imgList = []
				this.imgLs.forEach(el => {
					var result = uploadImg(el)
					imgList.push(result)
				})
				var pro = await Promise.all(imgList)
				var obj = {
					companyAddressId: "1331877069316026369",
					count: this.order.productQuantity,
					description: this.description,
					orderId: this.order.orderId,
					orderItemId: this.order.id,
					proofPics: pro.join(),
					reason: this.reason
				}
				addOrderReturnApply(obj).then(res => {
					if(res.success){
						uni.showToast({
							title:"提交成功"
						})
						uni.navigateBack({
							delta:1
						})
					}
				})
			},
			upload() {
				const _this = this
				uni.chooseImage({
					count: 3,
					success(res) {
						if (res.tempFilePaths.length > 3) {
							uni.showToast({
								title: "不能超过三张"
							})
							return
						} else {
							_this.imgLs.push(...res.tempFilePaths)
						}
					}
				})
			}
		},
		onLoad(option) {
			this.order = JSON.parse(option.item)
		}
	}
</script>

<style lang="scss" scoped>
	input {
		height: 80rpx;
		background-color: #FFFFFF;
		line-height: 80rpx;
		margin-bottom: 40rpx;
	}

	image {
		width: 100rpx;
		height: 100rpx;
	}

	.order-info {
		width: 336px;
		box-sizing: border-box;
		padding: 18px;
		border-radius: 12px;
		background-color: #fff;
		margin: 15px auto;
		font-size: 12px;
		color: #3e3e3e;

		.header {
			line-height: 16px;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #f1ece7;
			padding-bottom: 15px;
		}

		.order-main {
			display: flex;
			justify-content: flex-start;
			border-bottom: 1px solid #f1ece7;
			padding: 15px 0;

			image {
				width: 81px;
				height: 81px;
				flex-shrink: 0;
				background-color: #8f8f94;
			}

			.text {
				width: 235px;
				margin-left: 14px;
				font-size: 11px;
				color: #8d8d8d;
				line-height: 15px;
				margin-top: 2px;

				.name-price {
					font-size: 13px;
					line-height: 37px;
					color: #3e3e3e;
				}

				&>view {
					display: flex;
					justify-content: space-between;
				}
			}
		}

		.total {
			font-size: 13px;
			line-height: 18px;
			text-align: right;
			margin-top: 7px;
		}

	}
</style>
