import http from '@/api/request.js';
function findArticleByPage() {
	return http({
		url: `/lejuClient/cart/findAllCartItem`,
	});
}
function delCartItems(data) {
	return http({
		url: `/lejuClient/cart/delCartItems`,
		data,
		method:"POST"
	});
}
function addPreOrder(data) {
	return http({
		url: `/lejuClient/order/addPreOrder`,
		data,
		method:"POST"
	});
}
function getPreOrderById(id) {
	return http({
		url: `/lejuClient/order/getPreOrderById/${id}`,
	});
}
function addConfirmOrder(data) {
	return http({
		url: `/lejuClient/order/addConfirmOrder`,
		method:"POST",
		data
		
	});
}
export {
	findArticleByPage,
	delCartItems,
	addPreOrder,
	getPreOrderById,
	addConfirmOrder
}