import http from '@/api/request.js';
function findAllOrders() {
	return http({
		url: `/lejuClient/order/findAllOrders`,
	});
}

function payConfirm(data) {
	return http({
		url: `/lejuClient/order/payConfirm`,
		method:"POST",
		data
	});
}
function orderReturnApplys(data) {
	return http({
		url: `/lejuClient/orderReturn/orderReturnApplys`,
	});
}
function receiveDone(data) {
	return http({
		url: `/lejuClient/order/receiveDone`,
		method:"POST",
		data
	});
}
function addOrderReturnApply(data) {
	return http({
		url: `/lejuClient/orderReturn/addOrderReturnApply`,
		method:"POST",
		data
	});
}

	
export {
	findAllOrders,payConfirm,
	orderReturnApplys,
	receiveDone
}