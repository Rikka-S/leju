<template>
	<view>
		<view class="title">
			等待支付
		</view>
		<navigator url="../../user/address/address" class="select-address">
			<view class="">
				<text>姓名：{{address.name}}</text>
				<text>电话号码：{{address.phoneNumber}}</text>
			</view>
			<view class="">
				<text>收获地址：{{address.province}}-{{address.city}}-{{address.region}}-{{address.detailAddress}}</text>
			</view>
		</navigator>
		<view class="order-info">
			<view class="header">
				<text>订单编号:{{orderBase.orderSn}}</text>
				<text>等待支付</text>
			</view>
			<view class="order-main" v-for="item in orderItems" :key='item.id'>
				<image :src="item.productPic" mode=""></image>
				<view class="text">
					<view class="name-price">
						<text>{{item.productName}}</text>
						<text>￥{{item.productPrice}}元</text>
					</view>
					<view class="id-num">
						<text>编号:{{item.productSkuId}}</text>
						<text>x{{item.productQuantity}}</text>
					</view>
					<view class="color">
						规格:<text v-for="(el,index) in item.productAttr" :key='index'>{{el.key}}:{{el.value}}</text>
					</view>
				</view>
			</view>
			<view class="total">
				合计：{{total}}元
			</view>
			<view class="btns">
				<view class="btn" @tap='submit'>
					前往付款
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getPreOrderById,addConfirmOrder
	} from "@/api/car/car.js"
	import {
		findAllAddress
	} from "@/api/user/address.js"
	export default {
		data() {
			return {
				orderItems: [],
				orderBase: {},
				address: ''
			};
		},
		methods: {
			submit(){
				var obj = {
					addressId: this.address.id,
					orderId: this.orderBase.id,
					orderItemList:this.orderItems,
					payType: 0,
					sourceType: 1
				}
				addConfirmOrder(obj).then(res=>{
					if(res.success){
						uni.navigateTo({
							url:'../order/order?type=0'
						})
					}
					console.log(res)
				})
			},
			getAddress() {
				findAllAddress().then(res => {
					console.log(res);
					var address = res.data.items
					address = address.filter(el => el.defaultStatus == 1)
					this.address = address[0]
				})
			},
			init(id) {
				getPreOrderById(id).then(res => {
					var arr = res.data.orderItems
					arr.forEach(el => el.productAttr = JSON.parse(el.productAttr))
					this.orderItems = arr
					this.orderBase = res.data.orderBase
					console.log(res)
				})
			}
		},
		computed: {
			total() {
				return this.orderItems.reduce((n, p) => {
					return n += p.productQuantity * p.totalPrice
				}, 0)
			}
		},
		onLoad(option) {
			this.init(option.id)
		},
		onShow() {
			if (uni.getStorageSync('address')) {
				this.address = uni.getStorageSync('address')
			} else {
				this.getAddress()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		font-size: 18px;
		color: #494949;
		height: 44px;
		border-bottom: 1px solid #e5e5e5;
		line-height: 44px;
		margin: 0 30px;
		box-sizing: border-box;
	}

	.select-address {
		font-size: 14px;
		color: #494949;
		border-bottom: 1px solid #e5e5e5;
		margin: 0 30px;
		box-sizing: border-box;
		padding: 15px 0;
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
			display: -webkit-box;
			display: -webkit-flex;
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

		.btns {
			margin-top: 10px;
			display: flex;
			justify-content: flex-end;

			.btn {
				width: 62px;
				height: 25px;
				border: 1px solid #2d4f43;
				font-size: 13px;
				border-radius: 5px;
				color: #2d4f43;
				text-align: center;
				line-height: 25px;
				margin-left: 16px;
			}
		}
	}
</style>
