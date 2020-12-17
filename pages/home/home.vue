<template>
	<view class="home">
		<view class="my-swiper">
			<swiper class="swiper" circular='true' :indicator-dots="indicatorDots" :autoplay="autoplay" >
				<swiper-item v-for="item in swiperLs" :key='item.id'>
					<view class="swiper-item">
						<image :src="item.pic" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="menu">
			<view class="li" v-for="item in categoryLs" :key='item.id' @tap='toProduct(item.id)'>
				<image :src="item.icon" mode=""></image>
				<text>{{item.name}}</text>
			</view>

		</view>

		<view class="doings">
			<view class="title">
				限时活动:
			</view>
			<swiper class="swiper" circular='true' :autoplay="autoplay" vertical='true'>
				<swiper-item v-for="item in doingLs" :key='item.id'>
					<view class="swiper-item">
						<view class="name">
							{{item.name}}
						</view>
						<view class="price">
							<text class="old-price">1000元</text>
							<text>现价:{{item.price}}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="hot">
			<view class="title">
				热门推荐
			</view>
			<swiper class="swiper" :autoplay="autoplay" :interval='interval' :duration="duration" next-margin='10px'
			 display-multiple-items='3' circular='true' easing-function='easeInOutCubic'>
				<swiper-item v-for="item in hotLs" :key='item.id'>
					<view class="swiper-item">
						<image :src="item.pic" mode=""></image>
						<view class="text">{{item.name}}</view>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="new-goods">
			<view class="title">
				新品推荐
			</view>
			<view class="main">
				<view class="list">

					<view class="li" v-for="item in newgoods" :key='item.id' @tap='goDetail(item.id)'>
						<image class="img" :src="item.pic" mode=""></image>
						<view class="text" >
							<text>{{item.name}}</text>
							<text>价格: {{item.price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="like">
			<view class="title">
				猜你喜欢
			</view>
			<view class="list">
				<view class="li" v-for="item in likeLs" :key='item.id'  @tap='goDetail(item.id)'>
				<image :src="item.pic" mode=""></image>
				<view class="name">
					{{item.brandName}}
				</view>
				<view class="price">
					<text>￥{{item.price}}元</text>
					<text>乐居</text>
				</view>
				</view>
				<view class="li last"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		bannerAds,
		findCategory,
		recommendList,
		hotList,
		newGoogs,
		like
	} from "../../api/home/home.js"
	export default {
		data() {
			return {
				swiperLs: [],
				categoryLs: [],
				doingLs: [],
				hotLs: [],
				newgoods: [],
				likeLs:[],
				indicatorDots: true,
				autoplay: true,
				interval: 2500,
				duration: 2000
			};
		},
		methods: {
			toProduct(id){
				uni.navigateTo({
					url:"../sort/product/product"
				})
			},
			goDetail(val){
				uni.navigateTo({
					url:`./detail/detail?id=${val}`
				})
			},
			init() {
				bannerAds().then(res => {
					this.swiperLs = res.data.items
				})
				findCategory('1308336521604599809').then(res => {
					this.categoryLs = res.data.category.children
				})
				recommendList().then(res=>{
					this.doingLs = res.data.items
				})
				hotList().then(res => {
					this.hotLs = res.data.items
				})
				newGoogs().then(res => {
					this.newgoods = res.data.productList
				})
				like().then(res=>{
					this.likeLs = res.data.items
				})
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		padding-top: var(--status-bar-height);
	}

	.swiper {
		height: 470rpx;

		.swiper-item {
			height: 750rpx;
			image {
				height: 100%;
				width: 100%;
				border-radius: 20rpx;
			}
		}
	}

	.menu {
		display: flex;
		justify-content: space-around;
		margin-top: 60rpx;

		.li {
			text-align: center;
			width: 100rpx;

			image {
				width: 80rpx;
				height: 80rpx;
			}

			text {}
		}
	}

	.doings {
		height: 100rpx;
		width: 670rpx;
		margin: 40rpx auto;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;

		.title {
			color: orange;
			margin: 0 10rpx;
		}

		.swiper {
			width: 458rpx;
			height: 100rpx;

			.swiper-item {
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.name{
					white-space: nowrap;
					 overflow: hidden;
					  text-overflow: ellipsis;
					  font-size: 28rpx;
					  width: 300rpx;
				}
				.price {
					font-size: 24rpx;
					font-weight: 700;
					color: red;
					display: flex;
					flex-direction: column;
					justify-content: center;

					.old-price {
						color: #000000;
						text-decoration: line-through;
					}
				}
			}

		}
	}

	.hot {
		.title {
			font-size: 32rpx;
			padding: 0 40rpx;
			font-weight: 700;
		}

		.swiper {
			margin-top: 40rpx;
			height: 300rpx;

			.swiper-item {
				width: 250rpx;
				height: 300rpx;
				text-align: center;

				image {
					width: 208rpx;
					height: 176rpx;
				}

				.text {
					font-size: 26rpx;
					width: 200rpx;
					margin: 40rpx auto;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}

	.new-goods {
		.title {
			font-size: 32rpx;
			padding: 0 40rpx;
			font-weight: 700;
			margin-top: 40rpx;
		}

		.main {
			overflow: auto hidden;
			margin-top: 40rpx;

			.list {
				width: 100%;
				display: flex;
				align-items: center;

				.li {
					width: 590rpx;
					padding: 40rpx;
					background-color: #FFFFFF;
					display: flex;
					flex-grow: 0;
					flex-shrink: 0;
					margin: 0 20rpx;

					.img {
						width: 200rpx;
						height: 168rpx;

					}

					.text {
						margin-left: 20rpx;
						display: flex;
						height: 168rpx;
						flex-direction: column;
						justify-content: space-between;
						font-size: 28rpx;
					}
				}
			}
		}
	}
	.like{
		.title {
			font-size: 32rpx;
			padding: 0 40rpx;
			font-weight: 700;
			margin-top: 40rpx;
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			margin-top: 40rpx;
		}
		.li{
			width: 334rpx;
			margin: 20rpx auto;
			background-color: #FFFFFF;
			image{
				width: 334rpx;
				height: 238rpx;
			}
			.name{
				font-size: 28rpx;
				margin: 50rpx 0 20rpx 20rpx;
			}
			.price{
				display: flex;
				margin: 20rpx;
				font-size: 24rpx;
				justify-content: space-between;
			}
		}
		.last{
			height: 0;
		}
	}
</style>
