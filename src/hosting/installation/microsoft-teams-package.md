# Create your Microsoft Teams package

Start by downloading our latest package template from [this URL](https://assets.nbold.io/packages/io.nbold.standalone.self.zip) or from the command line:
```bash
mkdir -p packages/standalone && cd packages/standalone
curl https://assets.nbold.io/packages/io.nbold.standalone.self.zip -o io.nbold.standalone.self.zip
```

Then unzip the package manually or from the command line:
```bash
unzip io.nbold.standalone.self.zip
```

Each package is comprised of the following files:
- `manifest.json`: The main package manifest
- `es-es.json`: Spanish localization file
- `fr-fr.json`: French localization file
- `it-it.json`: Italian localization file
- `color.png`: The package color icon
- `outline.png`: The package outline icon

Then configure the `manifest.json` file by replacing these following placeholders with your actual configuration:
- `[[MICROSOFT_TEAMS_APP_MANIFEST_ID]]`: A unique id to uniquely identify your package, using UUID version 4 format, such as `ea86caa9-2d39-477a-a9af-5f3f6a3829de`. You can use [this tool](https://www.uuidgenerator.net/version4) to generate a new unique one.
- `[[MICROSOFT_TEAMS_APP_MANIFEST_PACKAGE_NAME]]`: A unique name for your package. The recommended format is the [Reverse domain name notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation), such as `com.example.MyProduct`.
- `[[NBOLD_APP_PUBLICURL]]`: The public URL of your nBold service. by default, use `https://app.salestim.io`.
- `[[MICROSOFT_TEAMS_APP_MANIFEST_VALID_DOMAINS]]`: The list of domains the package is authorized to access. By default, use `"*.salestim.io","*.nbold.io"`.
- `[[MICROSOFT_TEAMS_APP_MANIFEST_WEBAPPLICATIONINFO_ID]]`: The nBold app Microsoft app registration client ID. By default, use `2a651f59-97ce-42bb-97d7-cf7a2af4b635`.
- `[[MICROSOFT_TEAMS_APP_MANIFEST_WEBAPPLICATIONINFO_RESOURCE]]`: The nBold Microsoft app registration resource URL. By default, use `api://app.salestim.io/2a651f59-97ce-42bb-97d7-cf7a2af4b635`.

In addition, you can customize the following other properties:
- `version`: The package version using the [semver](https://semver.org/) format, such as `1.0.0`.
- `name`:
  - `short`:
  - `full`:
- `description`:
  - `short`:
  - `full`:
- `icons`:
  - `color`:
  - `outline`:
- `accentColor`:

Save your updates.

Then build your package by adding all the assets to the zip archive, manually or from the command line:
```bash
zip io.nbold.standalone.self.zip *.json *.png
```

::: tip
The zip utility is not installed by default in most Linux distributions, but you can easily install it using your distribution package manager if you need it.
```bash
sudo apt install zip
```
:::

You can now go to Microsoft Teams and upload the package as a custom app.

> Congrats! You can now use your customized nBold package from Microsoft Teams.
