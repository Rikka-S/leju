<template>
	<view style="padding-bottom: 100rpx;">
		<view class="list" v-if="carLs.length!=0">
			<view class="li" v-for="item in carLs" :key="item.id">
				<view class="info">
					<evan-checkbox shape='square' primary-color='#354e44' v-model="item.isChecked"></evan-checkbox>
					<view class="img-box">
						<image :src="item.productPic" mode=""></image>
					</view>
					<view class="text">
						<text class="name">{{item.productName}}</text>
						<text>编号{{item.productSkuId}}</text>
						<text>价格{{item.price}}元</text>
						<text>数量{{item.quantity}}</text>
					</view>
				</view>
				<view class="num-box">
					<uni-number-box class="numBox" :value="item.quantity" @change="numChange($event,item)"></uni-number-box>
				</view>
			</view>
		</view>
		<view v-else class="empty">您的购物车为空</view>
		<view class="footer">
			<evan-checkbox shape='square' primary-color='#354e44' v-model="isAllChecked">全选</evan-checkbox>
			<view class="r">
				<view class="total">
					合计：￥<text>{{total}}</text>
				</view>
				<view class="btn" @tap='settle'>
					结算
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		findArticleByPage,
		delCartItems,
		addPreOrder
	} from "@/api/car/car.js"
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				carLs: []
			};
		},
		methods: {
			settle() {
				var order = {
					orderItemList:[]
				}
				this.carLs.forEach(el=>{
					if(el.isChecked){
						var obj = {
							cartId: el.id,
							productId: el.productId,
							productQuantity: el.quantity,
							productSkuId: el.productSkuId
						}
						order.orderItemList.push(obj)
					}
				})
				console.log(order);
				addPreOrder(order).then(res => {
					if(res.success){
						uni.navigateTo({
							url:`./orderDetail/orderDetail?id=${res.data.orderId}`
						})
					}
					console.log(res)
				})
			},
			  numChange(e, val) {
				if (e == 0) {
					var arr = [val.id]
					var _this = this
					uni.showModal({
						content: "确认删除该商品",
						async success(res) {
							if (res.confirm) {
								var reslut = await delCartItems(arr)
								if(reslut.success){
								_this.init()
								}
							} else {
								val.quantity = 1
							}
						}
					})

				} else {
					val.quantity = e
				}
			},
			init() {
				findArticleByPage().then(res => {
					if (res.success) {
						var carLs = res.data.items
						carLs.forEach(el => el.isChecked = false)
						this.carLs = carLs
						console.log(this.carLs)
					}
				})
			},
			delCarItem(id) {
				delCartItems(id).then(res => {
					if (res.success) {
						uni.showToast({
							title: "删除成功"
						})
					}
					console.log(res)
				})
			}
		},
		computed: {
			isAllChecked: {
				get() {
					if(this.carLs.length==0){
						return false
					}
					else{
					return this.carLs.every(el => el.isChecked)
					}
				},
				set(v) {
					this.carLs.forEach(el => el.isChecked = v)
				}
			},
			total() {
				return this.carLs.reduce((n, p) => {
					if (p.isChecked) {
						return n += p.price * p.quantity
					} else {
						return n
					}
				}, 0)
			}
		},
		onShow() {
			this.init()
		}
	}
</script>

<style lang="scss" scoped>
	.empty{
		color: #C0C0C0;
		padding-top: 200rpx;
		text-align: center;
	}
	.numBox{
		height: 20px;
		border-radius: 5px;
		float: right;
	}
	.list {
		.li {
			width: 336px;
			margin: 25px auto;
			background-color: #fff;
			border-radius: 12px;
			padding: 10px 10px;
			box-sizing: border-box;

			.info {
				display: flex;
				height: 136rpx;

				image {
					width: 130rpx;
					height: 136rpx;
					margin: 0 20rpx;
				}

				.text {
					font-size: 11px;
					color: #8d8d8d;
					display: flex;
					flex-direction: column;

					.name {
						width: 400rpx;
						font-size: 13px;
						color: #3e3e3e;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}

			}

			.num-box {
				margin-top: 20rpx;
				height: 80rpx;
				width: 100%;
			}
		}
	}

	.footer {
		position: fixed;
		left: 0;
		bottom: 100rpx;
		width: 100%;
		height: 150rpx;
		box-sizing: border-box;
		padding: 0 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		background-color: #FFFFFF;

		.btn {
			width: 104px;
			height: 40px;
			background: #354e44;
			border-radius: 14px;
			color: #fff;
			font-size: 18px;
			line-height: 40px;
			text-align: center;
		}

		.r {
			display: flex;
			align-items: center;
		}

		.total {
			margin: 0 10rpx;
			text-align: right;

			text {
				color: red;
			}
		}
	}
</style>
