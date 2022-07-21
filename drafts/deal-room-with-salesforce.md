---
status: draft
tags:
- salesforce
- dealroom
- msteams
- connectedapps
position: 0
author: Kristina Konstantynova

---
# Deal Room with Salesforce

### Abstract

Connect Salesforce with Collaboration Templates and improve your collaboration on sales deals. Scale automation across the company and boost your sales team productivity.

## What is Deal Room?

This is a digital workspace that incorporates all the tools, documentation, and data necessary to work on closing deals.

If you're using both **Microsoft Teams** and **Salesforce**, Deal Rooms will ensure smooth and automatic information flow and bridge the communication gap between the users of both platforms.

#### The Deal Room with Salesforce Solution allows you to:

* Get teams created from your own Collaboration Template for each newly created or updated Opportunity Record (with filters on the Opportunity record stage and amount)
* Automatically add Opportunity Owner to the newly created team as a team owner. As well as add a new owner once the owner of the Record is changed. (The feature is available only for users with the same email addresses for Salesforce and Microsoft Teams)
* Delete/Archive/Rename the team once the related Opportunity record is on the stage Closed Lost/Closed Won
* Automatically receive the Adaptive cards sent by nBold into the team once the Opportunity Record is updated:
* Adaptive card sent into the General Channel for Opportunity Stage field changes
* Adaptive card sent into the General Channel for Opportunity Amount field changes
* Notification after a sale when Opportunity record is Closed Won or Closed Lost

## How to find, install and use connected collaboration solutions?

Connect and go to the `nBold app` in Microsoft Teams. Go to the `Catalog` tab and click on the **`Collaboration Processes`** tab on your right.

![](/media/screenshot-2022-07-07-at-14-52-41.png)

::: tip Important !

This solution is only available for _integration managers, compliance managers and catalog managers._

:::

See how to [delegate template catalog administration](https://docs.nbold.co/administrator-guide/delegate-template-catalog-administration.html)

There you can see a solution sorting list on your left bar menu.

![](/media/screenshot-2022-07-07-at-14-54-29.png)

* `All collaboration Solutions`, where all available solutions are gathered.
* `Installed`. For the set solutions
* `Build for your organisation`
* There are also some `Tags` available to sort your solutions, for example, by department: `sales`, `marketing`, etc.

### Install the Deal Room Solution

Find the Deal Room Solution with Salesforce and click on the card to install it. Inside, you will see the Solution description to learn more about the use cases covered by this specific solution. Click on the `Install now` button.

![](/media/screenshot-2022-07-07-at-15-12-18.png)

Next, you will need to create two authentications with _Your authentication name_ and _Instance type_ for both, Salesforce and Microsoft Teams.

![](/media/screenshot-2022-07-11-at-14-22-12.png)

Add the credentials to your own Salesforce environment, as well as to Microsoft 365 (make sure to use the **admin credentials** for both, Salesforce and Teams, and review the permissions).

### Configuration Settings for the Deal Room with Salesforce Solution

Once added the authentications, you will see the Configuration form. Here, you can customize the solution according to your unique business needs.

Let's go through each of them.

![](/media/1.jpg)

1. Choose the template.

Teams for your Opportunity record will be created from this particular template.

::: tip

We highly recommend building a _separate template_ for Deal Room with Salesforce to avoid a mess in teams.

:::

![](/media/2.jpg)

2. Filter the team creation on **stage** and the **amount** greater or equal to…So teams will be created only for those Opportunity records that achieved the right Stage and with an Amount greater or equal to the right amount.

![](/media/3.jpg)

3. Define what to do with a team, when related Opportunity record achieved the Closed Lost or Closed Won stage. There are three options available:

* Rename (the team will have a new name in a format Opportunity Name – Closed Won/Lost)
* Archive
* Delete

![](/media/4.jpg)

4\. Manage Notifications. As mentioned below, you can get adaptive cards when:

* Opportunity Stage Field is updated
* Opportunity Amount Field is updated

![](/media/5.jpg)

* Opportunity Stage is Closed Won or Closed Lost.

![](/media/6.jpg)

If enabled, you will need to choose the `teams` and `channel` where you want adaptive cards to be sent (for example, notify your entire company about the closed deals). In this case, you can also change if you want adaptive cards posted with or without the GIFs. Please, see the examples below.

![](/media/7.jpg)

_Adaptive Cards for Stage/Amount Updates_

![](/media/8.jpg)

_After Sale Notifications without GIFs_

![](/media/gif.gif)

_After Sale Notifications with GIFs_

::: tip

Please, pay attention, that in case you want Adaptive Cards to be sent, you will need to install the nBold Bot and add it to the Original team on which your Template is based (that you’ve chosen at the really first step). Please, follow the process described below:

::: 

* Download the [nBold Bot](https://dist.salestim.io/packages/)
* Go to apps on your left bar menu and click on Manage your apps

![](/media/screenshot-2022-07-11-at-11-12-09.png)

* Upload an app to your organisation app catalog

![](/media/screenshot-2022-07-11-at-11-13-06.png)![](/media/screenshot-2022-07-11-at-11-13-32.png)

* Once uploaded, click on the nBold Bot app, then click on add button and add it to the Original team on which your template is based.

![](/media/screenshot-2022-07-11-at-11-53-02.png)

In this way, nBold Bot will be automatically installed into each team created from your Deal Room template and you team members can receive the notifications on you CRM changes.

Please, don’t forget to add it to the team you want notify about the sales. (if this option is enabled)

All the fields in the configuration form are submitted. Now it’s time to enable your solution.

![](/media/9.jpg)

Once **enabled** – Salesforce integration with Collaboration Templates is started:

[See it in action](/media/screen-recording-2022-07-11-at-12-52-55.mov)🚀

#### Update and Uninstall the Deal Room with Salesforce Solution

Update the solution if you see an update available. This means our team made some improvements for you.

![](/media/screenshot-2022-07-11-at-13-07-00.png)

If you don’t need the solution anymore – simply uninstall it.

![](/media/screenshot-2022-07-11-at-13-09-01.png)