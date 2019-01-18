import request from './axios.js'
//console.log(localStorage.token)
export function Http(axiosData) {
	//参数加入必要的携带参数
	axiosData.data.head = {
		"channel": 1,
		"token": "MQ=="
	};
	var data = {
		url: '',
		method: 'post',
	}
	// 合成请求对象
	Object.assign(data, axiosData)
	return request(data)
}