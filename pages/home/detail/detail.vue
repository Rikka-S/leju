<template>
	<view class="prodetail">
		<view class="my-swiper">

			<swiper class="swiper" circular='true' indicator-dots="true" autoplay="true">
				<swiper-item v-for="item in banner" :key='item.id'>
					<view class="swiper-item">
						<image :src="item" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="collect">
				<image src="../../../static/icons/collect.png" mode=""></image>
			</view>
		</view>
		<view class="main">
			<view class="price">
				<text>￥</text> {{product.price}}
			</view>
			<view class="name">
				{{product.name}}
			</view>
			<view class="detail">
				{{product.description}}
			</view>
			<jyf-parser :html="product.detailMobileHtml" ref="article"></jyf-parser>
		</view>
		<view class="footer">
			<view class="server">
				<image src="../../../static/logo.png" mode=""></image>
			</view>
			<view class="btn-box">
				<view class="btn buy-car" @tap='addCar'>
					添加购物车
				</view>
				<view class="btn buy-now" @tap='buyNow'>
					立即购买
				</view>
			</view>
		</view>

		<view class="mask" v-if="isShow">
			<view class="mask-c">
				<view class="img">
					<image :src="showData.pic" mode=""></image>
				</view>
				<view class="name">
					<text>单人沙发</text>
					<text>库存数量{{showData.stock}}</text>
				</view>
				<view class="close" @tap='isShow=!isShow'>
					<image src="../../../static/icons/x.png" mode=""></image>
				</view>
				<view class="select">
					<view class="title">
						商品选择
					</view>
					<view class="li" @tap='select(index)' :class="{active:cur==index}" v-for="(item,index) in skuList" :key='item.id'>
						<text v-for="(el,index) in item.spData" :key='index'>{{el.key}}:{{el.value}}</text>
					</view>
				</view>
				<view class="select">
					<view class="title">
						特色服务
					</view>
					<view class="li">
						送货上门
					</view>
					<view class="li">
						上门安装
					</view>
				</view>
				<view class="buy-num select">
					<view class="title">购买数量</view>
					<lc-number-box :value="num" :min="1" :disabled="true" :step="1" @change="numChange"></lc-number-box>
				</view>
				<view type="default" class="btn" @tap='define'>确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		productDetail,addCart
	} from "@/api/home/detail/detail.js"
	import {addPreOrder} from "@/api/car/car.js"
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	import lcNumberBox from '@/components/lc-number-box/lc-numberBox.vue';
	import mix from "../../../mixins/index.js"
	export default {
		components: {
			jyfParser,
			lcNumberBox
		},
		mixins:[mix],
		data() {
			return {
				product: '',
				banner: [],
				skuList: [],
				isShow: false,
				showData: {},
				type:'',
				cur: 0,
				num: 1
			};
		},
		methods: {
			toBuyNow(){
				var order = {
					orderItemList:[]
				}
				var obj = {
					cartId: '',
					productId: this.product.id,
					productQuantity: this.num,
					productSkuId: this.showData.id
				}
				order.orderItemList.push(obj)
					addPreOrder(order).then(res=>{
						uni.navigateTo({
							url:`../../car/orderDetail/orderDetail?id=${res.data.orderId}`
						})
						console.log(res)
					})
			},
			buyNow(){
				this.isShow = !this.isShow
				this.showData = this.skuList[0]
				this.type = 'buyNow'
			},
			addToCar(){
				var obj ={
					productId:this.product.id,
					productSkuId:this.showData.id,
					quantity:this.num
				}
				addCart(obj).then(res=>{
					if(res.success){
						wx.showToast({
							title:'添加成功'
						})
						this.isShow = !this.isShow
					}
					console.log(res)
				})
			},
			define(){
				if(this.type=='buyNow'){
					this.isloginFun(this.toBuyNow)
				}
				else{
				this.isloginFun(this.addToCar)
				}
			},
			numChange(e) {
				this.num = e
			},
			select(e) {
				this.cur = e
			},
			addCar() {
				this.type = 'addCar'
				this.isShow = !this.isShow
				this.showData = this.skuList[0]
			},
			init(id) {
				productDetail(id).then(res => {
					this.product = res.data.product
					this.banner = res.data.product.albumPics.split(',')
					var skuList = res.data.product.skuList
					skuList.forEach(el => el.spData = JSON.parse(el.spData))
					this.skuList = skuList
					uni.setNavigationBarTitle({
						title:res.data.product.name
					})
				})
			}
		},
		onLoad(option) {
			this.init(option.id)
		}
	}
