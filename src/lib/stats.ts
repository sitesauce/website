export type Stats = {
	users: number
	leads: number
	sites: number
	deployments: number
}

export const getStats = async (): Promise => {
	return fetch('https://app.sitesauce.app/api/meta').then(res => res.json())
}
