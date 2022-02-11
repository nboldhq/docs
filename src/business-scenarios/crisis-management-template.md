---
status: draft
tags: []
author: Kristina Konstantynova

---
# Crisis Management Template

A guide to create a Collaboration template for Crisis Management

Introduction

The objective of the article is to present, how collaboration with Microsoft Teams templates can help an organization optimize any Crisis. Crisis Management is a Collaborative Process and Teams is the perfect home for that. With a Template, you can address this process at scale in your organization

## Step 1: Create the Original Team of the Collaboration Template

1\. **Create a new team** using the regular way, from "Join or Create Team" in Teams.

2\. **Name it** "Crisis Management - Template" for example.

3\. **Add the different channels**, here is a suggested list:

* 📅 Planning
* 📑 Training Materials
* 📢 Communication
* 🔺 Executive Review
* 🤝 Stakeholders
* 🛡 Safety Procedures

You can frame the channels the way you want, based on your need.

![](https://downloads.intercomcdn.com/i/o/165930020/83ba89fbd451d1097b5c1c2f/CM-+Channels+list.png)

4\. **Add Websites Tabs** in every channel needed, you can bring any content that comes with a URL to the Team created. The content can be any information that you would like to share with your team members.

* Guidelines on Internet or intranet
* Link to a share-point online documentation library
* Internal web-based application

![](https://downloads.intercomcdn.com/i/o/165930175/dfa9f339292aabab1a99ad96/CM-+General.png)

5\. **Create a Planner** with the list of tasks that you need to carry out. Few examples that can be:

* Risk Assessment (Risk related to Product, Public Relations, Potential Crisis)
* Business Impact (Regulatory fines, Increase in Expenses, Reputation Control)
* Action Plan (Use planner to add tasks that the Teams owner will first perform when the team is created)

![](https://downloads.intercomcdn.com/i/o/165930307/0801296a07da9c0b8ff21c7a/CM-+Planner.png)

6\. Also, add a profile image to the Original Team, this image will be replicated to each Team Created.

It's done!

## Step 2: Adding Collaboration template to a corporate catalog

1\. **Add the Original Team to the Catalog**: for this, you need to be logged in as a global admin. Go to Catalog Tab in nBold App and look for the team you created i.e. "Crisis Management - Template.

2\. **Click on the 'Create'** option present on the top right corner and select the team to be cloned, which in this case is "Crisis Management"

3\. **In the Info tab**, fill in the name of the original team which is named "Crisis Management - Template" Microsoft Team name and description. You also have the ability to choose the desired Collaboration Template language.

4\. **In the Name Tab,** set up the name of the Team that will be created from the Template:

* **Default Team Name** (what user will fill in the request form): this can be the _Name of the Crisis_
* **Naming Convention** (the name automatically generated): this can be _<%=_ [_request.team.name_](http://request.team.name/) _%> - Crisis_
* **Default Teams description:** Enter Additional Crisis Description
* **Business Solution Description:** this can be _Team dedicated to collaborate around the crisis: <%=_ [_request.team.name_](http://request.team.name/) _%> | Location: <%= user.msCountry %> | Created by: <%=_ [_request.request.requester.name_](http://request.request.requester.name/) _%> with the job role: <%= user.msJobTitle%> | <%= request.team.description %>_
* Same Idea with the welcome message!

5\. **In the Approval tab**, define the approval policy with an approver from your organization.

7\. **In the Audience tab**, define the audience you wish to target for this Collaboration Template

8\. In the Security tab, define the Security Policy with:

* Teams Privacy enforcement to Private for example
* Permanent Owners
* Permanent Members

## Step 3: Try It 🚀

Go on home page. Click on the "Create" option. You will see the Business option being created on the Catalog. The business solution is named 'Merger and Acquisition'.

1. Go on home page. Click on the "Create" option. You will see the Collaboration Template option being created on the Catalog. The template is named 'Crisis Management'.
2. Once the Collaboration Template named 'Crisis Management' is created, go to the 'Home' tab and select the template
3. Name the template and add a description to it. Add a welcome message that you want to be seen by the members of the team when they join the Team.
4. Within seconds, your Teams matching your business need is up and running.

![](/uploads/screenshot-2022-02-10-at-23-54-20.png)

_If you are doing that with a service account, no notification will be seen because you are the account that is creating the Team._