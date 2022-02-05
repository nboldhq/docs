---
permalink: /blog/devops-rings-validation-dummies
title: DevOps rings of validation for dummies
description: Today I'll talk about the definition of the rings of validation in your SAAS release process, and how important it is to share a common vocabulary across your dev, ops and product teams.
image: https://docs.nbold.co/img/blog/devops.png
author:
  name: Guillaume Meyer
  profile: https://twitter.com/guillaumemeyer
date: 2020-06-20
tags:
  - devops
  - saas
  - azure
  - microsoft-365
  - microsoft-teams
---

# DevOps rings of validation for dummies
<BlogHeadline />
Yes, I just used the magical keyword / hashtag / buzzword... "DevOps". But this article is not about [CI/CD](https://en.wikipedia.org/wiki/CI/CD) or its technical implementation with [Azure DevOps](https://azure.microsoft.com/en-us/services/DevOps/).

No, today I'll talk about the definition of your rings of validation in your SAAS release process, how it relates to your environments and how important it is to share a common vocabulary across your dev, ops and product teams.

---

**TABLE OF CONTENTS**
[[toc]]

---

## Back to basics: Deployment Environments
A common release process involves the [DTAP](https://en.wikipedia.org/wiki/Development,_testing,_acceptance_and_production) pipeline. The four letters in DTAP denote the following steps:
- The program is developed on a **Development*- system. This development environment might have no testing capabilities.
- Once the developer thinks it is ready, the product is copied to a **Test*- environment, to verify it works as expected. This test environment is supposedly standardized and in close alignment with the target environment.
- If the test is successful, the product is copied to an **Acceptance*- test environment. During the Acceptance test, the customer will test the product in this environment to verify whether it meets their expectations.
- If the customer accepts the product, it is deployed to a **Production*- environment, making it available to all users of the system.

But aside from this rather common and theorical process, let's have a look at how Microsoft manages its release process in real life

## Learn from the best: Microsoft Office 365
As of the time of writing the article, the [Microsoft Office 365 roadmap](https://www.microsoft.com/en-us/microsoft-365/roadmap?rtc=2&filters=O365) has more than 500 updates planned. To manage such pipeline, across multiple technical teams, functional teams, and product groups, Microsoft uses an approach based on "rings", and each ring relies on many isolated environments for different purposes (Security tests, load tests...).

## A more comprehensive pipeline
If we delve into the details, we can even have a more complex pipeline of rings, for instance:

| Ring | Environments | Classification | Primary Audience |
|:----:|--------------|----------------|------------------|
| **4*- | **production*- | 💥 EXTERNAL | Customers |
| **3.5*- | **preview*- | 💥 EXTERNAL | Customers (Preview) |
| **3*- | **staging*- | 🔐 PRIVATE | SalesTim (Tech Team) |
| **2*- | **uat*- | 🔐 PRIVATE | SalesTim (Product Team) |
| **1.5*- | **beta*- | 💥 EXTERNAL | Partners (SI/ISV) |
| **1*- | **dogfood*- | 🔐 PRIVATE | SalesTim |
| **0*- | **integration*- | 🔐 PRIVATE | SalesTim (Tech Team) |

What is exactly the purpose of each ring?

| Ring | Purpose |
|:----:|---------|
| **4*- | Obvious isn't it? |
| **3.5*- | preview is designed to help customers prepare for updates, from a technical and change management standpoint |
| **3*- | Test automated deployment in a nearly iso-production environment |
| **2*- | The product team tests SalesTim to verify whether it meets their expectations |
| **1.5*- | Give strategic partners an early look at the features we're currently working on |
| **1*- | SalesTim Internal [Dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) |
| **0*- | Used solely for completing integrations and functional testing by the tech team. |

For the moment at SalesTim, with the exception of our development environments, we have a fully automated CI/CD Azure Pipelines process for rings 0, 2 and 4:

| Ring | Environments | CI/CD |
|:----:|--------------|-------|
| **4*- | **production*- | ![Production Branch](https://img.shields.io/badge/Production-CD-success.svg?logo=azureDevOps) | 
| **3.5*- | **preview*- | ![Preview](https://img.shields.io/badge/Preview-None-red.svg?logo=azureDevOps) |
| **3*- | **staging*- | ![Staging](https://img.shields.io/badge/Staging-None-red.svg?logo=azureDevOps) |
| **2*- | **uat*- | ![UAT](https://img.shields.io/badge/UAT-CD-success.svg?logo=azureDevOps) |
| **1.5*- | **beta*- | ![Beta](https://img.shields.io/badge/Beta-None-red.svg?logo=azureDevOps) |
| **1*- | **dogfood*- | ![Dogfood](https://img.shields.io/badge/Dogfood-None-red.svg?logo=azureDevOps) |
| **0*- | **integration*- | ![Integration Branch](https://img.shields.io/badge/Integration-CI/CD-success.svg?logo=azureDevOps)  |

While the other one (1, 1.5, 3 and 3.5) still requires some manual operations.  

The advantages of such pipeline:
- A clear and common understanding of each ring purpose
- A real isolation between environments
- An enforced security

## To go further
Of course, SalesTim is not Microsoft (At least for the moment 😉), therefore we don't have the same teams, constraints or volumetry... But as our platform gains more traction, we'll have to implement CI/CD for the whole validation rings... so stay tuned for another article!

<Comments />
