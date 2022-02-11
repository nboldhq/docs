---
status: draft
tags: []
author: Kristina Konstantynova

---
# **Account Management Template**

**Introduction**

The objective of the article is to present, how collaboration with Microsoft Teams templates can help an organization optimize any Sales Account Management activity. Sales Account Management is a Collaborative Process and Teams is the perfect home for that. With a Template, you can address this process at scale in your organization

***

**TABLE OF CONTENTS**
\[\[toc\]\]

***

## Step 1: Create the Original Team of the Collaboration Template

1\. **Create a new team** using the regular way, from "Join or Create Team" in Teams.

2\. **Name it** "Sales Account Management - Template" for example.

3\. **Add the different channels**, here is a suggested list:

* ⏱️Compete Watch
* ☎️ Customer Support
* ⚙️ Customer Updates
* 🏛️ Contracts - licensing
* 💹 Account Planning
* 📅 Planning
* 📢 Opportunity feed

You can frame the channels the way you want, based on your need.

[![](https://downloads.intercomcdn.com/i/o/166562826/597b92d4743978a45361c544/Screen+Shot+2019-11-22+at+4.56.06+PM.png =276x266)](https://downloads.intercomcdn.com/i/o/166562826/597b92d4743978a45361c544/Screen+Shot+2019-11-22+at+4.56.06+PM.png)

4\. **Add Websites Tabs** in every channel needed, you can bring any content that comes with a URL to the Team created. The content can be any information that you would like to share with your team members.

* Guidelines on Internet or intranet
* Link to a share-point online documentation library
* Internal web-based application

[![](https://downloads.intercomcdn.com/i/o/166565521/ec01e232d2ede460a21a3db1/Screen+Shot+2019-11-22+at+4.58.56+PM.png =907x633)](https://downloads.intercomcdn.com/i/o/166565521/ec01e232d2ede460a21a3db1/Screen+Shot+2019-11-22+at+4.58.56+PM.png)

5\. **Create a Planner** with the list of tasks that you need to carry out. Few examples that can be:

* Organizational Levels (Top Management, Key Account Manager, Communication with key account director)
* Supporting Documents (Maintaining key account database, Weekly account plan)
* Process Stages (Weekly situational analysis, Strategic formulation and Operations)

[![](https://downloads.intercomcdn.com/i/o/166565567/56049c2a0e0bbd4ddc3b380c/Screen+Shot+2019-11-22+at+4.57.01+PM.png =929x583)](https://downloads.intercomcdn.com/i/o/166565567/56049c2a0e0bbd4ddc3b380c/Screen+Shot+2019-11-22+at+4.57.01+PM.png)

6\. Also, add a profile image to the Original Team, this image will be replicated to each Team Created.

It's done!

***

## Step 2: Adding Collaboration template to a corporate catalog

1\. **Add the Original Team to the Catalog**: for this, you need to be logged in as a global admin. Go to Catalog Tab in nBold App and look for the team you created i.e. "Sales Account Management - Template.

2\. **Click on the 'Create'** option present on the top right corner and select the team to be cloned, which in this case is "Sales Account Management"

3\. **In the Info tab**, fill in the name of the original team which is named "Sales Account Management - Template" Microsoft Team name and description. You also have the ability to choose the desired Collaboration Template language.

4\. **In the Name Tab,** set up the name of the Team that will be created from the Template:

* **Default Team Name** (what user will fill in the request form): this can be the _Name of the Sales Account_
* **Naming Convention** (the name automatically generated): this can be _<%=_ [_request.team.name_](http://request.team.name/) _%> - Sales Account_
* **Default Teams description:** Enter Additional Sales Account Description
* **Business Solution Description:** this can be _Team dedicated to collaborate around the Sales Account: <%=_ [_request.team.name_](http://request.team.name/) _%> | Location: <%= user.msCountry %> | Created by: <%=_ [_request.request.requester.name_](http://request.request.requester.name/) _%> with the job role: <%= user.msJobTitle%> | <%= request.team.description %>_
* Same Idea with the welcome message!

5\. **In the Approval tab**, define the approval policy with an approver from your organization.

1. **In the Audience tab**, define the audience you wish to target for this Collaboration Template.
2. **In the Compliance tab,** define sensitivity labels applied to each team created from the template to protect your data.
3. **In the Security tab**, define the Security Policy with:

* Teams Privacy enforcement to Private for example
* Permanent Owners
* Permanent Members

***

## Step 3: Try It 🚀

Go on home page. Click on the "Create" option. You will see the Business option being created on the Catalog. The business solution is named 'Sales Account Management'.

1. Go on home page. Click on the "Create" option. You will see the Collaboration Template option being created on the Catalog. The template is named 'Sales Account Management'.
2. Once the Collaboration Template named 'Sales Account Management' is created, go to the 'Home' tab and select the template
3. Name the template and add a description to it. Add a welcome message that you want to be seen by the members of the team when they join the Team.
4. Within seconds, your Teams matching your business need are up and running.

![](/uploads/screenshot-2022-02-11-at-09-57-24.png)

If you are doing that with a service account, no notification will be seen because you are the account that is creating the Team.