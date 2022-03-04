# Docker Deployment

:::warning Warning
Hosting nBold on a docker server is for educational purpose only and is not considered as a supported production environment.
:::

This tutorial assumes you've already installed the common prerequisites from the [Getting Started](./getting_started) guide.

## Docker prerequisites
::: tip
To follow this tutorial, you'll need an installed and running Docker server.
If your server doesn't come with Docker pre-installed, you can follow [their docs](https://docs.docker.com/get-docker/) to install it.
:::

## Initialize the project

After cloning our [Hosting](https://github.com/nboldhq) repository, open the docker project directory:
```bash
cd ./terraform/docker
```

Initialize the terraform project using the `init` command, which downloads a plugin that allows Terraform to interact with Docker.
```bash
terraform init
```
When Terraform asks you to confirm type yes and press ENTER.

## Minimal configuration
nBold comes with safe defaults, but you still need to define some settings specific to your environment. To do so, open the `variables.tf` configuration file. It defines most of the configurable aspects of your environment.

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

For more information about all the available configuration settings, please refer to [Configuration Reference](/hosting/references/configuration-reference.md)

## Deploy
Now that you've defined your minimal configuration, you're ready to deploy your brand new nBold environment.

Before executing your project, validate your configuration using the `plan` command.
```bash
terraform plan
```
This command generates a human-readable version of your configuration and helps you validate the changes that are gonna be performed on your environment before actually executing it.

Once validated, execute the plan using the `apply` command:
```bash
terraform apply
```

You can now verify your installation by visiting [http://localhost:8000/home](http://localhost:8000/home) in your web browser.

::: tip Tip
You can also the the list of running containers with:
```bash
docker ps
```
:::

> Congrats! You've now provisioned a full-featured nBold environment.

## Next steps
At this stage, you should have a basic installation of nBold going. The latest step is to [generate your Microsoft Teams package](./teams_package)
