import http from '@/api/request.js';
import baseUrl from "@/api/baseUrl.js"

function uploadImg(file) {
	return new Promise((r, j) => {
		var obj = {
			url: baseUrl + '/lejuClient/orderReturn/uploadImg',
			filePath: file,
			success(res) {
				res.data = JSON.parse(res.data)
				r(res.data.data.fileUrl)
			},
			fail(res) {
				j(res.data)
			}
		}
		uni.uploadFile(obj)
	})
}
function addOrderReturnApply(data) {
	return http({
		url: `/lejuClient/orderReturn/addOrderReturnApply`,
		method:"POST",
		data
	});
}
export {
	uploadImg,addOrderReturnApply
}
