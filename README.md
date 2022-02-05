![Classification:PUBLIC](https://img.shields.io/badge/🔖_Classification-PUBLIC-red)
[![license](https://img.shields.io/badge/©️_License-MIT-yellow?style=flat)](./LICENSE.md)
[![](https://img.shields.io/badge/semver-2.0.0-informational)](https://semver.org)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/nboldhq/docs)

# 👋 Welcome to the nBold documentation repository

## ABSTRACT
This repository hosts the contents of the [nBold Docs](https://docs.nbold.co/) website.

## 🚀 CONTRIBUTE

### Run locally

```sh
# Clone this repo
git clone https://github.com/nboldhq/docs.git
# Install dependencies
npm install
# Start VuePress in developer mode
npm run dev
```

### CI/CD
Deployment is automated by the [cicd](./.github/workflows/cicd.yml) GitHub Action:
1. Checkout the `main` branch when a push is detected
2. Build the static assets using the [VuePress](https://vuepress.vuejs.org/) `build` command and commit changes
3. Push changes to the `published` branch
4. The website is deployed by GitHub Pages

## 📃 Change Log
See [CHANGELOG](./CHANGELOG.md).

## 🛂 Code of Conduct
See [CODE OF CONDUCT](./CODE_OF_CONDUCT.md).

## 🔐 Security Policy
See [SECURITY](./SECURITY.md).

## © License
See [LICENSE](./LICENSE.md).
