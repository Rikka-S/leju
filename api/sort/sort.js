import http from '../request.js';
function findCategory(id) {
	return http({
		url: `/lejuClient/productCategory/findCategory/${id}`,
	});
}
function findProductList(start,limit,data) {
	return http({
		url: `/lejuClient/product/findProductList/${start}/${limit}`,
		method:"POST",
		data
	});
}
export {
	findCategory,
	findProductList
};