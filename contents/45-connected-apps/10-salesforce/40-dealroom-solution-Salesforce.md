---

---
# Deal Room Solution with Salesforce

Connect Salesforce with Collaboration Templates and improve your collaboration on sales deals. Scale automation across the company and boost your sales team's productivity.

If you have any questions or need any assistance, kindly write to us at [support@nbold.co](mailto:support@nbold.co)

## Installation

### 1. **Get Started**

Once you have created a template to use for the collaboration on sales deals, you can go ahead and install the collaboration solution.

> Please Note: To install the solution for the first time, please use the browser version.
> Currently, the first-time setup can only be done via the browser version of Microsoft team.

* Connect and go to the nBold application in Microsoft Teams.

> To know how to install nBold to your Microsoft Teams, click [here](/administrator-guide/Installation)
>
> To know how to create collaboration templates, click [here](/catalog-manager-guide/collaboration-templates/create-a-new-collaboration-template)

* Go to the Catalog tab and click on the Collaboration Processes tab on your right.

  ![](/media/screenshot-2022-11-07-at-15-52-01.png)

> **Caution:** For this solution to be visible, the user must be a Change Manager and at least one of the other three managers (catalog manager or compliance manager or integration manager)  
> For eg: The user should be a change manager and catalog manager or a change manager and integration manager or all of them.

To know how to assign and delegate roles, click [here](https://docs.nbold.co/administrator-guide/delegate-template-catalog-administration.html)

You will land on this screen:

![](/media/screenshot-2022-11-07-at-15-30-31.png)  
Here, you can see a solution sorting list on your left bar menu.

\- _All collaboration Solutions_, where all available solutions are gathered  
\- _Installed_. For the set solutions  
\- _Build for your organisation  
\-_ There are also some Tags available to sort your solutions, for example, by department: “_sales”, “marketing_”, etc.

### 2. **Install the Deal Room with the Salesforce solution**

* Click on the Card which says "Deal Room Solution with Salesforce"
* Next, Click the "Install Now" Button. Inside, you will see the solution description to learn more about the use cases covered for this specific solution.

  ![](/media/screenshot-2022-11-10-at-11-57-50.png)
* Create two authentications with your authentication name and instance type for both, Salesforce, and Microsoft Teams.

  ![](/media/screenshot-2022-11-10-at-12-00-17.png)
* Add the credentials to your own Salesforce environment, as well as to Microsoft 365.

> **Warning:** Make sure to use the admin credentials for both, Salesforce, and Microsoft Teams, and review the permissions.

## Configuration

Once the authentication is added, you will see the configuration form.
Here, you can customize the solution according to your unique business needs.

![](/media/screenshot-2022-11-10-at-12-20-31.png)

### 1. **Choose the template**

First, you will need to choose a template from which you wish to create a team.
Newly created teams will be cloned from this specific template.

![](/media/screenshot-2022-11-10-at-12-23-52.png)

> **Note**: We highly recommend building a separate template for Deal Room with HubSpot to avoid any confusion within your governance policies in future.

Read more about Collaboration Template [here](/catalog-manager-guide/collaboration-templates/create-a-new-collaboration-template.html#_1-create-a-team-that-will-be-the-original-team-for-the-template)

### 2. **Team Creation**

During the configuration process, you define the filters for the team creation. At this point, you need to set up the Opportunity Stage Name and Opportunity Amount.

For the **Opportunity Stage** simply pick the desired stage from the dropdown list which is already synchronized with your Salesforce.

For the **Opportunity Amount**, enter the value in number format, with no spaces or non-numeric characters.  
![](/media/screenshot-2022-11-10-at-12-31-39.png)

> **Note:** Teams will be created only for those Opportunity records that achieved the right Stage and with an Amount greater or equal to the defined amount.

> **Tip**: If you don’t need the Amount Filter, simply type 0 value. In this case, teams will be created even for those records, which have a “null” value for the Amount field.

### 3. **Define Naming Convention**

By default, your team will be named in a format Team Name: “Opportunity Name”.

In addition to this, you can enable the “Naming Convention” option to add the Opportunity Stage to the team's name. So, each team created for your Opportunity Records will be named in a format Team Name:” Opportunity Name – Prospecting".

![](/media/screenshot-2022-11-10-at-12-39-44.png)

A team name will reflect the changes in your CRM as well.

### 4. **Synchronization between the Record and Team Owner**

The next option is the synchronization between the owner of the deal record and the future deal owner.
Once enabled, a team for the record will be created with the record owner added automatically as a team owner.

The same works, for changing owner operations:

If the Opportunity Record is changed, a new owner will be added to the team automatically.

> Note: The user will be added as an owner of all private channels as well.

![](/media/screenshot-2022-11-10-at-12-44-13.png)

If you don’t need ownership synchronization, simply disable the option.

> **Important note!** We highly recommend you disable the option if your users use different email addresses for HubSpot and Microsoft 365. Otherwise, nBold will not be able to create a team.

### 5. **Manage Notification**

You can choose to receive adaptive cards as notifications on your team's channel.  
The available options are:  
\- Opportunity Stage Field is updated  
\- Opportunity Amount Field is updated  
\- Opportunity Stage is Closed Won or Closed Lost

![](/media/screenshot-2022-11-14-at-13-26-32.png)

Once this is enabled, you will need to choose the teams and channel where you want adaptive cards to be sent (for example, notify your entire company about the closed deals). In this case, you can also change if you want adaptive cards posted with or without the GIFs. Please, see the examples below:

![](/media/screenshot-2022-11-14-at-14-20-01.png)

### 6. **End of team life: Sunset**

You can choose what to do with the team when the related Opportunity Record is Closed.

![](/media/screenshot-2022-11-10-at-13-01-14.png)

There are four available options between two scenarios (Closed Won and Closed Lost) from which you can select.

\- **Rename:** If you wish to rename the team, you can select this option (The team will have a new name in a format Opportunity Name – "Custom suffix”)

\- **Archive**: If you wish to archive the team, once the deal reaches the desired stage, you can select this option.  
\- **Delete:** If you wish to delete the team, once the deal reaches the desired stage, you can select this option.  
\- **Leave Unchanged:** If you don’t have any specific rules for the end of life, simply choose the “Leave Unchanged” option.

And it’s done! All the fields in the configuration form are submitted. Now it’s time to enable your solution – simply click on the “**Update**” button and close the Solution Card.

![](/media/screenshot-2022-11-10-at-13-03-36.png)

Once **enabled** – Salesforce integration with Collaboration Templates is started.

![](/media/screenshot-2022-11-10-at-13-07-28.png)

If you have any questions, please write to us at [support@nbold.co](mailto:support@nbold.co)

To know how to Update the Solution, click [here](/connected-apps/salesforce/Update-and-Uninstall-Salesforce-Solution).