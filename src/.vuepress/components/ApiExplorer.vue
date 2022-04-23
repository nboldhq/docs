<template>
  <div>
    <link
      rel="stylesheet"
      type="text/css"
      href="/css/swagger-viewer.bundle.css" />
    <div id="loading" class="uk-text-center">
      <span class="uk-text-lead">Checking your previous sessions</span>
      <br />
      <br />
      <div uk-spinner></div>
    </div>
    <div id="authorizations" style="display: none">
      <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
        <div>
          <div
            class="uk-card uk-card-hover uk-card-small uk-card-default uk-card-body">
            <label class="uk-text-lead">Delegated Access</label>
            <br />
            <label class="uk-text-meta uk-text-small">on behalf of a user (authorization code flow)</label>
            <hr />
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img
                  id="profilePicture"
                  class="uk-border-circle"
                  width="40"
                  height="40"
                  src="/img/avatar.png" />
              </div>
              <div class="uk-width-expand">
                <label
                  id="userDisplayName"
                  class="uk-text-lead uk-align-left uk-margin-remove-bottom">
                  Anonymous
                </label>
                <div id="userDetails" style="display: none">
                  <br /><br />
                  <label
                    id="userIdentifier"
                    class="uk-text-meta uk-align-left uk-margin-remove-bottom">
                  </label>
                  <br />
                  <label
                    id="userLoginDateTime"
                    class="uk-align-left uk-text-meta uk-text-small uk-margin-remove-top uk-margin-remove-bottom">
                    <time datetime=""></time>
                  </label>
                  <br />
                  <label
                    id="userRoles"
                    class="uk-align-left uk-text-meta uk-text-small uk-margin-remove-top">
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <button id="delegatedLoginButton" class="uk-button uk-align-right uk-button-primary uk-button-small" onclick="delegatedSignIn()" style="text-decoration: none; margin-top: 10px; margin-bottom: 10px;">
                <span uk-icon="icon: sign-in; ratio: 0.8"></span>&nbsp;<span
                  class="uk-text-middle">SIGN-IN</span>
              </button>
              <button id="delegatedLogoutButton" style="display: none; text-decoration: none; margin-top: 10px; margin-bottom: 10px;" class="uk-button uk-align-right uk-button-secondary uk-button-small" onclick="delegatedSignOut()">
                <span uk-icon="icon: sign-out; ratio: 0.8"></span>&nbsp;<span
                  class="uk-text-middle">SIGN-OUT</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            class="uk-card uk-card-hover uk-card-small uk-card-default uk-card-body">
            <label class="uk-text-lead">Application Access</label>
            <br />
            <label class="uk-text-meta uk-text-small">as an application (client credentials flow)</label>
            <hr />
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img
                  id="appPicture"
                  class=""
                  width="40"
                  height="40"
                  src="/img/bot.png" />
              </div>
              <div class="uk-width-expand">
                <label
                  id="appDisplayName"
                  class="uk-text-lead uk-align-left uk-margin-remove-bottom">
                  Anonymous
                </label>
                <div id="appDetails" style="display: none">
                  <br /><br />
                  <label
                    id="appIdentifier"
                    class="uk-text-meta uk-align-left uk-margin-remove-bottom">
                  </label>
                  <br />
                  <label
                    id="appLoginDateTime"
                    class="uk-align-left uk-text-meta uk-text-small uk-margin-remove-top uk-margin-remove-bottom">
                    <time datetime=""></time>
                  </label>
                  <br />
                  <label
                    id="appRoles"
                    class="uk-align-left uk-text-meta uk-text-small uk-margin-remove-top">
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <form class="uk-grid-small uk-form-horizontal" uk-grid>
                <div class="uk-width-1-1@s">
                  <div class="uk-form-label uk-text-meta uk-text-small">
                    Tenant ID
                  </div>
                  <input
                    id="appTenantId"
                    class="uk-input uk-form-small"
                    type="text"
                    placeholder="" />
                </div>
                <div class="uk-width-1-2@s">
                  <div class="uk-form-label uk-text-meta uk-text-small">
                    Client ID
                  </div>
                  <input
                    id="appClientId"
                    class="uk-input uk-form-small"
                    type="text"
                    placeholder="" />
                </div>
                <div class="uk-width-1-2@s">
                  <div class="uk-form-label uk-text-meta uk-text-small">
                    Client Secret
                  </div>
                  <input
                    id="appClientSecret"
                    class="uk-input uk-form-small"
                    type="password"
                    placeholder="" />
                </div>
              </form>
              <br />
              <button id="appLoginButton" class="uk-button uk-align-right uk-button-primary uk-button-small" onclick="appSignIn()" style="text-decoration: none; margin-top: 10px; margin-bottom: 10px;">
                <span uk-icon="icon: sign-in; ratio: 0.8"></span>&nbsp;<span
                  class="uk-text-middle">SIGN-IN</span>
              </button>
              <button id="appLogoutButton" style="display: none; text-decoration: none; margin-top: 10px; margin-bottom: 10px;" class="uk-button uk-align-right uk-button-secondary uk-button-small" onclick="appSignOut()">
                <span uk-icon="icon: sign-out; ratio: 0.8"></span>&nbsp;<span
                  class="uk-text-middle">SIGN-OUT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <script type="text/javascript" src="/js/swagger-viewer.bundle.js"></script>
    <div id="swagger-ui"></div>
  </div>
