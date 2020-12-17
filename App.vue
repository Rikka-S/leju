<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.logo {
		width: 160rpx;
		height: 160rpx;
		margin: 100rpx auto 60rpx;
		border-radius: 50%;
		overflow: hidden;
		.logo-img {
			width: 160rpx;
			height: 160rpx;
		}
	}
	page{
		background-color: #f1ece7;
		padding-top: var(--status-bar-height);
	}
</style>
