# Versioning strategy

nBold follows [semantic versioning](https://semver.org/) format: `MAJOR.MINOR.PATCH`

The default `latest` tag of our Docker images always refers to the latest stable release tag. You can also pin your version, for instance:
* `nboldhq/app-platform:v2` pins the major version to `2` but allows minor and patch version upgrades
* `nboldhq/app-platform:v2.2` pins the minor version to `2.2` but allows only patch upgrades

::: warning Backward compatibility
**None of the functionality is backported to older versions**. If you wish to get the latest bug fixes and security updates you need to upgrade to a newer version.
:::

::: warning About database schema
Please note that **database schema changes require running migrations when you're upgrading**. However, we consider the schema
as an internal API and therefore schema changes are not considered a breaking change.
:::

Version changes are documented in our [Changelog](https://assets.nbold.io/CHANGELOG).
