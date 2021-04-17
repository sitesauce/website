import axios from 'axios'
import { formatISO9075 } from 'date-fns'

export default async (req, res) => {
	res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800, stale-while-revalidate')
	res.json(await getStats())
}

export async function getStats() {
	const [sitesauce, fathom, revenue, vapor] = await Promise.all([
		axios.get('https://app.sitesauce.app/api/meta').then(res => res.data),
		axios.get(`https://app.usefathom.com/sites/1025/charts?from=${formatISO9075(new Date(new Date() - 30 * 24 * 60 * 60 * 1000))}&to=${formatISO9075(new Date())}&tz=Europe/Madrid`).then(res => res.data),
		axios.get(`https://api.baremetrics.com/v1/metrics?start_date=${new Date(new Date() - 7 * 24 * 60 * 60 * 1000).toDateString()}&end_date=${new Date().toDateString()}`, { headers: { Authorization: `Bearer ${process.env.BAREMETRICS_TOKEN}` } }).then(res => res.data.metrics.reverse().map(({ mrr, active_subscriptions, active_trials }) => ({ mrr: mrr / 100, customers: active_subscriptions, trials: active_trials }))[0]),
		axios.get('https://vapor.laravel.com/api/projects/17397/environments/production/metrics?period=1M', { headers: { Authorization: `Bearer ${process.env.VAPOR_TOKEN}` } }).then(res => res.data.estimatedCost)
	])

	return { updated_at: new Date().toISOString(), sitesauce, revenue, vapor, fathom }
}
