import config from './config.js';
export function request(url, data, method="GET"){
	return new Promise((resolve, reject)=>{
		uni.request({
			url: config.host + config.basePath + url,
			data,
			method,
			success: (res)=>{
				console.log('success-----', res);
				resolve(res.data);
			},
			fail: (res)=>{
				console.log('fail-----', res);
				reject();
			}
		})
	});
}