---
publishedAt: 'April 27th, 2020'
title: 'Configuring an Integration'
layout: '@/components/ArticleLayout.astro'
description: 'Learn how to keep your static site in sync with your content without manual deployments.'
---

So you've created your first deployment on Sitesauce. However, you don't want to keep coming back to the dashboard to regenerate your static site every time you update your content. The solution for this is configuring an integration.

Integrations are the bridge between your CMS or backend and Sitesauce, and let Sitesauce know when your content changes so we can automatically update it. We offer first-party integrations for [WordPress](https://wordpress.org/plugins/sitesauce/), Ghost, [Statamic](https://statamic.com/marketplace/addons/sitesauce), [CraftCMS](https://plugins.craftcms.com/sitesauce), [Joomla!](https://github.com/sitesauce/joomla) and [ExpressionEngine](https://github.com/sitesauce/expressionengine). If you're trying to integrate with one of the linked providers, you can simply click the link and you'll be taken to a page with instructions on installing and configuring the integration. If you're trying to integrate with Ghost or we don't offer third-party support for your backend, read on.

### Integrating with Ghost

Ghost support integrations since `v2.0`, but doesn't allow third-parties to provide templates for them. Instead of having you manually create an integration on your Ghost admin panel, we provide an option to connect to your site via the Ghost Admin API and do it for you. To do this, open your site on Sitesauce and replace the `/deployments` part of your URL with `/install/ghost` and follow the instructions.

### Integrating with a different platform

We offer two options for platforms we do not have first-party integrations for.

Firstly, you can create one yourself, by creating a plugin or addon for your system that pings a URL when content changes. You can grab this special URL from your site's settings page on Sitesauce, under the Build Hook title. Once you get it working, make it available for everyone! We'd gladly create a repository on our GitHub organization for you to manage containing the addon code and give you credits for it, just [let us know about it](mailto:hello@sitesauce.app?subject=New%20Integration)!

If this sounds way too complicated and you just want a simple solution for keeping your site updated, we can also offer to rebuild your site once a day. This will not make your changes instantly available like the other solutions, but it'll at least ensure it eventually gets in sync. You can enable this option from your dashboard.
