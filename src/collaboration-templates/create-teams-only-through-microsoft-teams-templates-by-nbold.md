---
status: published
tags: []
position: 11
author: Kristina Konstantynova

---
# Create Teams only through Collaboration Templates by nBold

After having setup your templates, you may want to make sure that people in your organization are only using Templates you've set up with nBold to create teams.

This is possible! And this article is here to describe what you need to do to enable this.

### Is it possible to restrict people to create teams through the regular way?

Yes, it is. The thing you need to know before proceeding is that you can't restrict people to create Teams only. If you want to do so you would restrict the creation of Office 365 Groups for users, meaning: teams, Planner, Outlook Groups, Yammer Connecter Groups, etc.

### How can I implement that?

Following this [documentation by Microsoft](https://docs.microsoft.com/en-us/microsoft-365/solutions/manage-creation-of-groups), you'll be able to set only a group user (based on a security group) who will be able to create Office 365 and therefore teams, through the regular way.

The only thing you must do is to make sure that the [Service Account](/quickstart/set-up-the-home-page.md) belongs to the security group that can create Office 365 Group in the tenant.