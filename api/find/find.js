import http from '../request.js';
function findArticleByPage(start,limit) {
	return http({
		url: `/lejuClient/productArticle/findArticleByPage/${start}/${limit}`,
	});
}
function findBrandsByPage(start,limit) {
	return http({
		url: `/lejuClient/brand/findBrandsByPage/${start}/${limit}`,
	});
}
export {
	findArticleByPage,
	findBrandsByPage
};