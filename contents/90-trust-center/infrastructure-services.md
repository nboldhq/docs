---
position: 2
status: published
author: Guillaume Meyer
---

# Infrastructure Services

As a Microsoft Teams App, nBold relies on several "first-party" components and services such as the Microsoft Teams platform and Microsoft Azure.  
In addition the nBold platform uses several "second-party" or "third-party" services, especially:
- GitHub Enterprise is our source code repository platform and issue tracking tool. [Learn more...](https://github.com/)
- Intercom is our chat application for communication with our prospects and customers from our website, and users in our apps. [Learn more...](https://www.intercom.com/)
- As nBold is not in the business of storing or processing payments, all payments made to nBold goes through our partner, Stripe. [Learn more...](https://stripe.com/)

## Microsoft Teams

nBold relies on the [Microsoft Teams extensibility platform](https://docs.microsoft.com/en-us/microsoftteams/platform/) to automate governance, bring business solutions and integrate LoB and CRM apps seamlessly into Microsoft Teams.  
Microsoft Teams is a chat-based workspace in Office 365 that integrates with the apps and services that people use to get work done together.  

Especially, nBold leverages the following Microsoft Teams extensibility components:

| Service | Role |
|---------|------|
| Embedded web experiences with Tabs | nBold brings 5 custom tabs to meet specific audiences expectations and requirements |
| Bots in Microsoft Teams | nBold intelligent assistant relies on the Microsot Bot Framework and is fully integrated with Microsoft Teams to bring a seamless experience across devices, desktop and mobile |
| Adaptive Cards | nBold intelligent assistant brings actionable notifications through [Adaptive Cards](https://adaptivecards.io/) |
| Microsoft Graph | Secure and cross-platform authentication with Azure AD. Cross-functional features across the whole Office 365 suite through the Microsoft Graph unified programmability model.
| Messaging Extensions (Search & Share) | Search for CRM objects right from conversations |
| Messaging Extensions (Custom Actions) | Initiate actions from conversations |
| Deep links | Initiate conversation based on business processes |

# Microsoft Azure Infrastructure

La plateforme nBold repose entièrement sur Microsoft Azure. Voici un résumé des principaux composants architecturaux impliqués :

| Service | Rôle |
|---------|------|
| **Azure Virtual Machines (VM)** | Des machines virtuelles sont utilisées pour héberger RabbitMQ et Redis, permettant une gestion optimisée des files de messages et du cache sans dépendre d’un service managé. |
| **Azure Container Apps** | La plateforme nBold est désormais déployée sous forme d’applications conteneurisées sur Azure Container Apps, offrant une meilleure scalabilité et gestion des ressources. |
| **Azure Container Registry (ACR)** | Les images des conteneurs de la plateforme sont stockées et gérées dans Azure Container Registry pour faciliter le déploiement et la mise à jour. |

Cette nouvelle architecture améliore la flexibilité et optimise les coûts d’exploitation tout en maintenant une haute disponibilité.

:::tip
Learn more about Azure Data Residency from our [Privacy policy](/trust-center/privacy-policy) page
:::

## GitHub

| Security Measures | Description |
|:-----------------:|-------------|
| HTTPS | All data received from and sent to GitHub is encrypted in transit. |
| Verified Domains | You can verify the domains controlled by your organization to confirm your organization's identity on GitHub. Organization owners are be able to verify the identity of organization members by viewing each member's email address within the verified domain. |
| 2FA | Access to our private repository requires two-factor authentication for everyone in the nBold organization. [Learn more...](https://docs.github.com/en/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication) |
| Protected Branches | Protected branches ensure that collaborators on our repositories cannot make irrevocable changes to branches. Enabling protected branches also allows us to enable other optional checks and requirements, like required status and security checks and required reviews. Moreover, deployment to production environments requires at leats two human validation steps. [Learn more...](https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) |
| Security Alerts | GitHub automatically tracks public vulnerabilities in packages from supported languages on MITRE's Common Vulnerabilities and Exposures (CVE) List, and use a combination of machine learning and human review to detect vulnerabilities that are not published in the CVE list. |

:::tip
Learn more about [GitHub Security](https://github.com/security).  
:::

## Intercom

| Security Measures | Description |
|:-----------------:|-------------|
| HTTPS | All data received from and sent to Intercom is encrypted in transit. |
| 2FA | Access to our Intercom dashboard requires two-factor authentication for everyone in the nBold organization.[Learn more...](https://www.intercom.com/help/configure-intercom/staying-secure/protect-your-account-with-2fa-and-google-sign-on) |
| Verified Domains | We created an "allow list" of specific nBold domains that the Intercom Messenger can be seen on. The Intercom Messenger will only appear on these domains (it won’t appear in unintended locations). [Learn more...](https://www.intercom.com/help/en/articles/4418-list-trusted-domains-you-use-with-intercom) |
| Identity Verification | Identity Verification helps to make sure that conversations between you and us are kept private and that one user can't impersonate another. Identity Verification works by using a server side generated [HMAC (hash based message authentication code)](https://en.wikipedia.org/wiki/HMAC), using SHA256, implemented using the [Node Crypto API](https://nodejs.org/api/crypto.html#crypto_class_hmac). [Learn more...](https://developers.intercom.com/installing-intercom/docs/enable-identity-verification-on-your-web-product)
| Cookies Policy | Learn more about [Intercom cookies policy...](https://www.intercom.com/help/en/articles/2361922-intercom-messenger-cookies) |

:::tip
Learn more about [Intercom Security](https://www.intercom.com/security).  
:::

## Stripe

| Security Measures | Description |
|:-----------------:|-------------|
| HTTPS | All data received from and sent to Stripe is encrypted in transit. |
| 2FA | Access to our Stripe dashboard requires two-factor authentication for everyone in the nBold organization.[Learn more...](https://support.stripe.com/questions/enable-two-step-authentication) |
| Platform Security | Stripe has been audited by a PCI-certified auditor and is certified to [PCI Service Provider Level 1](http://www.visa.com/splisting/searchGrsp.do?companyNameCriteria=stripe). This is the most stringent level of certification available in the payments industry. To accomplish this, we make use of best-in-class security tools and practices to maintain a high level of security at Stripe. |
| Compliance | nBold integration with Stripe follows the [Stripe Integration Security Guide](https://stripe.com/docs/security). |

:::tip
Learn more about [Stripe Security](https://stripe.com/docs/security/stripe)
:::

