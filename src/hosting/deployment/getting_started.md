# Getting Started

**TABLE OF CONTENTS**
[[TOC]]

---

## Deployment overview
nBold is designed to be self-hosted from:
- A local or remote Docker service
- Your Microsoft Azure tenant

Here is an overview of the different steps to deploy a nBold environment:
```mermaid
graph LR
    %% Nodes
    subgraph cp[Setup common prerequisites]
        terraform(Install<br>Terraform)
        projecttemplates(Get deployment<br>projects templates)
        appreg(Register your app<br>in Azure AD)
    end
    subgraph docker[Deploy to Docker]
        dockerprereq(Setup Docker<br>prerequisites)
        dockerdeploy(Deploy)
    end
    subgraph azure[Deploy to Azure]
        azureprereq(Setup Azure<br>rerequisites)
        azuredeploy(Deploy)
    end
    package(Create Microsoft<br>Teams package)
    %% Styles
    classDef startend fill:#9099d8, stroke-width:0px;
        class s startend
        class e startend
    %% Links
    terraform --> projecttemplates
    projecttemplates --> appreg
    appreg --> dockerprereq
    dockerprereq --> dockerdeploy
    appreg --> azureprereq
    azureprereq --> azuredeploy
    dockerdeploy --> package
    azuredeploy --> package
```

::: tip
**`nBold Self-Hosted` comes with batteries included!**
You don't have to be a Docker or Azure expert to run your own nBold platform!
You should just have a basic understanding of the command-line and networking to successfully set up your own full-featured environment.
:::

This getting started tutorial will guide you through the different steps required to setup the minimal common prerequisites.

## Next steps
Install the [common prerequisites](./common_prerequisites).
