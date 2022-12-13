---

---
# Key Account Management with Salesforce

Key Account Solution allows to collaborate on accounts and all related deals from a single workspace, with pre-built content, record information in the team, CRM updates, and more.

The main capabilities are:

* Create a Parent Account team with different triggers:
  * Once an Account Record is Created or Updated
  * Once an Account Record fits your custom criteria
  * Once at least one Opportunity Record is assigned to the Account
* Create Channel in the Parent Account team per related Opportunity
* Receive notifications on Opportunity Amount/Stage updates
* Set up "end-of lifecycle" for both, channels, and teams on a custom filter

Additional features include naming convention for both teams and channels, ownership and membership management, advanced integration with adding CRM record as tab, and more

Let's go step by step and see how you can install and use the Key Account Management Solution.

## Pre-Requisites

Before installing the solution make sure you have:

* Service Account for nBold
* Service Account for Salesforce
* Key Account Management Template with all the content. Define the channel structure with standard, private, and shared channels, and add file templates, guidelines, execution playbooks, board of tasks for repetitive processes. As well as tabs with SharePoint, Lists, OneNote, Forms, and more.

> Explore how to build the Collaboration Templates [here](https://docs.nbold.co/collaboration-templates/create-a-new-collaboration-template.html#_1-create-a-team-that-will-be-the-original-team-for-the-template).

## Installation

* Go to the Catalog tab and click on the Collaboration Processes tab on your right.

![](/media/screenshot-2022-07-07-at-14-52-41.png)

> **Please Note**: To install the solution for the first time, please use the browser version. Currently, the first-time setup can only be done via the browser version of Microsoft team.

> **Caution**: For this solution to be visible, the user must be a Change Manager and at least one of the other three managers (catalog manager or compliance manager or integration manager)
> For eg: The user should be a change manager and catalog manager or a change manager and integration manager or all of them.

* Find the Key Account Management with Salesforce and click on the card to install it.

  ![](/media/screenshot-2022-12-13-at-16-05-07.png)
* Inside, you will see the Solution description to learn more about the use cases covered by this specific solution. Click on the Install button.

  ![](/media/screenshot-2022-12-13-at-16-06-18.png)
* Create two authentications with Your authentication name and Instance type for both, Salesforce, and Microsoft Teams.
* Add the credentials to your own Salesforce environment, as well as to Microsoft 365 (make sure to use the admin credentials for both, Salesforce, and Teams, and review the permissions).
* Once added the authentications, you will see the Configuration form.

  ![](/media/screenshot-2022-12-13-at-16-07-39.png)

## Configuration

### Step 1: Account Collaboration

* Define the template from which your teams will be created.

  ![](/media/screenshot-2022-12-13-at-16-09-20.png)
* Define the filters for team creation

#### Define the filters for team creation

You have multiple options in a team creation process. There are two types of triggers for team creation:

![](/media/screenshot-2022-12-13-at-16-11-14.png)

* **When an Account Record is created or updated in Salesforce:**  
  After enabling this, you can also choose to define the custom filters based on the Account field and Salesforce field value. To do so, enable the conditions button.  
  ![](/media/screenshot-2022-12-13-at-16-17-35.png)
* **When an Opportunity Record is created or updated in Salesforce AND assigned to the Account Record:**  
  You can choose to define the custom fields based on Opportunity stage and Opportunity Amount.

> Please note: You will need to enable at least one of these options. You can also choose to enable both options if needed. It won’t conflict with each other and will work in parallel.

#### Additional settings

##### Define Naming Convention

If you need, you can add the custom Naming Convention. To do so, enable the option on the naming convention and choose the Account Field from the dropdown list.

![](/media/screenshot-2022-12-13-at-16-19-13.png)

The team name will be dynamically changed once a Record Name or Record Field Value is changed in CRM.

##### Manage Account Team Ownership

If you want to automatically add an Account Record Owner to the newly created team, you can do so by enabling this option. In case when you change the Record Owner, a new owner will also be added to the team in Microsoft Teams.

![](/media/screenshot-2022-12-13-at-16-20-02.png)

##### Add Record Details as Tab in the newly created team

If enable this option, a record tab from Salesforce will be added to the newly created teams.

**What does it mean?**

You can advance from the native Salesforce and Teams integration and automatically add the Account Record tab to the Parent Account team. It looks like this:

![](/media/screenshot-2022-12-13-at-16-21-12.png)  
A tab contains all the Record details, and you can edit some fields without leaving Teams

**What should be done?**

Enable Salesforce and Teams integration (available only for Sales Cloud and Service Cloud Enterprise, Performance, and Unlimited editions)

Add Salesforce App to the Original team in Microsoft Team

Click on Update to go to the next Step

### Step 2: Opportunity Collaboration

#### Set-Up the details for collaboration around Opportunity Records

On the second screen, you can set up the details for collaboration around the Opportunity Records. So, in addition to the Parent team creation, you're able to collaborate on related Opportunities from the single workspace.

To do so, enable the option "Create a dedicated channel per Opportunity".

If enabled, once a new Opportunity Record is created or updated, a new channel will be created into the Parent Account Team.

![](/media/screenshot-2022-12-13-at-16-22-03.png)

#### Define filters for Channel creation

If the option on channel creation is enabled, you can define additional filters. You will need to define the Opportunity Stage and minimum Amount.

So, teams will be created only for those Opportunity records that achieved the right Stage and with an Amount greater or equal to the defined amount.

> Tip: If you don’t need the Amount Filter, simply type 0 value. In this case, teams will be created even for those records, which have a “null” value for the Amount field.

![](/media/screenshot-2022-12-13-at-16-23-19.png)

#### Choose the channel type

Define the type of Opportunity Channels – Private or Standard

![](/media/screenshot-2022-12-13-at-16-23-54.png)

#### Manage Additional Settings

##### Channel Naming Convention

If you need, you can add the custom Naming Convention. To do so, enable the option on a naming convention and choose the Opportunity Field from the dropdown list.

![](/media/screenshot-2022-12-13-at-16-24-56.png)

##### Combine with native Salesforce and Teams integration

If enable this option, a record tab from Salesforce will be added to the newly created teams.

Works in the same way as for the Parent Account team

![](/media/screenshot-2022-12-13-at-16-25-41.png)

##### Define Membership

If enable this option, the Opportunity owner will be added to the Parent account team as a member + as the owner of the Opportunity Channel, of earlier you defined Private Channel Type.

![](/media/screenshot-2022-12-13-at-16-26-29.png)

Here we want to pay your attention to team membership, especially when you want to create Private Channels.

#### Manage Notification

##### Define the notification type

First, you will need to define the notification type. There are three options:

* Don't want notifications
* Send notifications in the General Channel of the Parent Account Team
* Send notifications in Opportunity Channel (available only if the option on channel creation is enabled)

  ![](/media/screenshot-2022-12-13-at-16-28-41.png)

#### Define when to send notifications

Today we support two types of notifications:

* Notify the team when the Opportunity Stage is changed
* Notify the team when the Opportunity Amount is changed

  ![](/media/screenshot-2022-12-13-at-16-29-16.png)

### Step 3: SUNSET

Finally, you're able to manage the "end of life" for your teams and channels if at some point you won't need any more collaboration.

##### End of Lifecycle for Channels

There are three available options between two scenarios (Closed Won and Closed Lost) from which you can select.

* Rename: If you wish to rename the team, you can select this option (The team will have a new name in a format Opportunity Name – "Custom suffix”)
* Delete: If you wish to delete the team, once the deal reaches the desired stage, you can select this option.
* Do nothing: If you don’t have any specific rules for the end of life, simply choose the “Do nothing” option.

  ![](/media/screenshot-2022-12-13-at-16-30-39.png)

##### End of Lifecycle for Parent Account Team

If you want to Delete/Archive/Rename the parent Account team on the custom filters, please enable this option.

![](/media/screenshot-2022-12-13-at-16-31-58.png)

Now, choose the value for the custom filters, the same way as you did for the team creation, you need to pick up the Account Record field to watch and type the Value.

The last step would be to choose an action such as Rename, Delete or Do nothing.

Click on Update and now, the automation is set, and you can start using the solution.

If you have any questions, please write to us at support@nbold.co