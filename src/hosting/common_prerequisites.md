# 🏁 Setup common prerequisites

**TABLE OF CONTENTS**:
[[toc]]

---

## Install Terraform
Our deployment projects templates for both Docker and Azure rely on the infrastructure-as-code solution [Terraform](https://www.terraform.io/).

::: tip Note
For this tutorial, we assumes you're running a debian-based distro (such as ubuntu), either from a native Linux box, or WSL from Windows.
For other platforms, see how to [install terraform cli](https://learn.hashicorp.com/tutorials/terraform/install-cli)
:::

Before installing Terraform, ensure that your system is up to date, and you have the gnupg, software-properties-common, and curl packages installed. You will use these packages to verify HashiCorp's GPG signature, and install HashiCorp's Debian package repository.
```bash
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl
```

Add the HashiCorp GPG key.
```bash
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
```

Add the official HashiCorp Linux repository.
```bash
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
```

Update apt to add the repository, and install the Terraform CLI.
```bash
sudo apt-get update && sudo apt-get install terraform
```

Check the installation with:
```bash
terraform -v
```

## Get the deployment projects templates
To get started quickly, clone locally the SalesTim [Hosting](https://github.com/SalesTim/hosting) repository as a starting point. It has everything you need to boot up your own SalesTim platform.
```bash
mkdir salestim && cd salestim
git clone https://github.com/SalesTim/hosting.git
cd ./hosting
```

From this repository, you'll find:
- A Terraform project to provision a SalesTim environment on your own Docker server
- Another Terraform project to provision a SalesTim environment on your own Azure tenant

## Create a new app registration in Azure Active Directory
To enable SalesTim to securely access your Microsoft 365 environment through the Microsoft Graph APIs, the first step is to create a dedicated app registration. An Azure AD app registration identifies a third-party app such as SalesTim, and defines the permissions you wan to grant to it. To learn more, you can refer to [How and why applications are added to Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-how-applications-are-added).

To create a new app registration, follow these steps:
- Open your [Azure Active Directory portal](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview)
- Select `App registrations` from the left menu
- Click `New registration` from the top bar
- Give the app a name:
```
SalesTim
```
- Select the option `Accounts in this organizational directory only`, as you want to restrict access to SalesTim to users from your own tenant.
- Define the web redirection URLs according to your environment:
```
https://[WEB_PUBLICURL]/auth/service_account/return_admin_consent
https://[WEB_PUBLICURL]/auth/grant/return
https://[WEB_PUBLICURL]/auth/openid/returnAdminConsent
https://[WEB_PUBLICURL]/auth/openid/return
```
- Click `Register`
- From the `Overview` menu, copy the `Application (client) ID`, and **keep it as we're gonna reuse it later**.
- Open the `Authentication` menu
- Ensure that the `Access tokens (used for implicit flows)` and `ID tokens (used for implicit and hybrid flows)` options are checked from the `Implicit grant and hybrid flows` section, and save your updates if required.
- Open the `Certificates and secrets` menu and click `New client secret`. **A client secret is a kind of a password for your app, so manage it carefully**.
- Give a name to your client secret such as:
```
SalesTim client secret
```
- Select the expiration option, and click `Add`
- Copy the `Secret Value` value (**be careful, it will only be shown once**), and keep it as we're gonna reuse it later.
::: warning Be careful
You should use the `Secret Value`, not the `Secret ID`!  
:::
- Open the `API permissions` from the left menu and click `Add a permission` from the top bar
- Select `Microsoft Graph`, then from the permissions list, select the appropriate permissions as described in our [Permissions References](../references/permissions) documentation.
- Click `Add permissions`
- Then click `Grant admin consent for...` then `Yes`

You're done, you've created your app registration for the SalesTim app. You should also have saved for later the `Application (client) ID` and `Client secret` that we're gonna use in the next steps.

> Congrats! You're now ready to deploy your SalesTim environment.

## Next steps
Just follow the appropriate guide for your target deployment environment:
- [Docker Deployment](./docker_deployment)
- [Azure Deployment](./azure_deployment)
