import axios from 'axios'
import { baseUrl } from './baseUrls'
import { buildPath } from './utils'

type PostRequestProps = {
	endPoint: String
	body?: any
	headers?: any
	onSuccessCallback?: (response: any) => void
	onErrorCallback?: (error: Error) => void
}

const createPostRequest = async (props: PostRequestProps) => {
	const { endPoint, body, headers, onSuccessCallback, onErrorCallback } =
		props
	try {
		const response = await axios({
			method: 'POST',
			url: buildPath(baseUrl, endPoint),
			data: body,
			headers
		})
		onSuccessCallback(response)
	} catch (error) {
		onErrorCallback(error)
	}
}

export { createPostRequest }
