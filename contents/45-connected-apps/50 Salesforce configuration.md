---

---
# Salesforce: Configuration and Settings

Once the authentication is added, you will see the configuration form.
Here, you can customize the solution according to your unique business needs.

![](/media/screenshot-2022-11-10-at-12-20-31.png)

1. **Choose the template**

   First, you will need to choose a template from which you wish to create a team.  
   Newly created teams will be cloned from this specific template.

   ![](/media/screenshot-2022-11-10-at-12-23-52.png)

   > **Note**: We highly recommend building a separate template for Deal Room with HubSpot to avoid any confusion within your governance policies in future.

Read more about Collaboration Template [here](https://docs.nbold.co/collaboration-templates/create-a-new-collaboration-template.html#_1-create-a-team-that-will-be-the-original-team-for-the-template)

2. **Team Creation  
     
   **During the configuration process, you define the filters for the team creation. At this point, you need to set up the Opportunity Stage Name and Opportunity Amount.

   For the **Opportunity Stage** simply pick the desired stage from the dropdown list which is already synchronized with your Salesforce.

   For the **Opportunity Amount**, enter the value in number format, with no spaces or non-numeric characters.  
   ![](/media/screenshot-2022-11-10-at-12-31-39.png)

> **Note:** Teams will be created only for those Opportunity records that achieved the right Stage and with an Amount greater or equal to the defined amount.

> **Tip**: If you don’t need the Amount Filter, simply type 0 value. In this case, teams will be created even for those records, which have a “null” value for the Amount field.

3. **Define Naming Convention  
     
   **By default, your team will be named in a format Team Name: “Opportunity Name”.

   In addition to this, you can enable the “Naming Convention” option to add the Opportunity Stage to the team's name. So, each team created for your Opportunity Records will be named in a format Team Name:” Opportunity Name – Prospecting".

   ![](/media/screenshot-2022-11-10-at-12-39-44.png)

   A team name will reflect the changes in your CRM as well.
4. **Synchronization between the Record and Team Owner**

   The next option is the synchronization between the owner of the deal record and the future deal owner.  
   Once enabled, a team for the record will be created with the record owner added automatically as a team owner.

   The same works, for changing owner operations:

   If the Opportunity Record is changed, a new owner will be added to the team automatically.

   > Note: The user will be added as an owner of all private channels as well.

   ![](/media/screenshot-2022-11-10-at-12-44-13.png)

If you don’t need ownership synchronization, simply disable the option.

> **Important note!** We highly recommend you disable the option if your users use different email addresses for HubSpot and Microsoft 365. Otherwise, nBold will not be able to create a team.

5. **Manage Notification**

     
   You can choose to receive adaptive cards as notifications on your team's channel.  
   The available options are:  
   \- Opportunity Stage Field is updated  
   \- Opportunity Amount Field is updated  
   \- Opportunity Stage is Closed Won or Closed Lost

   ![](/media/screenshot-2022-11-14-at-13-26-32.png)

     
   Once this is enabled, you will need to choose the teams and channel where you want adaptive cards to be sent (for example, notify your entire company about the closed deals). In this case, you can also change if you want adaptive cards posted with or without the GIFs. Please, see the examples below

   ![](/media/screenshot-2022-11-14-at-14-20-01.png)
6. **End of team life: Sunset**

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