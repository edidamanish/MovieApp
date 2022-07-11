export interface LoginResponseModel {
	username?: string
	authToken?: string
}

export type RegisterRequestProps = {
	userName: string
	email: string
	password: string
}

export type LoginRequestProps = {
	userName: string
	password: string
}
