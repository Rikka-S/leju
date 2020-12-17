<template>
	<view>
		<view class="header">
			<view class="l" :class="{active:isAct=='l'}" @click="isAct='l'">
				精选文章
			</view>
			<view class="r" :class="{active:isAct=='r'}" @click="isAct='r'">
				商品列表
			</view>
		</view>
		<view class="main">
			<view class="l-main" v-if="isAct=='l'">
				<view class="li" v-for="item in articleLs" :key='item.id'>
					<image :src="item.coverImg" mode=""></image>
					<view class="text">
						<view class="title">
							{{item.title}}
						</view>
						<view class="author">
							{{item.author}}
						</view>
					</view>
					<view class="more">
						<view class="view">
							<image class='icon' src="../../static/icons/view.png" mode=""></image>
							{{item.viewCount}}
						</view>
						<view class="collect">
							<image class='icon' src="../../static/icons/zan.png" mode=""></image>
							<image class='icon' src="../../static/icons/collect.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="r-main" v-if="isAct=='r'" v-for="item in goodLs" :key='item.id'>
				<view class="li">
					<image :src="item.bigPic" mode=""></image>
						<view class="name">
							{{item.name}}
						</view>
						<view class="brandStory">
							{{item.brandStory}}
						</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		findArticleByPage,
		findBrandsByPage
	} from "@/api/find/find.js"
	export default {
		data() {
			return {
				isAct: 'l',
				articleLs: [],
				goodLs: []
			};
		},
		methods: {
			init() {
				findArticleByPage(1, 10).then(res => {
					this.articleLs = res.data.rows
					console.log(res)
				})
				findBrandsByPage(1, 10).then(res => {
					this.goodLs = res.data.rows
					console.log(res)
				})
			}
		},
		created() {
			this.init()
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		background-color: rgb(53, 78, 68);
		height: 88rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		view {
			width: 128rpx;
			height: 62rpx;
			line-height: 62rpx;
			color: #FFFFFF;
			margin: 0 10px;
		}

		view.active {
			border-bottom: 1px solid #FFFFFF;
		}
	}

	.l-main {
		.li {
			position: relative;
			width: 674rpx;
			height: 482rpx;
			margin: 40rpx auto 0;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			overflow: hidden;

			image {
				width: 100%;
				height: 382rpx;
			}

			.text {
				position: absolute;
				left: 20rpx;
				bottom: 120rpx;
				color: #FFFFFF;

				.title {
					font-size: 48rpx;
				}

			}

			.more {
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				padding: 0 40rpx;
				font-size: 24rpx;
				align-items: center;

				view {
					height: 100%;
					line-height: 100rpx;
				}

				.icon {
					width: 40rpx;
					height: 40rpx;
					color: #000000;
					margin: 0 20rpx;
				}
			}
		}
	}
	.r-main{
		.li{
			width: 690rpx;
			background-color: #FFFFFF;
			margin: 0 auto 40rpx;
			padding-bottom: 20rpx;
			
			image{
				width: 690rpx;
			}
			.name{
				padding-left: 20rpx;
				margin-top: 20rpx;
			}
			.brandStory{
				padding-left: 20rpx;
				margin-bottom: 20rpx;
				color: #b1b1b1;
			}
		}
	}
</style>
