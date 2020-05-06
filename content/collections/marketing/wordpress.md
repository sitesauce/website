---
title: 'Generate a static site from your WordPress website in one click'
header_description: 'Sitesauce instantly converts your WordPress website into a static site, and keeps your content in sync.'
header_cta: 'Start your 7-day trial'
updated_by: 1f409eaa-ea1e-4e63-bf11-8d43677e5069
updated_at: 1588765323
meta_title: 'Generate a static site from your WordPress website in one click'
meta_description: 'Sitesauce automatically generates a static site for your WordPress site, and keeps your content in sync.'
header_title: 'Generate a static site from your WordPress website in one click'
features:
  -
    title: 'Minimal costs'
    description: 'Sitesauce hosts your static sites on <a href="https://vercel.app/home" target="_blank" class="hover:underline">Vercel</a> (formerly ZEIT), offering unlimited bandwidth and their world-class CDN for no additional cost.'
    icon: wallet
  -
    title: 'Blazing-fast load times'
    description: 'Executing expensive operations on build and serving your sites through Vercel''s world-class CDN results in semi-instantaneous page loads.'
    icon: bolt
  -
    title: 'Infinite scaling'
    description: 'With guaranteed zero-downtime and edge regions around the world, a thousand concurrent visits load as fast as a single one.'
    icon: processor
  -
    title: 'Unbreakable Security'
    description: 'Without access to your WordPress site, there''s no way for anyone to steal sensitive data or deface your website.'
    icon: shield
  -
    title: 'Always Updated'
    description: 'New changes made on your content will automatically trigger new builds and be reflected on the static site.'
    icon: cloud
  -
    title: 'Built for teams'
    description: 'Forget about password sharing! Your sites can be shared with your whole team for no additional cost.'
    icon: person
features_cta: 'See pricing'
features_title: 'What''s in for me?'
features_description: 'Enjoy all the benefits static sites provide while keeping the ease of editing WordPress gives you.'
steps_testimonial:
  -
    content: 'It took us less than a minute to launch a static version of our WordPress website. Everything just worked as you''d expect it to!'
    user: 'Peter Suhm'
    company: Branch
    avatar: peter.jpeg
    company_url: 'https://branchci.com/?ref=sitesauce'
    company_color: '#5352BB'
steps:
  -
    title: 'Create a site'
    description: 'You give us a link to your website. _It''s that simple._'
  -
    title: 'We deploy your site'
    description: 'We trigger the first deployment, which generates your static site and deploys it to Vercel.'
  -
    title: 'We keep your content updated'
    description: 'When your content changes we trigger a new deployment, which updates your static site.'
pricing_features:
  -
    name: 'Unlimited Sites'
  -
    name: 'Deploy your sites to Vercel (formerly ZEIT)'
  -
    name: 'Unlimited deployments'
  -
    name: 'Official WordPress plugin'
pricing_cta: 'Start your 7-day trial'
questions:
  -
    question: |
      Does Sitesauce replace regular hosting?
      Can I run Sitesauce from my development or staging environment?
      Do I need to expose my backend to the internet to use Sitesauce?
    answer: |
      While it's recommended to keep your WordPress instance running somewhere (like a subdomain), as it allows you to continue using your dashboard regularly, you can deploy locally-running sites to Sitesauce using [our CLI](https://sitesauce.app/guides/cli)!<br>
      This means you could have your blog on your computer, run it locally to edit some content then push it to production via Sitesauce without needing to pay for servers!
  -
    question: 'How does Sitesauce detect when my content changes?'
    answer: |
      Sitesauce provides an official WordPress plugin that automatically detects when your content changes and lets us know. Setting it up is as easy as searching for it on the WordPress plugin directory, clicking install and pasting a URL from your Sitesauce dashboard.<br>
      We also allow you to define periodical deployments, which tell us to automatically deploy your site every day, hour or minute.
  -
    question: |
      How is using Sitesauce better than building a static site from scratch?
      How is using Sitesauce better than using a Headless CMS?
    answer: |
      If you have an existing website, migrating your theme, plugins and content can be a hard task. You'd also lose the simplicity of having an admin panel and allowing multiple users to work on your content together.<br>
      Part of this problem could be solved by having your static site pull data from WordPress on build, but this brings up other problems, like having to manage two different codebases for a single website, migrating your themes over or needing to deploy to preview your content.<br>
      Sitesauce takes care of all this for you. After signing up and entering a URL, we'll generate a production-ready static version of your website and deploy it. You keep your dashboard and remove unnecesary complexity.
  -
    question: |
      Will my contact forms work on my static site?
      Will comment sections work work on my static site?
      Will parts of the site that fetch data from the backend work on my static site?
    answer: |
      Sitesauce recommends the use of JAMstack-friendly alternatives to these services. For example, you could move your contact forms to [StaticKit](https://statickit.com) or your comments to [Commento](https://commento.io).<br>
      However, there are times where the only option is to rely on your backend. For this, you can [configure Sitesauce to proxy certain endpoints](https://sitesauce.app/guides/proxying-and-redirects) over to WordPress. You can also use this if you need to fetch some data from your backend via AJAX.
  -
    question: |
      Is Sitesauce production-ready?
      Are any sites currently using Sitesauce on production?
    answer: 'Yes! More than {{ open:sites }} sites have been deployed using Sitesauce to date. The website you''re looking at right now was generated by Sitesauce from a Statamic site. Other examples include [the Branch website](https://branchci.com/?ref=sitesauce), which uses WordPress, and <a href="https://miguelpiedrafita.com" target="_blank" class="border-b border-gray-500 link-mp">Miguel Piedrafita''s personal website</a> alongside many others.'
  -
    question: 'Who built Sitesauce?'
    answer: '👋 Hi! I''m <a href="https://miguelpiedrafita.com" target="_blank" class="border-b border-gray-500 link-mp">Miguel Piedrafita</a>, an 18-year-old maker. You can learn more about me on <a href="https://miguelpiedrafita.com" target="_blank" class="border-b border-gray-500 link-mp">my website</a> or <a href="https://twitter.com/m1guelpf" target="_blank" class="border-b border-gray-500 link-mp">on Twitter</a>, where I regularly share Sitesauce updates.'
  -
    question: 'Did we miss your question?'
    answer: 'If you have a question that isn''t answered here, feel free to [reach out](mailto:info+faq@sitesauce.app?subject=Question%20about%20Sitesauce). We''ll do our best to get back to you as soon as possible with a helpful answer.'
meta_image: 'https://brand-assets.sitesauce.app/twitter-card.jpg'
id: 18b3ae59-2c55-4be8-be4c-3bf9a4b17bf0
---
