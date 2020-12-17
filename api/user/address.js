import http from '../request.js';

function findAllAddress() {
	return http({
		url: '/lejuClient/address/findAllAddress',
	});
}
function updateAddressInfo(data) {
	return http({
		url: '/lejuClient/address/updateAddressInfo',
		method:"POST",
		data
	});
}
function switchDefault(id,defaultStatus) {
	return http({
		url: `/lejuClient/address/switchDefault/${id}/${defaultStatus}`,
		method:"POST",
	});
}
function delAddressInfo(id) {
	return http({
		url: `/lejuClient/address/delAddressInfo/${id}`,
		method:"DELETE",
	});
}
function addAddressInfo(data) {
	return http({
		url: `/lejuClient/address/addAddressInfo`,
		method:"POST",
		data
	});
}
export {
	findAllAddress,updateAddressInfo,switchDefault,delAddressInfo,addAddressInfo
}