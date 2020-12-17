<template>
	<view>
		<view class="list">
			<view class="li" v-for="item in addressLs" :key='item.id' @tap='selectAddress(item)'>
				<view class="info">
					<view class="name">
						<text>{{item.name}}</text>
						<text class="default" v-if="item.defaultStatus==1">默认</text>
					</view>
					<view class="phone">
						{{item.phoneNumber}}
					</view>
				</view>
				<navigator class="edit" :url="`./addAddress/addAddress?id=${item.id}`">
					<uni-icons class="my-uni-icon" type="compose" size="25" color="#777"></uni-icons>
				</navigator>
			</view>
		</view>
		<view class="add">
			<navigator class="btn" url="./addAddress/addAddress">新增地址</navigator>
		</view>
	</view>
</template>

<script>
	import {
		findAllAddress
	} from "@/api/user/address.js"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				addressLs: []
			};
		},
		methods: {
			selectAddress(address){
				let pages = getCurrentPages();
				let route = pages[pages.length - 2].route;
				// 判断当前页面路径是否为 详情页 
				if (route == "pages/car/orderDetail/orderDetail") {
					
					uni.setStorageSync('address',address)
					uni.navigateBack({
						delta:1
					})
				} else {
					return
				}
			},
			getAddress() {
				findAllAddress().then(res => {
					this.addressLs = res.data.items
					console.log(res)
				})
			}
		},
		onShow() {
			this.getAddress()
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		.li {
			width: 94%;
			padding: 10px 0;
			border-bottom: 1Px solid #ccc;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.edit {
				align-items: center;
				width: 40px;
				height: 30px;
				border-left: solid 1px #aaa;
				font-size: 20px;
				color: #777;
			}

			.info {
				margin-left: 15px;
				font-size: 12px;
				color: #999;

				.name {
					margin-bottom: 10px;
					font-size: 14px;
					color: #000000;
				}
			}

			.default {
				font-size: 11px;
				background-color: #354e44;
				color: #fff;
				padding: 0 9px;
				border-radius: 4px;
				margin-left: 10px;
			}

			.edit {
				justify-content: right;
				width: 40px;
				height: 30px;
				border-left: solid 1px #aaa;
				font-size: 20px;

				.my-uni-icon {
					color: #777;
					margin-left: 25rpx;
				}
			}
		}
	}

	.add {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 60px;
		align-items: center;
		display: flex;
		.btn {
			display: flex;
			box-shadow: 0px 2px 5px rgba(0, 0, 0, .4);
			width: 70%;
			height: 40px;
			border-radius: 40px;
			background-color: #354e44;
			color: #fff;
			margin: 0 auto;
			justify-content: center;
			align-items: center;
			font-size: 15px;
		}
	}
	
</style>
