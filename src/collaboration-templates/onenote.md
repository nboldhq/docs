---
status: published
tags:
- onenote
position: 8
author: Guillaume Meyer
---
# OneNote

**TABLE OF CONTENTS**
[[toc]]

***

## How to clone Onenote tabs as part of Collaboration templates?

Finally, we're happy to announce that now you can clone your 📓 OneNote tabs across the Collaboration Templates 🎉

To include your OneNote, just add a new tab to your original team (template team).

:::warning ⚠️ Note
For this feature to work, you need to grant the nBold app the `Notes.ReadWrite.All` permission. To do so, use the `Check admin consent` command from the `Settings` tab.
:::

## Key features

These elements will be created as part of the provisioning process:

* Notebooks
* Notes
* Section groups
* Sections
* Pages
* Resources

## Where are your notebooks located?

In your newly created team, all your notebooks are stored to the `Notebooks` folder in the destination default documents library. The folder is created if it doesn't exist.

## Non-supported features

OneNote tabs from the original team pointing to notebooks stored outside of the team (In another team, or in another SharePoint site) will NOT be cloned and will still target the same notebook in the newly created team.