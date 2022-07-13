---
status: published
tags: []
position: 3
author: Kristina Konstantnyova

---
# Allow nBold App and assign the right Teams Permission Policies

***

**TABLE OF CONTENTS** \[\[toc\]\]

***

In some organizations, 3rd Party Apps are blocked in Teams. To make sure you can proceed to the nBold App and the Home App install, you need to verify this:

### 1. Allow nBold App to appear to users.

In this step you ensure that the nBold is allowed in the tenant:

* In the teams Admin Portal go to: [Manage apps - Teams admin center](https://admin.teams.microsoft.com/policies/manage-apps).
* Search for nBold select and click "Allow"

![](/media/allow-2.png)

### 2. Give permission to users to install nBold

In the next step, you make sure that the nBold App can be installed on Teams for users.

* Go to [App permission policies - Teams admin center](https://admin.teams.microsoft.com/policies/app-permission)
* Select the policy Global

![](https://downloads.intercomcdn.com/i/o/296058917/e23dcf442aed7e20cf6693de/image.png)

You might find that 3rd Party App and Custom App are not allowed.

![](https://downloads.intercomcdn.com/i/o/296060994/80c04b3a5e5afcc1161d28c0/image.png)

Then chose Allow Specific Apps and Block all Others.

![](https://downloads.intercomcdn.com/i/o/296061679/53bb25cdb7b09ee625ac6855/image.png)

Then choose nBold from "Add third-party apps".

Then you'll have this:

![](/media/allow-1-1.png)

Then repeat this for the Home App _(assuming you already added the App as described in Step 1 and 2 of this doc)_

![](/media/allow2-2.png)

Now you should see this:

![](/media/allow3-1.png)

Click on Save and you're all set!