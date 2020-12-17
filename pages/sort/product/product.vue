<template>
	<view class="product">
		<view class="tabar">
			<view class="item " :class="{active:sortBy==''}" @tap='changeTabar("")'>
				新品
			</view>
			<view class="item" :class="{active:sortBy=='sale'}" @tap='changeTabar("sale")'>
				销量
				<view class="icon">
					<uni-icons type="arrowup" class="my-uni-icon" :color="saleIsDesc==1?'red':'#FFFFFF'" size="10"></uni-icons>
					<uni-icons type="arrowdown" class="my-uni-icon" :color="saleIsDesc==0?'red':'#FFFFFF'" size="10"></uni-icons>
				</view>
			</view>
			<view class="item" :class="{active:sortBy=='price'}" @tap='changeTabar("price")'>
				价格
				<view class="icon">
					<uni-icons type="arrowup" class="my-uni-icon" :color="priceIsDesc==1?'red':'#FFFFFF'" size="10"></uni-icons>
					<uni-icons type="arrowdown" class="my-uni-icon" :color="priceIsDesc==0?'red':'#FFFFFF'" size="10"></uni-icons>
				</view>
			</view>
			<view class="item" :class="{active:sortBy=='filter'}" @tap='changeTabar("filter")'>
				赛选
			</view>
		</view>
		<view class="main">
			<view class="list">
				<view class="li" v-for="item in productLs" :key='item.id' @tap='goDetail(item.id)'>
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
		<uni-load-more :status="type"></uni-load-more>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import {
		findProductList
	} from "@/api/sort/sort.js"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				sortBy: '',
				saleIsDesc: null,
				priceIsDesc: null,
				categoryId: '',
				productLs: [],
				start: 1,
				limit: 5,
				total: 0,
				type: 'more'
			};
		},
		onReachBottom() {
			if (this.start * this.limit >= this.total) {
				this.type = 'noMore'
			} else {
				this.start++
				var obj = {
					"categoryId": this.categoryId,
					"isDesc": this.saleIsDesc || this.priceIsDesc,
					"sortBy": this.sortBy
				}
				findProductList(this.start, this.limit, obj).then(res => {
					this.productLs.push(...res.data.rows)
					this.total = res.data.total
					uni.stopPullDownRefresh()
					console.log(res)
				})
			}
		},
		onPullDownRefresh() {
			this.init()
		},
		methods: {
			goDetail(val) {
				uni.navigateTo({
					url: `../../home/detail/detail?id=${val}`
				})
			},
			init() {
				var obj = {
					"categoryId": this.categoryId,
					"isDesc": this.saleIsDesc || this.priceIsDesc,
					"sortBy": this.sortBy
				}
				findProductList(this.start, this.limit, obj).then(res => {
					this.productLs = res.data.rows
					this.total = res.data.total
					uni.stopPullDownRefresh()
					console.log(res)
				})
			},
			changeTabar(e) {
				this.sortBy = e
				if (e == 'sale') {
					this.priceIsDesc = null
					if (this.saleIsDesc) {
						this.saleIsDesc = 0
					} else {
						this.saleIsDesc = 1
					}
				} else if (e == 'price') {
					this.saleIsDesc = null
					if (this.priceIsDesc) {
						this.priceIsDesc = 0
					} else {
						this.priceIsDesc = 1
					}
				} else {
					this.saleIsDesc = null
					this.priceIsDesc = null
				}
				this.init()
			}
		},
		onLoad(option) {
			this.categoryId = option.id
			this.init()
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
			align-items: center;

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
	.tabar {
		top: 0;

		.icon {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 72rpx;
			box-sizing: border-box;
			padding: 10rpx 0;

			.my-uni-icon {
				margin-bottom: 20rpx;
			}
		}
	}

	// #endif

	.list {
		display: flex;
		flex-wrap: wrap;
		margin-top: 60px;
		justify-content: space-around;

		.li {
			width: 334rpx;
			margin: 20rpx auto;
			background-color: #FFFFFF;

			image {
				width: 334rpx;
				height: 238rpx;
			}

			.name {
				font-size: 28rpx;
				margin: 50rpx 0 20rpx 20rpx;
			}

			.price {
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
