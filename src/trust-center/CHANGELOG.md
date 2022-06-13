# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.23.0](https://github.com/nboldhq/app-platform/compare/v4.22.0...v4.23.0) (2022-05-19)


### Bug Fixes

* **app-instghts:** disabled app-instghts client-side script ([4d9f792](https://github.com/nboldhq/app-platform/commit/4d9f792cecc721196f34d61e86203eaa6d30c5bf))

## [4.22.0](https://github.com/nboldhq/app-platform/compare/v4.21.0...v4.22.0) (2022-05-19)


### Bug Fixes

* **app-insights:** disabled client-side app-insights integration ([ceef679](https://github.com/nboldhq/app-platform/commit/ceef6795c2863677f8e170ace3e78976d425b1c2))

## [4.21.0](https://github.com/nboldhq/app-platform/compare/v4.20.0...v4.21.0) (2022-05-19)


### Bug Fixes

* **build:** updated production cdn scripts ([9ac4a51](https://github.com/nboldhq/app-platform/commit/9ac4a5132bc5c642dda9686512ce6cb860b64477))

## [4.20.0](https://github.com/nboldhq/app-platform/compare/v4.19.0...v4.20.0) (2022-05-19)

## [4.19.0](https://github.com/nboldhq/app-platform/compare/v4.18.0...v4.19.0) (2022-05-19)


### Features

* **api:** added /catalog/templates endpoints for granular management ([922da0e](https://github.com/nboldhq/app-platform/commit/922da0eb4a8593637f307eef1cb8863d6e3bd363))
* **bot:** added bot packages ([ac7b42f](https://github.com/nboldhq/app-platform/commit/ac7b42f0d659357c409bfe48e1a67b39f4a5dc8f))
* **connected-apps:** added connected-apps button + embed ([1a578c8](https://github.com/nboldhq/app-platform/commit/1a578c8b683dbcb6fa11d666721708c2e3cfb16d)), closes [#1176](https://github.com/nboldhq/app-platform/issues/1176)
* **events:** fixed connectivity to events server ([3c5e8f5](https://github.com/nboldhq/app-platform/commit/3c5e8f5e4ec25f2b048c2b4061241eb995faaf8f))
* **metadata:** added metadata query api ([612a66f](https://github.com/nboldhq/app-platform/commit/612a66fe589468a31875e692062bb4ecde86277a))
* **rbac:** added governance manager role in rbac settings ([1c4ae58](https://github.com/nboldhq/app-platform/commit/1c4ae5886f1070e4b3f9653ecb9c17e897a59ddb)), closes [#1178](https://github.com/nboldhq/app-platform/issues/1178)
* **reports:** added "user_report_viewed" analytics event ([4610b4d](https://github.com/nboldhq/app-platform/commit/4610b4df991209d32a8d9500f3f0124d319df415))
* **reports:** added reports categorization + dynamic reports height ([a4b72b2](https://github.com/nboldhq/app-platform/commit/a4b72b27dcc428d7954cda4735815ccb924541d5))
* **reports:** added reports navigation and dynamic loading ([b9e9aca](https://github.com/nboldhq/app-platform/commit/b9e9aca29923f1ec6a0e8cd30ddaf1c0c8615543))
* **webhooks:** updated webhook creation to support Tray ([0c48af7](https://github.com/nboldhq/app-platform/commit/0c48af768b4a1e24073f6875ff9696a9a5b4567d))


### Bug Fixes

* **api:** fixed issue with delete archive and rename teams operations ([7b61164](https://github.com/nboldhq/app-platform/commit/7b6116479f338c4d96821bc49f8ca6244c31bc5d)), closes [#78](https://github.com/nboldhq/app-platform/issues/78)
* **connected-apps:** fixed iframe to host communication ([18a3c8b](https://github.com/nboldhq/app-platform/commit/18a3c8b3ca3757e7142dc56f18e77032a3f9d2eb))
* **connected-apps:** whitelisted connected-apps test environment url ([95d1730](https://github.com/nboldhq/app-platform/commit/95d17309d9918e129959456caa04831b2d9432e6))
* **db:** fixed events db name in PRD ([469fab5](https://github.com/nboldhq/app-platform/commit/469fab52b59ce5b5ae3948cb1589e5442649e20f))
* **git:** fixed large log files in commits ([0093061](https://github.com/nboldhq/app-platform/commit/0093061160fecc4a5b3e94f5f42d7f6f595a3441))

## [4.18.0](https://github.com/nboldhq/app-platform/compare/v4.17.0...v4.18.0) (2022-03-08)


### 🐛 Bug Fixes

* **github organization:** updated refs to our previous GitHub org ([f94bd83](https://github.com/nboldhq/app-platform/commit/f94bd838b6694584f0109fa97eca729c3f9495bc))


### 📚 Docs

* **changelog:** fixed changelog broken links ([e1673bc](https://github.com/nboldhq/app-platform/commit/e1673bc79559fc343e241620d164ebc82b5e9a97))
* **changelog:** fixed refs to our former GitHub org ([281311d](https://github.com/nboldhq/app-platform/commit/281311d325944984d2080ff5d29c929970eac456))
* **docs:** fixed invalid links in generated docs ([275269f](https://github.com/nboldhq/app-platform/commit/275269f2db202406eb63f1a77195befe72b83b7a))
* **docs:** updated WEBSITES_DOCS constant URL ([fae4f33](https://github.com/nboldhq/app-platform/commit/fae4f33e57ec5b95bb9182d5f6d5fe9f3d497239))


### 🛠️ Code Refactoring

* **github:** updated deps for our new GitHub org ([ddba4c7](https://github.com/nboldhq/app-platform/commit/ddba4c78c11e3275d3509319ea389a5f2044b5e9))

## [4.17.0](https://github.com/nboldhq/app-platform/compare/v4.16.0...v4.17.0) (2022-03-04)


### 🐛 Bug Fixes

* **packages:** fixed manifest rendering in json format ([f489706](https://github.com/nboldhq/app-platform/commit/f4897064885478af584b39956e693d10a464796d))
* **packages:** fixed settings tab name in manifests ([e033c49](https://github.com/nboldhq/app-platform/commit/e033c498f257a4b210805f2329fff2e4cd6adb6f))
* **provisioning:** fix planner provisioning issue ([7d9b83a](https://github.com/nboldhq/app-platform/commit/7d9b83aab74f314f6192a2738d991196f807d637))


### 🚀 Features

* **onenote:** oneNote tabs are now cloned just as other Office tabs ([92ab7a7](https://github.com/nboldhq/app-platform/commit/92ab7a78be614077176625f8273f67beb3b0e5c8))


### 📚 Docs

* **contributing:** updated contributing guide ([4dd9535](https://github.com/nboldhq/app-platform/commit/4dd9535867f610d5ff2bffe7ea41420bbc403662))
* **docs references:** updated generated assets for docs site ([faa5d03](https://github.com/nboldhq/app-platform/commit/faa5d036a69bf282880e0bc657279df9046ba451))

## [4.16.0](https://github.com/nboldhq/app-platform/compare/v4.15.0...v4.16.0) (2022-02-14)


### 🐛 Bug Fixes

* **packages:** updated packages to remove the docs tab and the configurable tab ([53352d0](https://github.com/nboldhq/app-platform/commit/53352d0e53f081dd7efb40cbcc536587ec397d25))


### 🚀 Features

* **i18n:** integrated updates from i18n ([4408e06](https://github.com/nboldhq/app-platform/commit/4408e06ee2691325a11ff6a0744e24db13ec2e4b))

## [4.15.0](https://github.com/nboldhq/app-platform/compare/v4.14.0...v4.15.0) (2022-02-14)


### 🚀 Features

* **packages:** packages version is now synchronized with the platform version ([c1b37ff](https://github.com/nboldhq/app-platform/commit/c1b37ff13c12dcca3c7e2a137b6b980a26f9de91))

## [4.14.0](https://github.com/nboldhq/app-platform/compare/v4.13.0...v4.14.0) (2022-02-13)

## [4.13.0](https://github.com/nboldhq/app-platform/compare/v4.12.0...v4.13.0) (2022-02-13)


### 🐛 Bug Fixes

* **cdn:** updated production cdn assets ([975dc30](https://github.com/nboldhq/app-platform/commit/975dc30d03f568894b652cab4c4b4aa25caaa1d1))


### 📚 Docs

* **licences:** updated licences mentions to SalesTim SAS ([85c71c7](https://github.com/nboldhq/app-platform/commit/85c71c7c2c50725e1e5ec78693a98c7ce0d79a7a))

## [4.12.0](https://github.com/nboldhq/app-platform/compare/v4.11.0...v4.12.0) (2022-02-10)


### 🐛 Bug Fixes

* **homepage:** fixed issue preventing the homepage to load ([2344d13](https://github.com/nboldhq/app-platform/commit/2344d1334662256184448311486e27d51bb35015)), closes [#1096](https://github.com/nboldhq/app-platform/issues/1096)

## [4.11.0](https://github.com/nboldhq/app-platform/compare/v4.10.0...v4.11.0) (2022-02-10)


### 🏭 Build System

* **packages:** updated dev packages to include a docs tab ([b62de1c](https://github.com/nboldhq/app-platform/commit/b62de1ccd071e44d18777f880b4c961fab0a0e28))


### 🐛 Bug Fixes

* **docs:** fixed events_reference doc generation ([69efd2f](https://github.com/nboldhq/app-platform/commit/69efd2ff6582d32148c6a1f0c2b55f65568d6810))


### 🚀 Features

* **branding:** updated all references to salestim to nbold ([7fa4943](https://github.com/nboldhq/app-platform/commit/7fa494377e0320d431d20624685e48e76168e240))

## [4.10.0](https://github.com/nboldhq/app-platform/compare/v4.9.0...v4.10.0) (2022-02-08)


### 🐛 Bug Fixes

* **provisioning:** fixed tab configuration after MS graph update ([c57f24d](https://github.com/nboldhq/app-platform/commit/c57f24dfcb9edddbf24c37d2f5fa50bd7be45a65)), closes [#1108](https://github.com/nboldhq/app-platform/issues/1108)


### 📦 CI

* **docs:** updated build script to generate docs assets ([ce7856f](https://github.com/nboldhq/app-platform/commit/ce7856f531606fd8d1d2732be926ae9be217c95f))
* **references:** included all assets from app-platform repo into build ([977800b](https://github.com/nboldhq/app-platform/commit/977800becc75ffda4453707895b3de91a4d2a323))

## [4.9.0](https://github.com/nboldhq/app-platform/compare/v4.8.1...v4.9.0) (2022-02-08)


### 📚 Docs

* **changelog:** removed breaking change alert from a previous commit ([adabd64](https://github.com/nboldhq/app-platform/commit/adabd6404e926d2fdae51cb48798efe7bf1be57c))
* **permissions:** updated the list of permissions scopes in the "hosting" documentation ([84d67d0](https://github.com/nboldhq/app-platform/commit/84d67d085eb06f62388ad6d501db6c9317d7e146))


### 🛠️ Code Refactoring

* **connected-apps:** removed references to the @salestim/connected-apps module ([31017ca](https://github.com/nboldhq/app-platform/commit/31017ca2d0a3dd4e9b98b4c8353362f7d558406a))


### 🚀 Features

* **branding:** updated packages logo and tabs to match the nbold brand ([1090604](https://github.com/nboldhq/app-platform/commit/1090604a46ef8abf35624702fc3a7853168d5591))

### [4.8.1](https://github.com/nboldhq/app-platform/compare/v4.8.0...v4.8.1) (2022-01-25)


### 🏭 Build System

* **dependencies:** bump node-fetch from 2.6.1 to 2.6.7 ([38458ce](https://github.com/nboldhq/app-platform/commit/38458ceee2f36407e9e330d588f4bd53fa9fb7e3))
* **deps:** bump node-fetch from 2.6.1 to 2.6.7 in /src/libs/github ([c74459b](https://github.com/nboldhq/app-platform/commit/c74459bee88463e382bbc3a5caa24ab694c5deef))
* **deps:** bump node-fetch from 2.6.1 to 2.6.7 in /src/libs/webhooks ([8a06244](https://github.com/nboldhq/app-platform/commit/8a06244e348f0abafbbafc73550d5e47a2cb2550))

## [4.8.0](https://github.com/nboldhq/app-platform/compare/v4.7.0...v4.8.0) (2022-01-25)

### 🏭 Build System

* **npx:** updated all references to `npx` in `package.json` to include the `--yes` option ([10e69b0](https://github.com/nboldhq/app-platform/commit/10e69b0305c9c9fe6fd9850b0b37e4825587b8bc))


### 🚀 Features

* **channels:** clone channel settings as part of the provisioning process [#592](https://github.com/nboldhq/app-platform/issues/592) ([f7369bc](https://github.com/nboldhq/app-platform/commit/f7369bc5b750d2553bbc44bf361d85df3f16a8f9))
* **naming convention:** added console logging to preview naming conventions and see detailed errors ([9e30f7b](https://github.com/nboldhq/app-platform/commit/9e30f7bb5fc44aff8339c85a33f1956804126c98))
* **service account:** force account selection during service account update ([3a1aed5](https://github.com/nboldhq/app-platform/commit/3a1aed5c2124d18e23373e014e1888c4260475bf))
* **service account:** users granted as `teams_service_admin` now can access and manage app settings ([ac1d28b](https://github.com/nboldhq/app-platform/commit/ac1d28b6f0d3b98bf05666d4a858e8ca470bbcc6)), closes [#1062](https://github.com/nboldhq/app-platform/issues/1062)


### 🐛 Bug Fixes

* **provisioning:** fix: Settings not copied as part of the provisioning ([1b98c41](https://github.com/nboldhq/app-platform/commit/1b98c417319cf32a326b4ace042ae4d4ab0cf067)), closes [#1079](https://github.com/nboldhq/app-platform/issues/1079)
* **security:** any unexpected error in web or app is now managed to prevent debug info leak ([4c3191a](https://github.com/nboldhq/app-platform/commit/4c3191a6a316c98f4e87782bb5988a5726a10360))
* **security:** excessive error verbosity (ISMS [#39](https://github.com/nboldhq/app-platform/issues/39)) ([86a208d](https://github.com/nboldhq/app-platform/commit/86a208d890b8b1a5ffbe7731fc3aa3672da3179c))
* **security:** preparation for fixing potential XSS security issue ([14b0212](https://github.com/nboldhq/app-platform/commit/14b0212ee77cc1cc73f4b444ce240fcba7191537))
* **service account:** disabled cache for `organization` API endpoints ([6626ce5](https://github.com/nboldhq/app-platform/commit/6626ce545a8d68711d1f6f65bbc9d549e7a74987)), closes [#1086](https://github.com/nboldhq/app-platform/issues/1086)

## [4.7.0](https://github.com/nboldhq/app-platform/compare/v4.6.0...v4.7.0) (2021-12-11)


### 🐛 Bug Fixes

* **permanent_membership:** fixed help label displaying the maximum number of permanent members ([683048e](https://github.com/nboldhq/app-platform/commit/683048e52043e721699614ef159a80b31036a001))

## [4.6.0](https://github.com/nboldhq/app-platform/compare/v4.5.0...v4.6.0) (2021-12-11)

## [4.5.0](https://github.com/nboldhq/app-platform/compare/v4.4.1...v4.5.0) (2021-12-11)


### 🚀 Features

* **permanent_membership:** updated permanent membership limit to 30 owners and 50 members ([3f2b24b](https://github.com/nboldhq/app-platform/commit/3f2b24b004c700d663b64c6f42a235894e71d23a)), closes [#1068](https://github.com/nboldhq/app-platform/issues/1068)


### 🐛 Bug Fixes

* **private_channels:** fixed reuester not added to private channels ([85e983d](https://github.com/nboldhq/app-platform/commit/85e983d1b370b2e26d2fc713abae71f9a5115e71)), closes [#914](https://github.com/nboldhq/app-platform/issues/914)
* **provisioning:** fixed app installation issue ([0450461](https://github.com/nboldhq/app-platform/commit/0450461ab84210cf53746a66478e42a4607ede10))

### [4.4.1](https://github.com/nboldhq/app-platform/compare/v4.4.0...v4.4.1) (2021-12-09)


### 🐛 Bug Fixes

* **cdn:** fixed cdn production version ([e56f9e1](https://github.com/nboldhq/app-platform/commit/e56f9e1a93c96347781569d38f11474d5166dc6e))
* **jobs:** prevent jobs deletion on complete ([7d13b2b](https://github.com/nboldhq/app-platform/commit/7d13b2b24276d35626662a7864d021befd6ca129))

## [4.4.0](https://github.com/nboldhq/app-platform/compare/v4.3.0...v4.4.0) (2021-12-09)


### 🧪 Tests

* **auth:** added mocks for Microsoft Identity platform API to fully isolate tests ([858269e](https://github.com/nboldhq/app-platform/commit/858269eb0e398af9a029192666e57cca540590c0))
* **db:** mocked Sequelize module using `sequelize-mock` to isolate unit tests ([f5c8386](https://github.com/nboldhq/app-platform/commit/f5c8386c940d4b27aeea328c10579f3454fa46ff))
* **github:** mocked github api to isolate unit tests ([4e2a5db](https://github.com/nboldhq/app-platform/commit/4e2a5db28bcebc53d79cf3ec0017cd3950c3540f))


### Others

* **merge:** fixed merge issue ([4bc341c](https://github.com/nboldhq/app-platform/commit/4bc341c2ef062e8a8e5776d15d7beec53ee12b18))


### 🚀 Features

* **analytics:** included analytics script based on plausible (self-hosted) ([6e4f841](https://github.com/nboldhq/app-platform/commit/6e4f841705a472a25dfb73625eba6ffb1a675fdf))
* **analytics:** new analytics capabilities based on self-hosted [Plausible](https://plausible.io) ([89f8607](https://github.com/nboldhq/app-platform/commit/89f8607636d7a6091bd4a313f62bb2e344117bbe))
* **logs:** added LOG_PERSISTENCY_DIRECTORY option to define logs location if persistency is enabled ([d4a5c2a](https://github.com/nboldhq/app-platform/commit/d4a5c2aaac90e6c668611d1d6bcd3b3d28458e8a))
* **prometheus:** prometheus exporter now supports X-Auth-Token to secure the /metrics endpoint ([239043d](https://github.com/nboldhq/app-platform/commit/239043dbb18d59fd741527e45bfefe5ec73b5f9c))


### ⚡ Performance Improvements

* **prometheus:** disabled gc metrics as there is a dep incompatibility with `prometheus-gc-stats` ([9f58ae1](https://github.com/nboldhq/app-platform/commit/9f58ae1b9ce965aa5d74a560d30647779746460f))


### 📦 CI

* **dependabot:** updated dependabot.yml to not exclude dev-dependencies and improve PR tagging ([8ad1c9f](https://github.com/nboldhq/app-platform/commit/8ad1c9f3daf9eccde437b5b071aa7106d10635b1))
* **deps:** assets rebuilt ([67cf5cc](https://github.com/nboldhq/app-platform/commit/67cf5cc6df31f1f00b039befd635885f0137dc25))
* **docker:** added github action to build push docker image to azure and gh registries ([f9d4386](https://github.com/nboldhq/app-platform/commit/f9d4386b75d6bc329018886aac811d88c9f17b1d))
* **jobs:** reschedules jobs in PRD ([3bd4469](https://github.com/nboldhq/app-platform/commit/3bd4469a052c10bf818d8ba069c9cda01a5e326d))
* **prometheus:** enabled prometheus exporter for all environments ([9045259](https://github.com/nboldhq/app-platform/commit/9045259b7c2aeb656d2ec1a3c2cebb384bbe3515))
* **prometheus:** included npm rebuild in GH action for INT to rebuild native components ([36010fc](https://github.com/nboldhq/app-platform/commit/36010fcf84b71dfc444b50057aa997ef094131cb))
* **redis:** pPR now targets the non-production redis server ([e7fe447](https://github.com/nboldhq/app-platform/commit/e7fe4472e9a8e0959fda92caf6cc8b1065c6421d))
* **terraform:** updated terraform azure provider and added new resources ([0931ff7](https://github.com/nboldhq/app-platform/commit/0931ff7e6632db2489f74f34dad5a75691f48f97))


### 🛠️ Code Refactoring

* **i18n:** removed references to DE in packages ([4e95d1a](https://github.com/nboldhq/app-platform/commit/4e95d1a94711dd055b524831a7b1f02baff9a9c1))
* **webclient:** moved webclient to /src/client to isolate it from the web service ([4ef4e50](https://github.com/nboldhq/app-platform/commit/4ef4e50329536e21bd7d468e6b7036f707f6aaba))


### 📚 Docs

* **adr:** added proposed adr for redis connections (cache and queues) monitoring ([511d000](https://github.com/nboldhq/app-platform/commit/511d000e96455380fc752821f35646b8d0b537d7))
* **analytics:** added ADR 0006-web-analytics to validate our app analytics platform ([72ba99a](https://github.com/nboldhq/app-platform/commit/72ba99a66ebcb1d0e63f22e8206f2721751d79f6))
* **audits:** rebuild audit log files ([372775c](https://github.com/nboldhq/app-platform/commit/372775c9443a1b20f61b60706a780f7a2f443a7f))
* **hosting:** changed site navigation to cope with long toc ([71dbc22](https://github.com/nboldhq/app-platform/commit/71dbc2278bace014f7a8a53ab29a36b531364615))
* **hosting:** updated the description of all the services and events of the platform ([932f16c](https://github.com/nboldhq/app-platform/commit/932f16c6a71089df2c37b0a07206cc3330d84844))
* **package:** added :help entries to package.json to describe each script ([b25aed4](https://github.com/nboldhq/app-platform/commit/b25aed42ef54830284e4ca958e953270a246f98e))
* **records:** finalized importing all records as md ([11f3191](https://github.com/nboldhq/app-platform/commit/11f3191efce14936b74fb0e5db53eb3969a7f117))
* **self-hosted:** added diagram for additional operations services (uptime, metrics...) ([35c8d47](https://github.com/nboldhq/app-platform/commit/35c8d47bb3003c36fbf4caea8d3c4f5ece6799f7))
* **self-hosted:** added draft of architecture data-flow ([bc91ee6](https://github.com/nboldhq/app-platform/commit/bc91ee6c6ba62e4f5a3e8dfe8fbaf93405811089))
* **self-hosted:** added power-platform setup documentation ([ee9cf9c](https://github.com/nboldhq/app-platform/commit/ee9cf9c9acf3deb0f76b4c2a69adb702fbf9309f))
* **self-hosted:** created new pages for permissions, provisioning and permanent membership jobs ([d2def02](https://github.com/nboldhq/app-platform/commit/d2def024bf8facde3aa427bd41df294129c1c4b1))
* **self-hosted:** fixed broken links and intercom integration ([14f5ff4](https://github.com/nboldhq/app-platform/commit/14f5ff48c1149f207023ad19e31c96150275f922))
* **self-hosted:** fixed nav ([1e4bfa2](https://github.com/nboldhq/app-platform/commit/1e4bfa23d35de1c4f82fa493501bf66c1fe51c28))
* **self-hosted:** included an export to docx and pdf script as part of the docs npm script ([18e3be6](https://github.com/nboldhq/app-platform/commit/18e3be63426e9febb9948cc7e2c915ca9e9685d4))
* **self-hosted:** self-hosted docs rebuild ([8de66f5](https://github.com/nboldhq/app-platform/commit/8de66f5df6aee6ee1b261711832cac75d56ae492))
* **self-hosted:** updated Azure resources from the terraform script ([6103a0b](https://github.com/nboldhq/app-platform/commit/6103a0bd61d90f830d5c21febc6610a7ec70d305))
* **self-hosted:** updated azure resources with additional monitoring services ([32febe3](https://github.com/nboldhq/app-platform/commit/32febe3cb453f3afcf0cb73ea20c129728868438))
* **self-hosted:** updated cloud vs self comparison by including networking differences ([1e910a2](https://github.com/nboldhq/app-platform/commit/1e910a2d6d2a754aec3ffe578033ab6b3e4794e7))
* **self-hosted:** updated core architecture documents ([7855b2c](https://github.com/nboldhq/app-platform/commit/7855b2cdd6f74e5a20823a0b5679e46013f5992c))
* **self-hosted:** updated novigation structure and included azure docs ([7072734](https://github.com/nboldhq/app-platform/commit/707273453c6772d47d4d9df3ab2e8ef1fa753c65))
* **self-hosted:** updated self-host documentation with terraform projects and docker guide ([5d15ef1](https://github.com/nboldhq/app-platform/commit/5d15ef1520be40289e22927abf53be30450d1d66))
* **self-hosted:** updated the `updates management` doc describing upgrade options ([d249331](https://github.com/nboldhq/app-platform/commit/d24933175ef21933a82065322635a76acec04474))


### 🐛 Bug Fixes

* **approval:** fixed error during loading of the avatar picture in initApprovalsConsumer ([57e1224](https://github.com/nboldhq/app-platform/commit/57e1224b47abe5d9bcd78cee4a0710aee9cf5864))
* **flow:** fixed flow storage location by including the /vomules/flow/storage empty folder in git ([9614eca](https://github.com/nboldhq/app-platform/commit/9614eca9f2228e2367429e0a01a2057b222b4fdb))
* **i18n:** added support for nl-be, nl-nl and da-dk as fallbacks to en-us to i18n module ([329e417](https://github.com/nboldhq/app-platform/commit/329e417f5756d41073505e15ecb6de4d354951aa)), closes [#968](https://github.com/nboldhq/app-platform/issues/968)
* **logging:** better error management when the log file transport can't access the target directory ([916e765](https://github.com/nboldhq/app-platform/commit/916e765104b035915e66d6fcff8cd6d652a34802))
* **prometheus:** fixed express exporter issue by explicitely including `prom-client` in deps ([a19478c](https://github.com/nboldhq/app-platform/commit/a19478c9cabfcc8637c6fb405a98a2b02c54bfde))
* **provisioning:** fixed issue with channel calendar and yammer tabs provisioning ([742c6f6](https://github.com/nboldhq/app-platform/commit/742c6f63b61a4546f43368eb915866f7138608dd)), closes [#1054](https://github.com/nboldhq/app-platform/issues/1054)
* **tab-config:** fixed tab configuration page when adding the app as a custom tab in a team ([df588eb](https://github.com/nboldhq/app-platform/commit/df588eb74b75d4a867c2393bed1a6007752bedee))


### 🏭 Build System

* **deps-dev:** bump @jest/globals from 27.2.4 to 27.2.5 ([9a31712](https://github.com/nboldhq/app-platform/commit/9a31712de740ee29d88afb529c049b37c33b6e28))
* **deps-dev:** bump @jest/globals from 27.2.5 to 27.3.0 ([bfd4179](https://github.com/nboldhq/app-platform/commit/bfd41796370981d664191da7eb82fb7e1c11f98c))
* **deps-dev:** bump @jest/globals from 27.3.0 to 27.3.1 ([e648460](https://github.com/nboldhq/app-platform/commit/e6484608076d61c1646678cb3f85c643b4c2d8ec))
* **deps-dev:** bump eslint-plugin-import from 2.24.2 to 2.25.1 ([6343d25](https://github.com/nboldhq/app-platform/commit/6343d258707731b0d2c8b662a344c45673cd813a))
* **deps-dev:** bump eslint-plugin-import from 2.25.1 to 2.25.2 ([37c5e46](https://github.com/nboldhq/app-platform/commit/37c5e4605ed9c0878d77bad14ce7e15322da4e50))
* **deps-dev:** bump eslint-plugin-jest from 24.5.0 to 24.6.0 ([1df9017](https://github.com/nboldhq/app-platform/commit/1df9017e5c0ea4561d6c3bf8f855c51648527c21))
* **deps-dev:** bump eslint-plugin-jest from 24.6.0 to 25.0.1 ([9b0be3b](https://github.com/nboldhq/app-platform/commit/9b0be3bdb5ae3a126853214ecdfe4dc33ebd036a))
* **deps-dev:** bump eslint-plugin-jest from 25.0.1 to 25.0.5 ([483820b](https://github.com/nboldhq/app-platform/commit/483820b6d9cbfe55ed39a44a3b9296a1f0670716))
* **deps-dev:** bump eslint-plugin-jest from 25.0.5 to 25.0.6 ([9e44516](https://github.com/nboldhq/app-platform/commit/9e445165b8d67b2298ac457e251acfcbca97b7a2))
* **deps-dev:** bump eslint-plugin-jest from 25.0.6 to 25.2.1 ([6e46bf9](https://github.com/nboldhq/app-platform/commit/6e46bf988217a3c977c49d4916c666d13d649bcf))
* **deps-dev:** bump eslint-plugin-jest from 25.2.1 to 25.2.2 ([945aff5](https://github.com/nboldhq/app-platform/commit/945aff5b85a13e5d6eb0ef8dafb7533c50142338))
* **deps-dev:** bump eslint-plugin-jest from 25.2.2 to 25.3.0 ([75f7e0c](https://github.com/nboldhq/app-platform/commit/75f7e0c74ead6f39a1aa9be5a8a0247611834fe9))
* **deps-dev:** bump eslint-plugin-promise from 5.1.0 to 5.1.1 ([8fcb63f](https://github.com/nboldhq/app-platform/commit/8fcb63f652cd671ecabdae8847c65e17c6f2ca5c))
* **deps-dev:** bump jest from 27.2.4 to 27.2.5 ([f6d2fa4](https://github.com/nboldhq/app-platform/commit/f6d2fa438acb0e09c74e25495a9e376a109477ba))
* **deps-dev:** bump jest from 27.2.5 to 27.3.0 ([84d40b0](https://github.com/nboldhq/app-platform/commit/84d40b0f13063cd0dbd404ff8aef85aa4e0f788a))
* **deps-dev:** bump jest from 27.3.0 to 27.3.1 ([671c0bb](https://github.com/nboldhq/app-platform/commit/671c0bb59e18f2f7831f3d279ef852d7f0707e14))
* **deps:** bump @microsoft/microsoft-graph-client from 3.0.0 to 3.0.1 ([be275e5](https://github.com/nboldhq/app-platform/commit/be275e58fd7b342b71bdb9f00aeb35e807fb0b1c))
* **deps:** bump @nboldhq/i18n from `16e383e` to `a00fb74` ([0f82811](https://github.com/nboldhq/app-platform/commit/0f82811474c8e89848ba6b58b6b66e948d49204c))
* **deps:** bump ajv from 8.6.3 to 8.8.0 ([fa25f0f](https://github.com/nboldhq/app-platform/commit/fa25f0fd43003b0458776933d9b4b1be63d6d028))
* **deps:** bump bull from 3.29.2 to 3.29.3 ([439a537](https://github.com/nboldhq/app-platform/commit/439a5378f2d959d7f2c56a56b4fc3fe779fa5c1a))
* **deps:** bump cronstrue from 1.117.0 to 1.119.0 ([72e25ea](https://github.com/nboldhq/app-platform/commit/72e25ea0b77c459fc3630cfbd757c6f78296c989))
* **deps:** bump cronstrue from 1.119.0 to 1.122.0 ([9fb7623](https://github.com/nboldhq/app-platform/commit/9fb7623af94ed102f07bdf2ee9440f165e3b316d))
* **deps:** bump express-rate-limit from 5.4.0 to 5.4.1 ([231d6b1](https://github.com/nboldhq/app-platform/commit/231d6b15511b21c0412176746bf51158e420a4a0))
* **deps:** bump express-rate-limit from 5.4.1 to 5.5.0 ([676997b](https://github.com/nboldhq/app-platform/commit/676997b8e4d229363e8710cb548ec314940e3362))
* **deps:** bump express-rate-limit from 5.5.0 to 5.5.1 ([54e406e](https://github.com/nboldhq/app-platform/commit/54e406e80ded3c7c29e944d654de1701eff66c2c))
* **deps:** bump ioredis from 4.27.10 to 4.27.11 ([f3d71a7](https://github.com/nboldhq/app-platform/commit/f3d71a7413bf76823d3b4c9858935d39aa8e7595))
* **deps:** bump ioredis from 4.27.11 to 4.28.0 ([b70e63c](https://github.com/nboldhq/app-platform/commit/b70e63c385db040789d389921d4ff8704e07d64f))
* **deps:** bump ioredis from 4.28.0 to 4.28.1 ([3e0d236](https://github.com/nboldhq/app-platform/commit/3e0d23666808a8f3b3bbb4ddbba62c53dc5bf72d))
* **deps:** bump nock from 13.1.3 to 13.1.4 ([ca6d9a0](https://github.com/nboldhq/app-platform/commit/ca6d9a08933aff233700c7f7194865445df7c8ed))
* **deps:** bump node from 16-alpine to 17-alpine ([65cf3e7](https://github.com/nboldhq/app-platform/commit/65cf3e71670478afb042086b8825a143eaf76503))
* **deps:** bump node-red from 2.0.6 to 2.1.3 ([2b8da2f](https://github.com/nboldhq/app-platform/commit/2b8da2f10cf2e4667d479c92a8b180e230cbd03a))
* **deps:** bump pg-mem from 2.0.1 to 2.1.5 ([30b319b](https://github.com/nboldhq/app-platform/commit/30b319b2820b5b0f8ff18512280b3d93ddcbf9db))
* **deps:** bump pg-mem from 2.1.5 to 2.1.6 ([0dc4493](https://github.com/nboldhq/app-platform/commit/0dc4493f6404cee6172882cca9ca3234d0f5bcbb))
* **deps:** bump sequelize from 6.6.5 to 6.7.0 ([5856381](https://github.com/nboldhq/app-platform/commit/5856381f1294a7549e268f0b3e65799b7eba3d50))
* **deps:** bump sequelize from 6.7.0 to 6.8.0 ([c786a3e](https://github.com/nboldhq/app-platform/commit/c786a3e7f3904570047164dfff28d1906dbaac39))
* **deps:** bump ua-parser-js from 0.7.28 to 1.0.2 ([aea2625](https://github.com/nboldhq/app-platform/commit/aea2625ef74ab357bf419451c4c5fe5977c8069a))
* **deps:** bump unleash-proxy-client from 1.5.2 to 1.6.0 ([f754f28](https://github.com/nboldhq/app-platform/commit/f754f28ec8b17273b24705310c6a801a9c747082))
* **deps:** bump validator from 13.6.0 to 13.7.0 ([aad99b0](https://github.com/nboldhq/app-platform/commit/aad99b0df7425aee9ed54880fd993d7c28b54ef7))
* **deps:** bump validator from 13.6.0 to 13.7.0 in /src/libs/db ([9210bf9](https://github.com/nboldhq/app-platform/commit/9210bf9f9d7c7bfa10fdb26ae8359151d59c809f))
* **deps:** bump zaproxy/action-baseline from 0.5.0 to 0.6.1 ([42b9253](https://github.com/nboldhq/app-platform/commit/42b9253f4953135b390c4a6422a84ccbf04670d8))
* **deps:** updated deps from dependabot ([86f3d90](https://github.com/nboldhq/app-platform/commit/86f3d90d00b9b741d9e25d677874994a792e0c88))
* **docker:** changed from npm ci to npm install ([09fd42b](https://github.com/nboldhq/app-platform/commit/09fd42b5cecba4de315dd6843ecbe60da1343dde))
* **github:** added github token for remote dependencies ([059d4a7](https://github.com/nboldhq/app-platform/commit/059d4a7f8775687a8677a94adb8ef85dac587824))
* **ngrok:** excluded /bin/ngrok directory from git ([0c79ac0](https://github.com/nboldhq/app-platform/commit/0c79ac00e6f694501c35dc22fe16b7c7b6e5b3bd))
* **node:** locking app with a specific node.js version using `nvm` and `.nvmrc` ([3d3af0e](https://github.com/nboldhq/app-platform/commit/3d3af0ebf176c4360235f9c787eb420cba49ae5b))
* **npm:** fixed npm install issue due to wrong npm version ([f5593fe](https://github.com/nboldhq/app-platform/commit/f5593fee6c6c82d6ec1d821960dbec6c099ebc8f))
* **packages:** rebuilt packages ([bef89fb](https://github.com/nboldhq/app-platform/commit/bef89fbf342a0f72292898d3a9e8432527fc9f33))
* **terraform:** added monika, redis-exporter and bull-exporter to the dev iac ([8c49630](https://github.com/nboldhq/app-platform/commit/8c49630f58e9b527ac39acf369fa74cedb56bd76))

## [4.3.0](https://github.com/nboldhq/app-platform/compare/v4.2.0...v4.3.0) (2021-10-03)


### 🛠️ Code Refactoring

* **azure-storage:** migrated from `azure-storage` to `@azure/storage-blob` ([9cafb1c](https://github.com/nboldhq/app-platform/commit/9cafb1c0f3d0f8cecd52978dd4c66574e7b28add))


### 🏭 Build System

* **deps:** updated npm deps ([1b9af06](https://github.com/nboldhq/app-platform/commit/1b9af060f48ab0d34fb70358b05a317a263063e4))


### 🐛 Bug Fixes

* **libs:** now using exclusively relative paths to require internal modules ([d74b1fe](https://github.com/nboldhq/app-platform/commit/d74b1fea9364428c70a23355af45ff6957b51921))


### 📦 CI

* **github-actions:** updated PRD scripts to use npm install instead of npm ci ([f9fdfa0](https://github.com/nboldhq/app-platform/commit/f9fdfa02830bb8bdc703d188a9817089f1e3fa91))
* **terraform:** first terraform iac project to host the the entire platform on a local docker server ([33a1b01](https://github.com/nboldhq/app-platform/commit/33a1b01fc50cc8bc840cbe5207e3d439b8679d03))

## [4.2.0](https://github.com/nboldhq/app-platform/compare/v4.1.0...v4.2.0) (2021-10-02)


### 🚀 Features

* **logs:** enable log files persistency through a new LOG_PERSISTENCY_ENABLED environment variable ([8aaede5](https://github.com/nboldhq/app-platform/commit/8aaede5e95a363c00404be8ab61bf55807c67762))


### 📚 Docs

* **events:** docs auto-generation for events and services ([3a8d9c7](https://github.com/nboldhq/app-platform/commit/3a8d9c791cd4b97df722ddff35e52b450baaafb5))


### 🛠️ Code Refactoring

* **dist:** removed all references to global variables ([f9527e8](https://github.com/nboldhq/app-platform/commit/f9527e89fcdf4ba3e70df5ea59c29c0806fe476f))
* **teardown:** when an exit signal is catched, the service tries to shutdown gracefully ([532c0a0](https://github.com/nboldhq/app-platform/commit/532c0a0c85c55efd9692449d9378cd3083b27b04))


### 🧪 Tests

* **jest:** excluded tests folders from the dist generation ([b282624](https://github.com/nboldhq/app-platform/commit/b28262489db60f3ebefdb570f80a7d154cfdae79))
* **jest:** included jest option modulePathIgnorePatterns to prevent inclusion of the /dist path ([0a4951b](https://github.com/nboldhq/app-platform/commit/0a4951b9cb542efb22a0845d056263789e013ec0))
* **jest:** tests (unit and e2e) and now running with the --silent switch ([767902b](https://github.com/nboldhq/app-platform/commit/767902b30ffbd4ebd4eb2ae0bc7f6cef79e41c91))
* **redis:** using ioredis-mock instead of the INT redis instance for unit tests ([748f712](https://github.com/nboldhq/app-platform/commit/748f712b4e306d48f5ceab62c1dca53835945f99))
* **unit-tests:** re-enabled the whole unit tests suite ([dd83840](https://github.com/nboldhq/app-platform/commit/dd838401e5d8c04a6ee3249e560a441048a7719f))


### 🏭 Build System

* **changelog:** updated standard-version scripts for better changelog generation ([71321b3](https://github.com/nboldhq/app-platform/commit/71321b3bfbfc8c170e3554751eaf9f0d7911b29e))
* **deps:** bump unleash-server from 4.2.0-0 to 4.2.0-2 ([28b7f8e](https://github.com/nboldhq/app-platform/commit/28b7f8e23e588e3906d4533df3b307d00adcb962))
* **dist:** removed /dist contents from git tracking ([83b50fb](https://github.com/nboldhq/app-platform/commit/83b50fbad9a8b8514985b20d42b4bc09aadb2875))
* **tests:** reenabled unit tests in GitHub Actions build steps ([20c3cc5](https://github.com/nboldhq/app-platform/commit/20c3cc5b3e476bd73632e746bc9f64827bd28c8b))

## [4.1.0](https://github.com/nboldhq/app-platform/compare/v3.10.2...v4.1.0) (2021-10-01)


### 🚀 Features

* **monitoring:** added Express Prometheus middleware, accessible at /monitoring/metrics ([d22e8af](https://github.com/nboldhq/app-platform/commit/d22e8af0525bce2d73e673a13552e8fdd36d6544))
* **prometheus:** included a new setting to enable the prometheus exporter + options ([e42c9f7](https://github.com/nboldhq/app-platform/commit/e42c9f7a6bfe24771a8b508a861ad0dac340d489))


### 📚 Docs

* **discovery:** removed references to the discovery service ([8fb9b9d](https://github.com/nboldhq/app-platform/commit/8fb9b9d600a87729c33737c1645cf8211bffeb1b))
* **self-hosted:** created the minimal documentation for self-hosting the platform ([b47a524](https://github.com/nboldhq/app-platform/commit/b47a524a92722ccf087ed14b023b48a251210569))


### 🛠️ Code Refactoring

* **config:** included addition logs during config loading ([e92e622](https://github.com/nboldhq/app-platform/commit/e92e622ceed63738a53b71f94e93284a551e6573))
* **config:** included loaded config details in startup logs ([51ab21d](https://github.com/nboldhq/app-platform/commit/51ab21deac02fb2f48603a4144adb6893c45e6ae))
* **config:** reviewed all the settings and .env files for DEV and INT ([2351802](https://github.com/nboldhq/app-platform/commit/23518029b5f000c8cf1d7ebd9472c29c394afcaf))
* **feature-toggles:** feature toggles service and proxy are now disabled by default ([8bb306f](https://github.com/nboldhq/app-platform/commit/8bb306f7e4bb0a90336f1ed4b54d89a9eb167e3d))
* **logging:** better error handling by using the serialize-error module ([e34d863](https://github.com/nboldhq/app-platform/commit/e34d86302d05a1f12cac130e35780ba617aeaf79))
* **redis:** implemented Redis retry strategy to retry on connection error ([ed56b69](https://github.com/nboldhq/app-platform/commit/ed56b6915f44f983f01a6efc2d304e9a94890fe0))
* **scripts:** made scripts independent from the core engine ([374473c](https://github.com/nboldhq/app-platform/commit/374473cba77f8a819467586a14c6f324296fc235))


### 🎨 Styling

* **configuration:** refactored all .env files ([577f323](https://github.com/nboldhq/app-platform/commit/577f323dd6225364986baac072c1706137127b78))


### 🐛 Bug Fixes

* **authentication:** fixed issue authenticating against the api after client-side session expiration ([3aaad5a](https://github.com/nboldhq/app-platform/commit/3aaad5ad9d853c02c0a1099b0fc562775e0dbd11))
* **config:** fixed dynamic PORT environment variable used by Azure for its containers ([74cae14](https://github.com/nboldhq/app-platform/commit/74cae14f443d9c0024f294c1dd98f95a103c03db))
* **deps:** fixed missing references in api ([829c293](https://github.com/nboldhq/app-platform/commit/829c293e40e7a8be98674977eda3f81b60ca59f0))
* **github:** fixed github assignees issue when ther's only one assignee ([e9662a8](https://github.com/nboldhq/app-platform/commit/e9662a84eb1584d667b750c68c1674a21e15f855))
* **logging:** better errors logs through tags and payload parsing/formatting ([474a3c1](https://github.com/nboldhq/app-platform/commit/474a3c17b960b94c0f3762f54a14c6f29551a994))
* **prometheus:** express-prometheus-middleware module is now only loaded if the option is enabled ([0889241](https://github.com/nboldhq/app-platform/commit/0889241fd6afe5f98352e50dbdb574e77dae3b32))
* **prometheus:** fixed redis exporter and bull queue exporter configuration from docker compose file ([fb36586](https://github.com/nboldhq/app-platform/commit/fb3658690726f7daa4e42629e0d7b2bababe5bc3))
* **webclient:** fixed issue [#932](https://github.com/nboldhq/app-platform/issues/932) Deeplinks from home app are sending the users to the wrong team ([f5ac611](https://github.com/nboldhq/app-platform/commit/f5ac61109f04950ac4329a7b04579e41cd425cb7))


### 🏭 Build System

* **build:** updated INT build ([215aea4](https://github.com/nboldhq/app-platform/commit/215aea4cd12cac9ff9f30250a45faa2c976344bf))
* **build:** updated int script ([0c2c2d2](https://github.com/nboldhq/app-platform/commit/0c2c2d21bbfd20b1dd20f75c0f92dca79e8a37c9))
* **deps-dev:** bump @jest/globals from 27.2.0 to 27.2.1 ([298d8a6](https://github.com/nboldhq/app-platform/commit/298d8a668b4c0edc44e4bf2d735522a0991ffc0f))
* **deps:** bump @nboldhq/i18n from `9ac2bf7` to `174838e` ([c9fa7e6](https://github.com/nboldhq/app-platform/commit/c9fa7e61e97c28a8f4758829e71ba7026af12e50))
* **deps:** bump @yaireo/tagify from 4.7.2 to 4.8.0 ([5be4dcb](https://github.com/nboldhq/app-platform/commit/5be4dcbf68385b119474e775223ed2be1ece8749))
* **deps:** bump alpinejs from 3.3.4 to 3.4.0 ([1f3501d](https://github.com/nboldhq/app-platform/commit/1f3501db1875c12964e329aaa30232bb134897b4))
* **deps:** bump unleash-proxy-client from 1.4.0 to 1.5.2 ([e426ebe](https://github.com/nboldhq/app-platform/commit/e426ebeb7f6afb1e7f35e46163dd78e51160a233))
* **deps:** fix deps issue between express prometheus and unleash server with prom-client ([3c72949](https://github.com/nboldhq/app-platform/commit/3c7294981fe376e6054a48a5a8f2a2b035e0d425))
* **deps:** updated dependencies from GitHub ([501d78c](https://github.com/nboldhq/app-platform/commit/501d78cdcc7dfb236153376a6cdd00e528cc2ad7))
* **npm:** updated npm dependencies to their latest version ([358c20b](https://github.com/nboldhq/app-platform/commit/358c20be28a7926261f1966fa89c943958373a1f))
* **npm:** using npm ci instead of npm install in INT + added npm rebuild for native packages ([e511c01](https://github.com/nboldhq/app-platform/commit/e511c01c2d90d847dc33d0382784dcc7e8624f2e))
* **teams-packages:** fixed Teams packages build after introducing publisher/product constants ([0672f80](https://github.com/nboldhq/app-platform/commit/0672f80408114bf8f0b754a85dd311d7d172cf04))
* **tests:** disabled unit tests for testing in INT ([77daeee](https://github.com/nboldhq/app-platform/commit/77daeee2098c11593a6c95fc0b9fc822a108c641))
* **version:** updated major version number to 4 ([3e72aab](https://github.com/nboldhq/app-platform/commit/3e72aab218debde3b36da3835ff5b10b48e74616))

### [3.10.2](https://github.com/nboldhq/app-platform/compare/v3.10.1...v3.10.2) (2021-09-21)


### 📚 Docs

* **self-hosting:** initialized the self-hosting docs published to dist ([9f96583](https://github.com/nboldhq/app-platform/commit/9f965839c8295c72b969c0242db5e652f08cb673))

### [3.10.1](https://github.com/nboldhq/app-platform/compare/v3.10.0...v3.10.1) (2021-09-21)


### 🏭 Build System

* **deps:** bump alpinejs from 3.3.3 to 3.3.4 ([14b2230](https://github.com/nboldhq/app-platform/commit/14b22304e6221182cd7eab9c0c72b84334712103))


### 🐛 Bug Fixes

* **cache:** fixed massive redis session keys creation for each http request ([01d1edd](https://github.com/nboldhq/app-platform/commit/01d1edd74f210602954573814b45251a7cdc5582))
* **catalog:** fix catalog audience targeting check feature ([f87d465](https://github.com/nboldhq/app-platform/commit/f87d465de5782cac13539e85d96b9a18ca6a6730))
* **cdn:** added README.md root file to support UptimeRobot monitoring ([e35db66](https://github.com/nboldhq/app-platform/commit/e35db6693ef8d62e9515c4af5f2f36fb9450a6f7))
* **feature-toggles:** fixed issue preventing catalog to launch ([8a09416](https://github.com/nboldhq/app-platform/commit/8a094165ec6f068b972096bc966514f1483fed2b))
* **service-account:** fixed service account refresh after update ([d149a6b](https://github.com/nboldhq/app-platform/commit/d149a6b781616844355664d3b940ae5f85c2f1dd))


### 🛠️ Code Refactoring

* **api:** moved api root from /v1.0 to /api/v1.0 ([77b6f10](https://github.com/nboldhq/app-platform/commit/77b6f1038c3ef5297b38b7eaf9f4dfffb3e506da))
* **cdn:** renamed /cdn/staging to cdn/integration ([b282470](https://github.com/nboldhq/app-platform/commit/b28247025fb25db4ed86338546d50185feae5583))
* **environment variables:** refactored environment variables management ([83e04f8](https://github.com/nboldhq/app-platform/commit/83e04f805d8b9e8725ac8b833caf247f19fafa78))
* **environments:** environment variables preprocessing is now done from environment.js ([ef9f499](https://github.com/nboldhq/app-platform/commit/ef9f499fb17d6dde69131b02d796476119947667))
* **guthub:** migrated github ops token to the new format ([0a7b5b9](https://github.com/nboldhq/app-platform/commit/0a7b5b95bc0dff5540a15bb37e402a13e614a35f))
* **monitoring:** moved appinsights initialization to the instrumentation module ([a6d342c](https://github.com/nboldhq/app-platform/commit/a6d342c9a0e06d6dcc1f54ca2e6718f93d35e32e))
* **ms-graph:** improved logging in getUserDirectoryRole function ([3ca8863](https://github.com/nboldhq/app-platform/commit/3ca886314ef552063e8e467cbce8af0a778bd295))
* **ms-lists:** removed ms-lists dependency ([eb3c3d4](https://github.com/nboldhq/app-platform/commit/eb3c3d4aeb85a3e318ff377bc56c07c535dc033f))
* **packages:** renamed packages zip file name without "automation" for easier readibility ([b8481ca](https://github.com/nboldhq/app-platform/commit/b8481ca918f94fb906b287b4761656379151a45d))


### 📚 Docs

* **audits:** added an automatically generated [Audits Index](https://dist.salestim.io/audits) ([c8bd5d7](https://github.com/nboldhq/app-platform/commit/c8bd5d74fab8bed5ca9cf2e67d43a8b9eeca43b8))
* **audits:** added uptimerobot data export to npm run audit script ([c1a6bd4](https://github.com/nboldhq/app-platform/commit/c1a6bd4a8dfb166e71b92a43976dc92793ccfb8d))
* **audits:** updated audit index format ([dcda3e4](https://github.com/nboldhq/app-platform/commit/dcda3e414b2921c93598b57bc0dbd0f19074c76f))
* **depcheck:** included depcheck as part of the audit reports generated from `npm run audit` ([8fa391b](https://github.com/nboldhq/app-platform/commit/8fa391b824ebba34a397c1e389285ca89ecdad1e))
* **environment variables:** moved ENVIRONMENT_VARIABLES.md to the root to prevent jekyll errors ([50c9f3d](https://github.com/nboldhq/app-platform/commit/50c9f3dc7d75c5911ba1f21ca51514c0d9395d12))
* **packages:** new [packages index](https://dist.salestim.io/packages/) ([4742bd7](https://github.com/nboldhq/app-platform/commit/4742bd7fc23223d0547b81889d926344adc2283c))


## [3.10.0](https://github.com/nboldhq/app-platform/compare/v3.9.0...v3.10.0) (2021-09-16)


### 🚀 Features

* **feature-toggles:** enabled feature toggles service in all envs in std and role-specific mode ([d139535](https://github.com/nboldhq/app-platform/commit/d13953547b5a8ae0cd9d6f589b6317129e97ee67))


### 🛠️ Code Refactoring

* **feature-toggles:** refactored service ([40b92d9](https://github.com/nboldhq/app-platform/commit/40b92d9b1d3ef3ca683c1e73e5b054aace6e46bd))
* **mail-alerts:** disabled mail alerts for all environments, keeping github for ppr and prd ([a801824](https://github.com/nboldhq/app-platform/commit/a801824fa26f2a07ad09940d845f0faf696bcb8b))


### 📦 CI

* 🎡 updated gh action scripts to use npm install for std ([1f70df5](https://github.com/nboldhq/app-platform/commit/1f70df58a2954763f9780bd1982e6ee99f469273))
* **feature-toggles:** added st-featuretoggles-prd-01 to GitHub actions CI/CD ([0b4f397](https://github.com/nboldhq/app-platform/commit/0b4f39773be4f790624887d306ba66e3ffdd9107))
* **feature-toggles:** updated int gh action script to use npm install instead of npm ci ([e133481](https://github.com/nboldhq/app-platform/commit/e133481daa2bc8b730b9d151a14b179db17d20ce))
* **infrastructure:** added two new audit scripts db:stats and cache:stats ([24e7e0a](https://github.com/nboldhq/app-platform/commit/24e7e0a3bdfefc3cf5346d26fd1d926407858b91))


### 🏭 Build System

* **appservice:** added `.deployment` and `deploy.sh` scripts for fastest deployment ([34e4980](https://github.com/nboldhq/app-platform/commit/34e49807b7d165dc99e877a62ee8c3d572c5fc2c))
* **ci-cd:** updated github action scripts to use npm install instead of ci ([ca1e403](https://github.com/nboldhq/app-platform/commit/ca1e40339245df666c15644e1a12478f984449e8))
* **deps-dev:** bump adm-zip from 0.5.5 to 0.5.6 ([ee38d21](https://github.com/nboldhq/app-platform/commit/ee38d21cb5012018865a56b6fcec17443bd56ba7))
* **deps:** bump ajv from 8.6.2 to 8.6.3 ([c37d3c6](https://github.com/nboldhq/app-platform/commit/c37d3c6b0d279e6e7d8091f524e76e906f25a453))
* **deps:** bump alpinejs from 3.3.2 to 3.3.3 ([722d7b3](https://github.com/nboldhq/app-platform/commit/722d7b3fe170e6aa199975bdbdd23bc14f22b566))
* **deps:** bump applicationinsights from 2.1.6 to 2.1.7 ([a57ffe2](https://github.com/nboldhq/app-platform/commit/a57ffe26ffd401e0bcc9b1dbe6982cf7f9d29f95))
* **deps:** bump unleash-proxy-client from 1.3.0 to 1.4.0 ([1242b6e](https://github.com/nboldhq/app-platform/commit/1242b6edb491926b91a56d3eb46114216607b61a))
* **deps:** bump zaproxy/action-baseline from 0.4.0 to 0.5.0 ([2b37e25](https://github.com/nboldhq/app-platform/commit/2b37e2503ba6f54109c78f49fb5e0f12d39aec20))
* **deps:** bump zaproxy/action-full-scan from 0.2.0 to 0.3.0 ([dae08b1](https://github.com/nboldhq/app-platform/commit/dae08b177bc9de813d369bcc5397d1b0a2e47612))
* **feature-toggles:** removed github action yml file ([75cb6fa](https://github.com/nboldhq/app-platform/commit/75cb6fa873cfaf1e5882604c09218c9b047332d2))


### 🐛 Bug Fixes

* **feature-toggles:** disabled unleash on client-side ([bdb73be](https://github.com/nboldhq/app-platform/commit/bdb73bed16315514ea89a1fe2320855e230fc238))
* **feature-toggles:** updated gh action deployment script to use npm install instead of ci ([56cbd0f](https://github.com/nboldhq/app-platform/commit/56cbd0f5e5ee02b1cc1071e5231a60af1fdc9fb2))
* **service-account:** fixed refresh issue after updating or removing a service account ([558eed7](https://github.com/nboldhq/app-platform/commit/558eed760be68eeae87051ee59fe3f291c5d451e))
* **service-account:** fixed service account update from the settings tab ([ce6732e](https://github.com/nboldhq/app-platform/commit/ce6732e5b05befeefcd1a49fdef3a342db7da8c9)), closes [#946](https://github.com/nboldhq/app-platform/issues/946)

## [3.9.0](https://github.com/nboldhq/app-platform/compare/v3.8.1...v3.9.0) (2021-09-09)


### 🚀 Features

* **feature-toggles:** configured smtp parameters for emailing from the Unleash service ([2d191a2](https://github.com/nboldhq/app-platform/commit/2d191a2d6a184cc45fc019d43d7ab5ec16e369d1))
* **feature-toggles:** feature-toggles service is now enabled and available in standalone mode ([ce4776d](https://github.com/nboldhq/app-platform/commit/ce4776db080c0c0aec747d8024b92a62ebc411f3))
* **feature-toggles:** installed "Unleash" to implement feature toggles ([cbcc222](https://github.com/nboldhq/app-platform/commit/cbcc22207719372bcc95d081a3dd963f0480cfcd))


### 🐛 Bug Fixes

* **i18n:** locales not loaded from the login and main pages ([022e716](https://github.com/nboldhq/app-platform/commit/022e716991472e0415f5ad2a6ec91d7f8d0210ec))

## [3.8.1](https://github.com/nboldhq/app-platform/compare/v3.7.20...v3.8.1) (2021-09-09)

### 🏭 Build System

* **deps:** bump axios from 0.21.1 to 0.21.4 ([d38112b](https://github.com/nboldhq/app-platform/commit/d38112b64b541502846e47eddb84442bd2199a68))
* **deps:** updated axios ([69f672b](https://github.com/nboldhq/app-platform/commit/69f672b41c1f926e6f01b9c081360139495631b2))

### 🐛 Bug Fixes

* **i18n:** reintegrated locales to the cdn legacy folder in /dist ([2b5159e](https://github.com/nboldhq/app-platform/commit/2b5159ed26a01d89181203b1cd9ff0389c8b5e93))
* **package:** fixed issue with old teams home packages that were using query parameters ([01d8897](https://github.com/nboldhq/app-platform/commit/01d8897c83daa891f4ebcd7045a424d9cbb561c4))


### 🛠️ Code Refactoring

* **cdn:** cdn assets are now distincts between staging and production ([691a629](https://github.com/nboldhq/app-platform/commit/691a629f4975628d8f3e0e77486eb812a4482a7e))
* **i18n:** changed dist / cdn folder structure to enable "staging" and "production" ([5652d38](https://github.com/nboldhq/app-platform/commit/5652d38e9f0913dcdbb2daa115efd678aeff956b))


## [3.7] (2021-09-09)

### 🛠️ Code Refactoring

* **cdn:** updated cdn root url for each environment([c52139e](https://github.com/nboldhq/app-platform/commit/c52139e0ea5affe103099aebe503cafae28bddd2))
  * https://dist.salestim.io/cdn/staging
  * https://dist.salestim.io/cdn/production

* **web:** removed all legacy unused code ([3e1893c](https://github.com/nboldhq/app-platform/commit/3e1893ca71ca480ffdd0c2f187bbcc773d7f6335))

### Build System

* **changelog:** integrated commitzen and standard-version ([ffe2d89](https://github.com/nboldhq/app-platform/commit/ffe2d8916c6cba89a5585ee2c2a60233696ed3c9))
  * New changelog format generated from commits
* **npm:** updated npm scripts for the build/release process ([823f430](https://github.com/nboldhq/app-platform/commit/823f430ae6117678c236e66cb2e0ead18211fd79))
* **changelog:** added .versionrc to configure changelog generation ([215156e](https://github.com/nboldhq/app-platform/commit/215156e599217899b7db8e0c41226ec9dd012fe4))
* **deps:** bump @nboldhq/i18n from `abe8038` to `3ec1717` ([b70238f](https://github.com/nboldhq/app-platform/commit/b70238f7133312e8cf51592a28dad98ee1aa4b72))
* **deps:** bump alpinejs from 3.3.1 to 3.3.2 ([ff2d1c3](https://github.com/nboldhq/app-platform/commit/ff2d1c303802b0345592a10aaa577f9c021f947b))
* **versions:** extracted version bump from npm build scripts ([73c9191](https://github.com/nboldhq/app-platform/commit/73c919184a1282e9df8614bda569c8a403d16dde))

### Bug Fixes

* **login:** fix issue with login attempts without admin consent ([63f6f6b](https://github.com/nboldhq/app-platform/commit/63f6f6bc255d2c103998d600e5bdb5ac25a280b6))
* **rbac:** fixed rbac control for restricted tabs ([3206c06](https://github.com/nboldhq/app-platform/commit/3206c06c554fc65bf7f2a9bfe13a8c6a82827e3d))
* **npm:** removed segfault-handler dependency ([e08826e](https://github.com/nboldhq/app-platform/commit/e08826e9d433c54bae3f899f5a4332d281ac2308))


## [3.6] (2021-09-02)

- fixed: API Error Solution for "413 Request Entity Too Large" error
  - Probably the origin of this issue "Impossible to create a new template in PPR" [#897](https://github.com/nboldhq/app-platform/issues/897)
  - Resolution: update express middlewares by specifying a body content limit to 50mb
  ```js
  app.use(bodyParser.json({limit: '50mb'}))
  app.use(bodyParser.urlencoded({limit: '50mb', extended: false}))
  ```
- changed: Better error handling in tabs configuration
  - Example:
    - Error in in graphServices/getPlannerPlan. (PRD) [#2002851](https://github.com/nboldhq/Ops/issues/2002851)
    - Origin: Happens when the service account doesn't have access to the original plan
  - Error:
    - Error message: Forbidden
    - Error status: 403
    - Error response text: {"error":{"code":"","message":"You do not have the required permissions to access this item.","innerError":{"date":"2021-09-02T07:21:45","request-id":"7773f54f-5056-4214-8f84-549360adfa28","client-request-id":"7773f54f-5056-4214-8f84-549360adfa28"}}}
    - Error stack: Error: Forbidden
  - Improvements:
    - When this kind of exception happens (except for explicitely unsupported tabs such as Wiki or OneNote):
      - The audit trail mention the error with the tab and application name
      - An `organization_configuration_issue_raised` event is triggered and the issue is tracked in the corresponding table accessible from our admin portal, with this payload:
      ```json
        issue_type: 'TAB_CONFIGURATION_ISSUE',
        tenant_id: customer.msTenantId,
        tenant_initial_domain: customer.msTenantInitialDomainName,
        tenant_default_domain: customer.msTenantDefaultDomainName,
        message: `"${tabDisplayName}" (${appDisplayName}${message})`,
        status: 'open',
        diagnostic_data: JSON.stringify({
          tab_display_name: tabDisplayName,
          app_display_name: appDisplayName
        })
      ```
- fixed: Team creation getting stuck at 10% [#888](https://github.com/nboldhq/app-platform/issues/888)
  - Changed the behavior of requests limiters by setting the `maxConcurrent` option to `null`.
  - It appears that with a non-null value defined, some requests were leaked.
  - See: https://github.com/SGrondin/bottleneck#constructor
  - Also fixes:
    - Teams creation provisioning blocked at Planner tab [#896](https://github.com/nboldhq/app-platform/issues/896)
    - Impossible to create a new template in PPR [#897](https://github.com/nboldhq/app-platform/issues/897)
- added: Team provisioning audit trails are now saved in the events db from the `team_provisioning_audit_entry_created` event (in addition to beeing saved in the job)
- changed: Error alerts are now temporarily sent by email in addition to as a GitHub issue in all environments for debugging purposes.
- changed: Group updates operations for email nickname and sensitivity labels are now executed through distincts functions
- changed: GitHub alerts issue creation is now managed by a request limiter to prevent beeing throttled
- refactor: Connected Apps and Governance pages optimization
  - /integration and /governance are now loaded from the main component
  - Cleaned bundled js and css
- refactor: Client instrumentation initialization code is now running asynchronously and uses the client_state object
- changed: Issues in the `ops` repo are now created by our GitHub service account:
  - Login: st-service-cicd
  - token: st-ops
  - Scope: repo
  - Has Access to the Ops repo with write access
- changed: The Connected Apps module is now managed from a dedicated repo to enable external contributors
  - See: https://github.com/nboldhq/connected-apps
- added: Admin Dashboard
  - Removed previously used AdminJs
  - Purpose: Read/Write access to the `production` environment DB (Organizations, users, options, events and audit trails...)
  - The admin dashboard is provided by the [Forest Admin](https://www.forestadmin.com/) service.
    - The admin backend is hosted from our Azure platform by the `st-admin-backend-prd` app service and published to `https://admin-backend.salestim.io` by Azure FrontDoor.
    - The service is monitored by Uptime robot as `Admin Backend` from our [Status Page](https://status.salestim.com/). It uses the `/forest/healthcheck` endpoint. See https://docs.forestadmin.com/documentation/how-tos/maintain/monitor-your-forests-status
    - See the [Admin Backend](https://github.com/nboldhq/admin-backend) README for more information.
  - The Forest Admin UI for the production environment is accessible from: [https://app.forestadmin.com/st-admin-backend/Production](https://app.forestadmin.com/st-admin-backend/Production).
- added: `cloc` code statistics report generated as part of the build (lines, comments, code...)
  - Report available from https://dist.salestim.io/audits/code/loc.log
  - Includes both absolute and relative (% of code) metrics
- changed: Migrated alpinejs from v2 to v3
- added: `auth` module
  - Implements clientCredentialsFlow for automated tests and future service-account-free (application) mode.
- added: Queues monitoring dashboard
  - Uses [Bull Board](https://github.com/felixmosh/bull-board)
  - Accessible from the admin dashboard (`Queues` page) or /admin/queues
  - Protected with the same authentication than the whole /admin portal
- added: Tests and documentation for the `i18n` repo
  - Initial test suite using [Jest](https://jestjs.io/). See [tests](https://github.com/nboldhq/i18n/tree/master/tests).
  - Uses [Jupyter notebook](https://jupyter.org/) and the [iJavascript kernel](https://github.com/n-riesco/ijavascript) as an interactive documentation. See [docs](https://github.com/nboldhq/i18n/tree/master/docs).
- changed: Private GitHub Packages
  - Our individual packages are now published in our organization [GitHub Packages](https://github.com/orgs/nboldhq/packages)
  - For instance with the `@salestim/ms-lists` repo.
    - `package.json` Incldes a `publishConfig` property that sets the access to `restricted` (to our organization) and defines GitHub Packages as the registry
      ```json
      "publishConfig": {
        "access": "restricted",
        "registry": "https://npm.pkg.github.com"
      }
      ```
    - Could be published using `npm publish` (and the appropriate token scope)
  - From the `@salestim/app-platform` repo:
    - `.npmrc` file defines:
      - GitHub Packages as the registry for all packages from the @salestim scope through `@salestim:registry=https://npm.pkg.github.com` (local packages referenced as 'file:' are not impacted)
      - The token to use to connect to GitHub Packages. To avoid to use a specific user personal access token, we're now using a new service account (that will be used for all the CI/CD operations)
        - Microsoft Azure AD Account (required because GItHub enforces SSO)
          - Name: CI/CD Service Account
          - Login: service-cicd@salestim.com
        - GitHub account:
          - Login: st-service-cicd
          - Access Token name: st-cicd (SSO must be enabled)
          - Scopes: `read:packages`
    - The `@salestim/ms-lists` package can be referenced as a dependency using `"@salestim/ms-lists": "^1.0.X"`
- changed: Remote git repo dependencies management
  - The `@nboldhq/i18n` is public, and can therefore be referenced as a dependency by:
    - `"@nboldhq/i18n": "nBold/i18n"`
    - NPM assumes that this is a public GitHub repo, therefore no protocol has to be defined
- fixed: Default values future deprecation for `express-session` middleware was generating warnings
  - Errors:
    - express-session deprecated undefined resave option; provide resave option node_modules/@adminjs/express/lib/buildAuthenticatedRouter.js:56:41
    - express-session deprecated undefined saveUninitialized option; provide saveUninitialized option node_modules/@adminjs/express/lib/buildAuthenticatedRouter.js:56:41
  - Reason:
    - From: https://github.com/expressjs/session#saveuninitialized
      - The default value is true, but using the default has been deprecated, as the default will change in the future.
    - From: https://github.com/expressjs/session#resave
      - The default value is true, but using the default has been deprecated, as the default will change in the future.
  - Fix:
    - Set values for `saveUninitialized` and `resave` in `AdminJSExpress.buildAuthenticatedRouter`
    ```js
    {
      saveUninitialized: false,
      resave: false
    }
    ```
- fixed: Default values for `express.urlencoded` middleware was generating warnings
  - Errors:
    - body-parser deprecated undefined extended: provide extended option src/app/app.js:211:21
  - Reason:
    - See: https://expressjs.com/en/api.html#express.urlencoded
  - Fix:
    - Set values for `extended` and `resave` in `app.use(express.urlencoded`
    ```js
    app.use(express.urlencoded({ extended: false }))
    ```
- added: Jupyter notebook as an interactive documentation for the `webhooks` module.
  - Uses [Jupyter notebook](https://jupyter.org/) and the [iJavascript kernel](https://github.com/n-riesco/ijavascript)
  - Installation:
    ```shell
    # Install PIP Python installer
    sudo apt install pip
    # Install Jupyter notebook
    pip install notebook
    # Install nodejs prerequisites
    sudo apt-get install nodejs-legacy npm ipython ipython-notebook
    # Install ijavascript
    sudo npm install -g ijavascript
    # Start ijavascript install
    ijsinstall
    ```
- References:
  - [How to use the js kernel from vscode](https://www.tomche.space/post/using-javascript-kernel-in-vscode-jupyter-notebooks/)
- changed: Our Redis servers now enforce TLS v1.2 minimum
- added: Daily job that cleans all jobs entries in cache older than 24h
  - Uses the Bull queues [Clean](https://github.com/OptimalBits/bull/blob/master/REFERENCE.md#queueclean) method
- fixed: The service account token renewal job failed in case of non-existing registered tenant (happens when a demo tenant expires for instance)
  - Root cause: The `refreshtokensimple` operation was not calling the expected callback method, therefore the job was permanently flagged as `active`.
- changed: Replaced the external `body-parser` module with the one built in express (Starting Express 4.16+)
  - See: https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
- changed: Homepage performance optimizations
  - Unified client state:
    - The whole client state (environmenty variables, Intercom configuration, user profile, organization configuration...) is now rendered directly from the server as JS variables, directly accessible to the client js code.
    - From 6 to 0 requests during the initialization of the page
  - Batched Microsoft Graph Requests:
    - All the requests made to retreive teams and groups properties are now batched (per batch of 12 as the pagination)
    - From 96 requests per page to 6 requests per page
  - Serving static resources from our CDN
    - All the html components are now rendered from the CDN instead of from out servers
  - Cached infos used to authenticate calls to the platform's API
    - All the server-side methods used during the authentication of api requests are now cached
      - Retreive the organization from Cosmos DB:
        - `cosmosDbServices.getCustomerByTenantId`
        - `ORGANIZATION_CACHE_DURATION: 1000 * 60 * 5, // 5 minutes`
      - Calculate the roles of the current user from its token
        - `graphServices.userHasDirectoryRole`
        - `USER_ROLE_CACHE_DURATION: 1000 * 60 * 5, // 5 minutes`
- added: App package customization from Microsoft Teams Admin Center
  - Native feature described here: https://docs.microsoft.com/en-us/MicrosoftTeams/customize-apps
    - N.B: It is only available for apps installed from the Teams Store, not sideloaded apps
  - Changes:
    - Updated the app manifest schema to v1.10
    - Included the `configurableProperties` that defines what aspects of the package could be customized. See https://docs.microsoft.com/en-us/microsoftteams/platform/resources/schema/manifest-schema#configurableproperties
    - N.B: `developerUrl`, `privacyUrl` and `termsOfUseUrl` customization is disabled.
    ```js
    "configurableProperties": [
      "name",
      "shortDescription",
      "longDescription",
      "smallImageUrl",
      "largeImageUrl",
      "accentColor",
      // "developerUrl",
      // "privacyUrl",
      // "termsOfUseUrl"
    ]
    ```
- added: Jest test framework + coverage analysis
  - Run test manually (also triggered by CI/CD GitHub action): `npm run test`
  - Test report generated as part of the `build:dist` npm script
  - Report is generated at `./docs/audits/tests/tests_report.txt` and available from https://dist.salestim.io/audits/tests/tests_report.txt
    - How to tead the report:
      - Statement (Stmts) coverage Has each statement in the program been executed?
      - Branch coverage Has each branch (also called DD-path) of each control structure (such as in if and case statements) been executed? For example, given an if statement, have both the true and false branches been executed? Another way of saying this is, has every edge in the program been executed?
      - Function (Funcs) coverage Has each function (or subroutine) in the program been called?
      - Line coverage has each executable line in the source file been executed?
- added: SonarQube analysis
  - See: https://javascript.plainenglish.io/how-to-set-up-sonarqube-locally-on-a-react-typescript-project-ec02cd8e2626
  - SonarQube Server is run from `npm run sonar:server`.
    - See `./build/sonarqube/docker-compose.yml`
    - Hosted at: http://localhost:9000
  - SonarQube Scanner is run from `npm run sonar:scanner`. See `./build/sonarqube/sonarqube-scanner.js`
    - SonarQube Server MUST be running
- changed: Abstracted and dynamic configuration for Microsoft Graph and Microsoft Azure AD environments (National Cloud Deployments)
  - The Microsoft Graph base URL is now defined from the `MICROSOFT_GRAPH_BASEURL` environment variable (default to `https://graph.microsoft.com`)
  - The Microsoft Azure AD base URL is now defined from the `MICROSOFT_IDENTITY_PLATFORM_BASEURL` environment variable (default to `https://login.microsoftonline.com`)
- changed: Shared Channels support
  - The code is ready to enable the support of shared channels
  - This feature will be enabled when the support of shared channels will move from the /beta to /v1.0 Microsoft Graph endpoints
- changed: I18n resources now integrated as a private npm module
  - Before: json resources files were downloaded from the public repository as part of the build process using a custom code
  - Now:
    - The resources are integrated as a private npm package through a standard `npm install` (see `package.json`)
- fixed: Membership policies not reflected on the existing teams [#788](https://github.com/nboldhq/app-platform/issues/788)
  - fixed: Create/Update record in the teams directory table on creation
  - changed: The Governance job "Permanent membership policy" is now triggered by our scheduler (every 5 min)
  - Supported scenarios:
    - new member/owner added in a template > Added to every team attached to the template
    - deleted member/owner in team > Re-invited
    - team owner demoted to member > Re-promoted as owner
    - deleted member/owner in channel > Re-invited
    - channel owner demoted to member > Re-promoted as owner
  - added: 2 new audit trails are available in a new "Governance" tab
  - added: 2 new webhooks are available for notifications/tracking:
    - `permanent_membership_policy_team_user_invited`
    - `permanent_membership_policy_channel_user_invited`
  - changed: regular users and the service account are now using different graph permission scopes (requires a new service account sign-in)
  - Known issues:
    - For the "Permanent membership policy" to work, the service account must be signed-in again
    - The "Permanent membership policy" will only apply to new created teams (See the "Governance"\"Teams Management" tab)
- added: Run nBold platform using Docker
  - Migrated development environment from "Docker for WSL" (WSL using the docker service hosted by Windows) to a native linux docker daemon (started on boot using `service` instead of `systemd`)
  - Updated the `CONTRIBUTING.md` guide
  - Created npm scripts for building and starting each environment/role
    - Build: `npm run build:docker:[ENV]:[ROLE]`
    - Start: `npm run start:docker:[ENV]:[ROLE]`
- added: `dist.salestim.io` is now monitored by UptimeRobot as `CDN`. See [https://status.salestim.com](https://status.salestim.com)
- refactor: Externalization of key features as private NPM modules
  - Why:
    - Self-contained, better isolation
    - No more cross-dependencies (Dependencies are dynamically injected at runtime)
    - Modules dependencies are installed as node_modules by npm install
    - Individual configuration from environment variables with safe defaults
    - Each module could be externalized in its own dedicated repo later
  - New NPM modules in the `/src/modules` folder
    - Cache
    - DB
    - Events
    - GitHub
    - i18n
    - Mail
    - Sandbox
    - Webhooks
- changed: Team name now supports the "_" character. See: [#849](https://github.com/nboldhq/app-platform/issues/849)
- added: PPR and PRD GitHub Actions full deployment scripts
  - 2 new scipts:
    - `st-ppr-all`: Rebuild and deploy the full PPR environment from the `ppr` branch
    - `st-prd-all`: Rebuild and deploy the full PRD environment from the `production` branch
  - They are NOT triggered by a push NOR other GitHub events, but the they could be manually triggered from the GitHub Actions page:
    - https://github.com/nboldhq/app-platform/actions/workflows/st-ppr-all.yml
    - https://github.com/nboldhq/app-platform/actions/workflows/st-prd-all.yml
- changed: OWASP ZAP Baseline Scan
  - Static analysis checking. See rules: https://www.zaproxy.org/docs/alerts/
  - GitHub action updated to v0.4.0 `zaproxy/action-baseline@v0.4.0`
  - Executed evey day at 1am through GitHub Actions https://github.com/marketplace/actions/owasp-zap-baseline-scan
  - Latest scan report is available in the "OWASP Zap Baseline Scan" issue.
- added: OWASP ZAP Full Scan
  - Active pentest. See https://github.com/marketplace/actions/owasp-zap-full-scan
  - Executed evey day at 2am through GitHub Actions
  - Latest scan report is available in the "OWASP Zap Full Scan" issue.
- changed: Updated GitHub deployment actions versions
  - Node v14
  - Now NPM dependencies are cached using `actions/cache@v2`
  - Dependencies are installed from cache using `npm ci --ignore-scripts` instead of `npm install`. See https://docs.npmjs.com/cli/v7/commands/npm-ci

## [3.4] (2021-07-05)

- fixed: Channels are not provisioned [#828](https://github.com/nboldhq/app-platform/issues/828)
  - Detected in Ops:
    - Error in /graphServices/cloningMissingChannels/createChannel. (PRD) #1757382
      ```
      StackTrace:
      at createChannel (/home/site/wwwroot/src/microsoft/graph/graphServices.js:3599:19)
      at graphLimiter.submit (/home/site/wwwroot/src/microsoft/graph/graphServices.js:6780:48)
      Payload:
      {"statusCode":400,"code":"BadRequest","message":"Invalid OData type specified: "Microsoft.Teams.Core.channel"","requestId":"1a7c87e9-483a-417f-b776-815aa90ef12c","date":"2021-07-05T15:17:10.000Z","body":"{"code":"BadRequest","message":"Invalid OData type specified: \"Microsoft.Teams.Core.channel\"","innerError":{"date":"2021-07-05T15:17:10","request-id":"1a7c87e9-483a-417f-b776-815aa90ef12c","client-request-id":"f4a45710-a1cc-4f07-c641-9df1eb683c53"}}"}
      ```
  - Root cause: Undocumented update for the v1.0 CreateChannel endpoint
    - `'@odata.type': '#Microsoft.Teams.Core.channel'` is replaced by `'@odata.type': '#Microsoft.Graph.channel'`
    - See: https://docs.microsoft.com/en-us/graph/api/channel-post?view=graph-rest-1.0&tabs=http
- changed: Additional server protection with the Helmet package
  - A bout Helmet: https://www.npmjs.com/package/helmet
  - Benefits:
    - Less security warnings in our automated pentests
    - Better control over third-party client-side modules (mostly Intercom)
    - We now have a better control over resources origins (scripts and css) and targets (Graph, Azure...) 
  - Configuration
    ```
    app.use(
      helmet({
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'frame-ancestors': ["'self'", 'https://teams.microsoft.com'],
            'default-src': ["'self'", 'https://*.salestim.io', 'https://gme-dev-app.ngrok.io', 'https://graph.microsoft.com', 'https://api-iam.intercom.io', 'wss://nexus-websocket-a.intercom.io', 'https://*.applicationinsights.azure.com/'],
            'script-src': ["'self'", 'https://dist.salestim.io', 'https://teams.microsoft.com', 'https://widget.intercom.io', 'https://js.intercomcdn.com', 'https://api-iam.intercom.io', "'unsafe-eval'", "'unsafe-inline'"],
            'script-src-attr': ["'self'", 'https://dist.salestim.io', 'https://teams.microsoft.com', "'unsafe-eval'", "'unsafe-inline'"],
            'img-src': ["'self'", 'data:', 'https://dist.salestim.io', 'https://developers.salestim.com/', 'https://teams.microsoft.com', 'https://stsaprd.blob.core.windows.net', 'https://static.intercomassets.com']
          }
        }
      })
    )
    ```
- changed: /dist folder now accessible from dist.salestim.io instead of dist.salestim.io
  - Related documents have been updated on tech hub and handbook
- changed: Static assets (Images, fonts, css, compiled js...) are now distributed through GitHub Pages as a CDN
  - Static assets are now loaded from https://dist.salestim.io/clients/web
- changed: finalize dependency updates
  - All our third-party dependencies are now up to date with their respective latest version, excluding:
    - Alpine.js: migration impacts from v2 to v3 have to be evaluated
    - Bootstrap: migration impacts from v4 to v5 have to be evaluated
- fixed: Coding style / security best practices issues
  - Standard JS coding style linter: From 1600 to 8 identified issues
  - ESLint security issues: From 1866 to 10 identified issues (only from the recent connected apps modules)
- changed: https://dist.salestim.io public assets
  - About "Dist"
    - All these assets are regenerated during each commit
    - These assets are public (but theoritically not crawled by search engines)
  - Added: Third-party licenses reports.
    - https://dist.salestim.io/audits/third_party/license_summary.txt
      - Summarises the number of third-party dependencies for each license type
    - https://dist.salestim.io/audits/third_party/license_report.csv
      - Detailed report of all the third-party dependencies with their license type
  - Added: SSL Certificate report for www.salestim.com (in addition to app.salestim.io)
    - https://dist.salestim.io/audits/license_summary.txt
- changed: Dependency cleaning
  - Why: A lot of dependencies are not used anymore (mostly replaced by another one, sometimes the associated feature is not implemented anymore) 
  - Results:
    - Decreased deployment duration in integration from 8 to 3 min (1min for the entire build, 2 min to deploy to azure)
    - GitHub dependency alerts reduced from 6 to 2
  - Removed modules:
    - Production
      - "@octokit/rest": "^16.36.0",
      - "ace-builds": "^1.4.7",
      - "acorn": "^7.4.1",
      - "advanced-search-query": "^5.1.1",
      - "botbuilder": "^4.13.3",
      - "cheerio": "^1.0.0-rc.9",
      - "clearbit-logo": "0.0.1",
      - "colorthief": "^2.3.2",
      - "daemonite-material": "^4.1.1",
      - "datatables": "^1.10.18",
      - "datatables.net-bs4": "^1.10.23",
      - "encodeurl": "^1.0.2",
      - "escape-html": "^1.0.3",
      - "eslint-plugin-react-hooks": "^2.3.0",
      - "etag": "^1.8.1",
      - "extract-data-from-text": "^1.0.2",
      - "helmet": "^3.21.2",
      - "into-stream": "^5.1.1",
      - "jsforce": "^1.10.1",
      - "knex": "^0.21.16",
      - "knex-migrate": "^1.7.4",
      - "masonry-layout": "^4.2.2",
      - "merge-descriptors": "^1.0.1",
      - "method-override": "^3.0.0",
      - "modernizr": "^3.11.7",
      - "node-email-reply-parser": "^0.1.1",
      - "opencollective-postinstall": "^2.0.2",
      - "parse-domain": "^2.3.4",
      - "react": "^16.14.0",
      - "react-dom": "^16.14.0",
      - "restify": "^8.5.1",
      - "serve-index": "^1.9.1",
      - "summernote": "^0.8.15",
      - "uikit": "^3.6.21",
      - "underscore": "^1.13.1",
      - "url-polyfill": "^1.1.12",
      - "vcard-parser": "^1.0.0",
    - Development
      - "@microsoft/microsoft-graph-types": "^1.37.0",
      - "adaptivecards": "^2.6.0",
      - "archiver": "^3.1.1",
      - "autoprefixer": "^10.2.4",
      - "better-docs": "^1.4.7",
      - "css-loader": "^5.2.4",
      - "cssnano": "^4.1.11",
      - "gulp-copy": "^4.0.1",
      - "gulp-csso": "^4.0.1",
      - "gulp-eslint": "^6.0.0",
      - "gulp-exec": "^4.0.0",
      - "gulp-htmlmin": "^5.0.1",
      - "gulp-jsdoc3": "^2.0.0",
      - "gulp-jslint": "^1.0.10",
      - "gulp-markdown-toc": "^1.1.0",
      - "gulp-plumber": "^1.2.1",
      - "gulp-rename": "^2.0.0",
      - "gulp-string-replace": "^1.1.2",
      - "gulp-terser": "^1.4.1",
      - "gulp-uglify": "^3.0.2",
      - "gulplog": "^1.0.0",
      - "jsdoc": "^3.6.7",
      - "node-pandoc": "^0.3.0",
      - "npm-license-crawler": "^0.2.1",
      - "shx": "^0.3.3",
      - "sloc": "^0.2.1",
      - "snazzy": "^8.0.0",
      - "style-loader": "^2.0.0",

## [3.3] (2021-06-18)

- fixed: Issue with flags on template language [#814](https://github.com/nboldhq/app-platform/issues/814)
- fixed: Salestim display in Pl-Pl fails to default to english [#813](https://github.com/nboldhq/app-platform/issues/813)
- fixed: Planner Provisioning not Working in PPR [#812](https://github.com/nboldhq/app-platform/issues/812)
  - Updated the app installation process, but the root cause seems to be that the service account didn't had access to the app (or may it needs to open it once... to be checked)
  - Fixes this other related issue: "Planner provisioning failing with same planner added in the tab in PPR" [#815](https://github.com/nboldhq/app-platform/issues/815)
- fixed: Provisioning stucked at "Processing Request" [#807](https://github.com/nboldhq/app-platform/issues/807)
  - The provisioning engine does not rely on the standard cloning feature anymore
  - Fixed multiple 401 errors with token renewal
  - Now the service account access token is refreshed on provisioning startup
- fixed: nBold app & nBold home: BLANK [#801](https://github.com/nboldhq/app-platform/issues/801)
  - Analysis:
    - Looks like the issue only affects some tenants (Maybe related to waves of migrations/deployments on MS side)
    - Browser console stack trace:
      ```
      api.salestim.io/v1.0/me/roles:1 Failed to load resource: the server responded with a status of 403 (Forbidden)
      main.js:3049 Error retreiving user roles.
      error @ main.js:3049
      main.js:3050 Object
      main.js:181 Error loading user roles{"readyState":4,"responseText":"{\"message\":\"This resource requires one of the following roles: AUTHORIZED_APP,AUTHENTICATED_USER\"}","responseJSON":{"message":"This resource requires one of the following roles: AUTHORIZED_APP,AUTHENTICATED_USER"},"status":403,"statusText":"Forbidden"}
      (anonymous) @ main.js:181
      ```
  - Updates:
    - Updated calls to the Microsoft Graph to retreive directory roles members using the new signature: https://docs.microsoft.com/en-us/graph/api/directoryrole-list-members?view=graph-rest-1.0&tabs=http
      ```
      GET /directoryRoles/roleTemplateId={role-templateId}/members
      ```
    - Side benefit, it's now done in one call instead of two.
- changed: Update to the `GenerateHookSignature` API operation and PowerPlatform action
  - The endpoint signature now only accepts a json object for the payload parameter instead of a string, in order to avoid encoding issues.
  ```yaml
  HookSignatureRequest:
      title: Hook Signature Request
      description: A HookSignatureRequest object comprised of the secret and payload.
      type: object
      properties:
        secret:
          description: Webhook secret
          type: string
        payload:
          description: Webhook payload
          type: object
      required:
        - secret
        - payload
    ``` 
- fixed: Folders Copy not working for a specific Template [#749](https://github.com/nboldhq/app-platform/issues/749)
  - Reference:
    - Error in graphServices/cloneFiles/copyDriveItem/waitForTeamsAsyncOperation: https://github.com/nboldhq/Ops/issues/487448
  - Reported failed requests:
    - Tuesday, April 6, 2021 7:13 AM:32:  Saved : Request saved with id 'e89081d1-955c-4ad4-b734-d0311bb21e7b-72bc4e4a-d71b-4a36-a2eb-40ff2a8a19f8-ed396cce-b38a-4b01-b2a4-5d4b68225031'
    - Monday, April 5, 2021 5:39 PM:56:  Saved : Request saved with id 'e89081d1-955c-4ad4-b734-d0311bb21e7b-72bc4e4a-d71b-4a36-a2eb-40ff2a8a19f8-359c8faf-fb5a-4c82-9853-a8612b71594b'
    - tid: e89081d1-955c-4ad4-b734-d0311bb21e7b
    - uid: 72bc4e4a-d71b-4a36-a2eb-40ff2a8a19f8
    - teams context: 
      ```
      {"appIconPosition":28,"appSessionId":"b20a735e-13f4-4c01-8e47-3cbaf9a49602","chatId":"","entityId":"io.salestim.automation.home","frameContext":"content","hostClientType":"desktop","isFullScreen":false,"isMultiWindow":false,"jsonTabUrl":"microsoft-teams-json-tab.azurewebsites.net","locale":"en-us","loginHint":"LAtarian@mccarthy.com","meetingId":"","ringId":"general","sessionId":"1f4dc72c-d2c9-439d-d35b-c301d52a8741","sourceOrigin":null,"subEntityId":"","teamSiteDomain":"mccarthy.sharepoint.com","teamSitePath":"","teamSiteUrl":"","tenantSKU":"enterprise","theme":"default","tid":"e89081d1-955c-4ad4-b734-d0311bb21e7b","upn":"LAtarian@mccarthy.com","userLicenseType":"Unknown","userObjectId":"72bc4e4a-d71b-4a36-a2eb-40ff2a8a19f8","userPrincipalName":"LAtarian@mccarthy.com"}
      ```
  - Resolution:
    - The graphHelper/getTeamsDriveChildren function was using the Graph SDK. Now replaced by a 'request' operation
- changed: In-product release notes now restricted to "Change managers"
- changed: Connected Apps features visibility
  - The Connected Apps tab is only visible to users with the "Change Manager" role (OR teams service admin or global admin)
  - The Audit Trails tab is only visible to users with the "Change Manager" AND "Compliance Managers" roles (OR teams service admin or global admin)

## [3.1] (2021-05-30)

- fix: Error in approveApproval: Cannot retreive requester user (PRD) #790
  - Error message:
    ```
    at Object.logInternalServerError (/home/site/wwwroot/src/app/api/api-helper.js:32:20)
    at /home/site/wwwroot/src/app/api/routes/approvals/approvals.js:704:25
    at Object.getUser (/home/site/wwwroot/src/microsoft/db/cosmosDB/cosmosDbServices.js:44:28)
    ```
  - Root cause:
    - At line 633 of approvals.js, the function is expecting a nBold internal user ID, and receives instead an Azure AD object ID.
- added: In-product release notes
  - Implemented using the [Headway app](https://headwayapp.co/)
  - Public release notes page: https://headwayapp.co/salestim-changelog
  - Message is shown in the home navigation bar only if there are unseen updates
  - The counter uses eyecatching animations so users are nagged to click the badge
  - For testing purposes, the unseen count could be reinitialized from the Advanced menu (8 clicks on the app icon)
- added: Webhooks run history
  - A new internal event `webhook_run_executed` is triggered when a new webhook job is done
  - The webhook job is tracked in our events tables `evt_webhook_run_executed`, with the following properties:
    - Tenant ID
    - Webhook ID
    - Run ID
    - Payload
    - Start date
    - End date
    - Duration (ms)
    - Attempts
    - Status: Succeeded/Failed
    - Failed reason
  - New API operations:
    - getaudittrails, getaudittrail
      - /audittrails/:code with code = 'webhook_run_executed'
    - Accessible from the API Explorer
  - From the Integration page, we now have a new tab "Audit Trails" that shows all the audit trails for the connected apps and webhooks for the last 28 days
    - Support for I18n
    - download audit trails as excel
  - Availability: User need both `CHANGE_MANAGER` and `COMPLIANCE_MANAGER` to see this feature
- changed: Throttling headers are now included in CORS requests
  - Rationale: CORS requests have limitations and show only a subset of headers:
    - Cache-Control
    - Content-Language
    - Content-Type
    - Expires
    - Last-Modified
    - Pragma
  - Impact: This issue doesn't impact API requests made from a third-party client or server app, only web clients
  - Solution: In order to show more headers on the response, the server has to add a header to allow more extra headers.
    - The API server now systematically includes the following headers:
      - 'Access-Control-Expose-Headers': 'X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, Retry-After'
    - Headers could be iterated from the client by:
      ```
      for (var pair of res.headers.entries()) {
        console.log(pair[0]+ ': '+ pair[1]);
      }
      ```
  - Control: Try to refresh an audit trail more than 6 times in a row to see the warning message.
- added: Advanced error diagnostic for issue: Error in graphHelper/userHasDirectoryRole/getDirectoryRoles [#787](https://github.com/nboldhq/app-platform/issues/787)
  - Role Template Id reference: https://docs.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#all-roles
  - Additional debug infos added at /home/site/wwwroot/src/microsoft/graph/graphHelper.js:1297:17
- changed: JS bundles and mins are now excluded from eslint and standard audit reports
- changed: Power Automate and Logic Apps connector labels
  - Reference: https://docs.microsoft.com/en-us/connectors/custom-connectors/openapi-extensions
  - Reviewed the following properties
    - Summary > Action title (Sentence cased)
    - x-ms-summary > Parameter + Response schema (Title Case)
    - description
    - x-ms-visibility > Operations, Parameters, Schemas
    - x-ms-trigger-hint > Operation (Sentence cased)
- Changed: Power Automate and Logic Apps connector default webhook name and description
  - Now each trigger (starting with "When...") sets its own default values for the webhook name and description
- changed: Migration to FontAwesome 5.15.3
  - Replaced the npm package "font-awesome" v4.7 to "@fortawesome/fontawesome-free" v5.15.3
- added: Service account granted permissions are now visible from the "Settings" tab
- fixed: Check if the service account is a member of a team selected as template from the catalog
  - Works again, using a new control technique
- added: The OpenAPI definition of the `/hooks` operation now describes the events and body schema of all the possible callbacks from all the supported webhooks.
  - It follows the [OpenAPI 3 Specification](https://swagger.io/docs/specification/about/) for [Callbacks](https://swagger.io/docs/specification/callbacks/)
  - See it live in [API Explorer](https://developers.salestim.com/api/explorer.html#/hooks/CreateHook).
- changed: The `TeamProvisioningCompletedNotificationPayload` object (payload of the `team_provisioning_completed` [webhook](https://developers.salestim.com/api/webhooks.html#team-provisioning-completed)), now has an additional `metadata` property holding the metadata passed to the `createTeamProvisioningJob` [operation](https://developers.salestim.com/api/reference/Apis/TeamsApi.html#createteamprovisioningjob)
- changed: Metadata
  - Metadata passed through the `createTeamProvisioningJob` operation
    - The `createTeamProvisioningJob` operation accepts an arbitrary json object that could be used as a naming convention tag, or for further reference from the API
    - Input:
    ```json
    {
      "metadata": {}
    }
    ```
    - Storage
      - Metadata passed through the `createTeamProvisioningJob` are stored as a "freeform_metadata" [jsonb](https://www.postgresql.org/docs/9.4/datatype-json.html) field on the "team" table in DB
      ```json
      "freeform_metadata": {}
      ```
  - Metadata defined by a connected app
    - When an event is raised, or a job is executed, a connected app can store/update metadata and associate them with an object (team, channel or tab)
    - Storage
      - To keep the DB schema static, we're leveraging a single partitioned [jsonb](https://www.postgresql.org/docs/9.4/datatype-json.html) field in Postgresql
      - Connected apps metadata are stored as a "connectedapps_metadata" field on "team", "channel" and "tab" tables, each one partitioned in its own key:
      ```json
      "connectedapps_metadata": {
        "CONNECTEDAPP_CONFIGURATION_ID": {}
      }
      ```
- fixed: Mobile app rendering issues preventing app publishing to the Teams store
  - All the screen now have narrowed external margins
  - Fixed the cards width on mobile
  - Removed query parameters from teams packages, it now relies only on the url path (/home, /catalog...)
  - Debugging tool used to remotely access the browser console: https://www.npmjs.com/package/weinre

## [3.0] (2021-04-16) - Codename "Shodai"

- added: API Explorer support for application authentication
- changed: API authentication documentation to support application mode: https://developers.salestim.com/api/authentication
- added: "App" tags in template naming convention
  - Purpose: use the app id or name in the naming convention when there is no requester (the requester is an app)
  - Tags:
    - `app.id`
    - `app.name`
- added: New API operation "GetTemplates" that retreives all templates in an organization for app mode
- added: New API operation "UpdateTeam"
- added: API and Connectors support for multiple access token types
  - Supported access token types:
    - on behalf of a user (OAuth 2.0 authorization code grant flow): https://docs.microsoft.com/en-us/graph/auth-v2-user
    - as an app (OAuth 2.0 client credentials grant flow): https://docs.microsoft.com/en-us/graph/auth-v2-service
- changed: The "GetUsers" API operation now supports standard Microsoft Graph filters: https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0&tabs=http#optional-query-parameters
- changed: The "GetJob" operation is now only visible in connectors through search
- changed: Approval documentation on Tech Hub
  - Now includes these options:
      - Approval email sent by nBold: This is the default and easiest option, works without any configuration.
      - Approval email sent by your organization: If you need advanced security/compliance control over your notification emails.
      - Microsoft Teams Approval App: A Microsoft Teams native experience, that you can customize using Power Automate or Logic Apps.
      - Use your own custom app: Bring your own aproval workflow as a custom application.
  - See: https://developers.salestim.com/nocode/approval
- changed: Teams packages generation now includes a tag in their names and descriptions to flag the target environment
  - Example:
    ```json
    "name": {
      "short": "nBold-(PPR)",
      "full": "nBold Governance Automation-(PPR)"
    }
    ```
- changed: Audience targeting Syntax Test is restricted to users with the "Change Manager" role
- changed: Audience targeting Syntax Test
  - Now you can test your audience targeting rules against a specific user profile and see live results.
  - Once a test user profile is loaded, it can be updated through a json editor to perform live tests.
  - The json editor component supports: en, zh-CN, pt-BR, tr, ja, fr-FR, de, ru
- added: Template-level sensitivity labels
  - UI updates
    - Home
      - Replaced "Classification" by "Sensitivity Labels" in the home UI
      - Updated i18n strings in french and english to reflect this update
  - Catalog
    - When accessing the "New template" or "Edit template" form, a check is performed to control if the current user has consented to all the permissions associated with the `Catalog Manager` role (especially in this context the `InformationProtectionPolicy.Read` permission)
    - If not, the user is asked to grant the app new permissions
- added: New Tech Hub article: "Use Active Directory schema extensions in naming conventions and audience targeting rules"
  - https://developers.salestim.com/nocode/ad-schema-extensions
- changed: Removed the useless top bar from the "Integration" and "Settings" app tabs
- changed: Releases and Installation options in Tech Hub
  - "Releases" and "Installation Options" now have their own pages:
    - https://developers.salestim.com/platform/releases
    - https://developers.salestim.com/platform/installation-options
  - Installation options now includes a specific chapter "Supported customizations": https://developers.salestim.com/platform/installation-options.html#supported-customizations
- added: New RBAC role "Change Manager"
  - Purpose: Deliver preview features to selected users
  - Updated documentation:
    - RBAC: https://developers.salestim.com/platform/rbac
    - Targeted Release: https://developers.salestim.com/platform/releases.html#targeted-release
- changed: Updated all references to the general channel of a team to use the `/v1.0/teams/${teamId}/primaryChannel` endpoint
- added: Approval trigger & actions for connectors #connectors
  - Triggers:
    - When a team creation approval is requested:
      - Trigger: https://developers.salestim.com/connectors/connectors-actions.html#when-a-team-creation-approval-is-requested
      - Webhook: https://developers.salestim.com/api/webhooks.html#supported-events
    - When a team creation is approved:
      - Trigger: https://developers.salestim.com/connectors/connectors-actions.html#when-a-team-creation-is-approved
      - Webhook: https://developers.salestim.com/api/webhooks.html#team-creation-approved
    - When a team creation is rejected:
      - Trigger: https://developers.salestim.com/connectors/connectors-actions.html#when-a-team-creation-is-rejected
      - Webhook: https://developers.salestim.com/api/webhooks.html#team-creation-rejected
  - Actions:
    - Approve team creation: https://developers.salestim.com/api/reference/Apis/ApprovalsApi.html#approveteamcreation
    - Reject team creation: https://developers.salestim.com/api/reference/Apis/ApprovalsApi.html#rejectteamcreation
- added: nBold Connector for Azure Logic Apps documentation #logicapps
  - https://developers.salestim.com/connectors/logic-apps-connector

## [2.2] Codename "Kakuryu" - (2021-04-07)

- added: New Power Platform actions #powerplatform
  - Actions:
    - Delete a team: DeleteTeam
    - Archive a team: ArchiveTeam
    - Unarchive team: UnarchiveTeam
    - Add team member: AddTeamMember
  - See: https://developers.salestim.com/connectors/connectors-actions.html#actions
- added: API Explorer development mode
  - Add `?dev=true` to the API Explorer URL to access the list of servers (PRD, PPR...)
  - Example: https://developers.salestim.com/api/explorer.html?dev=true
- changed: Power Platform information from the "Integration" tab #powerplatform
  - From the integration tab, a message in the card header indicates if the webhook is a custom one, or created from Power Platform
  - From the webhook details, if the webhook is coming from Power Platform, is shows the workflow ID, name and operation
- changed: API and Power Platform "Hooks" endpoint are now restricted to integration managers by RBAC
  - API operations:
    - GetHooksEvents
    - CreateHook
    - DeleteHook
    - GenerateHookSignature
  - Power Platform triggers and actions:
    - TeamCreatedHook
    - TeamProvisioningCompletedHook
- added: New Power Platform connector triggers: team_created and team_provisioning_done #powerplatform
  - Triggers:
    - When a new team is created (team_created) 
    - When a team is provisioned using a template (team_provisioning_done)
  - Implemented as dynamic webhooks (webhooks are created/deleted directly by Power Platform)
  - Documentation: https://developers.salestim.com/nocode/power-platform-actions.html#triggers
- added: New Power Platform connector test connection endpoint #powerplatform
  - Used by Power Platform to test the active connection to the API
  - Endpoint: `GET GA_API_PATH + '/monitoring/test_api_connection'`
  - See: https://docs.microsoft.com/en-us/connectors/custom-connectors/test-connection
- changed: Power Platform operations versioning #powerplatform
  - All operations are now versioned and tagged using either "Poduction" or "Preview"
  - See: https://docs.microsoft.com/en-us/connectors/custom-connectors/operational-versioning
- added: New Power Platform documentation section: "Update the Power Platform Connector" #powerplatform
  - See https://developers.salestim.com/nocode/power-platform-connector.html#_3-update-the-power-platform-connector
- added: New Power Platform actions and triggers documentation #powerplatform
  - Power Platform documentation now splitted between "Connector" (how to install it) and "Triggers and Actions" (reference) 
  - See https://developers.salestim.com/nocode/power-platform-actions
- added: New Power Platform "teams" actions #powerplatform
  - GetTeam
  - GetTeamChannels
  - GetTeamPrimaryChannel
  - CreateTeamChannel
  - GetTeamChannelTabs
  - CreateTeamChannelTab
- added: New Power Platform action "GenerateHookSignature" #powerplatform
  - Purpose: bring Power Platform the capability to verify the signature generated from a [webhook secret](https://developers.salestim.com/api/webhooks.html#anatomy-of-a-webhook).
  - Testing procedure:
    - Create a new "Automated cloud flow" and skip the assistant
    - Add a "When a HTTP request is received" trigger
      - Paste a payload schema from: https://developers.salestim.com/api/webhooks.html#supported-events
    - Add a "Compose" action and name it "Get Webhook Signature Header"
      - Retreive the "X-nBold-Signature" header using this formula `triggerOutputs()['headers']['X-nBold-Signature']`
    - Add a "Compose" action and name it "Get Webhook Payload"
      - Retreive the payload using this formula `triggerBody()`
    - Add a nBold action "Generate a signature from a secret and a webhook payload"
      - Set the secret value previously used during the webhook creation
      - Set the "Webhook payload" to the result of the "Get Webhook Payload" action
    - You can then compare the signature retreived from the "Get Webhook Signature Header" action with the signature calculated from the nBold "GenerateHookSignature" action. If they match, it means that the request was effectively coming from nBold.
- added: Webhooks payloads examples and schema #api
  - The documentation now includes payload examples for the following events `team_created` and `team_provisioning_completed`.
  - See: https://developers.salestim.com/api/webhooks.html#supported-events
- fixed: API explorer errors #api
  - The API openapi definition is up to date
  - Login / Logout works from the [API Explorer](https://developers.salestim.com/api/explorer)
- changed: API Rate Limits #api
  - Each endpoint is now governed by a limit defined by a "tier"
    - Tier 1: 6 rpm
    - Tier 2: 20 rpm
    - Tier 3: 60 rpm
  - Documentation:
    - Rate limits by tiers: https://developers.salestim.com/api/rate-limits
    - Throttling guidance: https://developers.salestim.com/api/throttling
- added: Global Node/Express timeout #api
  - Implemented the [connect-timeout](http://expressjs.com/en/resources/middleware/timeout.html) module
  - All the API requests now timeout after 5 seconds
- changed: TechHub "Code Copy" feature #techhub
  - New "Copy Code" plugin that doesn't interfer with the language tag + Complete review of all the code blocks
- changed: Naming convention page #techhub
  - Naming conventions page in Tech Hub was updated to reflect the new team name length (to 264) and authorized characters (such as "|")
- fixed: Approval workflow: multiple and unreadable automated emails [#629](https://github.com/nboldhq/app-platform/issues/629)
- added GitHub actions have now a `workflow_dispatch` trigger so that actions could be started manually
- fixed: Audience Targeting - syntax display issue [#739](https://github.com/nboldhq/app-platform/issues/739)
- fixed: Naming Convention - policy display issue [#737](https://github.com/nboldhq/app-platform/issues/737)
- changed: Azure Application Insights configuration #AAI
  - Client-side events
    - New "Page View" events to track pages and high UI-level activities:
      ```yaml
      {
        name: 'loginsso',
        pageType: 'page'
      },
      {
        name: 'home',
        pageType: 'page'
      },
      {
        name: 'newprovisioningrequest',
        pageType: 'popin'
      },
      {
        name: 'myprovisioningrequests',
        pageType: 'popin'
      },
      {
        name: 'catalog',
        pageType: 'page'
      },
      {
        name: 'newtemplate',
        pageType: 'popin'
      },
      {
        name: 'edittemplate',
        pageType: 'popin'
      },
      {
        name: 'integration',
        pageType: 'page'
      },
      {
        name: 'hooks',
        pageType: 'tab'
      },
      {
        name: 'newhook',
        pageType: 'popin'
      },
      {
        name: 'savehooks',
        pageType: 'form'
      },
      {
        name: 'connectedapps',
        pageType: 'tab'
      },
      {
        name: 'settings',
        pageType: 'page'
      },
      {
        name: 'permissionmodel',
        pageType: 'tab'
      },
      {
        name: 'serviceaccountupdate',
        pageType: 'tab'
      },
      {
        name: 'serviceaccountremove',
        pageType: 'tab'
      },
      {
        name: 'serviceaccountcheck',
        pageType: 'tab'
      },
      {
        name: 'approvalsettings',
        pageType: 'tab'
      },
      {
        name: 'rbacsettings',
        pageType: 'tab'
      },
      {
        name: 'systeminformation',
        pageType: 'tab'
      },
      {
        name: 'systeminformationenvironment',
        pageType: 'tab'
      },
      {
        name: 'systeminformationlicense',
        pageType: 'tab'
      },
      {
        name: 'systeminformationlegal',
        pageType: 'tab'
      },
      {
        name: 'unauthorized',
        pageType: 'page'
      }
      ```
    - "Page View" events properties:
      - Standard properties (Automatically collected):
        ```js
        Page view URL: 'https://gme-dev-app.ngrok.io/catalog...'
        Browser version: 'Edg 89.0'
        Country or region: 'France'
        State or province: 'Paris'
        City: 'Paris'
        Page view load time: '744 ms'
        Event time: '3/27/2021 3:58:26 PM (Local time)'
        pageView/id: '2b20a209e20d47dba44a640e998f21f9'
        View page name: 'catalog' // page code
        Performance: '500ms-1sec'
        Telemetry type: 'pageView'
        Operation name: '/catalog'
        Operation Id: '2b20a209e20d47dba44a640e998f21f9'
        Parent Id: '2b20a209e20d47dba44a640e998f21f9'
        Session Id: 'nyoxDPSyVJGI17qyptv5hg'
        // User and Auth ID defined through appInsights.setAuthenticatedUserContext
        User Id: 'uASTl' // Anonymous user id generated by AAI
        Auth Id: 'gmeyer@salestimelite100.onmicrosoft.com' // Set by nBold as the user UPN
        Account Id: 'af54e9f5-6b9e-488f-b1e7-d97ff21b1cf3' // Set by nBold as the tenant ID
        Device type: 'Browser'
        Device model: 'Other'
        Operating system: 'Windows 10'
        Client IP address: '0.0.0.0'
        // Cloud role and instance defined through envelope.tags['ai.cloud.role'] and  envelope.tags['ai.cloud.roleInstance']
        Cloud role name: 'webclient' // Set by nBold for the web app
        Cloud role instance: 'gmeyer@salestimelite100.onmicrosoft.com' // Set by nBold as the user UPN
        SDK version: 'javascript:2.5.11'
        Sample rate: '1'
        ```
      - Custom properties:
        ```js
        companyName:	null // From the user profile
        refUri:	https://teams.microsoft.com/	
        tenantDefaultDomainName:	salestimelite100.onmicrosoft.com // From the organization
        tenantInitialDomainName:	salestimelite100.onmicrosoft.com // From the organization
        hostClientType:	web	// From the Teams context
        preferredLanguage:	en // From the user profile
        userObjectId:	c12e8c68-ba71-47ed-84bb-ab68e8452bf3 // From the Teams context	
        displayName:	Guillaume Meyer	// From the Teams context
        department:	null // From the user profile
        jobTitle:	null // From the user profile
        locale:	en-us // From the Teams context
        email:	gmeyer@salestimelite100.onmicrosoft.com // From the user profile	
        tid:	af54e9f5-6b9e-488f-b1e7-d97ff21b1cf3 // From the Teams context
        upn:	gmeyer@salestimelite100.onmicrosoft.com // From the Teams context
        ```
  - Server-side events
    - Identified by:
      ```js
      {
      'Cloud role name': 'app:ppr', // Role of the container. Use the format ROLE:ENVIRONMENT
      'Cloud role instance': 'st-app-ppr-01'// The unique container name. Use the format st-ROLE-ENVIRONMENT-INSTANCE
      }
      ```
      - N.B: Role instance name:
        - We don't use `os.hostname` (that may change as containers are refreshed)
        - Instead, we rely on the `WEBSITE_SITE_NAME` environment variable
        - See: https://github.com/projectkudu/kudu/wiki/Azure-runtime-environment
- added: New server roles: Service Discovery, Scheduler
  - Service Discovery: Exposes through an api endpoint the whole configuration
  - Scheduler: Schedule jobs and distribute workload through workers
  - Infrastructure changes:
    - PPR environment:
      - st-app-ppr-01
      - st-api-ppr-01
      - st-job-ppr-01
      - st-connectedapps-ppr-01 (new)
      - st-discovery-ppr-01 (new)
      - st-scheduler-ppr-01 (new)
    - PRD environment:
      - st-api-prd-01
      - st-api-prd-02
      - st-app-prd-01
      - st-app-prd-02 (new)
      - st-connectedapps-prd-01 (new)
      - st-discovery-prd-01 (new)
      - st-events-prd
      - st-job-prd-01
      - st-job-prd-02 (new)
      - st-scheduler-prd-01 (new)
- Changed: "Layered" App Service Plans
  - Purposes:
    - Create more isolation between the architecture layers (web, api, jobs...)
    - Ease performance monitoring and scalability
  - Each layer now has its own app service plan to scale it more easily
    - st-serviceplan-app-prd (Web servers)
      - st-app-prd-01
      - st-app-prd-02
    - st-serviceplan-api-prd (API servers)
      - st-api-prd-01
      - st-api-prd-02
      - st-connectedapps-prd-01
      - st-discovery-prd-01
      - st-events-prd
    - st-serviceplan-job-prd (Jobs servers)
      - st-job-prd-01
      - st-job-prd-02
      - st-scheduler-prd-01
- changed: Application logs collection
  - No more custom log files stored and managed by the application. Everything is managed through Docker containers logs that dynamically collects console/stdout logs
- added: Status monitoring for recently added services (connectedapps, discovery, scheduler, eventscollector)
  - Updated status page: https://status.salestim.com/
- added: Application Insights Integration
  - Purpose: Control Azure Application Insights integration through environment variables
  - `MICROSOFT_APPINSIGHTS_INTEGRATION_ENABLEDD`: Enable/Disable the integration with Azure Application Insights in UI and Servers 
- changed: GitHub Integration
  - Purpose: Control GitHub integration through environment variables
  - `GITHUB_INTEGRATION_ENABLED`: Enable/Disable the creation of GitHub issues on alerts
- changed: SendGrid Alert Emails Integration
  - Purpose: Control SendGrid integration through environment variables
  - `MAIL_ALERTS_ENABLED`: Enable/Disable sending emails on alerts
- changed: Intercom Integration
  - Purpose: Control Intercom integration through environment variables
  - `INTERCOM_INTEGRATION_ENABLED`: Enable/Disable Intercom integration in UI and Servers
- fixed: API reference documentation #api
  - Regenerated from the updated API openapi definition 
  - Accessible here: https://developers.salestim.com/api/reference/
- fixed: Naming convention in inserting named and numerical character references in team name, description and welcome message
  - Example: When using "R&D" in a team name (from the UI or the API), the generated name is "R&amp;"
  - Origin: The EJS templating system escapes special characters
  - Resolution: Unescape the result of the EJS templating operation
  - Module: We're now using the [HE module](https://github.com/mathiasbynens/he) (for HTML Entities) to decode named and numerical characters
- changed: Log files are not published to the ops repository anymore
- fixed: Requested members are not cleared between two requests
- fixed: Audience checkbox appears as checked even if it was previously saved as "disabled"
  - fixed a regression in template form processing as the audienceTargeting targeting was processed as "false" (as a string) instead of `false` (as a boolean)
  - Fixed the "Check Syntax" operation
- changed: Team name length and authorized characters
  - The maximum team name length has been updated to 264, which is the limit of the underlying group name (See: https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide#things-to-look-out-for)
    - This limit is validated by combining the lengths of both the requested team name and the dynamic naming convention
  - The "|" character is now authorized
- changed: New cloned planner plans naming convention
  - Updated the function `clonePlannerTab`
  - Cloned Planner plans are now followinf the naming convention:
  ```js
  const planName = `${teamDisplayName} - ${sourcePlanDisplayName}`
  ```
- added: Channels calendar tabs configuration
  - After the channel calendar has been cloned, the provisioning process now generates the right `contentUrl` property value from the `configuration` object:
  ```js
  const tabUrl = `https://teams.microsoft.com/l/channel/${channelId}/tab%3a%3a${tabId}?label=${tabDisplayName}&groupId=${teamId}&tenantId=${tenantId}`
  ```
- changed: TechHub documentation for RBAC and Audience Targeting
  - Audience targeting: Included docs and example for the `user.groups.direct` tag
  - Updated RBAC docs to include our new roles, catalog managers and integration managers
- changed: TechHub now uses Algolia for its full-text search engine.
- changed: [nBold Connector for Power Platform](https://docs.nbold.co/automation/power-platform-automation-connector) documentation
  - Updated the "Abstract" section
  - Added an introductory message describing the purpose of each step
  - Added a few minor additional steps
  - Added blog articles links to the "Getting Started" section
  - Graph permissions are now alphabetically ordered
  - Added a visual process overview
  - Added a plugin that enables to copy to your clipboard code blocks (such as names or URLs) in one click (easier that having to select precisely then copy)
  - Added text zones to paste temporarily the client id and secrets while executing the procedure (avoid using a notepad...)
  - Steps are now numbered for easier reference
- changed: Environment variables
  - As a best practice, dotenv is not loaded anymore through a `require` from the app code itself.
  - It's instead pre-loaded through the node `--require dotenv/config` command-line option:
    - In execution mode, from the `package.json` scripts: `node --require dotenv/config src/index.js`
    - In development mode, from the `launch.json` file:
      ```json
      "program": "${workspaceFolder}/src/index.js",
      "runtimeArgs": [
        "--require",
        "dotenv/config"
      ],
      ```
  - `.env` file has been refactored and comments improved
- changed: Teams packages generation
  - The multiplicity of packages to generate, based on so many files, generated issues and made this process tedious and prone to errors.
  - Now all the packages (Standalone and Home) are automatically generated from only two template files.
  - All the variables are stored in the .env configuration file
  - Here is the up-to-date list of generated packages (we now have the home package for `int` and `uat` too), all of them still accessible from `https://dist.salestim.io/packages/[PACKAGE_FILE]`:
  ```
  io.salestim.automation.standalone.dev.zip
  io.salestim.automation.standalone.int.zip
  io.salestim.automation.standalone.ppr.zip
  io.salestim.automation.standalone.prd.zip
  io.salestim.automation.standalone.uat.zip
  io.salestim.automation.targeted.home.dev.zip
  io.salestim.automation.targeted.home.int.zip
  io.salestim.automation.targeted.home.ppr.zip
  io.salestim.automation.targeted.home.prd.zip
  io.salestim.automation.targeted.home.uat.zip
  ```
- added: Webhooks
  - Webhooks enable organizations to trigger automated operations outside of the nBold platform, such as in a custom application, or in an automation tool such as Power Automate or Zapier.
  - See the online doc: https://developers.salestim.com/api/webhooks
- Power Platform Connector v1 [#534](https://github.com/nboldhq/app-platform/issues/534)
  - Available actions:
    - GetMyCatalogTemplates: Returns a collection of catalog templates, filtered by the audience targeting rules for the connected user
    - GetCatalogTemplates: Returns all the catalog templates, restricted to catalog administrators
    - CreateTeamProvisioningJob: Create a new team based on a template, returns a provisioning job ID
    - GetJob: Returns the current status of a provisioning request
  - Documentation: https://developers.salestim.com/nocode/power-platform.html
- changed: Updated list of downloadable packages:
  ```
  https://dist.salestim.io/packages/io.salestim.automation.standalone.dev.zip
  https://dist.salestim.io/packages/io.salestim.automation.standalone.int.zip
  https://dist.salestim.io/packages/io.salestim.automation.standalone.ppr-pre-sso.zip # PPR without sso
  https://dist.salestim.io/packages/io.salestim.automation.standalone.ppr.zip         # PPR with SSO
  https://dist.salestim.io/packages/io.salestim.automation.standalone.prd-pre-sso.zip # PRD without SSO
  https://dist.salestim.io/packages/io.salestim.automation.standalone.prd.zip         # PRD with SSO
  https://dist.salestim.io/packages/io.salestim.automation.standalone.uat.zip
  https://dist.salestim.io/packages/io.salestim.automation.targeted.home.dev.zip
  https://dist.salestim.io/packages/io.salestim.automation.targeted.home.ppr.zip
  https://dist.salestim.io/packages/io.salestim.automation.targeted.home.prd.zip      # PRD with SSO
  ```
- changed: Migrate to the New Microsoft Graph Team Membership Management API in v1 [#624](https://github.com/nboldhq/app-platform/issues/624)
  - Now members are added through teams membership, instead of groups memberships
  - Add member to channel: https://docs.microsoft.com/en-us/graph/api/channel-post-members?view=graph-rest-beta&tabs=http
  - Create channel: https://docs.microsoft.com/en-us/graph/api/channel-post?view=graph-rest-1.0&tabs=http
- fix: Prevent auto-fill on text and pickers fields
  - Problem: Under certain circumstances (when using teams from a chromium-based browser), the browser shows a list of previously selected values for forms fields
    - team name, description
    - additional members (More problematic as is masks the dropdown list of values)
  - Disabling this behavior is now enforced by using a hack to prevent the browser to use autofill on selectize fields
    - Chromium has hard-coded values to prevent autofill on password fields, see: https://stackoverflow.com/questions/30053167/autocomplete-off-vs-false
- fix: Regression on tabs provisioning in PPR environment.
  - Root cause: the `teamsAppId` property from the tab object is deprecated from the v1.0 endpoint
  - Resolution: Instead of `tab.teamsAppId`, use `tab.teamsApp.id`
- fix: Service account owner check on templates for RBAC users displays the wrong message in PPR environment.
  - The non-tenant-admin user were not able to retreive service account id from our API, making oi appear as a non-owner.
  - Resolution: Catalog admins can now access the service account ID (as long as we're using a delegated mode with a service account)
- fix: Mandatory membership is not enforced in provisioning form in PPR environment.
  - This feature was available for standard (non-sso) authenticated users.
  - Resolution: It is now enforced for sso-connected users
- fix: Naming convention @tags (and audience targeting) are not displayed properly in PPR environment.
  - The 'tagify' component we're using introduced a new bug in their latest version when rendering non-sanitized labels
  - Resolution: Tags labels (the one visible in the dropdown) now don't use the character '>' anymore (replaced by ':')
- fix: #security updated bull-board to v1.2.0 due a a vulnerability in highlight.js. See https://github.com/advisories/GHSA-7wwv-vh3v-89cq
- fixed: RBAC settings for catalog managers not applied in PPR environment.
- fixed: Naming convention tags are not properly displayed in PPR environment.
- changed: The "Compliance" tab is no hidden in PPR environment.
- fix: Placeholder label in the RBAC tab (tabs.settings.rbac.catalogManagers.placeholder) in PPR environment.
- fixed: Cannot save a new template due to an error with Summernote plugin in PPR environment.
- changed: SSO login page optimization
  - JS and CSS bundled and minified
  - Removed unnecessary js libraries
  - Intercom is only loaded in case of admin consent required
- changed: Admin consent page
  - Two buttons:
    - Consent as an administrator
    - I'm not an administrator > Talk to support
- fix: Removing the emoji in the "not admin consented" message
- added: Connected Apps server in production
- fix: Show channel by default for requesters / owners / members [#350](https://github.com/microsoftgraph/microsoft-graph-docs/issues/6792)
  - The `IsFavoriteByDefault` channel property is now officially supported by Microsoft: See [#6792](https://github.com/microsoftgraph/microsoft-graph-docs/issues/6792)
  - During the provisioning process, nBold replicate the `IsFavoriteByDefault` property value from the original channel to the cloned/created one.
- fixed: JOB RENEWSERVICEACCOUNTTOKENS: Task execution failed: Error in renewServiceAccountTokens/cosmosDbServices/updateCustomer: {"code":429,"body":"{\"code\":\"429\",\"message\":\"Message: {\\\"Errors\\\":[ (PRD) [#655](https://github.com/nboldhq/app-platform/issues/655)
  - This exception was causing global service interruption because this job was putting access to cosmosdb in throttled mode
  - Implemented a rate limiter for update operations (similar to the graph limiter) using the [Bottleneck](https://www.npmjs.com/package/bottleneck) package
  - Job rescheduled every sunday at 6am throught cron `0 6 * * 0`
- changed: Enable Microsoft Teams App SSO for the Home package [#393](https://github.com/nboldhq/app-platform/issues/393)
- added: Role-Based Access Control (RBAC) for Catalog Management [#625](https://github.com/nboldhq/app-platform/issues/625)
- added: Events Services (events.salestim.io)
  - Abstract:
    - Why: We're too tied to Intercom today, and Intercom lacks many ad-hoc reporting capabilities
    - Purpose: Having a self-hosted events collector, a multiplexer, a Data Warehouse and a reports server
    - Preliminary analysis: See [New events data collection platform #636](https://github.com/nboldhq/app-platform/issues/636)
    - Relies on [EventNative](https://github.com/jitsucom/eventnative)
  - The events service is comprised of two main workloads:
    - **Events Collector API**: A global and unified events collector API for the whole nBold application platform.
      - Examples of collected events:
        - Client-side: navigation across pages, clicks...
        - Server-side: containers start/stop, exceptions, new team provisioned, team template created...
      - The events collector API is accessible through a unique endpoint `events.salestim.io`.
    - **Events Multiplexer ETL**: An workflow that sends collected events to our DWH (Data WareHouse).
      - Our DWH relies on an Azure-managed PostgreSQL database that can be accessed through our [Reports Server](https://reports.salestim.io).
  - Infrastructure:
    - EventNative docker image `ksense/eventnative` from Docker Hub
    - Custom docker image `st-events-server`
    - ACR (Azure Container Registry) as a private docker registry: `stregistry.azurecr.io`
    - `st-events-prd` app service that hosts the API and multiplexer
    - Azure Front Door exposes the `st-events-prd` app service to `events.salestim.io`
    - Events collected from `events.salestim.io` are pushed to our DWH, an Azure-managed PostgreSQL service, exposed at `st-pgsql-prd.postgres.database.azure.com`, in the `events` database.
  - Learn more: See the [README](https://github.com/nboldhq/st-events-server#readme) file from the [Events Server](https://github.com/nboldhq/st-events-server) repository.
- added: Reports Server (reports.salestim.io)
  - Abstract:
    - A self-service report server that may query multiple data source, especially our DWH
    - Relies on [Redash](https://redash.io/)
    - Accessible from [reports.salestim.io](https://reports.salestim.io)
  - Infrastructure:
    - The Redash instance uses the [Bitnami Redash image](https://bitnami.com/stack/redash/cloud) and hosts:
      - Redash server roles
      - An embedded Redis instance
      - An embedded PostgreSQL instance
    - The Azure VM is `st-reports-prd`
- added: Mandatory Owners & Members (Security Policy) [#623](https://github.com/nboldhq/app-platform/issues/623)
- changed: Pre-production Home Package
  - A new home package for the pre-production environment is now accessible here: https://dist.salestim.io/packages/io.salestim.automation.targeted.home.ppr.zip
- fixed: Mobile Icon format issue [#642](https://github.com/nboldhq/app-platform/issues/642)
  - Fixed by updating the `accentColor` property from manifests files from `#a60a2d` to `#000000`
- fixed: #security Dependency Alert: build(deps): bump find-my-way from 2.2.3 to 2.2.5 [#627](https://github.com/nboldhq/app-platform/pull/627)
- changed: Status monitoring
  - Services status is now monitored by both UptimeRobot and Azure Front Door
  - Alerts are now sent to:
    - monitoring.alerts@salestim.com (Guillaume and Alex)
    - Teams DevOps\Ops channel
  - Uptime Robot configuration:
    - Websites are monitored as usual (basic HTTP GET probe every 5 min):
      - Help Center
      - Tech Hub
      - Website
    - App Services: Use the HTTP method HEAD on `/monitoring/ping` on port 443. **The only accepted UP status code is 200**.
      - PPR health probe frequency: 15 min
      - PRD health probe frequency: 1 min
  - Azure Front Door configuration:
    - See: https://docs.microsoft.com/en-us/azure/frontdoor/front-door-health-probes
    - Monitors all instances from the PPR and PRD backend pools
      - Use the HTTP method HEAD on `/monitoring/ping` on port 443. **The only accepted UP status code is 200**.
      - ***Since Front Door has many edge environments globally, health probe volume for your backends can be quite high - ranging from 25 requests every minute to as high as 1200 requests per minute, depending on the health probe frequency configured. With the default probe frequency of 30 seconds, the probe volume on your backend should be about 200 requests per minute.***
      - PPR health probe frequency: 255 seconds (higher possible value)
      - PRD health probe frequency: 30 seconds
- fixed: An unhandledRejection has been detected. (PRD) [#607](https://github.com/nboldhq/app-platform/issues/607)
  - Impact: In some circumstances, the provisioning service may shutdown unexpectedly if the cloning operation raises an unknown error
  - Resolution: Better processing of the error raised by Microsoft Graph
- fixed: [Provisionning Issue] - Impossible to create a team [#604](https://github.com/nboldhq/app-platform/issues/604)
  - related ops issue: Error cloning missing tabs in /graphServices/cloneTabsSettingsAndContents/cloningMissingChannelsAndTabs. (PRD) [#357899](https://github.com/nboldhq/Ops/issues/357899)
  - Impacted code: GraphServices.js line 3100
    ```js
    // Depending on App Id
    switch (localSourceTab.teamsAppId.toLowerCase()) {
    ```
  - Root cause: the `teamsAppId` property from the tab object is deprecated from the beta endpoint
  - Resolution: Instead of `tab.teamsAppId`, use `tab.teamsApp.id`
    ```json
    {
      "id":"07ebdc9b-8419-4f64-9cb4-1ab3c8ca96c3",
      "displayName":"testPA",
      "teamsAppId":null,
      "sortOrderIndex":"10000",
      "messageId":"1593427526382",
      "webUrl":"https://teams.microsoft.com/l/entity/a6b63365-31a4-4f43-92ec-710b71557af9/...",
      "configuration":
      {
        "entityId":"/providers/Microsoft.PowerApps/apps/98591a33-3382-4e71-aedb-c87000c39203",
        "contentUrl":"https://apps.powerapps.com/play/providers/Microsoft.PowerApps/apps/...",
        "removeUrl":null,
        "websiteUrl":"https://apps.powerapps.com/play/providers/Microsoft.PowerApps/apps/...",
        "dateAdded":"2020-06-29T10:45:25.929Z"
      },
      "teamsApp":{
        "id":"a6b63365-31a4-4f43-92ec-710b71557af9",
        "externalId":null,
        "displayName":"Power Apps",
        "distributionMethod":"store"
        }
      }
    ```
- fixed: End-users are not able to see templates [#594](https://github.com/nboldhq/app-platform/issues/594)
  - Implementation
    - app.js:
      - Updated bodyParser json and urlencoded to a limitof '200mb'
    - api.js:
      - Disabled the helmet protection module
      - Disabled the express-rate-limit module
    - mainForms.js
      - Replaced native fetch calls with their JQuery counterparts
  - Resources:
    - http://jsandersblog.azurewebsites.net/2020/04/23/azure-app-service-authentication-cors-error-easy-auth/
    - https://social.msdn.microsoft.com/Forums/en-US/ffd280ce-323d-4083-bfef-3cba7b02de09/linux-app-service-throwing-request-body-too-large-when-uploading-file-to-my-service?forum=windowsazurewebsitespreview
    - Fetch behavior: https://javascript.info/fetch-crossorigin
- fixed: Issue in templates Title in catalog [#584](https://github.com/nboldhq/app-platform/issues/584)
  - Removed 'UrlEncoding' in display
- changed: Support for the German language, both inside the product and for the manifests
  - Supported language / countries:
    ```javascript
    'de-at' // Austria
    'de-ch' // Switzerland 
    'de-de' // Germany
    'de-li' // Liechtenstein
    'de-lu' // Luxembourg
    ```
- changed: Teams packages generation
  - Now during the build, teams manifests are generated using a template that inserts localized strings from our internationalization repo.
  - Purpose, avoid future errors and make our localization process more simple
  - Related issue [#585](https://github.com/nboldhq/app-platform/issues/585)
- fixed: Build process is never ending, generating deployment errors
  - Origin: Due to the new use of i18n server in the build process to dynamically insert locales variables to the teams manifests files, the default dev mode was using an "auto-reload" mode that prevented the build process to stop as it cas constantly listening for changes. 
  - fix: Disable the live-reload mode of the i18n module even in dev mode
- fixed: #security [INFODISC01] Verbosity errors leaks internal infrastructure information [#566](https://github.com/nboldhq/app-platform/issues/566)
  - Rationale:
    - During the audit of uat.salestim.io, SYNETIS auditors have identified a medium vulnerability, allowing them to disclose some internal information about “CosmoDB” and more.
    - When a POST request is made to the endpoint “/updateUser” if a value of a field is incorrectly set, the server return an error in JSON. Instead of a simple message, the error display lot of interesting information regarding the infrastructure of CosmoDB and the Azure Storage. This could be useful to perform another attack like SSRF (Server-Side Request Forgery).
    - Example of POST request sent to the server with a bad value in “user%5Bid%5D=”:
  - Implementation:
    - Returned errors from CosmosDB are not returned anymore, replaced by custom one
- fixed: #security [INFODISC02] The endpoint “/refreshToken” send a JWT token in GET [#565](https://github.com/nboldhq/app-platform/issues/565)
  - Rationale:
    - During the audit of uat.salestim.io, SYNETIS auditors have identified a medium vulnerability, which could be dangerous if the request was intercepted or if the content of this request was logged by a tool.
    - Sometimes, the application made a GET request to “/refreshToken/[TOKEN_HERE]” to ask a Bearer token to Microsoft Graph API. The problem is, because the token is sent in GET, this could be present in logs and could be dangerous in case of compromising of the server, because all JWT tokens could be easily readable.
  - Implementation:
    - The /refreshToken endpoint is now implemented to only accept POST requests with the refresh token as the POST body
- fixed: #security [IMPROP02] Admin of an organization can modify the data of another admin (not in the same org) which can lead to account takeover [#564](https://github.com/nboldhq/app-platform/issues/564)
  - Rationale:
    - During the audit of uat.salestim.io, SYNETIS auditors have identified a high vulnerability, allowing them to modify the data of another admin which is in another organization.
    - Modification to such data could compromise customers and users. This vulnerability can also be used to craft a malicious payload and to create a Cross-Site Scripting (XSS) stored on the victim profil configuration.
    - When an administrator open the configuration tab in https://uat.salestim.io/forms?stEntityId=io.salestim.automation.settings, he can modify his data (Provider Id for example) and save them.
  - Implementation: The global former /updateCustomer endpoint is deprecated and not available anymore, now replaced by three more granular endpoints
    - /updateCatalog
    - /updateApprovalSettings
    - /deleteServiceAccount
- fixed: #security [IMPROP03] A user can impersonate another user when sending the approval email for creating a team [#563](https://github.com/nboldhq/app-platform/issues/563)
  - Rationale:
    - During the audit of uat.salestim.io, SYNETIS auditors have identified a high vulnerability, allowing them to impersonate another user when a team creation need an approval step.
    - When a user create a new team, if the template used is configured to have a team approved, an email is sent to the user with the “approval” role for the team.
    - When user send the request, a POST request is sent to the endpoint “/v1.0/jobs/provisioning” that includes information about the requester.
  - Implementation:
    - on the client side (createRequestFromForm), now only the minimal information are sent (content of the form and the template ID), using this structure:
      ```json
      {
        team: {
          name: '',
          description: '',
          welcomeMessage: '',
          membership: {
            owners: [],
            members: []
          }
        },
        template: {
          id: ''
        }
      }
      ```
    - On the server side (/jobs/createProvisioningJob), the requester information, template information and the organization information are retreived directly from the bearer token instead of passed by the client
- fixed: #security [SXSS01] Cross-Site Scripting (XSS) stored on 'name' and 'description' field in template creation [#567](https://github.com/nboldhq/app-platform/issues/567)
  - Rationale:
    - During the audit of uat.salestim.io, SYNETIS auditors have identified a medium vulnerability, allowing them to create a stored Cross-Site Scripting (XSS) on templates by using a weakness in the field “description.
    - This stored XSS could be dangerous because it’s reflected on all users. In case of admin account compromised, this could be impactful against the organization.
    - When the creation of a model is saved, a POST request is sent to “/updateCustomer”. The vulnerable field is `customer[formsSettings][templates][ID][templateConfiguration][description]` and `customer[formsSettings][templates][ID][templateConfiguration][name]`
    - When user’s try to create a new team, this will load all templates configuration and the JavaScript payload too
  - Implementation: Direct html tag injection through our templating engine is now prevented by encoding the strings to prevent js injection from the following fields:
    - template name
    - template description
    - team name
    - team description
  - N.B: Code injection is still possible through naming conventions as it is the expected and the main purpose of the application
- fixed: #security Disable attachments in /Updateuser POST and other CosmosDB interactions [#572](https://github.com/nboldhq/app-platform/issues/572)
  - Rationale:
    - The user object (and the organization object too) have an `_attachment` property that may permit to upload attachments. As it's not required and may be used to inject malicious files, it should be disabled.
    - Also, in addition to _attachments, we'll also hide other system defined elements such as `_rid`, `_ts`, `_self`, `_etag` to prevent the leak of information about the underlying system.
  - Reference: https://docs.microsoft.com/en-us/rest/api/cosmos-db/documents
  - Implementation:
    - Hide these fields in the corresponding 'get' functions to prevent them from beeing visible from the client:
      - /getUser
      - /getCustomer
      - /getCustomer/:tenantId
    - Remove these fields from the corresponding 'update' functions before updating cosmosdb
      - /updateUser
      - /updateCustomer

## [2.1.0] Codename "Hakuho" - (2020-09-03)

- fixed: Approval not working in PPR (issue not identified) [#569](https://github.com/nboldhq/app-platform/issues/569)
  - `/locales/i18nServer.js` was not initialized in `api` role (as opposed to the standalone role)
- fixed: Error 404 in function: getUserPhoto with arguments [#558](https://github.com/nboldhq/app-platform/issues/558)
  - Happens when the requester has no profile picture.
    - Handle empty user photo properly (404 error in graphServices, returning a null response)
    - Use a generic avatar picture instead: https://uat.salestim.io/img/avatar-neutral-blue.png
- fixed: Invalid token when pushing alerts to the GitHub "ops" repository.
  - Update to the private token (code "SalesTimOpsAlerts") used to coneect to the ops repository to support the SSO authentication
    - Reference: https://docs.github.com/en/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
- fixed: Error when saving approval settings when no template is present [#551](https://github.com/nboldhq/app-platform/issues/551)
  - Original Ops issue: An unhandledRejection has been detected. (UAT) [#240102](https://github.com/nboldhq/Ops/issues/240102)
- added: New UI to use tags in naming conventions and audience targeting
  - While editing a naming convention (Name, description, email, welcome message) in a template, the user can select pre-made tags by typing either "@" or "#", then selecting the tag from the list.
  - Tags could be mixed with static content
  - Tags could coexist with dynamic contents (meaning other <% %> elements typed directly in the textbox)
  - Relies on the [Tagify](https://github.com/yairEO/tagify) component
  - Available tags:
    - Naming conventions:
      ```yaml
      { id: 1100, value: '<%= request.team.name %>', title: i18n.__('tags.request.team.name'), bgColor: requestTagsBgColor, textColor: requestTagsTextColor },
      { id: 1101, value: '<%= request.team.description %>', title: i18n.__('tags.request.team.description'), bgColor: requestTagsBgColor, textColor: requestTagsTextColor },
      { id: 1102, value: '<%= request.team.welcomeMessage %>', title: i18n.__('tags.request.team.welcomeMessage'), bgColor: requestTagsBgColor, textColor: requestTagsTextColor },
      { id: 1103, value: '<%= request.template.name %>', title: i18n.__('tags.request.template.name'), bgColor: requestTagsBgColor, textColor: requestTagsTextColor },
      { id: 1200, value: '<%= user.id %>', title: i18n.__('tags.user.profile.id'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1201, value: '<%= user.city %>', title: i18n.__('tags.user.profile.city'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1202, value: '<%= user.companyName %>', title: i18n.__('tags.user.profile.companyName'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1203, value: '<%= user.country %>', title: i18n.__('tags.user.profile.country'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1204, value: '<%= user.department %>', title: i18n.__('tags.user.profile.department'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1205, value: '<%= user.displayName %>', title: i18n.__('tags.user.profile.displayName'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1206, value: '<%= user.employeeId %>', title: i18n.__('tags.user.profile.employeeId'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1207, value: '<%= user.givenName %>', title: i18n.__('tags.user.profile.givenName'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1208, value: '<%= user.jobTitle %>', title: i18n.__('tags.user.profile.jobTitle'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1209, value: '<%= user.mail %>', title: i18n.__('tags.user.profile.mail'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1210, value: '<%= user.mailNickname %>', title: i18n.__('tags.user.profile.mailNickname'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1211, value: '<%= user.mobilePhone %>', title: i18n.__('tags.user.profile.mobilePhone'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1212, value: '<%= user.officeLocation %>', title: i18n.__('tags.user.profile.officeLocation'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1213, value: '<%= user.postalCode %>', title: i18n.__('tags.user.profile.postalCode'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1214, value: '<%= user.preferredLanguage %>', title: i18n.__('tags.user.profile.preferredLanguage'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1215, value: '<%= user.state %>', title: i18n.__('tags.user.profile.state'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1216, value: '<%= user.streetAddress %>', title: i18n.__('tags.user.profile.streetAddress'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1217, value: '<%= user.surname %>', title: i18n.__('tags.user.profile.surname'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1218, value: '<%= user.usageLocation %>', title: i18n.__('tags.user.profile.usageLocation'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1219, value: '<%= user.userPrincipalName %>', title: i18n.__('tags.user.profile.userPrincipalName'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1251, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute1 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute1'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1252, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute2 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute2'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1253, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute3 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute3'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1254, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute4 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute4'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1255, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute5 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute5'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1256, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute6 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute6'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1257, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute7 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute7'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1258, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute8 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute8'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1259, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute9 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute9'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1260, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute10 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute10'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1261, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute11 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute11'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1262, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute12 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute12'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1263, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute13 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute13'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1264, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute14 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute14'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1265, value: '<%= user.onPremisesExtensionAttributes.extensionAttribute15 %>', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute15'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 1300, value: '<%= (new Date).getTime(); %>', title: i18n.__('tags.uniqueId.fromDate'), bgColor: dynamicTagsBgColor, textColor: dynamicTagsTextColor }
      ```
    - Audience targeting:
      ```yaml
      { id: 2200, value: 'user.id', title: i18n.__('tags.user.profile.id'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2201, value: 'user.city', title: i18n.__('tags.user.profile.city'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2202, value: 'user.companyName', title: i18n.__('tags.user.profile.companyName'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2203, value: 'user.country', title: i18n.__('tags.user.profile.country'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2204, value: 'user.department', title: i18n.__('tags.user.profile.department'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2205, value: 'user.displayName', title: i18n.__('tags.user.profile.displayName'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2206, value: 'user.employeeId', title: i18n.__('tags.user.profile.employeeId'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2207, value: 'user.givenName', title: i18n.__('tags.user.profile.givenName'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2208, value: 'user.jobTitle', title: i18n.__('tags.user.profile.jobTitle'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2209, value: 'user.mail', title: i18n.__('tags.user.profile.mail'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2210, value: 'user.mailNickname', title: i18n.__('tags.user.profile.mailNickname'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2211, value: 'user.mobilePhone', title: i18n.__('tags.user.profile.mobilePhone'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2212, value: 'user.officeLocation', title: i18n.__('tags.user.profile.officeLocation'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2213, value: 'user.postalCode', title: i18n.__('tags.user.profile.postalCode'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2214, value: 'user.preferredLanguage', title: i18n.__('tags.user.profile.preferredLanguage'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2215, value: 'user.state', title: i18n.__('tags.user.profile.state'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2216, value: 'user.streetAddress', title: i18n.__('tags.user.profile.streetAddress'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2217, value: 'user.surname', title: i18n.__('tags.user.profile.surname'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2218, value: 'user.usageLocation', title: i18n.__('tags.user.profile.usageLocation'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2219, value: 'user.userPrincipalName', title: i18n.__('tags.user.profile.userPrincipalName'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2219, value: 'user.groups.direct', title: i18n.__('tags.user.groups.direct'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      // { id: 2219, value: 'user.groups.transitive', title: i18n.__('tags.user.groups.transitive'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2251, value: 'user.onPremisesExtensionAttributes.extensionAttribute1', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute1'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2252, value: 'user.onPremisesExtensionAttributes.extensionAttribute2', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute2'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2253, value: 'user.onPremisesExtensionAttributes.extensionAttribute3', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute3'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2254, value: 'user.onPremisesExtensionAttributes.extensionAttribute4', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute4'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2255, value: 'user.onPremisesExtensionAttributes.extensionAttribute5', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute5'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2256, value: 'user.onPremisesExtensionAttributes.extensionAttribute6', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute6'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2257, value: 'user.onPremisesExtensionAttributes.extensionAttribute7', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute7'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2258, value: 'user.onPremisesExtensionAttributes.extensionAttribute8', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute8'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2259, value: 'user.onPremisesExtensionAttributes.extensionAttribute9', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute9'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2260, value: 'user.onPremisesExtensionAttributes.extensionAttribute10', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute10'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2261, value: 'user.onPremisesExtensionAttributes.extensionAttribute11', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute11'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2262, value: 'user.onPremisesExtensionAttributes.extensionAttribute12', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute12'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2263, value: 'user.onPremisesExtensionAttributes.extensionAttribute13', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute13'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2264, value: 'user.onPremisesExtensionAttributes.extensionAttribute14', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute14'), bgColor: userTagsBgColor, textColor: userTagsTextColor },
      { id: 2265, value: 'user.onPremisesExtensionAttributes.extensionAttribute15', title: i18n.__('tags.user.profile.onPremisesExtensionAttributes.extensionAttribute15'), bgColor: userTagsBgColor, textColor: userTagsTextColor }
      ```
- added: Support for Azure Active Directory schema extensions (aka custom attributes) in #naming-conventions and #audience-targeting
  - WARNING: The Azure AD `schema extensions` are different from the Microsoft Graph specific `Open extensions` and `Schema extensions` (that we may also support in the future if requested).
  - Usage: Azure AD extension attributes may be located in two different locations depending on their origin:
    1. Right at the root of the user profile for attributes created by a specific application, for instance:
    ```yaml
    { "extension_e3049e305790413ca1b11bb53526f057_extensionAttribute10": "REDACTED" }
    ```
    These attributes are named by using the convention `extension_<extensions-app-id>_attributename`, and the `<extensions-app-id>` is specific to each tenant. To find this identifier, navigate to [Azure Active Directory > App registrations > All applications](https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps/menuId/). Search for the app that starts with "aad-extensions-app" and select it. On the app's Overview page, note the Application (client) ID.
    Usage in naming conventions and audience targeting:
    ```js
    user.extension_e3049e305790413ca1b11bb53526f057_extensionAttribute10
    ```
    1. In the `onPremisesExtensionAttributes` property of the user profile for attributes synchronized by Azure Ad Connect (Also available from the M365 Exchange Admin UI as mailbox properties), such as:
    ```yaml
    { 
      "onPremisesExtensionAttributes": {
        "extensionAttribute1": "REDACTED",
        "extensionAttribute2": "REDACTED",
        "extensionAttribute3": "REDACTED",
        "extensionAttribute4": "REDACTED",
        "extensionAttribute5": "REDACTED",
        "extensionAttribute6": null,
        "extensionAttribute7": "M",
        "extensionAttribute8": "10/03/1982",
        "extensionAttribute9": null,
        "extensionAttribute10": "REDACTED",
        "extensionAttribute11": null,
        "extensionAttribute12": null,
        "extensionAttribute13": null,
        "extensionAttribute14": null,
        "extensionAttribute15": null
      }
    }
    ```
    Usage in naming conventions and audience targeting:
    ```js
    user.onPremisesExtensionAttributes.extensionAttribute10
    ```
  - To see the available extensions for a specific user, you can use this link that requests all the user profile properties:
    - https://developer.microsoft.com/en-us/graph/graph-explorer?request=me&method=GET&version=beta&GraphUrl=https://graph.microsoft.com
  - Notes for later:
    - In order to list extensions dynamically from the UI:
      - List apps: https://docs.microsoft.com/en-us/graph/api/application-list
      - List extensions for an app: https://docs.microsoft.com/en-us/graph/api/application-list-extensionproperty
- added: Requests Approval Workflow #approval
  - To be applied, the following conditions have to be true (Approval is just ignored if any of these conditions are not met):
    - Actionable message mode set to 'organization' from the settings tab
    - A provider ID has to be set
    - Approval has to be enabled from the template
    - At least one approver has to be defined
  - Notification email: 1 email is sent per approver
    - The email content is personalized using the following variables:
      - request
      - approver
      - template
      - Locale: Approval workflow uses the language specified in the template (just like provisioning notifications in a channel)
    - The email is comprised of:
      - The actionable card
      - An HTML footer
    - Process:
      - Each approver receives the notification email, from which he can:
        - Review and update the inputs from the requester
        - Approve the request
          - The card is replaced by a confirmation card summarizing the approval process, including the approver and approval date
        - Reject the request including a rejection comment
          - The card is replaced by a confirmation card summarizing the approval process, including the approver, rejection message and its rejection message
  - "My Requests" now shows 2 kinds of requests, approval and povisioning (A different icon)
    - Process:
      - The approval request is Created as "saved" à 20%
      - move to 50% when the email are sent as "approval"
        - When approved:
          - Moves to 100% as "approved" (green bar)
        - When rejected
          - Moves to 100% as "rejected" (red bar)
          - The approver name and rejection message is shown in "My requests" with a "talk to approvers" button
      - If the approval request is approved, A new provisioning request is created at 10% as "saved". Everything else on this request is similar to a request created without approval
  - Security:
    - Authentication:
      - When executed from outlook (Desktop, web or mobile), the actionable card sends the current user token as part of the action transmitted to our API, ensuring that the request is authenticated
    - Signing:
      - Sending actionable messages relies on a principle similar to app registrations, meaning that by default it's only available in your own tenant (with a unique sender email from the tenant domain). This is the only option enabled as of today, we'll enable the generic multi-tenant option later after the Microsoft validation.
      - Generate a new certificate and signing key:
        ```sh
        openssl genrsa -out private.pem 2048 # Generate a new 2048 bits key pair using openssl
        openssl rsa -in private.pem -out public.pem -outform PEM -pubout # Outputs the public key from the pair (the public key is the one that has to be send to MS)
        https://superdry.apphb.com/tools/online-rsa-key-converter # Use this online converter to convert the public key from PEM to XML (MS uses the XML format)
        ```
      - Publish the app description + public key to the [Actionable Email Developer Dashboard](https://aka.ms/publishoam)
      - Sample: Sign the card from the server before sending it to the client:
        ```js
        // Generate a JWS signed card payload
        // Reference: https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements
        // Node.js sample: https://github.com/tony-zhu/SignedAdaptiveCardSample-node
        const cardMinified = JSON.stringify(JSON.parse(generatedCard)) // Clone the generated card as string
        const originator = env.vars.MAIL_ACTION_MSG_ORIGINATOR // The Actionable Message provider ID generated during provider registration
        const sender = job.data.cache.organization.formsSettings.msServiceAccountUpn // Set the email sender
        const recipients = [job.data.cache.approvers[approverId].profile.mail] // Set the email recipients (array of strings)
        // Combine all parameters into one payload
        const payload = {
          sender: sender,
          recipientsSerialized: JSON.stringify(recipients),
          adaptiveCardSerialized: cardMinified,
          originator: originator,
          iat: Math.floor(Date.now() / 1000) // Include a generation timestamp
        }
        // Sign the payload using the private key (uses the jsonwebtoken package)
        const cardAsJwt = jwt.sign(payload, privateSigningKey, { algorithm: 'RS256' })
        // The generated JWS could be tested using the public key
        jwt.verify(cardAsJwt, publicSigningKey, (err, res) => {
          if (!err) {
            console.debug('jwt token OK')
          } else {
            console.debug('jwt token KO')
          }
        })
        ```
    - Configuration:
      - Approval is disabled until the security configuration is done. In the meantime, a warning message is shown in the template UI.
      - Published configuration procedure: https://developers.salestim.com/nocode/approval.html
- fixed: graphServices/createTeamFromTemplate/sendMessage error. (PRD) [#540](https://github.com/nboldhq/app-platform/issues/540)
  - added a control to check if a message to send is not empty
  - added: control to replace some characters with their html code counterpart:
    - `.replace(/'/gim, '&apos;')`
    - `.replace(/[\r\n]/gim, '<br/>')`
- added: New security report available online about our SSL certificates
  - Accessible from: https://dist.salestim.io/audits/certificates_report.log
- added: Daily security scan using [OWASP ZAP scan](https://www.zaproxy.org/blog/2020-04-09-automate-security-testing-with-zap-and-github-actions/)
  - This scan is performed every day at 1am and generates a detailed report as a new issue in the main repository (see [#538](https://github.com/nboldhq/app-platform/issues/538) as an example)
- changed: checked compatibility of our Redis client with TLS 1.2 that will be enforced by Microsoft soon
- fixed: Requester not added in private channels [#528](https://github.com/nboldhq/app-platform/issues/528)
  - We were using the requester ID from the request object which is nBold ID. Now, instead, we use the msUserId (from AD) from the user object.
- fixed: Error 404 in function: addChannelOwner [#192827](https://github.com/nboldhq/Ops/issues/192827)
  - Manage 404 error in case of bad provisioning
- changed: Updated manifests to v1.7, including the following properties:
  - `showLoadingIndicator`: `false` (always `false` as it seems to break the app)
  - `isFullScreen`: `false` for standalone packages, `true` for targeted packages
- changed: Handbook is now restricted to "Members" (aka employees) from the nBold tenant
- changed: Documentation about naming convention and audience targeting tags
  - The tech hub documentation has been updated to reflect these changes.
- fixed: Audience targeting issue
  - Cause:
    - Related to how the api returns the user profile (and the necessary work to handle profile custom attributes)
  - Consequences:
    - The user profile used for the audience targeting and the naming conventions is now entirely based on the strict Graph API definition, and therefore changes all our naming conventions and audience targeting rules, especially the tags we can use.
  - Resolution:
    - The new schema is taken into account in both the naming convention and the audience targeting, server-side and client-side.
    - All customers have been automatically upgraded to the new schema, and their configuration updated (for instance, `user.msEmail` is replaced by `user.mail`)
  - The tech hub documentation has been updated to reflect these changes.
- fixed: Implement an option to fix the security issue: "EJS server-side templating is vulnerable to code injection" [#477](https://github.com/nboldhq/app-platform/issues/477)
  - Related security alert: [EJS server-side templating is vulnerable to code injection](https://github.com/nboldhq/app-platform/security/advisories/GHSA-jq59-4wc7-p87x)
  - Resolution:
    - Removed all the direct server-side calls to EJS `ejs.render()` that may use the `eval` function (N.B: client-side use of ejs is safe and therefore is not impacted) in the following files:
      - `requests-processer.js`: was using ejs to apply naming conventions
      - `catalog.js`: was using ejs to apply audience targeting in our api
    - Implementation of a new `sandbox.js` module that encapsulates the [vm2](https://www.npmjs.com/package/vm2) npm package which seems the most secure
- fixed: Private channel name is truncated after using our new workaround [#516](https://github.com/nboldhq/app-platform/issues/516)
Avoid planner throttling
- changed: Upgraded all environments to node.js v12 LTS
  - Rationale: Better support for the enforcement of TLS v1.2 on Cosmos DB (and probably Redis too)
  - See [Announcement](https://nodejs.org/en/blog/release/v12.13.0/)
- fixed: Naming Convention Issue in Welcome Message and Description [#287](https://github.com/nboldhq/app-platform/issues/287)
  - Symptom: about the request.team.name Naming convention on the welcome message and description is good at the preview level on the form but when the team is generated it's taking the whole team name and not only what the user enter in text
  - Resolution: The request object was updated by reference not by value. THe code is updated to clone values before applying any naming convention.
- added: Deletion of automatically generated wiki tabs
  - During the provisioning, the process controls the number of wiki tabs in the source channel, and keeps only the same number of wiki tabs (keeping the first one in priority, that should be the original one with the right tab name)
- fixed: Requester and Permanent owner not added in private channel [#408](https://github.com/nboldhq/app-platform/issues/408)
  - Related issue: Unexpected error in postProcessRequest: {"status":500,"response":{"req":{"method":"POST","url":"https://graph.microsoft.com/beta/teams/1c406dc9-17bf-4ca8-b084-61e90a2d72e4/channels/19:04f7a80043744d16 (PRD) [188674](https://github.com/nboldhq/Ops/issues/188674)
  - Related to a microsoft Graph bug.
  - Workaround: Implemented a retry mechanism (3 retry with a 10000ms interval) in case of error `500` in the `addChannelOwner` function + delays before execution of sequential tasts (such as "create a PCH" > "create a tab" and "install an app" > "create a tab")
- changed: Planner provisioning is too long due to multiple throttled requests [#515](https://github.com/nboldhq/app-platform/issues/515)
  - Resolution: Created a new `plannerLimiter` similar to `graphLimiter` with specific default configuration values, especially:
    ```sh
    MICROSOFT_PLANNER_LIMITER_MAXCONCURRENT=null # No concurrency
    MICROSOFT_PLANNER_LIMITER_MINTIME=500     # Max 2 requests per second
    MICROSOFT_PLANNER_LIMITER_HIGHWATER=null  # No queue limitation or leak rule
    ```
- changed: Rendering of templates in the catalog tab is now vastly faster, especially with a large number of templates
  - Code optimization of rendering that was previously doing an ajax request for each template.
- fixed: Unknown and undocumented error in function: cloneTeamLogo. (PPR) [#188236](https://github.com/nboldhq/Ops/issues/188236)
  - Cause: Locale files were not loaded as the `jobs` role was not loading the webapp.
  - Resolution: The `workersLauncher.js` service is now requiring `i18nServer.js` so that it's loaded systematically
- fixed: Unable to save template in PPR
  - Cause: Misconfigured blob container for PPR in `stsaprd` storage account
  - Related issue: Unexpected error in /blobServices/savePicture/createBlockBlobFromStream. (PPR) [#188030](https://github.com/nboldhq/Ops/issues/188030)
- security: bump standard-version from 7.1.0 to 8.0.1 [#505](https://github.com/nboldhq/app-platform/pull/505)
- added: PPR dedicated app, api and jobs roles
  - PPR is now hosted with an architecture similar to PRD, with dedicated instances for each role
  - Now dynamically assigning the right service URL based on environment:
    - `WEB_PUBLICURL_PRD`
    - `API_PUBLICURL_PRD`
    - `JOB_PUBLICURL_PRD`
- security: bump jquery from 3.4.1 to 3.5.0 [#460](https://github.com/nboldhq/app-platform/pull/460)
  - Related issue:
    - Audit Button in My Request - not working [#452](https://github.com/nboldhq/app-platform/issues/452)
    - Cause: Incompatibility between bootstrap v4.4.1 and jquery v3.5.0 > Downgraded jquery to v3.4.1. See [Bootstrap Issue](https://github.com/twbs/bootstrap/issues/30553)
    - Resolution: Upgraded JQuery to 3.5.1 to avoid conflicts with bootstrap
- fixed: Infinite retry loop when trying to clone a team where the service account is not an owner
  - Resolution:
    - In case of error "403_FORBIDDEN", the provisioning process tries to add the service account as an owner of the source team
    - The pre-processing entries (everything before the actual team cloning) in the audit trail will therefore be visible twice, indicating that the provisioning process has been restarted.
- fixed: Infinite retry loop when adding the requester as an owner of a private channel.
  - Cause: The graph is supposed to return a 400 error in case of duplicate (trying to add a user when he's already a member), but sometimes returns a 500 error...
  - Resolution: Just skipping outside the addChannelOwner method when error 500 is reached.
- fixed: In audit trail, the private channels requested owners and permanent owners names are "undefined"
  - Now retreiving the user displayName during provisioning
- fixed: In audit trail, the private channels names are not displayed
  - Now retreiving the channel displayName during provisioning (instead of the "name" property)
- fixed: Planner plan cloning takes a large amount of time and may fail as it gets throttled while exporting the original plan
  - Refactored the `exportPlannerPlanAsJson` and `provisionPlannerContent` functions to use the graphLimiter to schedule calls to the Graph
- fixed: infinite retry loop in copyDriveItem
  - Cause: In case of channels that have been renamed, the drive copy process fails and loops on retry for error 500 (as the original folder could not be found)
  - Resolution: Changed the retry mechanism to limit the number of retry to 3 in any case
- Added: Provisioning retry on fail
  - In case of major crash (the main process is stopped and automatically restarted), if a request has still not yes created the new team, the newly started process restarts the provisioning process using the same request.
  - The pre-processing entries (everything before the actual team cloning) in the audit trail will therefore be visible twice, indicating that the provisioning process has been restarted.
- fixed: In some cases, the provisioning process was stopped after configuring tabs:
  - Cause: multiple wiki tabs with the same name (such as wiki tabs automatically added by the standard cloning process) were generating confusion in our code, preventing the tabs configuration to end properly
  - Resolution: better error management in the tabs configuration process
- changed: Tabs types that doesn't support configuration (Wiki, PowerBI, OneNote) are now visible in the audit trail with a descriptive message
- fixed: Unsupported tabs names in the audit trails are now "URL-decoded", preventing weird codes to be visible such as `%20`, 
- fixed: graphServices/createTeamFromTemplate/sendMessage error. (INT) [#174802](https://github.com/nboldhq/Ops/issues/174802)
  - Added a token refresh handler in case of expiration during a provisioning process
- fixed: Redis connectivity issue in UAT
  - Related issues:
    - Alert job error (UAT) [#174317](https://github.com/nboldhq/Ops/issues/174317): Error initializing Lua scripts
    - Job Logging job error (UAT) [#174234](https://github.com/nboldhq/Ops/issues/174234): connect ETIMEDOUT
    - An unhandledRejection has been detected. (UAT) [#174236](https://github.com/nboldhq/Ops/issues/174236): connect ETIMEDOUT
  - Resources: See "Connection time out during queue add" [#1366](https://github.com/OptimalBits/bull/issues/1366#issuecomment-506734828)
  - Fix: Increase the ioredis connectTimeout property to 30000 (ms) so that queues have time to connect during startup
- fixed: Unknown and undocumented error in function: getMyRequestsCount. (INT) [#174131](https://github.com/nboldhq/Ops/issues/174131)
  - Better error management in case of network latency issues
- changed: jobs queues are now prefixed with the current environment for better isolation
- fixed: An unhandledRejection has been detected. (UAT) [#172834](https://github.com/nboldhq/Ops/issues/172834)
  - The service is now restarted if an unhandledRejection is detected, for instance a Redis connectivity issue during boot.
- changed: better log levels management with distinction between verbose and debug
  - Now using the `npm` logging levels prioritized from 0 to 6 (highest to lowest):
    ```yaml
    { 
      error: 0, 
      warn: 1, 
      info: 2, 
      http: 3,
      verbose: 4, 
      debug: 5, 
      silly: 6 
    }
    ```
  - Reference: [Winston logger logging levels](https://github.com/winstonjs/winston#logging-levels) 
- added: Support for `en-my` locale (English - Malaysia) [#172551](https://github.com/nboldhq/Ops/issues/172551)
- fixed: typo in `es-es` locale, replaced "% s" by "%s" [#172547](https://github.com/nboldhq/Ops/issues/172547)
- added: Support of italian language
  - Applies to:
    - nBold UI based on Teams / Browser language
    - Template lang for notifications
  - The following lang / region pairs are supported:
    - it-IT	Italian (Italy)
    - it-CH	Italian (Switzerland)
- changed: #provisioning Tabs configuration support
  - Supported tabs: Tab cloning and configuration works and is officially supported by nBold (SUPPORTED by Microsoft)
    - Custom tabs
    - Website tabs
    - Word, Excel, PowerPoint, and PDF tabs
    - Document library tabs
    - YouTube tabs
    - Yammer tabs
  - Unsupported tabs: Tab cloning and configuration SHOULD work but cannot be officially supported by nBold (UNSUPPORTED by Microsoft)
    - Planner tabs
    - Microsoft Stream tabs
    - Microsoft Forms tabs
    - SharePoint page and list tabs
  - Ignored: Tab cloning without configuration
    - Power BI tabs
    - Wiki tabs
    - OneNote tabs
- fixed: #provisioning 1 Private Channel Missing - Systra [#480](https://github.com/nboldhq/app-platform/issues/480)
  - Symptom: Sometimes, the Graph accepts to create a channel (and returns an ID), but then the channel is not visible anymore from the graph.
  - See "Error in graphHelper/updateTabConfiguration" [#169114](https://github.com/nboldhq/Ops/issues/169114)
    ```yaml
    {
      "statusCode":404,
      "code":"NotFound",
      "message":"No active channel found with channel id: 19:2110ddd4c6ab4906a0cec78bf6d13459@thread.tacv2",
      "requestId":"a6f8d51f-dc50-45a6-8a48-414e199924e8",
      "date":"2020-07-02T05:47:54.000Z"
    }
    ```
  - IMPORTANT: THIS IS NOT A REAL FIX, JUST A WORKAROUND
    - Basically, after the creation of a private channel:
      - Wait for 10sec
      - Check if the /tabs endpoint for this channel is responding (returns a 404 in case of error)
      - If the /tabs returns an error:
        - Delete the channel
        - Restart the private channel provisioning process (every 10 sec, max 3 times), using a different name:
          - Adding " (1)", " (2)" or " (3)" respectively for retry #1, #2 and #3
        - Retest the /tabs endpoint
- fixed: #provisioning Missing Tabs [481](https://github.com/nboldhq/app-platform/issues/481)
- fixed: #provisioning 3 tabs missing in the provisionning [#482](https://github.com/nboldhq/app-platform/issues/482)
- fixed: #ui My requests not working correctly [#484](https://github.com/nboldhq/app-platform/issues/484)
  - Happened when the requests list was empty due to a bug in the /me/jobs api
- fixed: #provisioning Tabs provisioned in the wrong channel
  - Fixed by reordering (alphabetically on the displayName) channels after the full provisioning, as they may have been created in a different order.
- fixed: #provisioning Apps not cloned in private channels
  - Error undefined in function: createTab with arguments: [#165395](https://github.com/nboldhq/Ops/issues/165395)
  - Resolution: Implement a control process that install missing apps automatically during the provisioning
- fixed: #login Unable to login in dev mode when using wsl
  - Cause: WSL internal clock stops synchronizing with the host, resulting in a JWT check error.
  - Fix: none so far. See [system date is not same with windows (WSL 2) #4245](https://github.com/microsoft/WSL/issues/4245)
  - Workaround: Execute the following command to force sync `sudo hwclock -s`

## [2.0.0] Codename "Kisenosato" - (2020-06-18)

- fixed: Provisioning issues
  - Implement query replay for Microsoft Graph erors 502 and 503
  - Better management after a query has been throttled by managing the "replay-after" header
  - Tabs are now using "displayName" instead of "name"
  - More granular tasks priorisation in bottleneck
  - Fixed replay operations in createTeamFromTemplate
  - Better error management in files cloning in case of renamed channel
  - Replaced error by warn level in case of error 502 to reduce noise in the ops repo
- changed: Store performance optimizations
  - Removed all JQuery dependency in components and removed the library from bundle.min.js
- added: Doc procedure to [optimize templates assets](https://github.com/nboldhq/template-manifests/blob/master/README.md#4-optimize-your-assets)
- added: Intercom chat UI is now available from the template store
- fixed: Tabs in private  channels are sometimes not provisioned
  - Fixed the cloningMissingTabs function to add a "tabs" property when it is missing to private channels
- fixed: Provisioning process crashes with wrong number of provate channels
  - Updated the cloningMissingChannels function to take into account the asynchronous private channels creation
- fixed: Planner tab plans are not provisioned [#462](https://github.com/nboldhq/app-platform/issues/462)
  - Planner tabs configuration is now temporarly not supported anymore. See [Configuring the built-in tab types in Microsoft Teams](https://docs.microsoft.com/en-us/graph/teams-configuring-builtin-tabs#planner-tabs)
  - After a retro-engineering phase, here is the new formats for the 3 main tab configuration properties:
  ```js
  const tabVersion = '&tabVersion=20200228.1_s' // Temporarly added, to be checked regularly
  const targetContentUrl = `https://tasks.teams.microsoft.com/teamsui/{tid}/Home/PlannerFrame?page=7&auth_pvr=OrgId&auth_upn={userPrincipalName}&groupId={groupId}&planId=${targetPlannerPlan.id}&channelId={channelId}&entityId={entityId}&tid={tid}&userObjectId={userObjectId}&subEntityId={subEntityId}&sessionId={sessionId}&theme={theme}&mkt={locale}&ringId={ringId}&PlannerRouteHint={tid}${tabVersion}`
  const targetWebsiteUrl = `https://tasks.office.com/${tenantId}/Home/PlanViews/${targetPlannerPlan.id}?Type=PlanLink&Channel=TeamsTab`
  const targetRemoveUrl = `https://tasks.teams.microsoft.com/teamsui/{tid}/Home/PlannerFrame?page=13&auth_pvr=OrgId&auth_upn={userPrincipalName}&groupId={groupId}&planId=${targetPlannerPlan.id}&channelId={channelId}&entityId={entityId}&tid={tid}&userObjectId={userObjectId}&subEntityId={subEntityId}&sessionId={sessionId}&theme={theme}&mkt={locale}&ringId={ringId}&PlannerRouteHint={tid}${tabVersion}`
  ```
  - In addition, the plan id is not set as the entityId of the tab configuration... For reference, see [Identifiers in Planner](https://docs.microsoft.com/en-us/graph/api/resources/planner-identifiers-disclaimer?view=graph-rest-1.0)
- fixed: Tabs created in wrong private channels [#441](https://github.com/nboldhq/app-platform/issues/441)
  - updated code to reflect the new graph schema
- changed: Template Store: SEO, social sharing and categories
  - Header Metadata
    - Automatically generated by this VuePress plugin: https://github.com/webmasterish/vuepress-plugin-autometa
    - The Template Store is now optimized for SEO through automatically generated meta, for instance:
      ```html
      <meta name="description" content="Digital Strategy and Transformation, a Microsoft Teams template by EY">
      <meta name="image" content="https://manifests.salestim.io/assets/ey/digital-strategy-transformation/ey-digital-strategy-transformation-social.png">
      <meta name="twitter:title" content="Digital Strategy and Transformation">
      <meta name="twitter:description" content="Digital Strategy and Transformation, a Microsoft Teams template by EY">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:image" content="https://manifests.salestim.io/assets/ey/digital-strategy-transformation/ey-digital-strategy-transformation-social.png">
      <meta property="og:type" content="article">
      <meta property="og:title" content="Digital Strategy and Transformation">
      <meta property="og:description" content="Digital Strategy and Transformation, a Microsoft Teams template by EY">
      <meta property="og:image" content="https://manifests.salestim.io/assets/ey/digital-strategy-transformation/ey-digital-strategy-transformation-social.png">
      <meta property="article:tag" content="ey">
      <meta itemprop="name" content="Digital Strategy and Transformation">
      <meta itemprop="description" content="Digital Strategy and Transformation, a Microsoft Teams template by EY">
      <meta itemprop="image" content="https://manifests.salestim.io/assets/ey/digital-strategy-transformation/ey-digital-strategy-transformation-social.png">
      ```
    - Better social Sharing experience:
      - LinkedIn and Twitter are now using the "socialPicture" field defined in the manifest as their card picture
  - A new navigation section in the sidebar called "Integrations", right now with `Salesforce`, `Dynamics` and `ServiceNow`
  - Categories now have a `description` that appears between the category page title and the templates cards.
- fixed: Requester and membership not fully provisioned
  - Related issues:
    - Team Not Fully Provisioned - IQ Business [#449](https://github.com/nboldhq/app-platform/issues/449)
    - Requester not added to membership list, provisioning blocked @ 80% [#451](https://github.com/nboldhq/app-platform/issues/451)
- fixed: Cannot access audit trail from the "My Requests" screen
  - Related issue: Audit Button in My Request - not working [#452](https://github.com/nboldhq/app-platform/issues/452)
  - Fixed incompatibility between bootstrap v4.4.1 and jquery v3.5.0 > Downgraded jquery to v3.4.1. See [Bootstrap Issue](https://github.com/twbs/bootstrap/issues/30553)
- added: New open source repository [tech-hub](https://github.com/nboldhq/tech-hub)
  - Contains multiple SDKs for various clients and servers
  - Levels of support:
    - `javascript`: beta (Target as GA in API v1)
    - `powershell`: alpha (Target as GA in API v1)
    - `apex`: experimental
    - `csharp-netcore`: experimental
    - `aspnetcore`: experimental
    - `nodejs-express-server`: experimental
- security: Audit reports are now generated as part of the `app-platform` build.
  - [JavaScript Standard Style Report](https://dist.salestim.io/audits/standard_report.log)
  - [ESLint Security Report](https://dist.salestim.io/audits/eslint_security_report.log)
  - [NPM Audit Report](https://dist.salestim.io/audits/npm_audit_report.log)
- added: New open source repository [internationalization](https://github.com/nboldhq/internationalization)
  - Contains the raw json files resource files used by the nBold Platform
  - Now updated versions of the resource files are automatically downloaded during build (taking the latest release)
  - Public URL: https://i18n.salestim.io
  - Governed by:
    - [nBold Security Policy](https://docs.nbold.co/trust-center/security-policy)
    - [nBold Open Source Code of Conduct](https://docs.nbold.co/open-source/code-of-conduct)
  - Usage instructions are detailed in the [README file](https://github.com/nboldhq/internationalization/blob/master/README.md)
- added: nBold API Explorer
  - Similar to the Microsoft Graph Explorer
  - Currently exposes the /store endpoints
  - Public URL: https://developers.salestim.com/api/explorer
  - Deeplinks to specific operations are supported, for example [getStoreCategories](https://developers.salestim.com/api/explorer.html#/store/getStoreCategories)
- added: nBold Open Source Code of conduct
  - Repo: [code-of-conduct](https://github.com/nboldhq/code-of-conduct)
  - Public URL: https://docs.nbold.co/open-source/code-of-conduct/
  - A new distribution list is available to receive requests at [codeofconduct@salestim.com](mailto:codeofconduct@salestim.com)
- fixed: Logs files naming convention
  - The switch to a fully global architecture generated conflicts in github
  - The new naming convention is: `<environment>-<role>-<hostname>-<date>.log`
  - For example: `prd-api-api01-2020-05-14-18.log`
- added: New public doc "Security Policy"
  - Public URL: https://developers.salestim.com/platform/securitypolicy
  - Explains the procedure to report a vulnerability and includes a public PGP key for secure communication
- changed: New network infrastructure based on [Azure Front Door](https://azure.microsoft.com/en-us/services/frontdoor/)
  - Benefits
    - Improved operations & availability
      - Decorrelates our infrastructure from the public domains and urls, enabling our new [Microservices Architecture](https://en.wikipedia.org/wiki/Microservices).
      - Reduce downtime by enabling [hot-patching](https://en.wikipedia.org/wiki/Patch_(computing)#HOT-PATCHING) of our container instances
      - Managing redundency is easier as Front Door provides an global HTTP load balancing with instant failover across pools of containerized instances
      - SSL certificates are now 100% automatically managed by Front Door, reducing our maintenance workload and risks of unexpected expiration / invalidation
    - Increased performance
      - Users are automatically routed to the closest available backend
      - Static assets can now be cached and served from [Azure CDN](https://docs.microsoft.com/en-us/azure/cdn/) across the multiple [Azure PoP Worldwide](https://docs.microsoft.com/en-us/azure/cdn/cdn-pop-locations)
      - TLS traffic encryption is now offloaded to Azure Front Door, reducing our servers workload
    - Improved security
      - All Azure Front Door audit trails and logs are automatically gathered in our [Azure Sentinel SIEM](https://docs.microsoft.com/en-us/azure/sentinel/overview)
      - Provides an embedded [Web Application Firewall (WAF)](https://docs.microsoft.com/en-us/azure/web-application-firewall/ag/ag-overview) that automatically protects from the [OWASP top 10 threats](https://owasp.org/www-project-top-ten/).
      - Embedded [Azure DDoS Protection](https://docs.microsoft.com/en-us/azure/virtual-network/ddos-protection-overview) through [Bandwidth Throttling](https://en.wikipedia.org/wiki/Bandwidth_throttling)
  - Now Azure Front Door manages access, certificates and routing to:
    - Non-Production environments
      - int.salestim.io
      - uat.salestim.io
      - ppr.salestim.io
    - Production environments
      - prd.salestim.io: Former production VM
      - app.salestim.io
      - api.salestim.io
      - jobs.salestim.io
- added: New "/dist" directory
  - Public URL: https://dist.salestim.io/
  - Exposes:
    - App packages (Related links are up to date here https://developers.salestim.com/releases/releases)
      - io.salestim.automation.standalone.dev.zip	
      - io.salestim.automation.standalone.int.zip
      - io.salestim.automation.standalone.ppr.zip
      - io.salestim.automation.standalone.prd.zip
      - io.salestim.automation.standalone.uat.zip
      - io.salestim.automation.targeted.catalog.dev.zip
      - io.salestim.automation.targeted.catalog.prd.zip
      - io.salestim.automation.targeted.catalog.uat.zip
      - io.salestim.automation.targeted.home.dev.zip
      - io.salestim.automation.targeted.home.prd.zip
      - io.salestim.automation.targeted.home.uat.zip
      - io.salestim.automation.targeted.settings.dev.zip
      - io.salestim.automation.targeted.settings.prd.zip
      - io.salestim.automation.targeted.settings.uat.zip
    - API definition (openapi) and json schemas (Links updated on https://developers.salestim.com/api)
- changed: Isolation of tech-hub and template-store repos and websites
  - Why: Previously, sites "tech-hub" and "template-store" were hosted in the main "app-platform" repo, resulting in longer build times and possible issues.
  - How: Now techhub and template-store sources are hosted in their own isolated repos:
    - tech-hub:
      - New [Repo](https://github.com/nboldhq/tech-hub)
      - The website is still available [here](https://developers.salestim.com/), and is hosted right from the repository through the GitHub Pages service.
    - template-store:
      - New [Repo](https://github.com/nboldhq/template-store)
      - Now hosts both .json templates and the template-store website
      - The store website is now available [here](https://store.salestim.com/) instead of `prd.salestim.io/store`
      - N.B: The [template-gallery](https://github.com/nboldhq/template-gallery) repo previously hosting .json templates is now archived and should not be used anymore
- fixed: Fallback language for sv-SE generates i18n errors [#135919](https://github.com/nboldhq/Ops/issues/135919)
  - How: Added a specific fallback entry for sv-se in `i18nConfig.js`
- added: Support of spanish language
  - Applies to:
    - nBold UI based on Teams / Browser language
    - Template lang for notifications
  - The following lang / region pairs are supported:
    - es-AR	Spanish (Argentina)
    - es-BO	Spanish (Bolivia)
    - es-CL	Spanish (Chile)
    - es-CO	Spanish (Colombia)
    - es-CR	Spanish (Costa Rica)
    - es-DO	Spanish (Dominican Republic)
    - es-EC	Spanish (Ecuador)
    - es-ES	Spanish (Spain)
    - es-GT	Spanish (Guatemala)
    - es-HN	Spanish (Honduras)
    - es-MX	Spanish (Mexico)
    - es-NI	Spanish (Nicaragua)
    - es-PA	Spanish (Panama)
    - es-PE	Spanish (Peru)
    - es-PR	Spanish (Puerto Rico)
    - es-PY	Spanish (Paraguay)
    - es-SV	Spanish (El Salvador)
    - es-UY	Spanish (Uruguay)
    - es-VE	Spanish (Venezuela)
- changed: Increasing membership limits
  - Now you can select up to 20:
    - Requested owners & members in the new team request form
    - Permanent owners & members in the template settings
- changed: Improved user selection
  - Why: It's sometimes hard to select users from directories when there is a large number of users sharing the same first or last name
  - How: In user selection box (approvers selection from a template, permanent members...), filtering is now performed on the following fields:
    - givenName
    - surname
    - email
    - userPrincipalName
- changed: The "approval" tab in templates is now flagged with a "Pro" badge
- fixed: Error updating mail nickname. (PRD) [#121353](https://github.com/nboldhq/Ops/issues/121353)
  - Implemented a retry on 404 error (if the mailbox is not yet fully provisioned)
- fixed: email naming conventions
  - Replace accentuated characters using Lodash Deburr function (see https://lodash.com/docs/4.17.15#deburr)
  - Deburrs string by converting [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table) and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A) letters to basic Latin letters and removing combining [diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
- changed: Updated doc "Service Account" and "Data Management Practices" sections
- fixed: Unexpected error in /sameSiteMiddleware/ensureCookieCompatibility. [#120782](https://github.com/nboldhq/Ops/issues/120782)
  - The issue was raised in case of empty user-agent header for some browsers

## [1.5.0] Codename "Yokozuna"

- fixed: SameSite Policy update in chrome and edge
  - Why: https://web.dev/samesite-cookies-explained/
  - How:
    - Implementation of a new middleware (sameSiteMiddleware)
    - Set express to trust the first proxy
      ``` javascript
      app.set('trust proxy', 1) // trust first proxy
      // @see http://expressjs.com/en/guide/behind-proxies.html
      ```
    - Define cookie policy in express session
      ``` javascript
      app.use(expressSession(
      {
        cookie: {
          httpOnly: true,
          sameSite: 'none',
          secure: true
        },
      ```
- fixed: The same template may appear multiple times in the "New team" form in the "Catalog" tab after creating a new template
  - Related issue: Not able to search for the Original Team in creating a template [#360](https://github.com/nboldhq/app-platform/issues/360)
- fixed: When creating a new template, the template picture remains the same as a previously created or updated template
- fixed: Salestim Web Experience Appears in Microsoft Teams App [#363](https://github.com/nboldhq/app-platform/issues/363)
- fixed: Check service account screen is empty
- fixed: Freeze when adding Permanent owner - Members [#354](https://github.com/nboldhq/app-platform/issues/354)
- fixed: Teams Picture not added  [#355](https://github.com/nboldhq/app-platform/issues/355)
- fixed: Unexpected error in I18n __(). (DEV) [#115582](https://github.com/nboldhq/Ops/issues/115582)
  - Created i18n keys for crm configuration
- fixed: Error in isOwnerOf: Resource 'ad9d747a-737a-4f72-b1d1-fceaffaa54ba' does not exist or one of its queried reference-property objects are not present. Detail: {"statusCode":404,"code":"Request_Resource (PRD) [#115535](https://github.com/nboldhq/Ops/issues/115535)
  - Resolution: Better graph error management
- fixed: Error in requestsEventsQueueListener/processRequestEvent/requestsProcesser/processNewRequest: {} (DEV) [#115312](https://github.com/nboldhq/Ops/issues/115312)
  - Error message: Error message: waitForTeamsAsyncOperation status is "failed"
  - Resolution: Implement retry mechanism
- fixed: Jobs execution error
  - Related issues:
    - index/exitHandler received a signal: SIGINT. Message: SIGINT Description: User pressing Ctrl+C and is an interrupt App will exit in 30000ms. (DEV) [#115116](https://github.com/nboldhq/Ops/issues/115116)
    - JOB DELETETESTTEAMSDEV: Task execution failed with unexpected error: {} (DEV) [#115110](https://github.com/nboldhq/Ops/issues/115110)
    - Task executed with errors (DEV) [#115111](https://github.com/nboldhq/Ops/issues/115111)
  - Root cause: Bad async loading of jobs module instance, resulting in an uncatched exception in jobScheduler trying to call the 'start' method.
- fixed: Client-side exceptions
  - Error in getGeneralChannelId: Failed to execute backend request. Detail: {"statusCode":502,"code":"BadGateway","message":"Failed to execute backend request.","requestId":"7d898e23-7baf-4dae-b3ae-08fe (PRD) [#114249](https://github.com/nboldhq/Ops/issues/114249)
  - Error in getTeamProperties: Failed to execute backend request. Detail: {"statusCode":502,"code":"BadGateway","message":"Failed to execute backend request.","requestId":"a8ad671b-3d90-4eee-9556-86ec8e (PRD) [#114251](https://github.com/nboldhq/Ops/issues/114251)
  - Resolution: Implemented a graphErrorHandler client-side global error handler
- fixed: An unhandledRejection has been detected. (INT) [#114867](https://github.com/nboldhq/Ops/issues/114867)
  - Error message: Error message: scroll already exists for this workspace
  - Resolution: Prevent parralel queries that use paging (scroll) in extrectIntercomData job
  - Schedule jobs more evenly to prevent conflicts:
  ``` javascript
  {
    dev: '*/30 - - - *',
    int: '0 2 - - *',
    uat: '0 3 - - *',
    ppr: '0 11 - - *',
    prd: '0 23 - - *'
  }
  ```
- fixed: Enable / Disable template is now working properly
- fixed: An uncaught exception has been detected at origin: undefined (DEV) [#113328](https://github.com/nboldhq/Ops/issues/113328)
  - Resolution: Better andling of Intercom API exceptions
- feat: new 📡 Stream tabs content cloning capability.
  - Now you can clone Stream tabs as part of your teams templates.
- fixed: Intermittently user is not able to clone a team [#112477](https://github.com/nboldhq/Ops/issues/112477) and [#112481](https://github.com/nboldhq/Ops/issues/112481)
  - Error:
  ``` javascript
  {"status":502,"response":{"req":{"method":"POST","url":"https://graph.microsoft.com/v1.0/teams/3756ec9b-ae79-4f14-a8b5-9af49134c9a7/clone","data":"{\"displayName\":\"Test team janapp2-TIM","description":"Team created by jantestapp2. Description: test","mailNickname":"TIM-Test-team-janapp2-TIM-EN","partsToClone":"apps,tabs,settings,channels","visibility":"private"}",
  {\r\n "code": "BadGateway",\r\n "message": "Failed to execute backend request.",\r\n "innerError": {\r\n "request-id": "eb2fb2fa-ef6e-4b23-9035-b9ae28564e10",\r\n "date": "2020-01-17T19:26:11"\r\n }\r\n }\r\n}"}}
  ```
  - Root cause: Error code 502 is undocumented in [Microsoft Graph Error documentation](https://docs.microsoft.com/en-us/graph/errors)
  - Resolution: Errors code 502 are now handled as 503 error, using a retry mechanism on failure
- improvement: Web Store
  - Web Store categories are now multilingual
  - Template pages now have recommendations "Other templates from the same category" and "Other templates from the same publisher"
- fixed: User without preferred language in their Office 365 profile.
  - Root cause: Under certain circumstances, for instance with accounts automatically provisionned from Office 365 demo/test tenants, a user may have an empty empty preferred language. Therefore the user profile property in nBold is 
    ``` javascript
    { msPreferredLanguage: null }
    ```
  - Background: Default templates (Basic EN and Basic FR) relies on this property for audience targeting
  - Impacts: Default templates were not visible by these users
  - Resolution: Now when checking the audience targeting, if the ``` msPreferredLanguage ``` property is empty, it is dynamically filled with (Ordered by priority):
    1. Microsoft Teams language
    2. Browser language
    3. ``` en-us ``` in last resort
- security: Teams packages manifests updates
  - in DEV environments, both root and sub-domains are now authorized ``` *. ``` and ``` *.\- ```, to cope with NGROK sub-domains such as ``` eu ``` in ``` dev.eu.ngrok.io ```
  - in non-DEV environments, we're now using wildcards to authorize ``` *.salestim.io ``` and ``` *.salestim.com ```
  - Added the ``` openExternal ``` permission to ``` devicePermissions ``` to future-proof nBold on mobile devices.
  ``` javascript
  {
    validDomains: [
      "*.ngrok.io",
      "*.*.ngrok.io",
      "*.salestim.io",
      "*.salestim.com"
    ],
    devicePermissions: [
      "openExternal"
    ]
  }
  ```
- feat: Web store is now accessible from dev, int and uat environments
  - The store is accessible anonymously from ``` https://[ENVIRONMENT].salestim.io/store/ ```, and is embedded as an iframe in the "Catalog" tab.
  - Store templates could be filtered by:
    - Category
    - Industry
    - Language
  - Store categories and industries hav their own landing pages.
- fixed: Job Scheduler
  - Source error: Error writing jobs audit trail. (UAT) [#97625](https://github.com/nboldhq/Ops/issues/97625)
- fixed: Error in getGroupImage: null Detail: {"statusCode":404,"code":null,"message":null,"requestId":null,"date":"2019-12-05T07:12:35.019Z","body":null} (PRD) [#100049](https://github.com/nboldhq/Ops/issues/100049)
  - Better handling of 404 error when a team has no associated photo
- improvement: Mail nickname formatter
  - Mail nickname generated from the email naming convention is now automatically formatted using the following rules:
    - Remove domain part to only keep the nickname (aka local part) (<>Remove everything after the first "@" character)
    - Remove or replace spaces and special characters:
      ```
      whitespace > '-'
      " > ''
      ( > ''
      ) > ''
      , > '-'
      : > '-'
      ; > '-'
      < > ''
      > > ''
      @ > ''
      [ > ''
      \ > ''
      ] > ''
      ```
    - Limit nickname to 64 characters
    - In case of email nickname duplicate:
      - Limit nickname to 51 characters
      - Add a unique suffix based on current datetime using the format: -YYMMDDhhmmss

## [1.4.0] Codename "Ozeki"

- feat: API /jobs endpoints
  - Manage nBold's platform jobs
  - Operations:
    - GET /jobs
      - Get all available jobs for the current environment (Meaning all jobs that is authorized to be executed in the current environment, actually scheduled or not)
    - GET /jobs/scheduled
      - Get all scheduled jobs for the current environment
    - POST /jobs/tasks
      - Create a new job instance (aka "task")
- feat: API root & versions URL scheme: https://[ENVIRONMENT].salestim.io/api/[VERSION]
- feat: Files cloning
- fixed: Deeplinks to provisioned tabs in channels notification messages are not working.
  - The tab webUrl property returned by the graph api just after tab provisioning is incorrect (at least the deeplink is not supported).
  - Now we're using the webUrl generated after tab configuration
- improvement: Use $expand=teamsApp QSP when calling "/tabs" endpoint to get more infos about cloned tabs
- feat: Improved onboarding
  - New customers now have two default templates, one for FR language and one for EN language, automatically enabled and configured with 2 source teams with a "General" channel and a "🙋🏼‍♀️ Discover nBold" channel
- security: Enforce TLS v1.2
  - Why: TLS v1.0 and v1.1 will soon be deprecated. Reference: [SSL Labs Grade Change for TLS 1.0 and TLS 1.1 Protocols](https://blog.qualys.com/ssllabs/2018/11/19/grade-change-for-tls-1-0-and-tls-1-1-protocols)
  - Resolution: [Configuration of TLS versions in App Service and Functions apps now available](https://azure.microsoft.com/en-au/updates/app-service-and-functions-hosted-apps-can-now-update-tls-versions/)
  - Validation: Use [SSL Labs Report](https://www.ssllabs.com/ssltest/analyze.html?d=prd.salestim.io)
  - Updated documentation: [Secure communication with HTTPS & SSL](https://developers.salestim.com/platform/access.html#secure-communication-with-https-ssl)
- ops: New environments. nBold now has 4 fully-functional Azure environments.
  | 💍 Ring  | Environments    | Code | Root URL        | Deployment                                                              |
  | :-----: | --------------- | ---- | --------------- | ----------------------------------------------------------------------- |
  |  **4*-  | **production*-  | PRD  | prd.salestim.io | Pull request from the "ppr" branch to the protected "production" branch |
  | **3.5*- | **staging*-     | PPR  | ppr.salestim.io | Pull request from the "uat" branch to the protected "ppr" branch        |
  |  **2*-  | **uat*-         | UAT  | uat.salestim.io | Pull request from the "int" branch to the "uat" branch                  |
  |  **0*-  | **integration*- | INT  | int.salestim.io | CI (Continuous Integration) from the "master branch                     |
- feat: new 📺 Youtube tabs content cloning capability.
  - Now you can clone Youtube tabs as part of your teams templates.
- fixed: Group mail nickname update operation now has its own entry in request's audit trail.
- improvement: "New Team" template selection.
  - The full template card is now clickable
  - When a template is selected, the "Update template" : change button label + move button to header
- fixed: The "New Team" form is now reinitialized after a new team request has been submitted
- improvement: Action menus are now responsive
- fixed: The homepage is stucked at the "Loading your teams" stage
- feat: "New team" and "My requets" are now available from the catalog tab.


## [1.3.0] Codename "Sekiwake"

- improvement: Mail nickname naming convention
  - In email naming convention template configuration, only the nickname (aka Local part) is required
  - The naming convention is applied after group cloning as the cloning api doesn't support it so far
  - In case of empty or wrong naming convention expression, a nickname is generated from the requested team name
- fixed: Cannot clone an archived team
  - Related errors:
    - Unable to retrieve tabs in getTeamStructure/listTabs. [#99924](https://github.com/nboldhq/Ops/issues/99924)
    - Error in graphHelper/listTabs. [#7723](https://github.com/nboldhq/Ops/issues/7723)
      - Error: Unable to retrieve tabs in getTeamStructure/listTabs.
        ``` javascript
        {
          "message": Forbidden
          "status": 403
          "response_text": {
            "error": {
              "code": "Forbidden",
              "message": "Entitlements cannot be retrieved because this team is archived.",
              "innerError": {
                "request-id": "571f9937-036f-4b2e-a037-740972c41f63",
                "date": "2019-12-04T14:51:31"
              }
            }
          }
        }
        ```
  - Resolution: A new pre-processing is now checking if the source team is archived, and stops provisionning with an appropriate error message.
- fix PowerApps audit log labels in fr-fr
  - In fr-fr locale, PowerApps logs message were wrong (handled as a generic tab)
- refactor: Login process
  - Usins nBold outside of Microsoft Teams is now supported (prepping a future SharePoint component for integration in an Intranet for instance)
  - Original requested URL including parameters ("?" "#") are now preserved after login
  - Page size optimization through JS and CSS minification, resulting in a slightly faster response time.
  - "Please wait" animated logo is smaller and aligned with the new cleaner design
- improvement: App design
  - New lighter and cleaner design in menus, labels and icons
  - In "Browser" mode (outside of Microsoft Teams), a global navigation header is now visible
- ops: Actions tracking
  - The following events are now tracked in Intercom:
    ``` javascript
    {
      clickEvents: {
        tim: {
          closed:  ,
          initiatedTalkToSupport: Talking to Support,
          initiatedBackToHome: Back to home...,
          initiatedLgoutUnauthorized: Signing-out...,
          canceled:  
        },
        teamTabConfig: {
          saved: Saving...
        },
        login: {
          started: Signing-in...
        },
        home: {
          myRequests: {
            opened: My requests,
            closed: Home
          },
          newTeam: {
            opened: New Team,
            canceled: Home,
            saved: Home
          },
          searched: Search,
          team: {
            opened: Opening...,
            initiateTalkToOwners: Starting conversation...
          },
          loggedOut: Sign-out...
        },
        catalog: {
          templates: {
            newModal: {
              opened: New Template,
              sourceTeamSelected: New Template
            },
            editForm: {
              opened: Template edition,
              saved: Template saved,
              closed: Catalog
            },
            filtered: {
              disabled: Catalog (Disabled templated),
              enabled: Catalog (Enabled templates),
              all: Catalog
            }
          },
          loggedOut: Signing-out...
        },
        settings: {
          serviceAccount: {
            panel: {
              opened: Service account
            },
            updated: Service account (update),
            check: {
              opened: Checking service account prerequisites,
              closed: Service account (checked)
            },
            removed: Service account (removed)
          },
          customization: {
            panel: {
              opened: Customization
            }
          },
          crm: {
            panel: {
              opened: Salesforce
            }
          },
          api: {
            panel: {
              opened: Integrations
            }
          },
          targeted: {
            panel: {
              opened: Targeted deployments
            }
          },
          systemInfo: {
            panel: {
              opened: System information
            }
          },
          loggedOut: Signing-out...
        },
        loggedError: {
          closed: Closing...
        },
        logged: {
          redirected: Redirecting...
        }
      }
    }
    ```
  - Events description:
    - Event name: "Clicked"
    - Event metadata: 
      ``` javascript
      {
        action_code: actionCode,
        action_label: eventActionTitle
      }
      ```

## [1.2.0] Codename "Maegashira"

## [1.2.46]

- fixed: Unexpected error in searchMyTeams. (PRD) [#7098](https://github.com/nboldhq/Ops/issues/7098)
- fixed: "My Requests" counter badge breaks toolbar alignment


## [1.2.41]

- improvement: My Requests count badge is now hidden if there is no request.
- improvement: "📮 My Requests" audit trail now shows the last operation and date in the request summary
- fixed: The "New team" form appeared as blank after a previous submission
- improvement: "My teams" 🔎 search from homepage
  - The search box is now always visible
  - Search is performed instantly, on client-side
  - Search is case-insensitive
  - Search is applied to teams title and description, including partial words
- improvement: Unauthorized access when when accessing the "Catalog" or "Settings" tab as a non-Office365 administrator:
  - The warning message now has more options:
    - Use the Intercom chat to ask for help
    - Button "💬 Talk to our Support": Launch an intercom chat session with our support team
    - Button "🔙 Back to Home": Deeplink to the "Home" tab
    - Button "🔐 Sign-in with another account": Logout the user from the current session
  - fixed: An error appeared after a first login into an unthorized page.
    - Error message: Unexpected error in isAdminFromSession. (UAT) #6837
    - Related issues:
      - Error in /loadComponent route: TypeError ERR_INVALID_ARG_VALUE: The argument 'id' must be a non-empty string. Received '' (UAT) [#6838](https://github.com/nboldhq/Ops/issues/6838)
      - Error in /loadComponent route: AssertionError ERR_ASSERTION: missing path (PRD) [#6845](https://github.com/nboldhq/Ops/issues/6845)
- improvement: The "New team" button is now disabled if there is no service account configured
- improvement: Template creation
  - The "Clone members" option is now disabled by default when creating a new template 
- ops: New intercom tracking company attribute: template_count
  - Updated during each catalog update
- feat: New 🧱 PowerApps tabs cloning capability.
- improvement: "📮 My Requests"
  - The counter badge on the "📮 My Requests" button is automatically updated every 5 seconds every 5sec
  - The audit trail is automatically refreshed when clicking on the "📮 My Requests" button (during opening)


## [1.2.36]

- feat: New tabs cloning capabilities. nBold now supports the cloning of the following tabs type:
  - 💬 Yammer tabs: both configured for Yammer groups and Yammer topics
  - 📋 Microsoft Forms tabs: both data collect through questions and responses view
  - 📚 SharePoint Document Library
  - 📘 Word
  - 📗 Excel
  - 📕 PowerPoint
  - 💼 PDF
- improvement: "📮 My Requests" audit trail
  - Now tab with names including special characters (URL encoded) are shown properly in the audit trail
  - Each cloned tab message has its own icon:
    - 🧭 Website
    - 📅 Planner
    - 🎦 Stream
    - 📋 Forms
    - 📘 Word
    - 📗 Excel
    - 📕 PowerPoint
    - 💼 PDF
    - 📝 Wiki
    - 📚 SharePoint Document Library
    - 📑 OneNote
    - 📊 Power BI
    - 📰 SharePoint Page
    - 💬 Yammer
    - 🧱 Unknown type


## [1.2.35]

- fixed: Notifications messages localization in new tenants
- improvement: Service account status in Intercom
  - The "renewServiceAccountTokens" job now set the company property "serviceaccount_status" to true or false, indicating if the last renewal job was successful
- improvement: "📮 My Requests" audit trail
  - All dates (request creation and individual events) are now stored in ISO format (aka 2019-11-26T21:49:25.983Z)
  - All dates (request creation and individual events) are shown in the current user locale format
  - Requests are now sorted by date (Most recent on top of the list)
  - Progress bar color now reflects the current status of the request
    ``` javascript
    {
      "REQ_STA_SAVED": "bg-info", // (blue) Just saved after user request
      "REQ_STA_PREPROCESSING": "bg-default", // (purple) prepping things before approval (or direct processing)
      "REQ_STA_PROCESSING": "bg-default", // (purple) Provisionning is running
      "REQ_STA_POSTPROCESSING": "bg-default", // (purple) Applying post-cloning operations
      "REQ_STA_APPROVAL": "bg-info", // (blue) Waiting for approval
      "REQ_STA_APPROVED": "bg-info", // (blue) Approved
      "REQ_STA_REJECTED": "bg-warning", // (yellow) Rejected
      "REQ_STA_PROCESSED": "bg-success", // (green) Processed (Done)
      "REQ_STA_ERROR": "bg-danger", // (red) Error
      "REQ_STA_UNKNOWN": "bg-warning", // (yellow) Unknown
    }
    ```


## [1.2.34]

- improvement: New "🔥 Remove" button in the "🤖 Service account" tab, to remove a service account from the current configuration
- improvement: Prevent double-click actions in settings
  - The following buttons are disabled until action completion and their label replaces by a "please wait" label:
  ``` javascript
  "select": {
    "button": "🎭 Update",
    "waitMessage": "⏳ Updating service account..."
  },
  "check": {
    "button": "✅ Check Requirements",
    "waitMessage": "⏳ Checking requirements..."
  },
  }"delete": {
    "button": "🔥 Remove",
    "waitMessage": "⏳ Removing service account..."
  }
  "logout": {
    "title": "💨 Sign-out",
    "waitMessage": "⏳ Signing out..."
  }
  ```
- improvement: When an Office 365 admin account is signing-in, if there is no previously defined service account, this admin account is now automatically defined as the default service account.
- improvement: Request processing optimization for large teams (multiple Planner plans, many tasks...)
  - Implemented Microsoft Graph requests priority in our middleware
    - Team cloning as high
    - Team photo cloning as high
    - Tabs configuration as high
    - Tabs content provisioning (including planner) as low
    - Post-processing as high
    - Notifications as high
- improvement: "➕ New Team" form
  - if there is no templates available for a user (zero templates in the catalog or only system templates or only disabled templates or no templates due to audience targeting), a message is shown to ask the user to contact their Microsoft Teams administrators.
- improvement: "📮 My Requests" form
  - The form title is now "📮 My Requests" just like the related button title


## [1.2.30]

- ops: Error: Admin Consent is required. [#5894](https://github.com/nboldhq/Ops/issues/5894)
  - When a user tries to login without admin consent, an alert is sent to the CSM team
- fixed: Error in getGeneralChannelId: Failed to execute Skype backend request GetThreadsRequest. [#5917](https://github.com/nboldhq/Ops/issues/5917)
  - Detail: {"statusCode":500,"code":"GeneralException","message":"Failed to execute Skype backend requestt..."}
  - Root cause: Microsoft Graph may send a 500 error sometimes
- fixed: Microsoft Graph error status code
  - The Microsoft Graph api sometimes generates error status code as a "status" property, sometimes as a "statusCode" property
- fixed: Microsoft Planner API throttling
  - Related issue: graphHelper/getPlannerPlanDetails error: {"status":429,"response":{"req":{"method":"GET","url":"https://graph.microsoft.com/v1.0/planner/plans/REDACTED","headers":{"user-agent":"no (DEV) [#5263](https://github.com/nboldhq/Ops/issues/5263)
- fixed: Microsoft Graph Error 404 in function: waitForTeamsAsyncOperation with arguments (PRD) [#5419](https://github.com/nboldhq/Ops/issues/5419)
  - Root cause: Sometimes, there is a delay between starting cloning a team and the moment where you can call the /operations endpoint
  - Solution: In case of error 404, try to replay call to /operations later
- ops: Issues are now affected to different teams depending on their type.
  - For instance:
    - CSM: admin consent approval, service account issues
    - OPS: Generated audit trails and logs 
    - DEV: Exceptions
- improvement: Microsoft Graph inner exceptions
  - Sometimes, the Microsoft Graph api returns internal errors or misleading error messages, such as:
  ``` javascript
  {
    "req":{"method":"POST","url":"https://graph.microsoft.com/v1.0/planner/plans","data":"",
    // ...
    "status":403,
    "text":"{\r\n "error": {\r\n "code": "",\r\n "message": "You do not have the required permissions to access this item, or the item may not exist.",\r\n "innerError": {\r\n "request-id": "REDACTED",\r\n "date": ""\r\n }"
  }
  ```
  - Resolution: Implement bottleneck retry mechanism for some Graph exceptions
- fixed: Error generating notification message
  - Related issue: graphHelper/createChatThread error: {"status":400,"response":{"req":{"method":"POST","url":"" (PRD) [#5219](https://github.com/nboldhq/Ops/issues/5219)
  - Root cause: The /chatThreads endpoint is deprecated
  - Solution: Moved to the /messages endpoint
- fixed: Error getting team photo
  - Related issue: Error in generateTeamLogo/cloneTeamLogo: {"statusCode":406,"code":null,"message":null,"requestId":null,"date":"2019-11-24T19:09:58.789Z","body":null,"arguments":[""] (PRD) [#5203](https://github.com/nboldhq/Ops/issues/5203)
  - Root cause: The /beta/teams/TEAM_ID/photo/$value endpoint raise an error 406
  - Solution: Moved to the v1.0 version
- fixed: Error saving jobs audit trails
  - Related issues:
    - JOBSSCHEDULER: Error writing jobs audit trail: {"errno":-2,"code":"ENOENT","syscall":"open","path":"./audit/jobs/uat-renewServiceAccountTokens-2019-11-24.csv"} (UAT) [#5119](https://github.com/nboldhq/Ops/issues/5119)
    - JOBSSCHEDULER: Cleaning Job: Error in saveTaskExecutionHistory (UAT) [#5148](https://github.com/nboldhq/Ops/issues/5148)
- fixed: Error saving extractIntercomData job export data
  - Related issues:
    - JOB extractIntercomData: Error writing events export file: {"errno":-2,"code":"ENOENT","syscall":"open","path":"REDACTED"} (PRD) [#5413](https://github.com/nboldhq/Ops/issues/5413)
    - JOB EXTRACTINTERCOMDATA: Task execution failed: extractIntercomData done (PRD) [#5412](https://github.com/nboldhq/Ops/issues/5412)
    - JOB extractIntercomData: Error writing companies export file: {"errno":-2,"code":"ENOENT","syscall":"open","path":"REDACTED"} (PRD) [#5411](https://github.com/nboldhq/Ops/issues/5411
    )
    - JOB extractIntercomData: Error writing users export file: {"errno":-2,"code":"ENOENT","syscall":"open","path":"REDACTED"} (PRD) [#5410](https://github.com/nboldhq/Ops/issues/5410)


## [1.2.25]

- improvement: Email naming convention
  - If the email naming convention results in an empty address, the generated team name is now used instead.
- fixed: Service account token expiration after 90 days
  - Error message: The refresh token has expired due to inactivity.
  - Error log:
    ``` javascript
    "status":400,
    "text":"{\"error\":\"invalid_grant\",\"error_description\":\"AADSTS700082: The refresh token has expired due to inactivity. The token was issued on XXXTXXXZ and was inactive for 90.00:00:00.",\"error_codes\":[700082]\"error_uri\":\"https://login.microsoftonline.com/error?code=700082\"}"
    ```
  - Error code: https://login.microsoftonline.com/error?code=700082
  - Root cause: After 90 days, the refresh token used to get a new access token for the service account is expiring automatically. For the first 90 days, the newly acquired refresh token was used but not persisted.
  - Resolution:
    - Each access token refresh now persists the new refresh token
    - A scheduled job renews service accounts token daily
- improvement: Service Account initialization
  - The first Office 365 administrator to login is now used as the default service account.
- fixed: User names case is now preserved in Intercom


## [1.2.23]

- improvement: Notifications messages localization [#231](https://github.com/nboldhq/app-platform/issues/231)
  - Service Account provisioning messages are now generated using:
    - The associated template language.
    - As a first-level fallback the requester language
    - As a second-level fallback to 'en-us'
- fixed: Error in postProcessRequest: {} (DEV) [#4634](https://github.com/nboldhq/app-platform/issues/4634)
  - Error message: Cannot read property 'length' of undefined
- fixed: Prevent error in loadIntercomAuthenticated when a user has empty profile fields (such as preferredLanguage)


## [1.2.22]

- fixed: Microsoft Graph exception: isTenantAdmin error
  - Error 504 on /directoryRoles endpoint
  - Related exceptions:
    - office365Services/isTenantAdmin/graphHelper.isTenantAdmin error. (UAT) [#4475](https://github.com/nboldhq/Ops/issues/4475)
    - {"status":504,"response":{"req":{"method":"GET","url":"https://graph.microsoft.com/v1.0/directoryRoles?$filter=roleTemplateId eq 'REDACTED'","headers":{"user-agent":"node-s (UAT) [#4474](https://github.com/nboldhq/Ops/issues/4474)
    - Error in isTenantAdmin / directoryRoles: {"status":504,"response":{"req":{"method":"GET","url":"https://graph.microsoft.com/v1.0/directoryRoles?$filter=roleTemplateId eq 'REDACTED (UAT) [#4473](https://github.com/nboldhq/Ops/issues/4473)
- fixed: Microsoft Graph exception: addGroupMember error
  - Error 503 on /groups / members endpoint
  - Related exceptions:
    - office365Services/addGroupMember error: {"status":503,"response":{"req":{"method":"POST","url":"https://graph.microsoft.com/beta/groups/REDACTED/members/$ref","data":"{\"@o (UAT) [#4469](https://github.com/nboldhq/Ops/issues/4469)
    - Error in postProcessRequest: {"status":503,"response":{"req":{"method":"POST","url":"https://graph.microsoft.com/beta/groups/REDACTED/members/$ref","data":"{\"@odata.id\":\ (UAT) [#4468](https://github.com/nboldhq/Ops/issues/4468)
    - graphHelper/addGroupMember error: {"status":503,"response":{"req":{"method":"POST","url":"https://graph.microsoft.com/beta/groups/REDACTED/members/$ref","data":"{\"@odata.i (UAT) [#4467](https://github.com/nboldhq/Ops/issues/4467)
- fixed: Microsoft Graph exception: getPlannerPlanDetails error
  - Error 503 on /planner/plans endpoint
  - Related exceptions:
    - graphHelper/getPlannerPlanDetails error: {"status":503,"response":{"req":{"method":"GET","url":"https://graph.microsoft.com/v1.0/planner/plans/REDACTED/details","headers":{"user-ag (UAT) [#4466](https://github.com/nboldhq/Ops/issues/4466)
    - Error cloning a planner tab. (UAT) [#4465](https://github.com/nboldhq/Ops/issues/4465)
    - Error cloning tab settings and contents. (UAT) [#4464](https://github.com/nboldhq/Ops/issues/4464)
    - Error in clonePlannerTab/getPlannerPlanDetails. (UAT) [#4463](https://github.com/nboldhq/Ops/issues/4463)
- fixed: Microsoft Graph exception: getTeamStructure error
  - Error 503 on /teams /channels / tabs endpoint
  - Related exceptions:
    - Error exporting source team structure in getTeamStructure. (UAT) [#4458](https://github.com/nboldhq/Ops/issues/4458)
    - Unable to retrieve tabs in getTeamStructure/listTabs. (UAT) [#4457](https://github.com/nboldhq/Ops/issues/4457)
    - Error in graphHelper/listTabs. (UAT) [#4456](https://github.com/nboldhq/Ops/issues/4456)
    - Error in graphHelper/listTabs. (UAT) [#4455](https://github.com/nboldhq/Ops/issues/4455)
- fixed: Microsoft Graph exception: cloneTeamLogo error
  - Error 504 on /teams /photo/$value endpoint
  - Related exceptions:
    - Error cloning team photo: {"statusCode":504,"code":"UnknownError","message":"","requestId":"REDACTED","date":"REDACTED","body":"{\"code\":\"UnknownError\",\ (UAT) [#4452](https://github.com/nboldhq/Ops/issues/4452)
    - graphServices/updateTeamPhotoByFile error (UAT) [#4451](https://github.com/nboldhq/Ops/issues/4451)
    - Error in generateTeamLogo/cloneTeamLogo: {"statusCode":504,"code":"UnknownError","message":"","requestId":"REDACTED,"date":"REDACTED","body":"{\"code\":\"U (UAT) [#4450](https://github.com/nboldhq/Ops/issues/4450)
- improvement: During the provisioning process, cloned Planner tabs are now configured to use the user language [#213](https://github.com/nboldhq/app-platform/issues/213)
  - Planer tab configuration now respects the following scheme:
  ``` javascript
  {
    contentUrl: 'https://tasks.office.com/[TENANT_ID]/Home/PlannerFrame?page=7&planId=[PLAN_ID]&auth_pvr=Orgid&auth_upn={upn}&mkt={locale}'
    websiteUrl: 'https://tasks.office.com/[TENANT_ID]/Home/PlanViews/[PLAN_ID]'
    removeUrl: 'https://tasks.office.com/[TENANT_ID]/Home/PlannerFrame?page=13&planId=[PLAN_ID]&auth_pvr=Orgid&auth_upn={upn}&mkt={locale}'
  }
  ```
- fixed: An arror was generated for user profiles without photo
  - Related exception: {"statusCode":404,"code":null,"message":null,"requestId":null,"date":"2019-11-20T11:28:31.129Z","body":null} (UAT) [#4632](https://github.com/nboldhq/Ops/issues/4632)


## [1.2.21]

- fixed: Planner plan creation error [#4192](https://github.com/nboldhq/Ops/issues/4192)
  - When a Graph api internal error occurs during the creation of a Planner plan, the function that handles the creation of a new audit log may fail due to an empty callback. [#4195](https://github.com/nboldhq/Ops/issues/4195)


## [1.2.20]

- improvement: nBold's publisher domain validation by Microsoft
  - Configuring the publisher domain has an impact on what users see on the app consent prompt.
  - Especially, an application’s publisher domain is displayed to users on the application’s consent prompt to let users know where their information is being sent.
  - [Implications on the app consent prompt](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-configure-publisher-domain#implications-on-the-app-consent-prompt)
- improvement: "My Requests" popup
  - Larger popup (max width to 1140px)
- fixed: In some edge cases (misconfigured tabs or tabs in an inconcictent state), the wrong number of tabs is shown in audit trail.


## [1.2.19]

- ops: Better client-side error tracking
  - If an error arises client side (teams client or browser), the following tags are automatically populated:
    - Before login:
    ``` Javascript
    [
      'alert',
      'browser',
      environment,
      loginHint, // Usually user email
      teamSiteDomain, // *.sharepoint.com
      tid // tenant id
    ]
    ```
    - After login:
    ``` javascript
    [
      'alert',
      'browser',
      environment,
      msEmail, // user email
      msTenantInitialDomainName, // Tenant initial domain name
      msTenantDefaultDomainName, // Tenant default domain name
      tid // tenant id
    ]
    ```
- fixed: Teams photo update changes the request status
  - Context: The photo update process may last for a long time due to the asynchronous Exchange Mailbox provisionning process it depends on.
  - Previous behavior: If the photo update happens after the "Teams Provisionning Done" event, it changes the request status to "processing" after the "done" event.
  - New behavior: The "photo updated" audit log entry now doesn't change the request status, therefore it will be seen as:
    - "Processing" or "Post-Processing" if the photo update happens before the "done" event
    - "Done" if the photo update happens after the "done" event
- fixed: Better management and reporting of edge cases during provisionning
  - Handles properly unconfigured tabs (Website, Planner...)
  - Handles properly deleted channels
  - Handles teams without any tab
  - Handles Planners plans without buckets and buckets without tasks
  - Zero requested members or owners
  - Zero permanent members of owners
  - Better audit logs for tabs processing:
    - Each tab shows the tab type and name
    - The tabs summary shows the number of processed tabs
  - New log message when an error occurs in tab provisionning (including unsupported tab)
  - Cleaner tab names in audit trail (URL decode)
  - New all tabs configured message (even if a tab is in error)


## [1.2.17]

- fixed: i18n: Incorrect translations with Indian english locale (en-in)
- ops: Asynchronous Jobs Engine
  - This new scheduler is meant to execute scheduled batch processes in a secured environment
  - Supports different execution environments and schedules for dev, uat, ppr and prd
  - Follows the [CRON syntax](https://en.wikipedia.org/wiki/Cron) for scheduling, including second-level scheduling
  - Jobs are defined using the following JSON representation:
    ``` javascript
    {
      id: 'JOB_ID',
      description: 'JOB_DESCRIPTION',
      module: 'MODULE_PATH',
      environments:
        [
          dev, uat, ppr, prd
        ],
      schedule:
      {
        dev: '- - - - *',
        uat: '- - - - *',
        ppr: '- - - - *',
        prd: '- - - - *'
      },
      options: {JOB_OPTIONS}
    }
    ```
    - Jobs should be implemented as a regular nodejs module, exporting a 'start' method with the following prototype:
    ``` javascript
    /*- 
     - Module main entry point
     - @param {string} logFile - Relative log file path
     - @param {function} Callback - (err, res, msg)
     */
    let myJob = (options, (err, res, msg) => {
      // Job implementation
    })
    exports.start = myJob
    ```
    - Jobs execution history are persisted at regular intervals as csv audit trails files and in our GiHub ops repository as issues with the 'jobs' tag, as serialized objects:
    ``` javascript
    let taskExecutionRecord =
    {
      jobId: 'JOB_ID', // String
      startDate: 'START_DATE', // Date
      endDate: 'END_DATE', // Date
      duration: 'EXECUTION_DURATION', // Int, as ms.
      succeeded: EXECUTION_RESULT, // Boolean
      message: 'EXECUTION_MESSAGE', // String
      errorPayload: 'ERROR_PAYLOAD', // String (Stringified JSON)
      successPayload: 'SUCCESS_PAYLOAD', // String (Stringified JSON)
    }
    ```
- fixed: Log files persistance from Windows containers
  - Handling both "\" and "/" path separators
- fixed: Missing requests from the "My requests" page
  - Root cause: For certain users, the number of requests returned from our cache may vary
  - Resolution: Fix the SCAN Redis operations
- fixed: Error generating team logo [#2409](https://github.com/nboldhq/Ops/issues/2409)
  - Now using the "teams" Microsoft Graph beta API endpoints
- improvement: Team photo update in requests audit trail
  - Now the "Team photo updated" event is visible in audit trail as part of post-processing operations
- fixed: Random error in team photo update
  - Root cause: Trying to update the underlying group photo of a team just after its provisioning may fail as the related Exchange Mailbox may not be fully provisioned yet (required to store group photo)
  - Resolution: Handling specific returned error codes and implement a retry mechanism
- refactor: Microsoft Graph SDK
  - Using the nodejs Microsoft Graph SDK instead of native REST requests for streams operations (binary files, photos updates...)
- improvement: Users without profile pictures
  - For users without profile pictures, our front-end dergrades gracefully, hiding the user profile picture zone without unnecessary latency.
- fixed: Permanent membership missing information in audit trail
  - Permanent membership notifications in audit trail are now showing members and owners names individually
- refactor: Our mail module is now abstracted from its service provider implementation
- refactor: Our GitHub module is now fully independent and dependency free


## [1.2.15]

- improvement: Template management analytics
  - Tracking a new event on user profile 'template_created' and 'template_updated' with the following metadata:
    ``` javascript
    {
      template_id: REDACTED,
      template_name: REDACTED
    }
    ```
  - Tracking a new attribute on company profile 'template_count' (# of templates)


## [1.2.14]

- fixed: Analytics Events
  - References:
    - Error creating analytics event [#2322](https://github.com/nboldhq/Ops/issues/2322)
    - fixed: Events: "Template Created" event is not raised [#271](https://github.com/nboldhq/app-platform/issues/271)
    - fixed: Intercom exception: Multiple existing users match this email address REDACTED [#255](https://github.com/nboldhq/app-platform/issues/255)
  - Fixes:
    - user email and id are now forced to lower case to prevent duplicates
    - Intercom user id is now based on: 
      - user upn in identified mode (in teams without beeing authenticated yet)
      - user email in authenticated mode (in teams authenticated)
    - Intercom company id is now based on tenant initial domain name (*.onmicrosoft.com)
    - Intercom company name is now based on tenant initial domain name (*.onmicrosoft.com)
    - Tracking a new event on user profile 'serviceaccount_updated' with the following metadata:
      ``` javascript
      {
        serviceaccount_id: REDACTED,
        serviceaccount_name: REDACTED,
        serviceaccount_upn: REDACTED
      }
      ```
    - Tracking new attributes on company profile:
      - 'company_customer_id': nBold internal customer id
      - 'serviceaccount_initialized': Initialized to 'true' the first time a service account is defined [#259](https://github.com/nboldhq/app-platform/issues/259)
- fixed: Planner cloning exceptions in case of empty planner or empty buckets
  - Error in allTasksProcessed: {} [#1139](https://github.com/nboldhq/Ops/issues/1139)
  - Error in allTasksProcessed: Cannot read property 'length' of undefined [#2076](https://github.com/nboldhq/Ops/issues/2076)
- improvement: Better anomaly tracking. The following exceptions are now properly logged and surfaced with a meaningful message in audit log:
  - **400_INVALIDREQUEST_MAILNICKNAME**:
    - Message: The generated email address for this team is empty or incorrect...
    - Explanation: The naming convention applied to this template has generated an invalid email address for the underlying group related to the team. For instance:
      - The total prefixes, address and suffixes string length is restricted to 53 characters.
      - Avoid using the following characters in your email policy: #, [, ], <, and >
    - Required action: Fix the template's naming conventions
    - Processing behavior: The provisioning process is stopped and flagged in an "error" stage
  - **400_INVALIDREQUEST_TABSWITHOUTAPPS**:
    - Message: Trying to clone an app without related app...
    - Explanation: You're trying to clone a team that contains tabs using custom apps.
    - Required action: Fix template configuration to either:
      - Include apps during cloning
      - Exclude tabs during cloning
    - Processing behavior: The provisioning process is stopped and flagged in an "error" stage
  - **404_ITEMNOTFOUND_DELETEDTEAM**:
    - Message: The template you're using is linked to a deleted team...
    - Explanation: The team to be cloned from the template has been deleted.
    - Required action: Either:
      - Restore the deleted team
      - Associate template with another team
    - Processing behavior: The provisioning process is stopped and flagged in an "error" stage
  - **403_ACCESSDENIED_TEAMSLICENSES**:
    - Message: nBold Service account doesn not have Teams licences...
    - Explanation: The service account defined in nBold's settings doesn't have the required licenses to access Microsoft Teams
    - Required action: Add the required Microsoft Teams licences to your service account
    - Processing behavior: The provisioning process is stopped and flagged in an "error" stage
  - **504_UNKNOWNERROR_INNERERROR**:
    - Message: Microsoft Graph. An unknown error occured during processing on Microsoft Servers...
    - Explanation: An error occured on Microsoft servers during a Microsoft Graph operation.
    - Required action: None
    - Processing behavior: The provisioning process will automatically retry the operation after a few seconds until is works properly


## [1.2.13]

- ops: Logging improvements
  - Log files are now rotated every 14 days
  - Now generating an audit trail of file logging operations:
    ``` javascript
    {
        "date": "REDACTED",
        "name": "REDACTED.log",
        "hash": "REDACTED"
    }
    ```
- fixed: 2 teams created per Request [#247](https://github.com/nboldhq/app-platform/issues/247)
  - The "Send request" button is now disabled immediately while processing the request to prevent double clicks
  - Better "click" handlers to prevent multiple registrations
- fixed: Messages in 2 different languages appear on the same page [#260](https://github.com/nboldhq/app-platform/issues/260)
- improvement: Locale is now set using a fallback mechanism, that uses the following order of priority to determine the right locale to be used:
  1. From Microsoft Teams context (Language defined in the Microsoft Teams client)
  2. From the browser client language
  3. Set to en-us in any other case
- improvement: Locale is now detected and updated during each request.
  - Therefore you can update the language of your Microsoft Teams client, and you don't need to logout from nBold to see change.
- feat: Template Language
  - You can now associate a language with each template, within the following list:
    - en-au
    - en-bz
    - en-ca
    - en-gb
    - en-ie
    - en-jm
    - en-nz
    - en-ph
    - en-tt
    - en-us
    - en-za
    - en-zw
    - fr-be
    - fr-ca
    - fr-ch
    - fr-fr
    - fr-lu
    - fr-mc
  - Structure:
    - Two-letter language code: [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)
    - Two-letter country code: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

## [1.2.11]
- fixed: Deep links not working on home page [#261](https://github.com/nboldhq/app-platform/issues/261)
- fixed: Naming convention not shown in request form [#262](https://github.com/nboldhq/app-platform/issues/262)
  - Updated online documentation about [Naming Conventions](https://help.salestim.com/salestimautomation/templatesNamingConventions.html#request-form)
  - Includes a descriptive error message in case of bad naming convention configuration
- fixed: Deep links not working on home page [#261](https://github.com/nboldhq/app-platform/issues/261)
- improvement: Better management of template configuration issues:
  - Tabs cannot be cloned without cloning Apps as well
  - Reference: [#265](https://github.com/nboldhq/app-platform/issues/265)
- improvement: Better management of service account configuration issues:
  - Managed exception: "User Login. Teams is disabled in user licenses"
  - Reference: [#264](https://github.com/nboldhq/app-platform/issues/264)
- improvement: Deeplink visual feedback
  - From the homepage, when clicking on a deeplink (open or talk), the button text is updated to reflect the action
- ops: Browser alerts are now raised in our GitHub ops platform, including:
  - Catched error
  - Stack trace
  - Browser infos
  - Teams Context
  - Screenshot
- security: Self-hosted fonts.
  - Now all fonts resources are loaded from the nBold platform instead of using Google Fonts CDN
  - Not necessarily a security issue, but:
    - Reduces the number of domains to whitelist
    - Prevents any data flow with Google
  - Updated doc: [🏳 Domains to whitelist](https://help.salestim.com/salestimplatform/domainsWhitelist.html)
- refactor: Improved ChecknBoldTenant method
  - New logging capabilities
  - Externalized nBold tenant id per environment
- refactor: Check for Microsoft Accounts (personal accounts)
  - New logging capabilities
  - Externalized Microsoft tenant id
- fixed: User events tracking in case of duplicates
  - "Multiple existing users match this email address REDACTED - must be more specific using user_id
[#255](https://github.com/nboldhq/app-platform/issues/255)
- fixed: Error caching picture [#254](https://github.com/nboldhq/app-platform/issues/254)
  - Added new logging capabilities to blob storage helper
- ops: An alert is now raised in our GitHub Ops when a login attempt is made without admin consent.
  - This alert includes session id, locale and tenant id
- improvement: Request additional owners and members.
  - When requesting the creation of a new team from a template, you can now select up to 5 owners and 10 members.
  - Limits are now surfaced as help messages and tooltips: "You can select up to X additional owners/members."
- ops: Logging and alerting improvements.
  - Logs persistence and alerting in our GitHub Ops platform is now disabled in development environments
  - Our analytics platform is now collecting users sign-in and sign-out events
  - When an alert is raised, it's now collected to our GitHub Ops platform
  - Log files are now collected and persisted in our GitHub Ops platform
  - The nBold app and services are now handling gracefully process shutdown, on any platform.
    - This technical update will helps us improve resiliency and our SLA. 
    - [Reference Best Practice](https://medium.com/faun/nodejs-graceful-start-shutdown-3ed16418ede3)
- improvement: When defining security policies for a specific template, you can now select up to:
  - 5 approvers per template.
  - 5 permanent owners per template.
  - 10 permanent members per template.
- doc: New platform contents in our [Help Center](https://help.salestim.com/)
  - ⛏ [Data collection practices](https://help.salestim.com/salestimplatform/collectedData.html)
  - 🏳 [Domains to whitelist](https://help.salestim.com/salestimplatform/domainsWhitelist.html)
- improvement: Admin and non-admin users can now sign-out of the app from any page.
- fixed: In Firefox browser, the non-admin user is unable to access the ‘Back to Home’ button.
- fixed: In Edge browser, the admin & non-admin user is unable to access the ‘sign-in’ button.
- fixed: In Chrome browser, when non-admin user is accessing the ‘Back to Home’ button, user is redirected to a new tab.


## [1.1.0] Codename "Reiwa"

- fixed: App store publishing
  - Issue #1: App version is not as  per guidelines. (Closed)
  - Issue #2: Please elaborate the full description such that it states about the value proportion of the app. - (Closed)
  - Issue #3: Emojis / special characters are not allowed in the manifest. (Closed)
  - Issue #5: To have consistency in naming please rename the logout to sign out. (Closed)
  - Issue #6:  User is getting an error message after clicking on the links available in the “service status tab. (Closed)
  - Issue #7: When user clicks on the GitHub link, user is navigation to 404 error page. (Closed)
  - Issue #9: Please add a graceful message in the catalog” and “settings” tabs when non-admin users access the tab. (Closed)
- fixed: Non-admins accessing admin-restricted tabs (Catalog, Settings) are just seeing a blank page
  - Now non-admins are presented with a clear message requesting them to log as an Office 365 administrator, and a "back to home" button
- ops: Approval button and Adoption tab are hidden for now in ppr/prd
- ops: Set up pre-production environment - Ring 3.5 [#228](https://github.com/nboldhq/app-platform/issues/228)
  - New standalone + targeted packages
- fixed: The export / import feature is now hidden in UAT, PPR & PRD
- fixed: Not Able to Create New Solution [#216](https://github.com/nboldhq/app-platform/issues/216)
- fixed: Issue with Account Creation - account in de-de [#229](https://github.com/nboldhq/app-platform/issues/229)
  - All languages and regions variants [supported by Office 365](https://support.office.com/en-us/article/what-languages-is-office-available-in-26d30382-9fba-45dd-bf55-02ab03e2a7ec), either with a proper translation, or through a fallback to english.
- security: prototype pollution in _.defaultsDeep
  - Dependency: [lodash](https://github.com/lodash/lodash/pull/4336)
  - Upgrade lodash to 4.17.14
  - Upgrade lodash.template to 4.5.0
- fixed: Tab configuration screen now has a default value and is enabled by default
- security: disallow access to the constructor in templates to prevent RCE
  - Dependency: [handlebar]((https://github.com/wycats/handlebars.js/commit/edc6220d51139b32c28e51641fadad59a543ae57))
  - Upgrade handlebar to 4.1.2
- fixed: <%> in description in Teams Template creation forms #126 https://github.com/nboldhq/app-platform/issues/126
- improvement: Improved nBold Targeting Package 1st connection experience [#207](https://github.com/nboldhq/app-platform/issues/207)
- fix All tabs not replicated [#155](https://github.com/nboldhq/app-platform/issues/155)
- fixed: Events not raised in intercom [#203](https://github.com/nboldhq/app-platform/issues/203)
- fixed: Internationalization issues
  - Locale issue : Issue with package language and App [#204](https://github.com/nboldhq/app-platform/issues/204)
  - fr-fr : issue with french and english in same page [#202](https://github.com/nboldhq/app-platform/issues/202)
  - fr-fr : packaging showing up settings and paramètres [#200](https://github.com/nboldhq/app-platform/issues/200)
  - FR version : Talk to owners and open in home are not translated [#187](https://github.com/nboldhq/app-platform/issues/187)
  - Language in teams desktop client is always en-us
  - "New Team" form: Tooltips, Preview...
- improvement: My Teams cards "Tags"
  - Now my teams cards have visual clues for:
    - Visibility
    - Archival
    - Classification
- fixed: Login page
  - Outside links in login menu to help and status
  - nBold version number in menu


## [1.0.0] Codename "Makuuchi"

- improvement: Behavioral Analytics
  - Attributes
    - Client-side implementation
    - Attributes structure: ``` OBJECT_PROPERTY ```
    - Attributes sources:
      - Environment: nBold App environment-based information
      - Context: Microsoft Teams context-based information
      - Profile: Microsoft Graph user profile-based information
    - Attributes by stage (Additive):
      - Anonymous: (If used outside of Teams)
        - None
      - Identified: (Using Teams context, before nBold login)
        ```javascript
        {
          "profile.intercomId": context.upn, // Not yet authenticated, use the upn
          "profile.intercomEmail": context.upn,
          "profile.locale": context.locale,
          "profile.msTenantId": context.tid,
          "profile.msUpn": context.upn,
          "profile.theme": context.theme,
          "profile.msUserId": context.userObjectId,
          "profile.environment": env.environments.current,
          "profile.version": env.environments.manifest.version
        }
        ```
      - Authenticated: (Using Microsoft Graph Profile, after nBold login)
        ```javascript
        {
          "profile.intercomId": user.msEmail, // Once authenticated, use the email instead of UPN
          "profile.intercomEmail": user.msEmail,
          "profile.userId": user.id,
          "profile.customerId": customer.id,
          "profile.msEmail": user.msEmail,
          "profile.tld": userTld,
          "profile.name": user.msDisplayName,
          "profile.msLocale": user.msPreferredLanguage,
          "profile.license": user.userLicense,
          "profile.msIsTenantAdmin": user.isMsTenantAdmin,
          "company.companyId": customer.id,
          "company.companyName": customer.msTenantInitialDomainName,
          "company.msTenantId": customer.msTenantId,
          "company.msTenantInitialDomain": customer.msTenantInitialDomainName,
          "company.msTenantDefaultDomain": customer.msTenantDefaultDomainName,
          "company.license": customer.customerLicense
        }
        ```
  - Events
    - Server-side implementation using the [Intercom SDK](https://www.npmjs.com/package/intercom-client)
    - Events structure: ``` OBJECT_ACTION ```
    - Captured events and metadata:
      ```javascript
      {
        request_created: {
          request_id: '',
          team_name: '',
          request_additionalMembers: '',
          request_additionalOwners: '',
          template_id: '',
          template_name: ''
        },
        request_approved: {
          request_id: ''
        },
        request_rejected: {
          request_id: ''
        },
        request_processed: {
          request_id: ''
        },
        request_error: {
          request_id: ''
        },
        team_created: {
          team_id: '',
          team_name: '',
          template_id: '',
          template_name: ''
        }
      }
      ```      
- improvement: "My Teams" deep links for "💬 Talk to owners" and "👓 Open"
  - Now links are opened without opening a new browser window
- fixed: Issue with login in browser [#186](https://github.com/nboldhq/app-platform/issues/186)
- refactor: Dynamic teams packages generation
- security: salestim.com is now a verified publisher domain
  - [Reference](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-configure-publisher-domain)
- ops: Production App is now called "nBold"
- refactor: Update manifest to v1.5 schema
  - [Manifest Schema v1.5](https://docs.microsoft.com/en-us/microsoftteams/platform/resources/schema/manifest-schema)
  - Added french localization file
    - [Apps Localization](https://docs.microsoft.com/fr-fr/microsoftteams/platform/publishing/apps-localization)
  - Added MPN id
- fixed: New Template in Business Solution creation [#194](https://github.com/nboldhq/app-platform/issues/194)
- ops: Cosmos DB Throttling Management
  - Each environment has its own configuration (connectionPolicy)
    ```
    MICROSOFT_COSMOSDB_MAXRETRYATTEMPTSONTHROTTLEDREQUESTS
    MICROSOFT_COSMOSDB_MAXRETRYWAITTIMEINSECONDS
    ```
  - An Azure alert sends a notification to the Teams DevOps \ Ops channel if more than 5 requests are throttled during the last 15min.
- improvement: Service account is now explicitely added as a member of the created teams, in addition to be an owner.
  - This fix is a workaround to an issue while using the Microsoft Graph
- feat: Requests management
  - See your requests with their status, progress, log and actions
    ```javascript
    {
      📮 saved: 'REQ_STA_SAVED', // Just saved after user request
      🕐 preprocessing: 'REQ_STA_PREPROCESSING', // prepping things before approval (or direct processing)
      🏁 approval: 'REQ_STA_APPROVAL', // Waiting for approval
      ⛔ rejected: 'REQ_STA_REJECTED', // Rejected
      ✅ approved: 'REQ_STA_APPROVED', // Approved
      🕓 processing: 'REQ_STA_PROCESSING', // Provisionning is running
      📦 processed: 'REQ_STA_PROCESSED', // Processed (Done)
      🚩 error: 'REQ_STA_ERROR', // Error
      🛸 Unknown: 'REQ_STA_UNKNOWN' // Unknown
    }
    ```
  - fixed: Request card doesn't take into account the naming convention [#112](https://github.com/nboldhq/app-platform/issues/112)
  - fixed: My Request showing all Teams request created with no approval in Pending [#110](https://github.com/nboldhq/app-platform/issues/110)
  - fixed: No information for Teams Request with error, displayed in "pending" [#111](https://github.com/nboldhq/app-platform/issues/111)
- improvement: Search for teams processing is now delayed by 500ms before each typing, to prevent multiple executions
- feat: My Teams are now sorted by display name (including in search results)
- fixed: Service Account processing [#189](https://github.com/nboldhq/app-platform/issues/189)
- refactoring: All scheduled jobs are now using the CRON syntax
  - Allowed fields:
    ```
    ┌────────────── second (optional)
    │ ┌──────────── minute
    │ │ ┌────────── hour
    │ │ │ ┌──────── day of month
    │ │ │ │ ┌────── month
    │ │ │ │ │ ┌──── day of week
    │ │ │ │ │ │
    │ │ │ │ │ │
    - - - - - *
    ```
  - Allowed values
    | field        | value                             |
    | ------------ | --------------------------------- |
    | second       | 0-59                              |
    | minute       | 0-59                              |
    | hour         | 0-23                              |
    | day of month | 1-31                              |
    | month        | 1-12 (or names)                   |
    | day of week  | 0-7 (or names, 0 or 7 are sunday) |

  - Using multiples values
    ```javascript
    cron.schedule('1,2,4,5 - - - *', () => {
      console.log('running every minute 1, 2, 4 and 5')
    })
    ```
  - Using ranges
    ```javascript
    cron.schedule('1-5 - - - *', () => {
      console.log('running every minute to 1 from 5')
    })
    ```
  - Using step values
    ```javascript
    cron.schedule('*/2 - - - *', () => {
      console.log('running a task every two minutes')
    })
    ```
  - Using names
    ```javascript
    cron.schedule('- - - January,September Sunday', () => {
      console.log('running on Sundays of January and September')
    })
    ```
  - Using short names
    ```javascript
    cron.schedule('- - - Jan,Sep Sun', () => {
      console.log('running on Sundays of January and September')
    })
    ```
- feat: nBold tab configuration page
  - When adding nBold as a tab in a channel, a new configuration page is available
    - Choose your tab name + "save" button status control
    - ToS reminder
    - New design
- refactor: Improved performance for "My Teams" widget on homepage
  - Now results are paginated by pages of 20 teams
  - Search results are also paginated
- security: Enforced tokens security
  - Encryption in transit and at rest for server-side services:
    - Cosmos DB: [Encryption at rest](https://docs.microsoft.com/en-us/azure/cosmos-db/database-encryption-at-rest)
    - Redis:
      - We're using Redis AOF persistence mode. See [Redis persistence](https://redis.io/topics/persistence)
      - Stored in Azure Storage: See [Azure Store Encryption](https://docs.microsoft.com/en-us/azure/storage/common/storage-service-encryption)
  - Client-side:
    - Tokens are only used in memory, and never stored in cookies or browser local storage.
    - Access to tokens via API is protected using Azure AD authentication.
- refactor: Enabled sign-in to nBold from a webpage outside of the Teams Clients
  - Now, in addition to our ```stEntityId``` parameter, tabs urls have the following parameters dynamically provided by Teams clients:
    ```
    entityId
    subEntityId
    loginHint
    userPrincipalName
    userObjectId
    theme
    groupId
    tid
    locale
    ```
  - See [Tabs Context](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/tabs/tabs-context) for reference
- doc: Help Center now have a new accentuation color aligned with Microsoft Teams branding
- refactor: All string-based messages are now externalized for internationalization
  - Except for the "Settings" tab
  - Using:
    - Server-side: [i18n](https://www.npmjs.com/package/i18n)
    - Client-side: custom i18n module
- improvement: Improve experience with "enabled" / "disabled" in catalog [#133](https://github.com/nboldhq/app-platform/issues/133)
- improvement: Text truncating for teams and templates cards
  - Templates cards texte are truncated to one single line
  - Fully responsive, truncating is recalculated on window resize event
  - Using Dollar Shave Club [Shave Module](https://github.com/dollarshaveclub/shave)
- fixed: The "Sign-in" button is now disabled while a login popin is opened top prevent multiple login windows to open.
- improvement: Audience Targeting Settings
  - Now audience targeting settings have their own tab in template settings
  - Rule editor has more space through a height of 200px
- doc: New Audience Targeting scenario: "Domain-based targeting"
  - [Domain-based targeting: users with @contoso.com or @contoso.fr in their domain name](https://help.salestim.com/salestimautomation/templatesAudienceTargeting.html#domain-based-targeting-users-with-contoso-com-or-contoso-fr-in-their-domain-name)
- doc: New conditional naming convention scenario
  - [Use a specific suffix for users from a specific domain, use the domain name for the others](https://help.salestim.com/salestimautomation/templatesNamingConventions.html#use-a-specific-suffix-for-users-from-a-specific-domain-use-the-domain-name-for-the-others)
- fixed: Issue with "male icone" that appears only in client [#151](https://github.com/nboldhq/app-platform/issues/151)
- improvement: Prevent user to login with a Microsoft Account and demand an Office 365 account.
- fixed: Intercom not displayed correctly [#168](https://github.com/nboldhq/app-platform/issues/168)
  - Error message:
    ```
    "something's wrong", "we're unable to load the messenger"
    ```
  - References: [Difficulty accessing the support chat](https://help.sidelineswap.com/general-support/difficulty-accessing-the-support-chat)
  - The Intercom security check is now based ont the current user email instead of its UPN.


## [0.9.11] Codename "Juryo"

- security: App Permissions and Scopes
  - Automation and Bot now have different Microsoft Graph requested scopes
  - Enforce "Least Privilege" principle to App by reducing required permissions
    - See [Microsoft Graph App Permissions / Scopes](https://help.salestim.com/salestimplatform/appPermissions.html)
- fixed: Double-Login Bug
  - No more "double-login". Fixed in all environments
- doc: Help Center Layout and Navigation
  - Main contents width is now expanded to 86%
  - You can now zoom on pictures
    - Using [@vuepress/plugin-medium-zoom](https://v1.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html)
- doc: [Audience Targeting Configuration](https://help.salestim.com/salestimautomation/templatesAudienceTargeting.html)
- security: Fixed GitHub security alerts
  - Dependency: concat-with-sourcemaps
    - fixed: Upgraded to v1.1.0
    - [WS-2018-0100](https://hackerone.com/reports/320166)
- fixed: Width issue in template creation [#169](https://github.com/nboldhq/app-platform/issues/169)
  - form width is now at 75%
- ops: UAT deployed with Azure DevOps Pipeline
- refactor: Teams Apps Packaging
  - One package for each supported language
  - Packages are now downloadable from the Help Center
- doc: GitHub Automated Security Fix & environment isolation
  - [Secure Development](https://help.salestim.com/salestimplatform/securedevelopment.html)
- ops: Static Code Analysis in BO
  - Using [Plato](https://www.npmjs.com/package/plato)
- improvement: Templates in the Catalog now have a fixed height [#128](https://github.com/nboldhq/app-platform/issues/128)
  - Description and cloned team name are now truncated to fit into one single line
- ops: Automated GitHub Release Process (Bump, Commit, Push, Tag) using Gulp
- ops: Updated Back-Office with docs, process, operations manual and logs
- refactor: Globally Applying [Standard](https://www.npmjs.com/package/standard#usage) JavaScript Style Guide
  - See [Enforced Rules](https://github.com/standard/standard/blob/HEAD/RULES.md)
- improvement: Template Form Design
- fixed: Salestim Admin shown to regular users [#113](https://github.com/nboldhq/app-platform/issues/113)
  - Enforced security checks with additional server controls
  - Security improvement using the current user directory role for tabs catalog, reports and settings. 
    ```json
    {
      "@odata.type": "#microsoft.graph.directoryRole",
      "id": "OBFUSCATED",
      "deletedDateTime": null,
      "description": "Company Administrator role has full access to perform any operation in the company scope.",
      "displayName": "Company Administrator",
      "roleTemplateId": "62e90394-69f5-4237-9190-012177145e10"
    }
    ```
- improvement: Teams and Templates Search design
- improvement: Templates Audience Targeting rules editor
  - Audience targeting is now disabled by default
  - The rules eeditor is therefore hidden by default
- refactor: Help Center is now hosted in the app-platform repository
  - Improved navigation
  - Access to CHANGELOG and KNOWNISSUES
- improvement: Better rendering of "⚙ Settings \ System Information" contents
  - Using [Markdow-it](https://www.npmjs.com/package/markdown-it) instead of [Showdown](https://www.npmjs.com/package/showdown)
- feat: Templates Audience Targeting
  - A targeting rule can now be applied to each template to define who can use it, based on the user profile data.
  - A "Check Syntax" button is available to test the rule against the current user
  - Rules could be defined using standard javascript expressions.
  - Known Issue:
    - Due to our caching mechanism, an update to the user profile may not be reflected immediately and therefore the targeting rule may not be applied immediately.
    - Known Workaround: Login to nBold from a browser window in "inprivate/incognito" mode to force user profile refresh.
- ops: Persisted logs in UAT and PRD environments
  - Using [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file)
  - UAT and PRD default configuration
    ```javascript
    {
      filename: 'ENV-salestim-%DATE%.log',
      dirname: 'OBFUSCATED',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    }
    ```
- security: Removed some external / public CDN dependencies
  - Purpose:
    - Prevent issues with some customer web proxy / firewall / network configuration
    - Improves security by preventing external code injection
    - Manage dependencies lifecycle through NPM
  - New NPM dependencies:
    - [Summernote](https://www.npmjs.com/package/summernote)
    - [SprintfJs](https://www.npmjs.com/package/sprintf-js)
    - [Typed.js](https://www.npmjs.com/package/mattboldt.typed.js)
    - [TLDjs](https://www.npmjs.com/package/tldjs)
    - [Bootstrap](https://www.npmjs.com/package/bootstrap)
    - [Bootstrap-notify](https://www.npmjs.com/package/bootstrap-notify)
    - [Popper.js](https://www.npmjs.com/package/popper.js)
    - [EJS](https://www.npmjs.com/package/ejs)
    - [Selectize](https://www.npmjs.com/package/selectize)
    - [Sine-waves](https://www.npmjs.com/package/sine-waves)
    - [JQuery](https://www.npmjs.com/package/jquery)
    - [Sweetalert](https://www.npmjs.com/package/sweetalert)
    - [Pace](https://www.npmjs.com/package/pace-js)
    - [Ace-builds](https://www.npmjs.com/package/ace-builds)
    - [DataTables](https://www.npmjs.com/package/datatables)
    - [Datatables Bootstrap Integration](https://www.npmjs.com/package/datatables.net-bs4)
    - [Font Awesome](https://www.npmjs.com/package/font-awesome)
    - [Microsoft Teams JavaScript Library](https://www.npmjs.com/package/@microsoft/teams-js)
- refactor: Externalized English & French translations
  - Using [i18n module](https://www.npmjs.com/package/i18n) server & client-side
  - Applying locales with EJS template engine, based on the browser language
  - Initialized "i18n" internal documentation
- refactor: Selective server resource public sharing with client
  - Applies to node modules, locales and enums
- docs: Using classification in documents
  ```
  - 📢 PUBLIC: Anonymous access
  - 🔑 EXTERNAL: Authenticated access to external users (customers, partners...)
  - 🔐 PRIVATE: Internal-only
  - 💥 CONFIDENTIAL: Secret and privy
  ```
- docs: Internal and External Documents
  - [🔐 Internal Documentation](https://github.com/nboldhq/app-platform/blob/master/docs-internal/)
  - [📢 External Documents](https://salestim.github.io/app-platform/)


## [0.9.10] Codename "Makushita"

- fixed: Opportunities channels are not created
- fixed: Opportunities channels are not updated
- fixed: Team owners unable to access planner plans
  - Symptom: Team owners may have an error trying to access a related plan:
    ```
    Oops, something went wrong ...
    You do not have access to the requested entity.
    Date and Time
    Planner Version: 0.0.0.0
    ```
  - Root cause:
    - [Reference: Team / Group Owner has to be a member as well to access Planner and add Planner Tab in Teams](https://techcommunity.microsoft.com/t5/Planner/Team-Group-Owner-has-to-be-a-member-as-well-to-access-Planner/td-p/338355)
  - Solution
    - Requester is now also explicitely added as members (in addition to owner is the option is enabled)
    - Requested owners are now also explicitely added as members
    - Permanent owners are now also explicitely added as members 
- refactor: Tracking nBold build number as a pre-release version number
  - Respects the [semver Semantic Versioning](https://semver.org/)
    ```
    MAJOR.MINOR.PATCH-PRERELEASE
    ```
  - Using [Gulp Bump](https://www.npmjs.com/package/gulp-bump) to update package version
- feat: Targeted packages to use Teams App Policies
  - A specific package is now available for each key feature
  - Tabs now has its own unique URL per environment to enable Intercom onboarding
- fixed: Template pictures disappear after a few days [#124](https://github.com/nboldhq/app-platform/issues/124)
  - Now template pictures are stored in an Azure Blob Storage instead of Redis Cache
  - Using [Azure Storage SDK V10 for JavaScript](https://www.npmjs.com/package/@azure/storage-blob)


## [0.9.9] Codename "Sandanme"

- improvement: Unique tabs URLS
  - Each nBold tab now has it's own unique url
    - /forms?stEntityId=io.salestim.automation.home
    - /forms?stEntityId=io.salestim.automation.approval
    - /forms?stEntityId=io.salestim.automation.catalog
    - /forms?stEntityId=io.salestim.automation.analytics
    - /forms?stEntityId=io.salestim.automation.settings
    - https://help.salestim.com/salestimautomation/
    - https://status.salestim.com
- fixed: Intercom - Multiple Company entities [#121](https://github.com/nboldhq/app-platform/issues/121)
  - Updated the Intercom company tracking code with company json payload:
    ```json
    {
    "company": {
        "company_id": "OBFUSCATED",
        "name": "OBFUSCATED"
      }
    }
    ```
  - [USER_HOSTNAME] is the user email full hostname (not only TLD) if available. For instance:
    ```json
    {
      "domain": "onmicrosoft.com",
      "hostname": "TENANT_NAME.onmicrosoft.com",
      "isIp": false,
      "isValid": true,
      "publicSuffix": "com",
      "subdomain": "TENANT_NAME",
      "tldExists": true
    }
    ```
  - If email is not available, the user tenant id is used instead.
  - [References: Intercom Company Object](https://developers.intercom.com/installing-intercom/docs/javascript-api-attributes-objects#section-company-object)
- fixed: Planner Tabs Provisioning
  - With large teams, under some circumstances, planner tabs are not provisionned
  - Wiki tabs are now fully ignored (as the default cloning feature creates new "Wiki" tabs automatically). So any Wiki tab in the source team will be cloned without configuration in the new one


## [0.9.8] Codename "Jonidan"

- fixed: Requests history log stores in the request object
- fixed: Random addGroupOwner error
  - A random error appears sometimes when trying to add a group owner:  
    ```json
    {
      "status": 401,
      "message": "Unauthorized",
      "response":{
        "body": {
          "error":{
            "code": "invalidauthenticationtoken",
            "message": "CompactToken parsing failed with error code: 80049217"
          }
        }
      }
    }
    ```
  - Resolution: Exception catched and operation replayed
- improvement: Unauthorized access to admin-restricted tabs [118](https://github.com/nboldhq/app-platform/issues/118)
  - Now the "Unauthorized message" has a specific button with a deeplink to the "🏠 Home" tab
  - The popin cannot be closed (nor by ESC keyboard, nor by the close button or "x" button)
  - [Deeplinks reference...](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/deep-links)
- improvement: Added "Known Issues" to the "⚙ Settings" tab
- fixed: updateGroup Logo exception if executed too early after cloning
  - Delayed by 10 sec after cloning to prevent exception
- fixed: Documents (CHANGELOG, KNOWNISSUES...) rendering optimization
  - Showdown options:
    ```javascript
    {
      openLinksInNewWindow: true,
      ghCodeBlocks: true, // Enable support for GFM code block style.
      ghMentions: true, // Enables github @mentions, which link to the username mentioned
      ghMentionsLink: true, // Changes the link generated by @mentions. Showdown will replace {u} with the username.
      tasklists: true, // Enable support for GFM tasklists.
      emoji: true // Enable emoji support. Ex: this is a :smile: emoji
    }
    ```
  - Showdown Flavor:
    ```javascript
    converter.setFlavor('github')
    ```
  - [Showdown Syntax...](https://github.com/showdownjs/showdown)


## [0.9.7] Codename "Jonokuchi"

- refactor: Request processing is now fully asynchronous
- improvement: Requests objects now have a message history to help error diagnostic
- refactor: Externalize "Bottleneck" package configuration for MS Graph to env vars
  - Options:
    - maxConcurrent: How many jobs can be executing at the same time.
    - minTime: How long to wait after launching a job before launching another one.
    - highWater: How long can the queue be?
    - strategy: Which strategy to use when the queue gets longer than the high water mark.
    - penalty: The penalty value used by the BLOCK strategy.
    - reservoir: How many jobs can be executed before the limiter stops executing jobs.
    - reservoirRefreshInterval: Every reservoirRefreshInterval milliseconds, the reservoir value will be automatically updated to the value of reservoirRefreshAmount. 
    - reservoirRefreshAmount: The value to set reservoir to when reservoirRefreshInterval is in use.
    - reservoirIncreaseInterval: Every reservoirIncreaseInterval milliseconds, the reservoir value will be automatically incremented by reservoirIncreaseAmount. 
    - reservoirIncreaseAmount: The increment applied to reservoir when reservoirIncreaseInterval is in use.
    - reservoirIncreaseMaximum: The maximum value that reservoir can reach when reservoirIncreaseInterval is in use.
  - [Constructor Options References...](https://www.npmjs.com/package/bottleneck#constructor)
- fixed: Team Creation not working (ownership error) [#108](https://github.com/nboldhq/app-platform/issues/108)
  - This issue is due to a requirement from the MS Graph that expects the logged in user to be an owner of the team to operate on it. [Ref...](https://stackoverflow.com/questions/51943098/access-denied-when-querying-teams-in-microsoft-graph)
- fixed: Sync delay between O365 Group owners and members with Team owners and members
  - To prevent this out-of-sync issue, moved to beta endpoint: https://graph.microsoft.com/v1.0/groups/{groupId}/owners/$ref
  - [Reference...](https://sharepoint.stackexchange.com/questions/227716/team-and-groups-members-out-of-sync)
- fixed: Preview info issue for Template with no default name and no naming convention [#109](https://github.com/nboldhq/app-platform/issues/109)
  - The default system templates now are using the new dynamic tagging convention based on the EJS templatinf syntax: https://ejs.co/
- doc: Known issues
  - A KNOWNISSUES.md file is now released as part of our release process in the "dist" folder
- doc: Added a known issue "Missing teams in list all teams when creating a new template"
- fixed: Cloned team selection filter
  - Moved to the beta endpoint to use filters (only available through the beta endpoint):
  ```
  $filter=resourceProvisioningOptions/Any(x:x eq 'Team')
  ```
  - References:
    - [List All Team endpoint](https://docs.microsoft.com/en-us/graph/teams-list-all-teams?toc=./ref/toc.json&view=graph-rest-1.0)
    - [Call Beta](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/docs/OtherAPIs.md)
  - Knowk issue [Missing teams in list all teams when creating a new template](./KNOWNISSUES.md)
- fixed: Text preview not displayed when no info is entered with a Naming Convention configured Template [#107](https://github.com/nboldhq/app-platform/issues/107)
  - Now the previews for name, description and welcome message are shown even if the related fields are empty.


## [0.9.6]

- improvement: Tracking basic anonymous informations to streamline support operations.
  - locale: Microsoft Teams Language
  - tid: Azure AD Tenant ID
  - upn: Azure AD User UPN
  - uid: Azure AD User ID
  - stuid: nBold User ID
  - sttid: nBold Customer ID
  - stlic: nBold License
  - environment: Last Visited Environment
  - version: Last Visited Version
- fixed: Salestim Admin shown to regular users [#113](https://github.com/nboldhq/app-platform/issues/113)
  - Now access is restricted to Office 365 global administrators
- improvement: Check Service Account
  - Now service account check results are displayed in the Tim message popin
- fixed: Approver configured template not displayed for users in "+Team" [#115](https://github.com/nboldhq/app-platform/issues/115)
- fixed: Requester not added as a Team Owner [#114](https://github.com/nboldhq/app-platform/issues/114)
- fixed: Handle empty email convention error and email alias bad format
  - Better error handling with end-user message
- fixed: Teams Creation not working (deleted team error) [#108](https://github.com/nboldhq/app-platform/issues/108)
  - Better error handling with end-user message
- improvement: Better exception handling
  - Visibility of the underlying exception and technical infos
  - Direct talk to nBold support through Intercom
- improvement: Empty / invalid email nickname used for team provisionning
  - Better error handling + End-user message
  - The error is logged into the related request
- improvement: Deleted / invalid cloned team used for team provisionning
  - Better error handling + End-user message
  - The error is logged into the related request
- feat: Try a template directly from the "📚 Catalog" tab
  - N.B: You always have to choose the template explicitely (to see how it looks like from the template selection)


## [0.9.5]

- improvement: App package including tabs with emojis
- fixed: Sessions isolation enforcement [#102](https://github.com/nboldhq/app-platform/issues/102)


## [0.9.4]

- feat: Check requirements for the service account
  - A new "Check Requirements" button is available from the "⚙ Settings \ Service Account" tab
- feat: Logout button from the "⚙ Settings" tabs
  - N.B: Kills the nBold session, not AAD session used by Microsoft 365
- fixed: the "My Requests" menu sometimes doesn't work properly
- improvement: No more popin flickering when loading the "🏠 Home" tab
- improvement: User are notified when trying to enable a template without associated team to clone
- improvement: Template are automatically enabled / disabled if there is / no cloning team associated
- fixed: Selecting a team to clone should not updates system templates names and description
- fixed: Template "Export" button should be disabled in production before GA
- fixed: "system and "singleton" template properties are lost after an update
- fixed: parts to clone bad formating
- feat: Removed App status in UAT from service status
- feat: Added API status from service status


## [0.9.3]

- fixed: i18n Internationalization
  - i18n is now dynamically configured per environment
  - All ccurrently unsupported languages (DE, ES) are now defaulted to EN
- fixed: FR translations for the login page
- feat: "System Information" from the "⚙ Settings" tab
- feat: "Environment" infos from the "⚙ Settings \ System Information" tab
- feat: "Changelog" infos from the "⚙ Settings \ System Information" tab


## [0.9.2]

- fixed: Templates without cloned team are automatically disabled at creation / update
- improvement: System templates handling
  - System templates are disabled by default as long as a cloning team has not been assigned
  - System templates are hidden from end-user team request form except for "Default"
  - The following fields cannot be updated in system templates:
    - Name
    - Description
    - Approval / Approval Team
  - The following actions are not available from system templates:
    - Export
    - Delete
    - Enable / Disable
- improvement: System templates versionning aligned with app versionning
- fixed: Not all enabled templates were visible in the team request form


## [0.9.1]

- doc: README-PUBLIC, LICENSE, THIRDPARTY and CHANGELOG in Dist folder
- fixed: Default templates appears disabled on first launch [#103](https://github.com/nboldhq/app-platform/issues/103)
- improvement: Services Account Login [#104](https://github.com/nboldhq/app-platform/issues/104)
  - When login for the first time the service account in the app, the app automatically refreshs just after the login so that Admin are seeing that the account is actually connected.
- fixed: Template info card update with false informations [#105](https://github.com/nboldhq/app-platform/issues/105)
- fixed: Preview of naming conventions
- improvement: Enabled Azure App Insights Live Metrics
  - Application Insights Live Metrics allows to view telemetry like CPU and memory in real time.


## [0.9.0]

- improvement: Service account selection from the "⚙ Settings" tab
- fixed: Hide api beta features for rings < 4
- feat: Delete a template


## [0.8.6]

- feat: Naming Conventions & User tags
  - Naming conventions for fields "Name", "Email", "Description" and "Welcome Message" now supports the following tags from the user profile:
    ```html
    <%= user.msDisplayName %>
    <%= user.msUPN %>
    <%= user.msEmail %>
    <%= user.msPreferredLanguage %>
    <%= user.msGivenName %>
    <%= user.msCountry %>
    <%= user.msCompanyName %>
    <%= user.msDepartment %>
    <%= user.msCity %>
    <%= user.msJobTitle %>
    <%= user.msSurname %>
    <%= user.msUsageLocation %>
    ```
  - Tagging follows the EJS syntax:
    ```html
    <%= TAG_NAME %>
    ```
- feat: Email default domain
  - The "Email" naming convention is now prefilled with the default tenant domain as a suffix
- fixed: Check disabled templates from request form
  - Better error handling
- fixed: Requester as a team owner
  - Better error handling
- fixed: Owners and members at creation
  - Better error handling
- fixed: Permanent Owners and Members at creation
  - Better error handling


## [0.8.5]

- feat: Naming Conventions & Requests tags
  - Naming conventions for fields "Name", "Email", "Description" and "Welcome Message" now supports the following tags from the request:
    ```html
    <%= request.team.name %>
    <%= request.team.description %>
    <%= request.team.welcomeMessage %>
    <%= request.template.name %>
    <%= request.request.requester.name %>
    <%= request.request.requester.email %>
    ```
  - Tagging follows the EJS syntax:
    ```html
    <%= TAG_NAME %>
    ```
- fixed: Naming conventions with bad tags
  - Now manages mispelled tags properly by skipping templating
- fixed: Apply team security / visibility
  - Better error handling
- refactor: Manage parts to clone from template
  - Performance optimization and better error handling
- feat: Group email MailNickName naming convention
  - Admins can now configure an "Email" (of the underlying group) naming convention, distinct from the "Name" naming convention
- fixed: Template icon from team picture
  - Fixed picture cache issue
- fixed: Template editing / save
  - Fixed template cache issue
- improvement: Caching template pictures
  - Template pictures are now cached for later use
- refactor: Dynamic Alpha / Beta features loading
  - Alpha and Beta features are now enabled and visible only in rings lower than "Production" (= Development & UAT)
- fixed: Enable / disable a team template
  - Better error handling
- security: Configure 2FA for npm
  - NPM dependency integration into our repository are now protected by 2FA authentication
  - [References...](https://docs.npmjs.com/configuring-two-factor-authentication)
- fixed: Manage emoji in teams channels and tabs names
  - Better error handling
  - Fixed the messsage size issue with Microsoft Graph API
- refactor: Handle Graph throttling with bottleneck
  - Calls to the Microsoft Graph are now scheduled and managed by the "Bottleneck" package
  - https://www.npmjs.com/package/bottleneck
- feat: Clone team logo for user requests
  - Following a user manual request, cloned team now are provisioned with the picture coming from the source team
- feat: Apply team logo from account domain
  - Following a CRM event, cloned team now are provisioned with the picture coming from the source team


## [0.8.4]

- feat: Website tab Cloning
  - Tabs configuration of type "Website" from the source team are now cloned
  - Applies only if "Tab Cloning" is enabled for a template
- feat: Planner tab Cloning
  - Tabs configuration of type "Planner" from the source team are now cloned
  - Applies only if "Tab Cloning" is enabled for a template


## [0.8.3]

- feat: Split Packages to bring more granular deployment capabilities


## [0.8.2]

- improvement: Instrumentation with Azure Application Insights
- tests: Check server-side and client-side implementation
- tests: Ensure environments segragation & customers partition at cache and db level


## [0.8.1]

- refactor: Unified team cloning across AUT and SF
- security: Customer segragation at cache and db level
- refactor: Instrumentation with App Insights
- fixed: Updated destroy session url
- improvement: Added emoji for uber rides requests
- improvement: Added Uber Deeplinks
- refactor: Updated client app id
- fixed: Fix SSL hosting for bot in PRD
- feat: Bot with mockup data
- refactor: Included bot mode
- fixed: Fix undefined parameter using redis
- refactor: Include crm integration in UAT and PRD
- tests: Use Azure Redis & CosmosDB for DEV
- fixed: Fixed cosmosdb sdk & emulator version mismatch
- fixed: Updated scripts for pm2
- fixed: native node ssl hosting
- security: Export cert & pfx
- improvement: Express SSL mgmt
- improvement: Dynamic app port from env file


## [0.8.0]

- BREAKING CHANGE: Running from src frolder
- feat: Enabled SF integration with team templating
- fixed: Fix teams deeplinks
- fixed: Fix UAT & PRD env vars
- refactor: Updated STAUT tabs & discovery features
- feat: Added Discovery "My Teams" search
- feat: Added new templates icons
- refactor: Updated static tabs and manifests versions


## [0.7.9]

- doc: Updated technical documentation
- fixed: Multi-crm configuration
- improvement: Multiple environments and roles mgmt
- feat: Added bot status endpoint