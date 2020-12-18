import Features, { FeatureItem } from 'components/Landing/Features'
import Header from 'components/Landing/Header'
import Layout from 'components/Layout'
import icons from 'components/Icons'
import HowItWorks, { Step, Testimonial, TestimonialAuthor } from 'components/Landing/HowItWorks'
import Demo from 'components/Landing/Demo'
import Open from 'components/Landing/Open'
import Pricing, { PricingFeature } from 'components/Landing/Pricing'
import FAQ, { FAQEntry, Answer, Question } from 'components/Landing/FAQ'
import { useStats } from 'hooks/stats'
import Link from 'next/link'

export default function Home() {
	const { data: stats } = useStats()

	return (
		<Layout>
			<div className="overflow-hidden">
				<Header title="Supercharge your website in one click" description="We transform your website into a static site for maximum speed and scalability, then keep your content synced." cta="Get started for free" />
				<Features title="What's in it for me?" description="Enjoy all the benefits static sites provide while keeping everything good about the backend." cta="See pricing">
					<FeatureItem title="Minimal costs" description="Sitesauce hosts your static sites on Vercel (formerly ZEIT), offering unlimited bandwidth and their world-class CDN for no additional cost." icon={icons.Wallet} />
					<FeatureItem title="Blazing-fast load times" description="Executing expensive operations on build and serving your sites through Vercel's world-class CDN results in semi-instantaneous page loads." icon={icons.Bolt} />
					<FeatureItem title="Infinite scaling" description="With guaranteed zero-downtime and edge regions around the world, a thousand concurrent visits load as fast as a single one." icon={icons.Processor} />
					<FeatureItem title="Unbreakable Security" description="Without access to your backend, there's no way for anyone to steal sensitive data or deface your website." icon={icons.Shield} />
					<FeatureItem title="Always Updated" description="New changes made on your content will automatically trigger new builds and be reflected on the static site." icon={icons.Cloud} />
					<FeatureItem title="Built for teams" description="Forget about password sharing! Your sites can be shared with your whole team for no additional cost." icon={icons.Person} />
				</Features>
				<HowItWorks>
					<Testimonial content="It took us less than a minute to launch a static version of our WordPress website. Everything just worked as you'd expect it to!">
						<TestimonialAuthor avatar="/img/avatars/peter.jpeg" name="Peter Suhm" company="Branch" url="https://branchci.com" color="#5352bb" />
					</Testimonial>
					<Step title="Create a site" description="You give us a link to your website. It's that simple." />
					<Step title="We deploy your site" description="We trigger the first deployment, which generates your static site and deploys it to Vercel." />
					<Step title="We keep your content updated" description="When your content changes we trigger a new deployment, which updates your static site." />
				</HowItWorks>
				{/* <Brands /> */}
				<Open />
				<Pricing>
					<PricingFeature>Unlimited Sites</PricingFeature>
					<PricingFeature>Deploy your sites to Vercel</PricingFeature>
					<PricingFeature>Unlimited deployments</PricingFeature>
					<PricingFeature>Official integrations for popular CMSs</PricingFeature>
				</Pricing>
				<FAQ>
					<FAQEntry>
						<Question>
							<p>Does Sitesauce replace regular hosting?</p>
							<p>Can I run Sitesauce from my development or staging environment?</p>
							<p>Do I need to expose my backend to the internet to use Sitesauce?</p>
						</Question>
						<Answer>
							<p>
								While it's recommended to keep an instance of your backend running somewhere (like a subdomain), as it allows you to continue using your dashboard regularly, you can deploy locally-running sites to Sitesauce using <a href="https://sitesauce.app/guides/cli">our CLI</a>!
							</p>
							<p>This means you could have a WordPress blog on your computer, run it locally to edit some content then push it to production via Sitesauce without needing to host the backend anywhere.</p>
						</Answer>
					</FAQEntry>
					<FAQEntry>
						<Question>
							<p>How does Sitesauce detect when my content changes?</p>
						</Question>
						<Answer>
							<p>Sitesauce provides official plugins for many content managing platforms (like WordPress, Ghost or Joomla!) that automatically detect when your content changes. We also provide extensive documentation on how to integrate Sitesauce with any other platform, either via our API or using webhooks.</p>
							<p>If your platform can't be integrated with Sitesauce through any of these options, Sitesauce also provides an option to trigger new deployments periodically.</p>
						</Answer>
					</FAQEntry>
					<FAQEntry>
						<Question>
							<p>How is using Sitesauce better than building a static site from scratch?</p>
							<p>How is using Sitesauce better than using a Headless CMS?</p>
						</Question>
						<Answer>
							<p>If you have an existing website, migrating your theme, plugins and content can be a hard task. You'd also lose the simplicity of having an admin panel and allowing multiple users to work on your content together.</p>
							<p>Part of this problem could be solved by having your static site pull data from your backend on build, but this brings up other problems, like having to manage two different codebases for a single website, migrating your themes over or needing to deploy to preview your content.</p>
							<p>Sitesauce takes care of all this for you. After signing up and entering a URL, we'll generate a production-ready static version of your website and deploy it. You keep your dashboard and remove unnecessary complexity.</p>
						</Answer>
					</FAQEntry>
					<FAQEntry>
						<Question>
							<p>Will my contact forms work on my static site?</p>
							<p>Will comment sections work work on my static site?</p>
							<p>Will parts of the site that fetch data from the backend work on my static site?</p>
						</Question>
						<Answer>
							<p>
								Sitesauce recommends the use of JAMstack-friendly alternatives to this services. For example, you could move your contact forms to <a href="https://statickit.com/">StaticKit</a> or your comments to <a href="https://commento.io/">Commento</a>.
							</p>
							<p>
								However, there are times where the only option is to rely on your backend. For this, you can{' '}
								<Link href="/guides/proxying-and-redirects">
									<a>configure Sitesauce to proxy certain endpoints</a>
								</Link>{' '}
								to your backend. You can also use this if you need to fetch some data from your backend via AJAX.
							</p>
						</Answer>
					</FAQEntry>
					<FAQEntry>
						<Question>
							<p>Is Sitesauce production-ready?</p>
							<p>Are any sites currently using Sitesauce on production?</p>
						</Question>
						<Answer>
							<p>
								Yes! More than {stats?.sitesauce?.sites} sites have been deployed using Sitesauce to date. Some examples include the <a href="https://branchci.com">Branch</a> website (using WordPress as backend) and{' '}
								<a href="https://miguelpiedrafita.com" className="mp-link">
									Miguel Piedrafita's personal website
								</a>{' '}
								(using Ghost as backend) alongside many others.
							</p>
						</Answer>
					</FAQEntry>
					<FAQEntry>
						<Question>
							<p>Who built Sitesauce?</p>
						</Question>
						<Answer>
							<p>
								<span role="img" aria-label=":wave:">
									👋
								</span>{' '}
								Hi! I'm{' '}
								<a href="https://twitter.com/m1guelpf" className="mp-link">
									Miguel Piedrafita
								</a>
								, an 18-year-old maker. You can learn more about me on{' '}
								<a href="https://miguelpiedrafita.com?ref=sitesauce" className="mp-link">
									my website
								</a>{' '}
								or{' '}
								<a href="https://twitter.com/m1guelpf" className="mp-link">
									on Twitter
								</a>
								, where I regularly share Sitesauce updates.
							</p>
						</Answer>
					</FAQEntry>
					<FAQEntry>
						<Question>
							<p>Did we miss your question?</p>
						</Question>
						<Answer>
							<p>
								If you have a question that isn't answered here, feel free to <a href="mailto:hello@sitesauce.app">reach out</a>. We'll do our best to get back to you as soon as possible with a helpful answer.
							</p>
						</Answer>
					</FAQEntry>
				</FAQ>
			</div>
		</Layout>
	)
}
