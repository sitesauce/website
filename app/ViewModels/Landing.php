<?php

namespace App\ViewModels;

use Statamic\View\ViewModel;

class Landing extends ViewModel
{
    public function data(): array
    {
        return array_merge($this->getHeader(), $this->getFeatures(), $this->getSteps(), $this->getPricing(), $this->getFaq());
    }
    
    protected function getHeader(): array
    {
        return [
            'header_title' => 'A static version of your website in one click',
            'header_description' => 'Sitesauce converts dynamic websites (like <span data-backend-anim><a class="rounded border-b-2 border-black hover:border-brand-400 hover:text-brand-400" href="https://sitesauce.app/for/wordpress" target="_blank">WordPress</a></span>-powered websites) into static sites, and keeps content in sync.',
            'header_cta' => 'Start your 7-day trial',
        ];
    }
    
    protected function getFeatures(): array
    {
        return [
            'features_title' => 'What\'s in it for me?',
            'features_description' => 'Enjoy all the benefits static sites provide while keeping everything good about the backend.',
            'features_cta' => 'See pricing',
            'features' => [[
                'icon' => 'wallet',
                'title' => 'Minimal costs',
                'description' => 'Sitesauce hosts your static sites on <a href="https://vercel.app/home" target="_blank" class="hover:underline">Vercel</a> (formerly ZEIT), offering unlimited bandwidth and their world-class CDN for no additional cost.',
            ], [
                'icon' => 'bolt',
                'title' => 'Blazing-fast load times',
                'description' => 'Executing expensive operations on build and serving your sites through Vercel\'s world-class CDN results in semi-instantaneous page loads.',
            ], [
                'icon' => 'processor',
                'title' => 'Infinite scaling',
                'description' => 'With guaranteed zero-downtime and edge regions around the world, a thousand concurrent visits load as fast as a single one.',
            ], [
                'icon' => 'shield',
                'title' => 'Unbreakable Security',
                'description' => 'Without access to your backend, there\'s no way for anyone to steal sensitive data or deface your website.',
            ], [
                'icon' => 'cloud',
                'title' => 'Always Updated',
                'description' => 'New changes made on your content will automatically trigger new builds and be reflected on the static site.',
            ], [
                'icon' => 'person',
                'title' => 'Built for teams',
                'description' => 'Forget about password sharing! Your sites can be shared with your whole team for no additional cost.',
            ]]
        ];
    }
    
    protected function getSteps(): array
    {
        return [
            'steps_testimonial' => [0 => [
                'content' => 'It took us less than a minute to launch a static version of our WordPress website. Everything just worked as you\'d expect it to!',
                'user' => 'Peter Suhm',
                'company' => 'Branch',
                'company_url' => 'https://branchci.com/?ref=sitesauce',
                'company_color' => '#5352bb',
                'avatar' => '/assets/peter.jpeg'
            ]],
            'steps' => [[
                'title' => 'Create a site',
                'description' => 'You give us a link to your website. _It\'s that simple_.'
            ], [
                'title' => 'We deploy your site',
                'description' => 'We trigger the first deployment, which generates your static site and deploys it to Vercel.'
            ], [
                'title' => 'We keep your content updated',
                'description' => 'When your content changes we trigger a new deployment, which updates your static site.'
            ]]
        ];
    }
    
    protected function getPricing(): array
    {
        return [
            'pricing_cta' => 'Start your 7-day trial',
            'pricing_features' => [
                ['name' => 'Unlimited Sites'],
                ['name' => 'Deploy your sites to Vercel (formerly ZEIT)'],
                ['name' => 'Unlimited deployments'],
                ['name' => 'Official integrations for popular CMSs'],
            ]
        ];
    }
    
