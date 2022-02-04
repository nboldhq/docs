# 🚀 Azure Deployment <Badge text="draft" type="error"/>

This tutorial assumes you've already installed the common prerequisites from the [Getting Started](./getting_started) guide.

## Azure prerequisites
::: tip
To follow this tutorial, you'll use the `az` [Azure Command-Line Interface](https://docs.microsoft.com/en-us/cli/azure/). If required, please refer to:
- [How to install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Get started with Azure CLI](https://docs.microsoft.com/en-us/cli/azure/get-started-with-azure-cli)
:::

## Initialize the project

After cloning our [Hosting](https://github.com/SalesTim/hosting) repository, open the azure project directory:
```bash
cd ./terraform/azure
```

Initialize the terraform project using the `init` command, which downloads a plugin that allows Terraform to interact with Azure.
```bash
terraform init
```
When Terraform asks you to confirm type yes and press ENTER.

## Minimal configuration
SalesTim comes with safe defaults, but you still need to define some settings specific to your environment. To do so, open the `variables.tf` configuration file. It defines most of the configurable aspects of your environment.

Locate these keys and define the appropriate value in the `default` field:
```hcl
variable "WEB_PUBLICURL" {
  description = "Public URL of the web tier"
  type        = string
  default     = ""
}

variable "API_PUBLICURL" {
  description = "Public URL of the api tier"
  type        = string
  default     = ""
}

variable "MICROSOFT_APP_CLIENT_ID" {
  description = "Microsoft Azure AD app registration client ID."
  type        = string
  default     = ""
}

variable "MICROSOFT_APP_CLIENT_SECRET" {
  description = "Microsoft Azure AD app registration client Secret."
  type        = string
  default     = ""
}
```

For more information about all the available configuration settings, please refer to [Configuration Reference](../references/configuration_reference)

## Deploy
Now that you've defined your minimal configuration, you're ready to deploy your brand new SalesTim environment.

Before executing your project, validate your configuration using the `plan` command.
```bash
terraform plan
```
This command generates a human-readable version of your configuration and helps you validate the changes that are gonna be performed on your environment before actually executing it.

Once validated, execute the plan using the `apply` command:
```bash
terraform apply
```

You can now verify your installation by visiting [http://YOUR_AZURE_PUBLIC_URL/home](http://YOUR_AZURE_PUBLIC_URL/home) in your web browser.

::: tip Tip
You can also the the list of running containers with:
```bash
docker ps
```
:::

> Congrats! You've now provisioned a full-featured SalesTim environment.

## Next steps
At this stage, you should have a basic installation of SalesTim going. The latest step is to [generate your Microsoft Teams package](./teams_package)
