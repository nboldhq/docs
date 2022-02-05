---
permalink: /blog/export-microsoft-teams-team-members
title: Export the owners and members of a Microsoft Teams team as a CSV file
description: Discover how to exports the owners and members of a Microsoft Teams team as a CSV file. 
image: https://docs.nbold.co/img/blog/export-teams-team-members.jpg
author:
  name: Guillaume Meyer
  profile: https://twitter.com/guillaumemeyer
date: 2020-08-28
tags:
  - teams
  - export
  - team
  - members
  - microsoft
---

# Export the owners and members of a Microsoft Teams team
<BlogHeadline />

::: warning Warning
This solution is a quick and dirty hack to export the owners and members of a team when you don't have administrative access, and does not intend to be used in production environments.  
As of today, the following properties are exported:
- Display name
- Title
- Location
- Role
- UPN
:::

## Usage

1. Open your team **in a web browser**
2. Select `Manage team` from its menu
3. Select the `Members` tab
4. Expand the `Owners` and `Members and guests` sections
5. Make sure to scroll down to the end of the owners and members lists to include all of them in your export (as the members are loaded on demand)

You should see something like:

![Microsoft Teams members list](/img/blog/export-teams-team-members-list.png)

6. Open your browser console with `CTRL + SHIFT + I`
7. Copy and paste all the content of this script to the console

```js
$(function() {
  
  // **************
  // Initialization
  // **************
  const csvFileName = 'team-membership-roster-export.csv'
  const csvDelimiter = ','
  const csvHeader = 'Display Name' + csvDelimiter + 'Title' + csvDelimiter + 'Location' + csvDelimiter + 'Role' + csvDelimiter + 'UPN' + '\r\n' // CSV header row
  let csvContent = csvHeader // Initialize CSV content
  const rosterLength = $('.td-member-display-name').length // Number of visible members
  
  // Check if we're an owner of the team
  let roleSelector = '.td-member-role' // Consider we're not an owner by default
  if ($('.td-member-editable-role').length > 0) {
    roleSelector = '.td-member-editable-role' // Override if we're an owner
  }
  
  // ************************
  // Iterate over each member
  // ************************
  for (let index = 0; index < rosterLength; index++) {
    // Extract the display name, title, location and role
    const displayName = $('.td-member-display-name').eq(index).text()
    const title = $('.td-member-title').eq(index).text()
    const location = $('.td-member-location').eq(index).text()
    const role = $(roleSelector).eq(index).text()
    const upn = $('.td-member-photo img').eq(index).attr('upn')
    // Append to the CSV content
    const csvRow = displayName + csvDelimiter + title + csvDelimiter + location + csvDelimiter + role + csvDelimiter + upn + '\r\n'
    csvContent += csvRow
  }

  // Debug the export to console
  console.info(rosterLength + ' members exported:')
  console.info(csvContent)

  // **********************************************************
  // Dynamically generates a CSV file and triggers its download
  // **********************************************************

  // Create a dynamic "a" tag
  var element = document.createElement('a')
  // Set href link with content
  element.setAttribute(
    'href',
    'data:application/json;charset=utf-8,' + encodeURIComponent(csvContent)
  )
  // Set downloaded file name
  element.setAttribute('download', csvFileName)
  // Hide the elemement and add it to the page
  element.style.display = 'none'
  document.body.appendChild(element)
  // Launch download
  element.click()
  // Remove element
  document.body.removeChild(element)
})
```

::: tip
See the up to date source code from this [GitHub Gist](https://gist.github.com/guillaumemeyer/fe4ed1b818c5d99eabff1c792a366f71)
:::

8. Type `Enter`
9. The CSV file download should start automatically



10. Enjoy!

<Comments />
