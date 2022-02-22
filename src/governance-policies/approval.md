---
position: 2
status: published
author: Guillaume Meyer

---
# Team creation approval workflow

**ABSTRACT**  
This article describes the different options you have to configure your team creation approval workflow.

---

**TABLE OF CONTENTS**
[[toc]]

---

## Understanding your options
Team creation approval workflow in nBold could be configured using one of these options:
- [Approval email sent by nBold](#approval-email-sent-by-salestim): This is the default and easiest option, works without any configuration.
- [Approval email sent by your organization](#approval-email-sent-by-your-organization): If you need advanced security/compliance control over your notification emails.
- [Microsoft Teams Approval App](#microsoft-teams-approval-app): A Microsoft Teams native experience, that you can customize using Power Automate or Logic Apps.
- [Use your own custom app](#use-your-own-custom-app): Bring your own aproval workflow as a custom application.

## Approval email sent by nBold

### How does it work?
This is the option enabled by default in any new organization, and doesn't require any configuration. In this mode, the approval process is implemented as an Outlook actionable email, send from the `notifications@salestim.io` address.

![nBold Approval Workflow Actionable Message](/img/nocode/approval-actionable-message.png)

::: tip 📧 IMPORTANT
nBold does **NOT** collect **ANYTHING** from these notification emails, neither openings, nor clicks, and does not include any invisible image or other form of tracker.
:::

### What about security?   
Actionable messages security is guaranteed by:
- The fact that the actionable message could only be used from the context of a secured Outlook client, and that end-user authentication is entirely managed by the Outlook client (Desktop, Web and Mobile) by providing to the actionable message the required token.
- A sender verification is enforced using signed cards. See: [Sender verification
](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#sender-verification)
- Phishing prevention is ensured by using a [Card Signing](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#signed-card-payloads) mechanism
- Requests sent by the actionable message are verified to ensure that they originate from Microsoft. See: [Verifying that requests come from Microsoft](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-that-requests-come-from-microsoft)
- The token provided by Outlook to the actionable message is used to verify the end-user identity. See: [Verifying the identity of the user](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-the-identity-of-the-user).

Learn more by reading [Security requirements for actionable messages in Office 365](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements).

::: tip 💡 Configure Exchange safelist collections on a mailbox
As a Microsoft 365 administrator, you can directly manage an end-user mailbox rules, and add the `notifications@salestim.io` address to its "Safe Senders" list.  
See [Use Exchange Online PowerShell to configure the safelist collection on a mailbox](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes?view=o365-worldwide#use-exchange-online-powershell-to-configure-the-safelist-collection-on-a-mailbox)
:::

## Approval email sent by your organization

### How does it work?
For advanced control over your approval notification emails (for instance to implement custom Exchange transport rules), you can configure nBold to send your approval emails from your own internal email as a sender.

### What do I have to do?
You need to enable the service account that you configured in nBold to be authorized to send actionable messages. For that, and to ensure the security around the messages that are sent, Microsoft require to follow these quick steps: 

1. Open the [Actionable Email Developer Dashboard](https://aka.ms/publishoam) and login with a Microsoft 365 user with `Exchange Administrator` or `Global administrator` permissions.

2. Select `New provider`

![nBold Approval Actionable Message New Provider 2](/img/nocode/approval-actionable-message-new-provider-add.png)

3. Fill the form:
    - Friendly Name: `nBold` Or `Teams Approval` for example
    - Provider Id (originator): Copy the value that is **Automatically generated** 
    - Organization Info: **Automatically generated**
    - Sender email address from which actionable emails will originate: **Your service account email address**
    - Target URLs: `https://api.salestim.io`
    - Public Key:
    ```xml
    <RSAKeyValue><Modulus>k0Qqob12HSdll52CbnXkQNW6nZO9477sE9pI8Y6z5M8hPtJinAf2r41Sxss3Y9oP1nzcfs3fHpi1AUjffyD44I2FxmqF+FGfgKsuWeYce/75Kb1QCEDOwTjP4kqgPD8NeJbWNIe2ZRRKilmxmmUZ6NErNEWvf8vzQvvpVeP9CLUIERuBxLlLlitjNTyCUjgTTkC+giKtmcxTnJ/lUav3erPsev8isS+IQwz6SaXCqj/eYnFkhM2ADF2UCL4ssgHEj6jYe4m8IyMQBgxxr4+4fziixn0uimGQqt54VbT4BToq7l7S8wSj3WNRwR7KBBWvo6pnx39fDMWazfLbe5NmsQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>
    ```
    - Logo: **You can use the [nBold Logo](https://docs.nbold.co/color.png)**
    
   ![nBold Approval Actionable Message New Provider Form](/img/nocode/approval-actionable-message-new-provider-form.png)
    
    - Scope of submission: `Organization`
    - Additional Information: **One of your Microsoft 365 Exchange or Global administrators**  
<br/>

4. Before submitting the form, ***BE SURE TO COPY THE PROVIDER ID VALUE***

5. Accept the terms and conditions and hit "Save"

![nBold Approval Actionable Message New Provider Form 2](/img/nocode/approval-actionable-message-new-provider-form-2.png)

6. Wait for your Microsoft 365 Exchange or Global administrators to approve this request
![nBold Approval Actionable Message New Provider Pending Approval](/img/nocode/approval-actionable-message-new-provider-pending-approval.png)

7. Global Admin and Exchange Administrators are then receiving the request in inbox that needs to be approved. 

![nBold Approval Actionable Message New Provider Approval email](/img/nocode/approval-actionable-message-new-provider-approval-email.png)

 - the administrator needs to approve: 

![nBold Approval Actionable Message New Provider Approve](/img/nocode/approval-actionable-message-new-provider-approve.png)

 - The Provider is then confirmed as approved
 
![nBold Approval Actionable Message New Provider Approved](/img/nocode/approval-actionable-message-new-provider-approved.png)

8. Open the nBold Settings tab and open "Approval" and check the "Enable organization-level provider" option
9. Paste the provider id you copied in the step 3 and hit "Save"

From the nBold Catalog, you should now be able to enable the approval workflow on your templates (You may have to refresh the page to see your changes).

For more details about this procedure, you may refer to [Register your service with the actionable email developer dashboard](https://docs.microsoft.com/en-us/outlook/actionable-messages/email-dev-dashboard).

### What about security?   
Actionable messages security is guaranteed by:
- The fact that the actionable message could only be used from the context of a secured Outlook client, and that end-user authentication is entirely managed by the Outlook client (Desktop, Web and Mobile) by providing to the actionable message the required token.
- A sender verification is enforced using signed cards. See: [Sender verification
](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#sender-verification)
- Phishing prevention is ensured by using a [Card Signing](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#signed-card-payloads) mechanism
- Requests sent by the actionable message are verified to ensure that they originate from Microsoft. See: [Verifying that requests come from Microsoft](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-that-requests-come-from-microsoft)
- The token provided by Outlook to the actionable message is used to verify the end-user identity. See: [Verifying the identity of the user](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-the-identity-of-the-user).

Learn more by reading [Security requirements for actionable messages in Office 365](https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements).

## Microsoft Teams "Approval" app
Instead of relying on Outlook actionable emails, you can leverage the [Microsoft Teams Approvals app](https://support.microsoft.com/en-us/office/what-is-approvals-a9a01c95-e0bf-4d20-9ada-f7be3fc283d3) to implement your team creation approval workflow.

![nBold Approval Workflow with Approval App](/img/nocode/approvals-app.png)

This options brings some valuable benefits and new options:
- Multi-stage approvals
- Dynamic approvers list (for instance based on the requester profile and manager) 
- Integration with third-party apps

To learn more about this option, please read the [Power Platform and Logic Apps Connectors](/connectors/) documentation, and refer to these connector's triggers that you can leverage from Microsoft Power Platform and Azure Logic Apps:
- [When a Team Creation Approval is Requested](/connectors/connectors-actions.md#when-a-team-creation-approval-is-requested-🛃)
- [When a Team Creation is Approved](/connectors/connectors-actions.md#when-a-team-creation-is-approved-✅)
- [When a Team Creation is Rejected](/connectors/connectors-actions.md#when-a-team-creation-is-rejected-🚫)

## Use your own custom app
Instead of relying on Outlook actionable emails, you can use your own custom application to manage approval workflows.

![nBold Approval Workflow with Custom App](/img/nocode/custom-approval.png)

To learn more about this option, please read the [nBold API](/api/) documentation, and refer to these webhooks that you can leverage from your custom application:
- [Team Creation Approval Requested](/api/webhooks.md#team-creation-approval-requested)
- [Team Creation Approved](/api/webhooks.md#supported-events)
- [Team Creation Rejected](/api/webhooks.md#team-creation-rejected)