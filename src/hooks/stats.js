import axios from 'axios'
import useSWR from 'swr'

export const useStats = initialData => {
	return useSWR('open', () => axios.get('/api/open').then(res => res.data), { initialData })
}
