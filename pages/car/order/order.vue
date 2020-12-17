<template>
	<view >
		<view class="tabar">
			<view class="item" v-for="item in orderMenu" :key='item.type' :class="{active:item.type==type}" @tap='type=item.type'>
				{{item.name}}
			</view>
		</view>
		<view class="main" v-if="type!=4">

			<view class="order-info" v-for="(ele,index) in orderLs" :key='index'>
				<view class="header">
					<text>订单编号:{{ele.order.orderSn}}</text>
					<text v-if="type==0">等待支付</text>
					<text v-if="type==1">已支付</text>
				</view>
				<view class="order-main" v-for="item in ele.items" :key='item.id'>
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
					<navigator :url="`../returnOrder/returnOrder?item=${JSON.stringify(item)}`" class="btn" v-if="type==2">
						退货
					</navigator>
				</view>
				<view class="total">
					合计：{{ele.order.totalAmount}}元
				</view>
				<view class="btns">
					<view class="btn" v-if="type==0" >
						取消付款
					</view>
					<view class="btn" v-if="type==0" @tap='submit(ele)'>
						确认付款
					</view>
					<view class="btn" v-if="type==2" @tap='submit(ele)'>
						确认收货
					</view>
				</view>
			</view>
		</view>
		<view class="main" v-if="type==4">

			<view class="order-info" v-for="(ele,index) in orderLs" :key='index'>
				<view class="header">
					<text>订单编号:{{ele.orderSn}}</text>
					<text>{{ele.status|orderProcessText}}</text>
				</view>
				<view class="order-main">
					<image :src="ele.productPic" mode=""></image>
					<view class="text">
						<view class="name-price">
							<text>{{ele.productName}}</text>
							<text>￥{{ele.productPrice}}元</text>
						</view>
						<view class="id-num">
							<text>编号:{{ele.productSkuId}}</text>
							<text>x{{ele.productQuantity}}</text>
						</view>
						<view class="color">
							规格:<text v-for="(el,index) in ele.productAttr" :key='index'>{{el.key}}:{{el.value}}</text>
						</view>
					</view>
				</view>
				<view class="total">
					合计：{{ele.productRealPrice}}元
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		findAllOrders,
		payConfirm,
		orderReturnApplys,
		receiveDone
	} from "@/api/car/order.js"
	export default {
		data() {
			return {
				type: 0,
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
				orderList: [],
				returnLs: []
			};
		},
		filters: {
			orderProcessText(process) {
				var text = '等待处理';
				switch (JSON.stringify(process)) {
					case '0':
						text = '等待处理';
						break;
					case '1':
						text = '确认退货,等待发货';
						break;
					case '2':
						text = '已退款';
						break;
					case '3':
						text = '已拒绝';
						break;
					case '9':
						text = '拒绝退货';
						break;

					default:
						break;
				}
				return text;
			}
		},
		methods: {
			orderReturnApplys() {
				orderReturnApplys().then(res => {
					res.data.items.forEach(el => el.productAttr = JSON.parse(el.productAttr))
					this.returnLs = res.data.items
					console.log(res)
				})
			},
			findAllOrders() {
				findAllOrders().then(res => {
					var orderList = res.data.orderList
					orderList.forEach(el => {
						el.items.forEach(e => {
							e.productAttr = JSON.parse(e.productAttr)
						})
					})
					this.orderList = orderList
				})
			},
			async submit(ele) {
				if (this.type == 0) {
					var obj = {
						orderId: ele.order.id,
						payType: 1,
					}
					var res = await payConfirm(obj)
					if (res.success) {
						this.type=1
						this.findAllOrders()
					}
				} else if (this.type == 2) {
					var res = await receiveDone({
						orderId: ele.order.id
					})
					if (res.success) {
						this.findAllOrders()
					}
				}
			}
		},
		computed: {

			orderLs() {
				if (this.type == 4) {
					return this.returnLs
				} else {
					return this.orderList.filter(el => {
						return el.order.status == Number(this.type)
					})

				}
			}
		},

		onLoad(option) {
			this.type = option.type;
			this.findAllOrders();
			this.orderReturnApplys();
		}
	}
</script>

<style lang="scss" scoped>
	.tabar {
		height: 72rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #354e44;
		position: fixed;
		top: 88rpx;
		left: 0;
		z-index: 9;
		
		.item {
			color: #FFFFFF;
		}

		.active {
			color: red;
		}

		.item {
			display: flex;
			justify-content: center;

			.icon {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin: 0 10rpx;

				.my-uni-icon {
					height: 8px;
				}
			}
		}
	}
	// #ifdef MP-WEIXIN
	.tabar{
		top: 0;
	}
	// #endif
	.main {
		margin-top: 100rpx;
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
