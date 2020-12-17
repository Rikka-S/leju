import http from '../request.js';

function bannerAds() {
	return http({
		url: '/lejuClient/home/bannerAds',
	});
}
function findCategory(id){
	return http({
		url:`/lejuClient/productCategory/findCategory/${id}`
	});
}
function recommendList(){
	return http({
		url:`/lejuClient/home/recommendList`
	});
}
function hotList(id){
	return http({
		url:'/lejuClient/home/hotList'
	});
}
function newGoogs(id){
	return http({
		url:'/lejuClient/home/lejuLatestProducts'
	});
}
function like(id){
	return http({
		url:'/lejuClient/home/saleMostProducts'
	});
}

export {
	bannerAds,
	findCategory,
	hotList,
	newGoogs,
	like,
	recommendList
};
