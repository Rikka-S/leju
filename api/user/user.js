import http from '../request.js';

function updateMemberInfo(data) {
	return http({
		url: '/lejuClient/member/updateMemberInfo',
		data,
		method:'POST',
	});
}
export {
	updateMemberInfo
}