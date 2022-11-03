---

---
# HubSpot: Configuration and Settings

Once the authentication is added, you will see the configuration form.  
Here, you can customize the solution according to your unique business needs.

1. **Choose the template**

   First, you will need to choose a template from which you wish to create a team.  
   Newly created teams will be cloned from this specific template.

   ![](https://user-images.githubusercontent.com/112711544/199476804-1e1f31b4-9c84-4046-aa79-d59dc45c1bc6.png)

   > **Note**: We highly recommend building a separate template for Deal Room with HubSpot to avoid any confusion within your governance policies in future.

Read more about Collaboration Template [here](https://docs.nbold.co/collaboration-templates/create-a-new-collaboration-template.html#_1-create-a-team-that-will-be-the-original-team-for-the-template)

2. **Team Creation**

     
   This step has three categories that you need to fill, and the teams will be created only for those deal records that achieved the right stage and with an amount greater or equal to the amount you configured.

   i. **Pipeline**: Pick the desired pipeline and stage from the dropdown list which is already synchronised with your HubSpot environment.  
   ii. **Deal Stage**: Select the Deal Stage you want to create the template for  
   iii. **Deal Amount**: Enter the value in number format, with no spaces or non-numerical characters.  
     
   If you don’t really need the amount filter, simply enter 0, as the amount value. In this case, teams will be created no matter the deal amount.

![](https://user-images.githubusercontent.com/112711544/199488873-c0383d14-7b70-47bb-bd56-75aeb647080e.png)

3. **Synchronization between the record and team owner**

     
   The next option is the synchronization between the owner of the deal record and the future deal owner.  
   Once enabled, a team for the record will be created with the record owner added automatically as a team owner.

   The same works, for changing owner operations:  
   If the deal record is changed, a new owner will be added to the team automatically.

   > **Note**: the user will be added as the owner of all private channels as well.

  
If you don’t need ownership synchronization, simply disable the option.

> **Important note!** We highly recommend you disable the option if your users use different email addresses for HubSpot and Microsoft 365. Otherwise, nBold will not be able to create a team.

4. **End of team life: Sunset**

     
   You can choose what to do with the team when your deal reaches the final stage. There are four available options from which you can select.

   ![](/media/screenshot-2022-11-03-at-11-00-30.png)
5. **Manage Notifications**

   You can choose to receive notifications at various stages of deals.  
   You can receive adaptive cards when:

   \- The deal stage is updated

   \- The deal amount is updated

   \- Deal stage reaches the corresponding closed won or closed lost stage

     
   Now, Select the team and channel to receive those updates.

   You can also choose to enable sending the GIFs in the notification.

   ![](/media/screenshot-2022-11-03-at-15-09-57.png)

   Now it’s time to enable your solution!