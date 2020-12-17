import http from '../../request.js';

function login(data) {
	return http({
		url: '/lejuClient/login/doLogin',
		data,
		method:'POST',
	});
}
function getMemberInfo(data) {
	return http({
		url: '/lejuClient/login/getMemberInfo',
		data,
	});
}
function register(data) {
	return http({
		url: '/lejuClient/member/register',
		data,
		method:"POST"
	});
}

export {
	login,
	getMemberInfo,
	register
};