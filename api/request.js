import qs from './qs';
import baseUrl from './baseUrl.js';

var request = function(config){
  return new Promise((resolve,rejected)=>{
	  uni.showLoading({
	      title: '加载中'
	  });
    var setting = {
      url:baseUrl + config.url,
      method:config.method ? (config.method).toUpperCase() : 'GET',
      // method: (config.method).toUpperCase() || "GET",
      data:config.data,
      header:{
		  "token":uni.getStorageSync('token')||""
        // "content-type":"application/x-www-form-urlencoded"
      },
      timeout:5000,
      success(res){
		  if(res.data.success){
			resolve(res.data);
		  }
		  else{
			  if(res.data.code===20002){
				  uni.showModal({
				  	content:'登录失效请重新登录',
					showCancel:false,
					success() {
						uni.navigateTo({
							url:'../pages/user/login/login'
						})
					}
				  })
			  }
			  else{
			  uni.showToast({
			  	// title:res.data.message
			  })
			  }
		  }
      },
      fail(res){
        rejected(res);
      }
    };
    uni.request(setting);
	uni.hideLoading();
  });
  
};
export default request;
