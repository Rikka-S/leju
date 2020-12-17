import http from '@/api/request.js';

function productDetail(id) {
	return http({
		url: `/lejuClient/product/productDetail/${id}`,
	});
}
function addCart(data) {
	return http({
		url: `/lejuClient/cart/addCart`,
		method:"POST",
		data
	});
}
export {
	productDetail,
	addCart
}