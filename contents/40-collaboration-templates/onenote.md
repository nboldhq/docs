---
tags:
- microsoft-onenote
author: Guillaume Meyer

---
# OneNote

Finally, we're happy to announce that now you can clone your 📓 OneNote tabs across the Collaboration Templates 🎉

## How to clone OneNote tabs as part of Collaboration templates?

To include your OneNote, just add a new tab to your original team (template team).

![](/media/screenshot-2022-08-05-at-18-14-46.png)

Once, you click on the + icon to add the OneNote Tab, you will be able to:

* Choose the default team notebook or create a new one
* Create a new section or choose existing sections from the default team Notebook​

> **Please Note**: You can create a page too, but currently, cloning of pages as a new file is not supported. This means if your template has a OneNote **Page** tab, then the Page in the newly created team will point to the default file and not a new one.

And now your OneNote tab is automatically replicated to any team created from this template!

![](/media/screenshot-2022-08-05-at-18-16-44.png)

:::warning ⚠️ Note For this feature to work, you need to grant the nBold app the `Notes.ReadWrite.All` permission. To do so, use the `Check admin consent` command from the `Settings` tab. :::

## Key features

These elements will be created as part of the provisioning process:

* Notebooks
* Notes
* Section groups
* Sections

## Where are your notebooks located?

In your newly created team, all your notebooks are stored in the `Notebooks` folder in the destination default documents library. The folder is created if it doesn't exist.

## Non-supported features

* OneNote Page Tabs
* OneNote tabs from the original team pointing to notebooks stored outside of the team (In another team, or in another SharePoint site) will NOT be cloned and will still target the same notebook in the newly created team.