---
status: published
tags:
- mslists
position: 8
author: Microsoft Lists

---
# Microsoft Teams Lists
***

**TABLE OF CONTENTS**
[[toc]]

***
***

### How to clone Microsoft Lists as part of Collaboration templates

Finally, we're happy to announce that now you can clone your MS Lists across the Collaboration Templates 🎉

To include your List, just add a new tab to your Original team (template team).

![](/media/screenshot-2022-07-13-at-18-57-13.png)

***

## Supported Microsoft Lists features

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

***

## Non supported Microsoft Lists features

The following column types are not supported (and will not be cloned as part of the provisioning process):

* lookup
* term
* contentApprovalStatus

These elements are not preserved during items cloning:

* Versions
* Attachments

These views characteristics are not supported:

* Custom formatting
* Conditional formatting