</script>

<style lang="scss" scoped>
	.mask {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, .4);
		box-sizing: border-box;

		.mask-c {
			width: 314px;
			height: 463px;
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			margin: auto;
			border-radius: 40rpx;
			background-color: #FFFFFF;

			// padding: 0 60rpx;
			.buy-num {
				display: flex;
				justify-content: space-between;
			}

			.li {
				box-sizing: border-box;
				border: 2px solid transparent;
				float: left;
				width: 100%;
				padding-left: 5px;
				height: 30px;
				color: #3e3e3e;
				font-size: 13px;
				text-align: center;
				line-height: 30px;
				background: #f2f4f3;
				border-radius: 10px;
				border-radius: 10px;
				margin: 5px;
			}

			.active {
				border: 2px solid #000000
			}

			.title {
				font-size: 14px;
				color: #3e3e3e;
				line-height: 20px;
				letter-spacing: 2px;
				font-weight: 600;
			}

			.select {
				box-sizing: border-box;
				margin: 14px 28px;
				padding: 0 4px;
				overflow: hidden;
			}

			.img {
				width: 192rpx;
				height: 192rpx;
				background-color: red;
				position: absolute;
				top: -50rpx;
				left: 60rpx;

				image {
					width: 192rpx;
					height: 192rpx;
				}
			}

			.name {
				font-size: 14px;
				color: #3e3e3e;
				margin-left: 142px;
				margin-top: 42px;
				font-weight: 600;
				display: flex;
				flex-direction: column;

				text:nth-child(2) {
					font-size: 12px;
					color: #b0b0b0;
					margin-top: 3px;
					line-height: 16px;
				}
			}

			.close {
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
				overflow: hidden;
				position: absolute;
				right: 40rpx;
				top: 40rpx;

				image {
					width: 40rpx;
					height: 40rpx;
				}
			}

			.btn {
				width: 104px;
				height: 40px;
				background: #354e44;
				border-radius: 14px;
				border-radius: 14px;
				margin: 24px auto;
				color: #fff;
				font-size: 16px;
				text-align: center;
				line-height: 40px;
			}
		}
	}

	.prodetail {
		padding-bottom: 120rpx;
	}

	.my-swiper {
		position: relative;

		.swiper {
			width: 100%;
			height: 634rpx;

			image {
				width: 100%;
				height: 634rpx;
			}
		}

		.collect {
			position: absolute;
			right: 100rpx;
			bottom: -50rpx;
			width: 100rpx;
			height: 100rpx;
			background-color: #354e44;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;

			image {
				width: 56rpx;
				height: 56rpx;
			}
		}
	}

	.main {
		box-sizing: border-box;
		padding: 0 34px;
		margin-top: 40rpx;

		.price {
			line-height: 30px;
			color: #f2270c;
			font-size: 30px;

			text {
				font-size: 16px;
			}
		}

		.name {
			color: #262626;
			overflow: hidden;
			font-size: 16px;
			font-weight: 700
		}

		.detail {
			font-size: 12px;
			padding: 18px 0 0;
			line-height: 1.3;
			color: #666;
			margin-bottom: 40rpx;
		}
	}

	.footer {
		box-sizing: border-box;
		padding: 0 34px;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 120rpx;
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.btn {
			width: 119px;
			height: 40px;
			font-size: 15px;
			color: #fff;
			line-height: 40px;
			text-align: center;
			background-color: #354e44;
		}

		.buy-car {
			background-color: #e2e2e2;
			color: #8f8f94
		}

		image {
			width: 60rpx;
			height: 60rpx;
		}

		.btn-box {
			display: flex;
		}
	}
</style>
