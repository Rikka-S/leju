var obj = {
	methods: {
		isloginFun(v) {
			if (this.checkHasLogined()) {
				v();
			}
	
		},
		checkHasLogined() {
			var token = uni.getStorageSync('token');
			if (token) {
				return true;
			} else {
				uni.showModal({
					title: "登录",
					content: "暂未登录，是否立即登录",
					success(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: "/pages/user/login/login"
							});
						} else {
							uni.showToast({
								title: "您取消了"
							});
						}
					}
				});

				return false;
			}
		}
	},
	onShow() {
		// 获取当前页面栈
		let pages = getCurrentPages();
		let route = pages[pages.length - 1].route;
		// 判断当前页面路径是否为 详情页 
		if (route == "pages/home/detail/detail") {
			return;
		} else {
			this.checkHasLogined();
		}
	}
};
export default obj;