</template>

<script>
  export default {
    mounted () {
      let pOpenApiFileUrl =
        "https://raw.githubusercontent.com/nboldhq/docs/main/src/api/latest/definition/nbold-openapi.yaml";

      const urlParams = new URLSearchParams(
        window.location.search
      );
      const devmode = urlParams.get("dev");
      if (
        window.location.host.indexOf("localhost", 0) > -1 ||
        window.location.host.indexOf("gme-dev", 0) > -1 ||
        devmode === "true"
      ) {
        pOpenApiFileUrl = "/api/latest/definition/nbold-openapi.yaml"
      }

      const s = document.createElement("script");
      s.setAttribute("src", "/js/authentication.bundle.js");
      s.onload = function () {
        const t = document.createElement("script");
        t.setAttribute("src", "/js/swagger-viewer.bundle.js");
        t.onload = function () {
          loadUi(pOpenApiFileUrl);
        };
        document.head.appendChild(t);
      };
      document.head.appendChild(s);

      function loadUi (url) {
        // Build a system
        const ui = SwaggerUIBundle({
          url: url,
          dom_id: "#swagger-ui",
          deepLinking: true,
          displayOperationId: true,
          displayRequestDuration: false,
          defaultModelsExpandDepth: 0,
          defaultModelExpandDepth: 0,
          showExtensions: false,
          filter: false,
          operationsSorter: "alpha",
          tagsSorter: "alpha",
          tryItOutEnabled: true,
          syntaxHighlight: {
            activate: true,
            theme: "agate",
          },
          presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
          plugins: [
            SwaggerUIBundle.plugins.DownloadUrl,
            {
              statePlugins: {
                spec: {
                  wrapActions: {
                    updateJsonSpec: function (oriAction, system) {
                      return (spec) => {
                        // Replace API URL with local in dev mode
                        const urlParams = new URLSearchParams(
                          window.location.search
                        );
                        const devmode = urlParams.get("dev");
                        if (
                          window.location.host.indexOf("localhost", 0) > -1 ||
                          window.location.host.indexOf("gme-dev", 0) > -1 ||
                          devmode === "true"
                        ) {
                          // change spec.servers here to add new entry, use concat to put it as the first & default one
                          spec.servers = [
                            {
                              url: "https://gme-dev-app.ngrok.io/api/v1.0",
                              description: "Development Environment",
                            },
                            {
                              url: "https://int.salestim.io/api/v1.0",
                              description: "Integration Environment",
                            },
                          ].concat(spec.servers || []);
                          // Show server list
                          var checkExist = setInterval(function () {
                            if (
                              document.querySelector(".information-container") !==
                              null
                            ) {
                              clearInterval(checkExist);
                              // Show containers
                              document.querySelector(
                                ".information-container"
                              ).style.display = "block";
                              document.querySelector(
                                ".scheme-container"
                              ).style.display = "block";
                            }
                          }, 100); // check every 100ms
                        }
                        return oriAction(spec);
                      };
                    },
                  },
                },
              },
            },
          ],
          // To make the open api file url visible, add:
          // layout: 'StandaloneLayout'
        });
        window.ui = ui;
        window.initExplorerHeader();
      }
    },
  };
</script>

<style scoped></style>