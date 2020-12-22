import { useEffect } from 'react'
import Page from 'components/Page'
import { useStats } from 'hooks/stats'
import { format as timeago } from 'timeago.js'
import Chart from 'chart.js'
import { getDate } from 'date-fns'
import { getStats } from './api/open'

const Open = ({ stats: initialStats }) => {
	const { data: stats } = useStats(initialStats)

	const cost = 1.5 + 39 + stats?.vapor

	const formatCurrency = amount => new Intl.NumberFormat(typeof navigator != 'undefined' ? navigator.language || 'en-EN' : 'en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount)

	useEffect(() => {
		if (!stats?.fathom) return

		Chart.defaults.global.defaultFontFamily = "'Jetbrains Mono', Brown, sans-serif"
		var chartOptions = {
			type: 'line',
			options: {
				animation: { duration: 0 },
				legend: { display: false },
				elements: { line: { tension: 0 } },
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
								userCallback: function (label) {
									if (Math.floor(label) === label) return label
								},
							},
							gridLines: { color: '#d5f5f6' },
						},
					],
					xAxes: [{ type: 'category', ticks: { maxRotation: 0 }, gridLines: { color: '#d5f5f6' } }],
				},
				tooltips: {
					enabled: true,
					mode: 'index',
					backgroundColor: '#014451',
					intersect: false,
					cornerRadius: 3,
					footerFontStyle: 'normal',
					titleSpacing: 0,
					bodySpacing: 0,
					footerSpacing: 0,
					titleMarginBottom: 5,
					footerMarginTop: 0,
					yPadding: 5,
					caretPadding: 10,
					caretSize: 0,
					callbacks: {
						footer: tooltipItems => tooltipItems[0].yLabel + ' page views',
						label: () => null,
					},
				},
				responsive: true,
				title: { display: false },
				hover: { mode: 'index', intersect: false },
				annotation: { events: ['click', 'mouseenter', 'mouseleave'], drawTime: 'afterDatasetsDraw', annotations: [] },
			},
			data: { labels: stats.fathom.map(point => `${getDate(new Date(point.date))}th`), datasets: [{ id: 'main', backgroundColor: 'rgba(22, 189, 202, 0.3)', borderColor: '#16bdca', data: stats.fathom.map(point => parseInt(point.visits)), pointHoverBorderWidth: 0, pointHoverBorderColor: '#16bdca', pointHoverBackgroundColor: '#16bdca', steppedLine: false }] },
		}

		var ctx = document.getElementById('chart').getContext('2d')
		new Chart(ctx, chartOptions)
	}, [stats])

	return (
		<Page title="Open" description="Sitesauce is an open startup! Explore our revenue, costs, and metrics on our open page." image="https://brand-assets.sitesauce.app/open-card.jpg" showDate={false}>
			<p>Sitesauce is an Open Startup™, which means it operates fully transparent and shares its metrics, including revenue, costs, users, and traffic.</p>
			<p className="text-brand-700">
				Last updated <time dateTime={stats?.updated_at}>{timeago(stats?.updated_at)}</time>
			</p>
			<div>
				<h3>Monthly recurring revenue (MRR)</h3>
				<p>
					~<strong>{formatCurrency(stats?.revenue?.mrr)}</strong>&nbsp;with {stats?.revenue?.customers} paying customers &amp; {stats?.revenue?.trials} trial users (ARR&nbsp;{formatCurrency(stats?.revenue?.mrr * 12)})
				</p>
				<details>
					<summary>What is MRR?</summary>
					<p>
						MRR is calculated by summing the monthly-normalized amounts of&nbsp;<strong>all active subscriptions</strong>&nbsp;at that time. For example, an annual subscription for {formatCurrency(1200)} only counts {formatCurrency(100)} towards your MRR. All our revenue metrics are calculated by{' '}
						<a target="_blank" rel="noreferrer" href="https://i.m1guelpf.me/baremetrics">
							Baremetrics
						</a>
						.
					</p>
				</details>
			</div>
			<div>
				<h3>Monthly recurring costs (MRC)</h3>
				<p>
					<strong>~{formatCurrency(cost)}</strong>&nbsp;(ARC&nbsp;{formatCurrency(cost * 12)})
				</p>
				<details>
					<summary>Domain name ~{formatCurrency(1.5)}</summary>
					<p>
						Sitesauce owns the sitesauce.app domain, which is registered with&nbsp;
						<a target="_blank" rel="noreferrer" href="https://porkbun.com/">
							Porkbun
						</a>
						.
					</p>
				</details>
				<details>
					<summary>Laravel Vapor {formatCurrency(39)}</summary>
					<p>
						Sitesauce uses{' '}
						<a target="_blank" rel="noreferrer" href="https://vapor.laravel.com">
							Laravel Vapor
						</a>{' '}
						to run its code on AWS Lambda.
					</p>
				</details>
				<details>
					<summary>AWS ~{formatCurrency(stats?.vapor)}</summary>
					<p>
						All our infrastructure, from servers to email, runs on Amazon Web Services. The above cost is an estimate calculated by{' '}
						<a target="_blank" rel="noreferrer" href="https://vapor.laravel.com">
							Laravel Vapor
						</a>{' '}
						for the last 30 days.
					</p>
				</details>
			</div>
			<div>
				<p />
				<h3>Profit</h3>
				<p>
					<strong>~{formatCurrency(stats?.revenue.mrr - cost)}</strong> per month ({formatCurrency((stats?.revenue.mrr - cost) * 12)} per&nbsp;year)
				</p>
				<details>
					<summary>How is profit calculated?</summary>
					<p>The estimate shown here is calculated by subtracting the costs from the revenue.</p>
				</details>
			</div>
			<div>
				<h3>Platform Metrics</h3>
				<p>
					Sitesauce has created {stats?.sitesauce?.deployments} deployments for {stats?.sitesauce?.sites} different sites created. {stats?.sitesauce?.leads} users signed up to the waiting list while Sitesauce was on beta, but haven't created an account yet.
				</p>
			</div>
			<div>
				<h3>Pageviews in the last month</h3>
				<p>
					In the last month, we've had {stats?.fathom?.map(dataPoint => parseInt(dataPoint.pageviews)).reduce((a, b) => a + b, 0)} pageviews. You can see additional information on&nbsp;
					<a target="_blank" rel="noreferrer" href="https://sitesauce.app/analytics">
						our public analytics dashboard
					</a>
					, powered by&nbsp;
					<a target="_blank" rel="noreferrer" href="https://i.m1guelpf.me/fathom">
						Fathom&nbsp;Analytics
					</a>
					.
				</p>
			</div>
			<div className="rounded-lg overflow-hidden">
				<canvas id="chart" className="daily-view" />
			</div>
		</Page>
	)
}

export async function getStaticProps() {
	return {
		props: {
			stats: await getStats(),
		},
		revalidate: 30,
	}
}

export default Open
