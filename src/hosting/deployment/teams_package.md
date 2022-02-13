# Create your Microsoft Teams package

Start by downloading our latest package template:
```bash
mkdir -p packages/standalone && cd packages/standalone
curl https://dist.salestim.io/packages/io.nbold.standalone.self.zip -o io.nbold.standalone.self.zip
```

Then unzip the package:
```bash
unzip io.nbold.standalone.self.zip
```

Each package is comprised of 7 files:
- `manifest.json`:The main package manifest
- `de-de.json`: German localization file
- `es-es.json`: Spanish localization file
- `fr-fr.json`: French localization file
- `it-it.json`: Italian localization file
- `color.png`: The package color icon
- `outline.png`: The package outline icon

Then configure the `manifest.json` file by replacing these placeholders with your actual configuration:
- `[[MICROSOFT_TEAMS_APP_MANIFEST_STANDALONE_ID]]`: Could be any randomly generated UUID
- `[[WEB_PUBLICURL]]`: The public url of your web service, as defined in your proxy
- `[[MICROSOFT_APP_CLIENT_ID]]`: The application registration client id
- `[[MICROSOFT_TEAMS_APP_MANIFEST_VALID_DOMAINS]]`: Should reflect the domain used from the `WEB_PUBLICURL` setting.

Save your updates.

::: tip
The zip utility is not installed by default in most Linux distributions, but you can easily install it using your distribution package manager if you need it.
```bash
sudo apt install zip
```
:::

Build your own package by adding all the assets to the zip archive:
```bash
zip io.nbold.standalone.self.zip *.json *.png
```

You can now go to Microsoft Teams and upload the package as a custom app.

> Congrats! You can now use nBold from Microsoft Teams.

## Next steps
At this stage, you should have a basic installation of nBold going. Optionally, with some extra configuration, you can add functionality to your instance:
- To understand all the configuration options, see [Configuration Reference](../references/configuration_reference)
- You can also [Setup our Connector for Power Platform](./power_platform_connector_deployment).
