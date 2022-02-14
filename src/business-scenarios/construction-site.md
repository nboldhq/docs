---
status: published
tags: []
author: Kristina Konstantynova

---
# Construction Site Template

The objective of the article is to present, how collaboration with Microsoft Teams templates can help an organization optimize any Construction Site collaboration. Construction Site Collaboration is a Collaborative Process and Teams is the perfect home for that. With a Template, you can address this process at scale in your organization.

***

**TABLE OF CONTENTS**
[[toc]]

***

## Step 1: Create the Original Team of the Collaboration Template

1\. **Create a new team** using the regular way, from "Join or Create Team" in Teams.

2\. **Name it** "Construction Site - Template" for example.

3\. **Add the different channels**, here is a suggested list:

* ⚡ Energy
* ✅ Quality
* 🌳 Sustainability
* 🏗 Construction
* 🏢 Building
* 📅 Planning
* 🔺 Security
* 🤝 Contractors

You can frame the channels the way you want, based on your need.

![](https://downloads.intercomcdn.com/i/o/166005562/5ccb855869c588ca3742ebdd/Screen+Shot+2019-11-21+at+6.09.36+PM.png)

4\. **Add Websites Tabs** in every channel needed, you can bring any content that come with a URL to the Team created. The content can be any information that you would like to share with your team members.

* Guidelines on Internet or intranet
* Link to a share-point online documentation library
* Internal web-based application

![](https://downloads.intercomcdn.com/i/o/166006377/2a3b627d935a73167cb5abda/Screen+Shot+2019-11-21+at+6.10.04+PM.png)

5\. **Create a Planner** with the list of tasks that you need to carry out. Few examples that can be:

* Action Plan (Stakeholders Insights, Safety processes, Available insights)
* Business Impact (Reputation Control, Increase in Expenses, Regulatory fines)
* Risk Assessment (Risk related to the product, Potential Crises, Public Relations)

![](https://downloads.intercomcdn.com/i/o/166006527/43af5a7e95525396bb2ca1ed/Screen+Shot+2019-11-22+at+11.47.47+AM.png)

6\. Also, add a profile image to the Original Team, this image will be replicated to each Team Created.

It's done!

***

## Step 2: Adding Collaboration template to a corporate catalog

1. **Add the Original Team to the Catalog**: for this, you need to be logged in as a global admin. Go to Catalog Tab in nBold App and look for the team you created i.e. "Construction Site Management - Template.

2\. **Click on the 'Create'** option present on the top right corner and select the team to be cloned, which in this case is "Construction Site Management"

3\. **In the Info tab**, fill in the name of the original team which is named "Construction Site Management - Template" Microsoft Team name and description. You also have the ability to choose the desired Collaboration Template language.

4\. **In the Name Tab,** set up the name of the Team that will be created from the Template:

* **Default Team Name** (what user will fill in the request form): this can be the _Name of the Construction Site_
* **Naming Convention** (the name automatically generated): this can be `<%= request.team.name %> - Construction Site`
* **Default Teams description:** Enter Additional Construction Site Description
* **Business Solution Description:** this can be `Team dedicated to collaborate around the Construction site: <%= request.team.name %> | Location: <%= user.msCountry %> | Created by: <%= request.request.requester.name %>` with the job role: `<%= user.msJobTitle%> | <%= request.team.description %>`
* Same Idea with the welcome message!

5\. **In the Approval tab**, define the approval policy with an approver from your organization.

1. **In the Audience tab**, define the audience you wish to target for this Collaboration Template.
2. **In the Compliance tab,** define sensitivity labels applied to each team created from the template to protect your data.
3. **In the Security tab**, define the Security Policy with:

* Teams Privacy enforcement to Private for example
* Permanent Owners
* Permanent Members

***

## Step 3: Try It!

Go on home page. Click on the "Create" option. You will see the Business option being created on the Catalog. The business solution is named 'Construction Site.

1. Go on home page. Click on the "Create" option. You will see the Collaboration Template option being created on the Catalog. The template is named 'Construction Site Management'.
2. Once the Collaboration Template named 'Construction Site' is created, go to the 'Home' tab and select the template
3. Name the template and add a description to it. Add a welcome message that you want to be seen by the members of the team when they join the Team.
4. Within seconds, your Teams matching your business need are up and running.

![](/uploads/screenshot-2022-02-11-at-02-12-03.png)

_If you are doing that with a service account, no notification will be seen because you are the account that is creating the Team._