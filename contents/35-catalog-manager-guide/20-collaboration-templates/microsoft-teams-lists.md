---
author: Guillaume Meyer
tags:
- microsoft-lists
---
# Microsoft Teams Lists

We're happy to announce that now you can clone your MS Lists across the Collaboration Templates 🎉

## How to clone Microsoft Lists as part of collaboration templates?

* To include your List, just add a new tab to any channel in your Original team from the "Add a tab" menu as shown on the screenshot. ( [Create an original team](/quickstart/create-a-new-collaboration-template))

![](/media/screenshot-2022-07-13-at-18-57-13.png)

* Create a new one from scratch or templates

![](/media/screenshot-2022-08-05-at-17-45-34.png)

![](/media/screenshot-2022-08-05-at-18-06-09.png)

* Or choose an existing list

![](/media/screenshot-2022-08-05-at-18-03-32.png)

And now your Lists tab is automatically replicated to any team created from this template!

:::warning ⚠️ Note
For this feature to work, you need to grant the nBold app the `Sites.FullControl.All` permission. To do so, use the `Check admin consent` command from the `Settings` tab.
:::

## Key features

These elements will be created as part of the provisioning process:

* List
* Columns
* Views
* Items

More specifically, here are the column types currently supported:

* boolean
* calculated
* choice
* currency
* dateTime
* geolocation
* number
* personOrGroup
* text
* hyperlinkOrPicture
* thumbnail

## Non-supported features

The following column types are NOT supported (and will not be cloned as part of the provisioning process):

* lookup
* term
* contentApprovalStatus

These elements are NOT preserved during items cloning:

* Versions
* Attachments

These views characteristics are NOT supported:

* Custom formatting
* Conditional formatting