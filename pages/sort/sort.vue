<template>
	<view>
		<view class="list">
			<view class="li" v-for="(item ,index) in list" :key="item.id" :class="{white:index==1||index==2}" @tap='toProduct(item.id)'>
				<view class="name">
					{{item.name}}
				</view>
				<image :src="item.icon" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {findCategory} from "@/api/sort/sort.js"
	export default {
		data() {
			return {
				list:[]
			};
		},
			
		methods:{
			toProduct(id){
				uni.navigateTo({
					url:"./product/product"
				})
			},
			init(){
				findCategory('1308336521604599809').then(res=>{
					 this.list =  res.data.category.children
					console.log(res)
				})
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="scss" scoped>
	.list{
		display: flex;
		flex-wrap: wrap;
		.li{
			width: 670rpx;
			height: 302rpx;
			background-color: #d5d5d5;
			margin: 58rpx auto 0;
			position: relative;
			border-radius: 20rpx;
			image{
				height: 100%;
				width: 60%;
				position: absolute;
				right: 0;
				top: 0;
			}
			.name{
				position: absolute;
				    left: 26px;
				    top: 74px;
				    font-size: 24px;
					z-index: 9;
			}
		}
		.li.white{
			background-color: white;
		}
		.li:nth-child(3),.li:nth-child(4){
			width: 312rpx;
			height: 442rpx;
		}
	}

</style>
