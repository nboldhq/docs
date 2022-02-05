---
permalink: /blog/3-steps-enforce-intercom-integration-security
title: 3 steps to enforce your Intercom integration security
description: Implement the most rigorous practices for third-party integrations. Discover 2 easy to implement steps to enforce security on your Intercom platform.
image: https://docs.nbold.co/img/blog/intercom-security.png
author:
  name: Guillaume Meyer
  profile: https://twitter.com/guillaumemeyer
date: 2020-06-20
tags:
  - intercom
  - security
---

# 3 steps to enforce your Intercom integration security
<BlogHeadline />
[Intercom](https://www.intercom.com/) is a fantastic tool for customer relationship, and a cornerstone of our support and onboarding process. We at SalesTim know you care about how your personal information is used and shared, and we take your privacy seriously by implementing the most rigorous practices for our third-party integrations.  

Discover 3 **easy to implement** steps to enforce security on your Intercom integration.

| Step | Action | Check |
|:----:|--------|-------|
| **1** | Require two-factor authentication | ![Intercom 2FA badge](https://img.shields.io/badge/2FA-Verified-success.svg?logo=intercom) |
| **2** | Whitelist your domains | ![Intercom verified domains badge](https://img.shields.io/badge/Domains-Verified-success.svg?logo=intercom) |
| **3** | Enable identity verification | ![Intercom identity verification badge](https://img.shields.io/badge/Identity-Verified-success.svg?logo=intercom) |

---

**TABLE OF CONTENTS**
[[toc]]

---

## 1. Require two-factor authentication
![Intercom 2FA badge](https://img.shields.io/badge/2FA-Verified-success.svg?logo=intercom)

If you select the [two-factor authentication...](https://en.wikipedia.org/wiki/Multi-factor_authentication) option, each time you login you will need to enter your password and provide a unique code.  

***How to set it up?***

Choose the ‘Require two-factor authentication’ option and click ‘Save’.

Download the [Microsoft Authenticator App...](https://www.microsoft.com/en-us/account/authenticator) and you'll be asked to scan a QR code on your screen.
When you log in the next time, you'll need to add your password and then a code generated from your authentication app on your smart phone.  

**Important**: When you set up 2FA you'll be given the option to generate recovery codes. We recommend generating recovery codes to avoid potentially being locked out of your account. You'll also need a recovery code to disable 2FA (for example, if you're switching phones). 

Learn more about [Intercom 2FA...](https://www.intercom.com/help/configure-intercom/staying-secure/protect-your-account-with-2fa-and-google-sign-on)

## 2. Whitelist your domains
![Intercom verified domains badge](https://img.shields.io/badge/Domains-Verified-success.svg?logo=intercom)

We created a whitelist of specific SalesTim domains that the Intercom Messenger can be seen on.  

Benefit: The Intercom Messenger will only appear on these domains (therefore it won’t appear in unintended locations).

***How to set it up?***

Just add your domains to the whitelist from your messenger settings.

Learn more about [Intercom domain whitelisting...](https://www.intercom.com/help/configure-intercom/staying-secure/whitelisting-the-domains-you-use-with-intercom)

## 3. Enable identity verification
![Intercom identity verification badge](https://img.shields.io/badge/Identity-Verified-success.svg?logo=intercom)

Benefit: Identity Verification helps us to make sure that conversations between you and us are kept private and that one user can't impersonate another.

Identity Verification works by using a server side generated [HMAC](https://en.wikipedia.org/wiki/HMAC) (hash based message authentication code), using [SHA256](https://en.wikipedia.org/wiki/SHA-2), implemented using the [Node Crypto API](https://nodejs.org/api/crypto.html).

Then, everywhere that you load user data and have a window.intercomSettings code snippet, add a new attribute called user_hash and assign the HMAC code for the logged-in user to it:

```javascript
window.intercomSettings = {
  app_id: "APP_ID",
  user_id: "USER_ID",
  user_hash: "INSERT_HMAC_VALUE_HERE"
}
```

***How to set it up?***

Just turn it on from your workspace settings and follow the instructions for your app.

Learn more about [Intercom identity verification...](https://developers.intercom.com/installing-intercom/docs/enable-identity-verification-on-your-web-product)

## To go further
Intercom brings to the table a lot of options to enforce your security, therefore these 3 easy to implement steps are just the beginning of an epic journey.  

Here are a few other areas of investment that we're currently working on that may interest you, so stay tuned for later posts.

### a. Create a test workspace
Set up a test workspace of Intercom in your development / staging environment to be sure it’s working correctly before putting it live.  

Benefits:
* Enforce isolation between your test and production environments
* Be sure it’s working correctly before putting it live

Learn more about [Intercom test workspace...](https://www.intercom.com/help/configure-intercom/create-a-test-version-of-intercom/create-a-test-workspace-in-intercom)

### b. GDPR
In addition to security, and even if [Intercom complies with GDPR](https://www.intercom.com/help/pricing-privacy-and-terms/data-protection/how-intercom-complies-with-gdpr), you'll have to work on an automated process to link your GDPR process with Intercom and other third-party services...

<Comments />
