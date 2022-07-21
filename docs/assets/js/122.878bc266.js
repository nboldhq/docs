(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{566:function(t,a,s){"use strict";s.r(a);var e=s(36),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nboldapi-microsoftteamschannelsapi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nboldapi-microsoftteamschannelsapi"}},[t._v("#")]),t._v(" NBoldApi.MicrosoftTeamsChannelsApi")]),t._v(" "),s("p",[t._v("All URIs are relative to "),s("em",[t._v("https://api.salestim.io/api/v1.0")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Method")]),t._v(" "),s("th",[t._v("HTTP request")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/MicrosoftTeamsChannelsApi.html#getTeamsChannelNamespaceMetadata"}},[s("strong",[t._v("getTeamsChannelNamespaceMetadata")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /teams/{teamId}/channels/{channelId}/metadata/{namespace}")]),t._v(" "),s("td",[t._v("Get a channel metadata")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/MicrosoftTeamsChannelsApi.html#setMicrosoftTeamsChannelNamespaceMetadata"}},[s("strong",[t._v("setMicrosoftTeamsChannelNamespaceMetadata")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /teams/{teamId}/channels/{channelId}/metadata/{namespace}")]),t._v(" "),s("td",[t._v("Set channel metadata")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/MicrosoftTeamsChannelsApi.html#updateMicrosoftTeamsChannelNamespaceMetadata"}},[s("strong",[t._v("updateMicrosoftTeamsChannelNamespaceMetadata")])])],1),t._v(" "),s("td",[s("strong",[t._v("PATCH")]),t._v(" /teams/{teamId}/channels/{channelId}/metadata/{namespace}")]),t._v(" "),s("td",[t._v("Update a channel metadata")])])])]),t._v(" "),s("h2",{attrs:{id:"getteamschannelnamespacemetadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getteamschannelnamespacemetadata"}},[t._v("#")]),t._v(" getTeamsChannelNamespaceMetadata")]),t._v(" "),s("blockquote",[s("p",[t._v("Object getTeamsChannelNamespaceMetadata(teamId, channelId, namespace)")])]),t._v(" "),s("p",[t._v("Get a channel metadata")]),t._v(" "),s("p",[t._v("Get metadata for a channel for a specific namespace. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.")]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" NBoldApi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'n_bold_api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" defaultClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NBoldApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure Bearer (JWT) access token for authorization: bearerAuth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bearerAuth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" defaultClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bearerAuth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbearerAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR ACCESS TOKEN"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apiInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NBoldApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MicrosoftTeamsChannelsApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" teamId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"teamId_example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String | The team ID.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" channelId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"channelId_example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String | The channel ID.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" namespace "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"namespace_example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String | The metadata namespace.")]),t._v("\napiInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTeamsChannelNamespaceMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("teamId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" namespace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API called successfully. Returned data: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("teamId")])]),t._v(" "),s("td",[s("strong",[t._v("String")])]),t._v(" "),s("td",[t._v("The team ID.")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("channelId")])]),t._v(" "),s("td",[s("strong",[t._v("String")])]),t._v(" "),s("td",[t._v("The channel ID.")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("namespace")])]),t._v(" "),s("td",[s("strong",[t._v("String")])]),t._v(" "),s("td",[t._v("The metadata namespace.")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"return-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-type"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),s("p",[s("strong",[t._v("Object")])]),t._v(" "),s("h3",{attrs:{id:"authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),s("h3",{attrs:{id:"http-request-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),s("li",[s("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),s("h2",{attrs:{id:"setmicrosoftteamschannelnamespacemetadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setmicrosoftteamschannelnamespacemetadata"}},[t._v("#")]),t._v(" setMicrosoftTeamsChannelNamespaceMetadata")]),t._v(" "),s("blockquote",[s("p",[t._v("Object setMicrosoftTeamsChannelNamespaceMetadata(teamId, channelId, namespace, body)")])]),t._v(" "),s("p",[t._v("Set channel metadata")]),t._v(" "),s("p",[t._v("Set channel metadata for a specific namespace. N.B Using the POST method will replace all pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.")]),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" NBoldApi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'n_bold_api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" defaultClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NBoldApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure Bearer (JWT) access token for authorization: bearerAuth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bearerAuth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" defaultClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bearerAuth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbearerAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR ACCESS TOKEN"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apiInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NBoldApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MicrosoftTeamsChannelsApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" teamId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"teamId_example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String | The team ID.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" channelId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"channelId_example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String | The channel ID.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" namespace "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"namespace_example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String | The metadata namespace.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object | Supply a JSON representation of your metadata.")]),t._v("\napiInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMicrosoftTeamsChannelNamespaceMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("teamId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" namespace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API called successfully. Returned data: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("teamId")])]),t._v(" "),s("td",[s("strong",[t._v("String")])]),t._v(" "),s("td",[t._v("The team ID.")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("channelId")])]),t._v(" "),s("td",[s("strong",[t._v("String")])]),t._v(" "),s("td",[t._v("The channel ID.")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("namespace")])]),t._v(" "),s("td",[s("strong",[t._v("String")])]),t._v(" "),s("td",[t._v("The metadata namespace.")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("body")])]),t._v(" "),s("td",[s("strong",[t._v("Object")])]),t._v(" "),s("td",[t._v("Supply a JSON representation of your metadata.")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"return-type-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-type-2"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),s("p",[s("strong",[t._v("Object")])]),t._v(" "),s("h3",{attrs:{id:"authorization-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization-2"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),s("h3",{attrs:{id:"http-request-headers-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-2"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Content-Type")]),t._v(": application/json")]),t._v(" "),s("li",[s("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),s("h2",{attrs:{id:"updatemicrosoftteamschannelnamespacemetadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updatemicrosoftteamschannelnamespacemetadata"}},[t._v("#")]),t._v(" updateMicrosoftTeamsChannelNamespaceMetadata")]),t._v(" "),s("blockquote",[s("p",[t._v("Object updateMicrosoftTeamsChannelNamespaceMetadata(teamId, channelId, namespace, body)")])]),t._v(" "),s("p",[t._v("Update a channel metadata")]),t._v(" "),s("p",[t._v("Update a channel metadata for a specific namespace. N.B Using the PATCH method will merge supplied body with pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.")]),t._v(" "),s("h3",{attrs:{id:"example-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" NBoldApi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'n_bold_api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" defaultClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NBoldApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure Bearer (JWT) access token for authorization: bearerAuth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bearerAuth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" defaultClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bearerAuth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbearerAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR ACCESS TOKEN"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apiInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NBoldApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MicrosoftTeamsChannelsApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" teamId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"teamId_example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String | The team ID.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" channelId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"channelId_example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String | The channel ID.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" namespace "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"namespace_example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String | The metadata namespace.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object | Supply a JSON representation of your metadata.")]),t._v("\napiInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateMicrosoftTeamsChannelNamespaceMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("teamId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" namespace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API called successfully. Returned data: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("teamId")])]),t._v(" "),s("td",[s("strong",[t._v("String")])]),t._v(" "),s("td",[t._v("The team ID.")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("channelId")])]),t._v(" "),s("td",[s("strong",[t._v("String")])]),t._v(" "),s("td",[t._v("The channel ID.")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("namespace")])]),t._v(" "),s("td",[s("strong",[t._v("String")])]),t._v(" "),s("td",[t._v("The metadata namespace.")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("body")])]),t._v(" "),s("td",[s("strong",[t._v("Object")])]),t._v(" "),s("td",[t._v("Supply a JSON representation of your metadata.")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"return-type-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-type-3"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),s("p",[s("strong",[t._v("Object")])]),t._v(" "),s("h3",{attrs:{id:"authorization-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization-3"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),s("h3",{attrs:{id:"http-request-headers-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-3"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Content-Type")]),t._v(": application/json")]),t._v(" "),s("li",[s("strong",[t._v("Accept")]),t._v(": application/json")])])])}),[],!1,null,null,null);a.default=n.exports}}]);