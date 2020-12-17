<template>
	<view>
		<view class="main">
			<view class="row">
				<view class="label">
					收件人
				</view>
				<view class="ipt">
					<input type="text" name='name' v-model="address.name" />
				</view>
			</view>
			<view class="row">
				<view class="label">
					电话号码
				</view>
				<view class="ipt">
					<input type="text" name='name' v-model="address.phoneNumber" />
				</view>
			</view>
			<view class="row">
				<view class="label">
					所在地区
				</view>
				<view class="ipt">
					<view class="" @tap='open'>
						{{label}}
					</view>
				</view>
				<simple-address ref="simpleAddress" @onConfirm="onConfirm" themeColor="#007AFF">
				</simple-address>
			</view>
			<view class="row">
				<view class="label">
					详细地址
				</view>
				<view class="ipt">
					<input type="text" v-model="address.detailAddress" />
				</view>
			</view>
			<view class="row">
				<view class="label">
					设置成默认
				</view>
				<view class="ipt">
					<switch :checked='address.defaultStatus==1' @change="changeDefault" color='#354e44' />
				</view>
			</view>
			<view class="row" v-if="isShow">
				<view class="del" @tap='del'>
					删除收获地址
				</view>
			</view>
		</view>
		<view class="add">
			<view class="btn" @tap='save'>保存地址</view>
		</view>
	</view>
</template>

<script>
	import {
		findAllAddress,
		updateAddressInfo,
		switchDefault,
		delAddressInfo,
		addAddressInfo
	} from "@/api/user/address.js"
	export default {
		data() {
			return {
				addressID: '',
				address: {
					city: "",
					cityCode: "",
					defaultStatus: 0,
					detailAddress: "",
					name: "",
					phoneNumber: "",
					postCode: "",
					province: "",
					region: "",
					tag: ""
				},
				isShow: false,
				index: 0,
				label: '请选择'
			};
		},
		methods: {
			del() {
				delAddressInfo(this.addressID).then(res => {
					if (res.success) {
						uni.showToast({
							title: "删除成功",
							icon: 'none'
						})
					}
				})
			},
			save() {
				if (this.addressID) {
					updateAddressInfo(this.address).then(res => {
						if (res.success) {
							uni.showToast({
								title: "保存成功"
							})
							uni.navigateBack({
								delta:1
							})({
								
							})
						}
					})

				} else {
					addAddressInfo(this.address).then(res => {
						if (res.success) {
							uni.showToast({
								title: "保存成功"
							})
							uni.navigateBack({
								delta:1
							})
						}
					})
				}
			},
			open() {
				this.$refs.simpleAddress.open()
			},
			onConfirm(e) {
				console.log(e);
				this.label = e.label
				this.address.cityCode = e.label.cityCode
				this.address.province = e.labelArr[0]
				this.address.city = e.labelArr[1]
				this.address.region = e.labelArr[2]
			},
			changeDefault(e) {
				var status = e.detail.value ? 1 : 0
				switchDefault(this.addressID, status).then(res => {
					if (res.success) {
						uni.showToast({
							title: "成功"
						})
					}
				})
				this.address.defaultStatus = status
			},
			getAddress() {
				if (this.addressID) {
					findAllAddress().then(res => {
						this.isShow = !this.isShow
						var address = res.data.items.filter(el => el.id == this.addressID)[0]
						this.label = address.province + '-' + address.city + '-' + address.region
						this.address = address
						console.log(res)
					})
				}
			},
		},
		onLoad(option) {
			this.addressID = option.id
			this.getAddress()
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		width: 100%;
		flex-wrap: wrap;
		flex-direction: column;

		& view {
			display: flex;
		}

		.row {
			width: 94%;
			margin: 0 3%;
			border-bottom: 1Px solid #ccc;

			.label {
				width: 30%;
				height: 60px;
				font-weight: 200;
				font-size: 15px;
				align-items: center;
			}

			.ipt {
				width: 70%;
				padding: 10px 0;
				align-items: center;
				font-size: 15px;
			}
		}

		.del {
			width: 100%;
			height: 50px;
			justify-content: center;
			margin-top: 30px;
			align-items: center;
			font-size: 18px;
			color: #fff;
			background-color: #e64340;
			border-bottom: solid 0.5px #eee;
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
