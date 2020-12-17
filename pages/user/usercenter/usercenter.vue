<template>
	<view class="user-center">
		<view class="edit" @tap='changeEdit'>
			修改个人信息
		</view>
		<view class="row">
			<view class="">头像</view>
			<view class="chosseImg"  v-if='isHasChoose' @tap='chosseImg'>
				上传图片
			</view>
			<view class="" v-else>
				<image :src="userInfo.icon" mode=""></image>
			</view>
		</view>
		<view class="row">
			<view class="">用户名</view>
			<input type="text" v-model="userInfo.username" :class="{noEdit:isEdit}" :disabled='!isEdit'/>
		</view>
		<view class="row">
			<view class="">昵称</view>
			<input type="text" v-model="userInfo.nickname" :class="{noEdit:isEdit}" :disabled='!isEdit'/>
		</view>
		<view class="row">
			<view class="">手机号</view>
			<input type="text" v-model="userInfo.phone" :class="{noEdit:isEdit}" :disabled='!isEdit'/>
		</view>
		<button type="default" class="btn" v-if="isEdit" @tap="edit">更新数据</button>
		<button type="default" class="btn" v-else @tap='logOut'>退出登录</button>
	</view>
</template>

<script>
	import baseUrl from "@/api/baseUrl.js"
	import {updateMemberInfo} from "@/api/user/user.js"
	export default {
		data() {
			return {
				userInfo: '',
				isEdit:false,
				isHasChoose:false
			};
		},
		methods:{
			edit(){
				uni.setStorageSync('userInfo',this.userInfo)
				updateMemberInfo(this.userInfo).then(res=>{
					console.log(res)
				})
			},
			logOut(){
				uni.removeStorageSync('token')
				uni.removeStorageSync('userInfo')
					uni.navigateTo({
						url:'../login/login'
					})
			},
			changeEdit(){
				this.isEdit = !this.isEdit
				this.isHasChoose = !this.isHasChoose
			},
			chosseImg(){
				var _this = this
				uni.chooseImage({
					success(res) {
						uni.uploadFile({
							url:baseUrl+"/lejuClient/login/uploadAvatar",
							filePath:res.tempFilePaths[0],
							success(res){
								_this.isHasChoose = !_this.isHasChoose
								_this.userInfo.icon = JSON.parse(res.data).data.fileUrl
							}
						})
					}
				})
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userInfo')
		}
	}
</script>

<style lang="scss" scoped>
	.user-center {
		padding-top: 100rpx;
	}
	input{
		text-align: right;
		color: #a1a1a1;
	}
	.noEdit{
		color: #000000;
	}
	.chosseImg{
		width: 224rpx;
		height: 60rpx;
		color: #353535;
		font-size: 26rpx;
		border-radius: 10rpx;
		line-height: 60rpx;
		text-align: center;
		border: 1px solid #353535;
		background-color: rgba(0, 0, 0, 0);
	}
	.edit {
		width: 224rpx;
		height: 60rpx;
		color: #353535;
		font-size: 26rpx;
		border-radius: 10rpx;
		line-height: 60rpx;
		text-align: center;
		border: 1px solid #353535;
		background-color: rgba(0, 0, 0, 0);
		position: absolute;
		top: 20rpx;
		right: 20rpx;
	}

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e5e5e5;
		padding: 5px 15px ;
		line-height: 94rpx;
		font-size: 16px;
		image {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
		}
	}
	.btn{
		position: fixed;
		    left: 50%;
		    bottom: 20%;
		    margin-left: -92px;
		    width: 185px;
		    height: 44px;
		    font-size: 16px;
		    color: #fff;
		    text-align: center;
		    line-height: 44px;
		    background: #1c4b47;
		    border-radius: 8px;
	}
</style>
