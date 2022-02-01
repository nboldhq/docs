---
permalink: /blog/wordpress-website-unbreakable-cost-efficient-faster
title: How we made our WordPress website unbreakable, cost efficient and 400% faster
description: Discover how we improved our WordPress website security, efficiency and speed by building a Static Site Generator for GitHub Pages
image: https://developers.salestim.com/img/blog/wordpress.png
author:
  name: Guillaume Meyer
  profile: https://twitter.com/guillaumemeyer
date: 2020-06-20
tags:
  - wordpress
  - static-website
  - github
  - azure
  - jamstack
---

# How we made our WordPress website unbreakable, cost efficient and 400% faster
<BlogHeadline />
As more that 30% of the world 🌐 websites, SalesTim is using the WordPress CMS. But as a SAAS startup building Enterprise-Grade apps, we're VERY concerned about three key issues:
1. **Secure by default**: Customer trust is key
2. **User Experience**: We want to be the best-in-class
3. **Performance**: Because it instrincally brings quality to systems

Therefore, to be consistent with our values, we cannot stay anymore with a Wordpress hosting as-is, and we had to make a choice, that would bring the right balance between two goals:
- Keep the power of WordPress as a web CMS
- Bring all the key features of a static website

---

**TABLE OF CONTENTS**
[[toc]]

---

## Advantages and Drawbacks

### Where WordPress shines
We love WordPress as a CMS because it has some unique and major advantages, especially:
- Easy to setup
- Easy to publish
- An incredibly large community
- A wide catalog of templates and plugins
- Great SEO tools

### Where WordPress falls short
But of course it has also its own drawbacks...

### 🚄 WordPress Speed
WordPress, as a "dynamic" site, uses a database in the backend to store its content. Therefore WordPress must fetch this content from the database and insert it into the webpage for each browser requests from the server, using PHP.  
***Sounds exhausting!***

**Impact**: You often have to tweak some assets (css, js...) and implement third-party plugins (cache, CDN...) to reach the speed you expect.
Moreover, your ***pages speed have a strong impact on SEO**- and your site ranking (Read more here ["Speed is now a landing page factor for Google Search and Ads"...](https://developers.google.com/web/updates/2018/07/search-ads-speed))

### 🔐 WordPress Security
With its large marketshare, WordPress is the target of many attacks.

**Impact**: You have to be ***extremely careful**- about the plus-ins you're using, and ensure that all available patchs (core and plugins) are applied in your own environments as soon as they're released.

### 💵 WordPress Costs
Implement and manage a production-ready WordPress website could be tedious, and requires a not-so-light infrastructure to reach your desired resiliency:
- Multiple instances
- Clustered Database
- Reverse proxy
- Load-balancers
- Backup / Restore / Disaster Recovery plans

**Impact**: Even with a cheap hoster, you could have expensive **maintenance costs**.

## The benefits of a static website
**Static websites are super fast under heavy load, secure by design and almost free to host!**

***A static site??? Are you sure???***

### 🚄 Static Website Speed
As you're only serving raw html content, without any server latency, it's **insanely fast**, and can be easily improved with a CDN.

### 🔐 Static Website Security
No server, no passwords, nada!  
Just plain html content. It's **secure by design*- and almost unbreakable.

### 💵 Static Website Costs
Ultra-low CPU / RAM / Storage, and **no infrastructure needed**!  
Just keep a small offline wordpress instance as a content staging platform.

## OK I'm convinced, now how to do it?

### ⚒ Build or 💸 buy?
Our first approach had been to look at several WordPress plugins to achieve this, especially:
- [SimplyStatic](https://www.simplystatic.co/)
- [WP2Static](https://wp2static.com/)

But none of them matched our expectations.

### Overview of our solution
So we decided to build our own WordPress static generator!

The process was pretty straightforward and took only a few days 📅:

| Step | Description |
|:----:|-------------|
| **1*- | Create a private GitHub repository with a public GitHub Pages hosting |
| **2*- | Configure GitHub Pages to point to an "uat" url for testing purposes |
| **3*- | Configure GitHub Pages to enforce https |
| **4*- | Create an Azure Pipeline to automate the static website generation |
| **5*- | Validate the static site behavior and fix the latest issues (CDN, AMP...) |
| **6*- | Replace our public WordPress url to a "staging" url |
| **7*- | Update GitHub Pages to point to our "www" public url |
{:.table-dark .table-sm .table-striped}

## Results
At SalesTim, we have a real passion for speed...  
Please have a look à our three websites and give us your feedbacks:
- [SalesTim / Website](https://www.salestim.com)
- [SalesTim / Help Center](https://help.salestim.com)

Our speed index decreased 📉 **from 7.5s to 1.8s**. Not too bad isn't it 😉?

## To go further
Of course reaching and maintaining a high-performance website is a long and continuous process.  
Here are a few other areas of investment that we're currently working on that may interest you, so stay tuned for later posts.

### 🚀 Azure Pipeline automation
Today, the Azure Pipeline in charge of building the static website has to be launched manually. It's not a pleasant experience for content editors. 
So we're planning to trigger the build through a WordPress webhook.

### From 🐙 GitHub Pages to Azure Storage
The GitHub Pages hosting is temporary by nature, as it's subject to some usage limits:
- GitHub Pages source repositories have a recommended limit of 1GB.
- Published GitHub Pages sites may be no larger than 1 GB.
- GitHub Pages sites have a soft bandwidth limit of 100GB per month.
- GitHub Pages sites have a soft limit of 10 builds per hour.

But above all, [GitHub Pages is not allowed to be used as a free web hosting service](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) to run an online business. So even if we're still under the radar, we'll soon move to [Static website hosting in Azure Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website)

<Comments />