    protected function getFaq(): array
    {
        return ['questions' => [[
            'question' => <<<EOL
			Does Sitesauce replace regular hosting?
			Can I run Sitesauce from my development or staging environment?
			Do I need to expose my backend to the internet to use Sitesauce?
			EOL,
            'answer' => <<<EOL
			While it's recommended to keep an instance of your backend running somewhere (like a subdomain), as it allows you to continue using your dashboard regularly, you can deploy locally-running sites to Sitesauce using [our CLI](https://sitesauce.app/guides/cli)!<br><br>\n
			This means you could have a WordPress blog on your computer, run it locally to edit some content then push it to production via Sitesauce without needing to host the backend anywhere.
			EOL,
        ], [
            'question' => 'How does Sitesauce detect when my content changes?',
            'answer' => <<<EOL
			Sitesauce provides official plugins for many content managing platforms (like WordPress, Ghost or Joomla!) that automatically detect when your content changes. We also provide extensive documentation on how to integrate Sitesauce with any other platform, either via our API or using webhooks.<br><br>\n
			If your platform can't be integrated with Sitesauce through any of these options, Sitesauce also provides an option to trigger new deployments periodically.
			EOL,
        ], [
            'question' => <<<EOL
			How is using Sitesauce better than building a static site from scratch?
			How is using Sitesauce better than using a Headless CMS?
			EOL,
            'answer' => <<<EOL
			If you have an existing website, migrating your theme, plugins and content can be a hard task. You'd also lose the simplicity of having an admin panel and allowing multiple users to work on your content together.<br><br>\n
			Part of this problem could be solved by having your static site pull data from your backend on build, but this brings up other problems, like having to manage two different codebases for a single website, migrating your themes over or needing to deploy to preview your content.<br><br>\n
			Sitesauce takes care of all this for you. After signing up and entering a URL, we'll generate a production-ready static version of your website and deploy it. You keep your dashboard and remove unnecesary complexity.
			EOL,
        ], [
            'question' => <<<EOL
			Will my contact forms work on my static site?
			Will comment sections work work on my static site?
			Will parts of the site that fetch data from the backend work on my static site?
			EOL,
            'answer' => <<<EOL
			Sitesauce recommends the use of JAMstack-friendly alternatives to this services. For example, you could move your contact forms to [StaticKit](https://statickit.com) or your comments to [Commento](https://commento.io).<br><br>\n
			However, there are times where the only option is to rely on your backend. For this, you can configure Sitesauce to proxy certain endpoints to your backend. You can also use this if you need to fetch some data from your backend via AJAX.
			EOL,
        ], [
            'question' => <<<EOL
			Is Sitesauce production-ready?
			Are any sites currently using Sitesauce on production?
			EOL,
            'answer' => 'Yes! More than {{ open:sites }} sites have been deployed using Sitesauce to date. The website you\'re looking at right now was generated by Sitesauce from a Statamic site. Other examples include [the Branch website](https://branchci.com/?ref=sitesauce) (using WordPress as backend) and <a href="https://miguelpiedrafita.com" target="_blank" class="border-b border-gray-500 link-mp">Miguel Piedrafita\'s personal website</a> (using Ghost as backend) alongside many others.',
        ], [
            'question' => 'Who built Sitesauce?',
            'answer' => '👋 Hi! I\'m <a href="https://miguelpiedrafita.com" target="_blank" class="border-b border-gray-500 link-mp">Miguel Piedrafita</a>, an 18-year-old maker. You can learn more about me on <a href="https://miguelpiedrafita.com" target="_blank" class="border-b border-gray-500 link-mp">my website</a> or <a href="https://twitter.com/m1guelpf" target="_blank" class="border-b border-gray-500 link-mp">on Twitter</a>, where I regularly share Sitesauce updates.',
        ], [
            'question' => 'Did we miss your question?',
            'answer' => 'If you have a question that isn\'t answered here, feel free to [reach out](mailto:info+faq@sitesauce.app?subject=Question%20about%20Sitesauce). We\'ll do our best to get back to you as soon as possible with a helpful answer.'
        ]]];
    }
}
