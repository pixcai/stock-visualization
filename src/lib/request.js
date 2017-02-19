import axios from 'axios'

const isObject = (o) => Object.prototype.toString.call(o) === '[object Object]'

export default function request(data) {
	let axiosConfig = {
		method: 'GET', 
		url: data
	}
	let retryCount = 3

	if (isObject(data)) {
		axiosConfig = data
	}

	function tryRequest(onSuccess, onFailed) {
		axios(axiosConfig).then((result) => {
			if (result.status === 200) {
				return onSuccess(result.data)
			}
			if (--retryCount > 0) {
				return tryRequest(onSuccess, onFailed)
			}
			onFailed(result)
		}).catch(e => onFailed(e))
	}

	return new Promise((resolve, reject) => tryRequest(resolve, reject))
}

export const get = (url, data) => {
	if (isObject(data)) {
		let args = ['?']
		for (let key in data) {
			if (data.hasOwnProperty(key)) {
				if (data[key] === null) {
					args.push(`${key}`)
				} else {
					args.push(`${key}=${data[key]}`)
				}
			}
		}
		url += args.join('&')
	}
	return request({
		method: 'GET', 
		url: url
	})
}

export const post = (url, data) => request({
	method: 'POST', 
	url: url, 
	data: data
})
