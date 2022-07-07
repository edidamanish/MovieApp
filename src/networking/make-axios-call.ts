import axios from 'axios'
import { baseUrl } from './baseUrls'
import { buildPath } from './utils'

type PostRequestProps = {
	endPoint: String
	body?: any
	headers?: any
}

const createPostRequest = async (props: PostRequestProps): Promise<any> => {
	const { endPoint, body, headers } = props
	return new Promise((resolve, reject) => {
		axios({
			method: 'POST',
			url: buildPath(baseUrl, endPoint),
			data: body,
			headers
		})
			.then(response => {
				resolve(response?.data as any)
			})
			.catch(error => {
				reject(error?.response?.data)
			})
	})
}

export { createPostRequest }
