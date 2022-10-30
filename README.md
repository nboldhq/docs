[![license](https://img.shields.io/badge/©️_License-MIT-yellow?style=flat)](./LICENSE.md)
[![](https://img.shields.io/badge/semver-2.0.0-informational)](https://semver.org)

# 👋 Welcome to the nBold documentation repository

## ABSTRACT
This repository hosts the contents of the [nBold Docs](https://docs.nbold.co) website.

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
4. The website is deployed to Azure static website

### Links check
After every push:
1. A check is done from the public website (from https://docs.nbold.co) to identify broken links using the [Broken Link Checker](https://www.npmjs.com/package/broken-link-checker) module.
2. The result of this check is published as a new issue, automatically pinned to the top of the [Issues page](https://github.com/nboldhq/docs/issues).

## 🆘 Support
See [SUPPORT](./SUPPORT.md)

## 📝 Contributing
See [CONTRIBUTING](./CONTRIBUTING.md)

## 🛂 Code of Conduct
See [CODE OF CONDUCT](./CODE_OF_CONDUCT.md).

## 🔐 Security Policy
See [SECURITY](./SECURITY.md).

## © License
See [LICENSE](./LICENSE.md).
