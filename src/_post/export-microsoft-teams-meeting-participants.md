---
permalink: /blog/export-microsoft-teams-meeting-participants
title: Export the participants of a Microsoft Teams meeting as a CSV file
description: Discover how to exports the participants of a Microsoft Teams meeting as a CSV file. 
image: https://docs.nbold.co/img/blog/export-teams-meeting-participants.jpg
author:
  name: Guillaume Meyer
  profile: https://twitter.com/guillaumemeyer
date: 2020-08-29
tags:
  - teams
  - export
  - meeting
  - participants
  - microsoft
---

# Export the participants of a Microsoft Teams meeting
<BlogHeadline />

::: warning Warning
This solution is a quick and dirty hack to export the participants of a Microsoft Teams meeting when you don't have administrative access, and does not intend to be used in production environments.  
As of today, the following properties are exported:
- Display name
- UPN
:::

## Usage

1. Open your meeting **in a web browser**
2. Click on the participants list to open the popover

You should see something like:

![Microsoft Teams meeting participants](/img/blog/export-teams-meeting-participants-list.png)

3. Open your browser console with `CTRL + SHIFT + I`
4. Copy and paste all the content of this script to the console

```js
$(function() {
  
  // **************
  // Initialization
  // **************
  const csvFileName = 'team-meeting-participants-export.csv'
  const csvDelimiter = ','
  const csvHeader = 'Display Name' + csvDelimiter + 'UPN' + '\r\n' // CSV header row
  let csvContent = csvHeader // Initialize CSV content
  const participantsLength = $('.participant-title').length // Number of visible participants

  // *****************************
  // Iterate over each participant
  // *****************************
  for (let index = 0; index < participantsLength; index++) {
    // Extract the display name (trimming extra spaces and line breaks)
    const displayName = $('.participant-title').eq(index).text().replace(/\s+/g,' ').trim().replace(/\n/g, " ")
    // Extract upn
    const upn = $('.popover-content .person-profile img').eq(index).attr('upn')
    // Append to the CSV content
    const csvRow = displayName + csvDelimiter + upn + '\r\n'
    csvContent += csvRow
  }

  // Debug the export to console
  console.info(participantsLength + ' participants exported:')
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
See the up to date source code from this [GitHub Gist](https://gist.github.com/guillaumemeyer/4a3e2788ba0d3d06a7cf273140cc0a73)
:::

5. Type `Enter`
6. The CSV file download should start automatically
7. Enjoy!

<Comments />
