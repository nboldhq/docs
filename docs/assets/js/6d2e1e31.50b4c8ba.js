"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2028],{53839:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(78561);const s={position:"4",status:"published",author:"Guillaume Meyer"},o="Microsoft Graph Permissions",l={unversionedId:"trust-center/microsoft-graph-permissions",id:"trust-center/microsoft-graph-permissions",title:"Microsoft Graph Permissions",description:"Understanding permissions scopes",source:"@site/contents/90-trust-center/microsoft-graph-permissions.md",sourceDirName:"90-trust-center",slug:"/trust-center/microsoft-graph-permissions",permalink:"/trust-center/microsoft-graph-permissions",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/90-trust-center/microsoft-graph-permissions.md",tags:[],version:"current",frontMatter:{position:"4",status:"published",author:"Guillaume Meyer"},sidebar:"autoSidebar",previous:{title:"Known issues",permalink:"/trust-center/known-issues"},next:{title:"Network Security",permalink:"/trust-center/network-security"}},p={},c=[{value:"Understanding permissions scopes",id:"understanding-permissions-scopes",level:2},{value:"Basic scope",id:"basic-scope",level:3},{value:"Home scope",id:"home-scope",level:3},{value:"Catalog scope",id:"catalog-scope",level:3},{value:"Settings scope",id:"settings-scope",level:3},{value:"Service account scope",id:"service-account-scope",level:3},{value:"Service Account",id:"service-account",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Security Best practices",id:"security-best-practices",level:3},{value:"Enforce service account security with MFA",id:"enforce-service-account-security-with-mfa",level:4},{value:"Keep access limited",id:"keep-access-limited",level:4},{value:"Create service accounts from scratch",id:"create-service-accounts-from-scratch",level:4},{value:"Don\u2019t put service accounts in built-in privileged groups",id:"dont-put-service-accounts-in-built-in-privileged-groups",level:4},{value:"Control password configuration",id:"control-password-configuration",level:4},{value:"Enable auditing",id:"enable-auditing",level:4},{value:"Implement access rights management software",id:"implement-access-rights-management-software",level:4}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"microsoft-graph-permissions"},"Microsoft Graph Permissions"),(0,r.kt)("h2",{id:"understanding-permissions-scopes"},"Understanding permissions scopes"),(0,r.kt)("p",null,'To comply with the principle of "least-privilege", and request the minimum required permissions to perform specific operations, nBold defines different permissions scopes that it will use in different contexts.'),(0,r.kt)("p",null,"Here is a diagram describing in which context each scope is requested:"),(0,r.kt)(i.G,{chart:"flowchart TB\n\n    %% Nodes\n\n    teams(Microsoft Teams client<br />Desktop, web, mobile)\n        \n    subgraph serverside[Server-side]\n        jobs(Asynchronous Jobs)\n        serviceaccount(Service Account scope)\n        application(Application scope)\n    end\n\n    subgraph clientside[Client-side]\n        basic(Basic scope)\n        home(Home scope)\n        catalog(Catalog scope)\n        settings(Settings scope)\n    end\n\n    azuread(Azure AD)\n    msgraph(Microsoft Graph)\n \n    %% Links\n\n    teams --\x3e|SSO| clientside\n    teams --\x3e|Triggers| serverside\n\n    basic --\x3e|Access to<br />Home tab| home\n    basic --\x3e|Access to<br />Catalog tab| catalog\n    basic --\x3e|Access to<br />Settings tab| settings\n\n    jobs --\x3e|Scheduled| jobs\n    jobs --\x3e|Service account<br />model?| serviceaccount\n    jobs --\x3e|Application<br />model?| application\n\n    clientside --\x3e|Delegated permissions| azuread\n    application --\x3e|Application permissions| azuread\n    serviceaccount --\x3e|Delegated permissions| azuread\n\n    azuread --\x3e|Authorize| msgraph\n\n    %% Styles\n\n    classDef external fill:#9099d8, stroke-width:0px;\n        class teams external\n    classDef scope fill:#90EE90, stroke-width:0px;\n        class basic scope\n        class home scope\n        class catalog scope\n        class settings scope\n        class serviceaccount scope\n        class application scope\n    classDef microsoftervices fill:#FFFFE0, stroke-width:0px;\n        class azuread microsoftervices\n        class msgraph microsoftervices\n    classDef containers fill:#ADD8E6, stroke-width:0px;\n        class jobs containers",mdxType:"Mermaid"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Legend:")),(0,r.kt)(i.G,{chart:"graph TB\n    ext(Client)\n    srv(Server-side Service)\n    scope(Scope)\n    ms(Microsoft Service)\n\n    classDef external fill:#9099d8, stroke-width:0px;\n        class ext external\n    classDef network fill:#90EE90, stroke-width:0px;\n        class scope network\n    classDef azureservices fill:#FFFFE0, stroke-width:0px;\n        class ms azureservices\n    classDef containers fill:#ADD8E6, stroke-width:0px;\n        class srv containers",mdxType:"Mermaid"}),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Understanding admin-restricted permissions",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Depending on the permission type (Delegated or Application), some high-privilege permissions in the Microsoft ecosystem are set to admin-restricted.",(0,r.kt)("br",{parentName:"p"}),"\n","Examples of these kinds of permissions include the following:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Read all user's full profiles by using ",(0,r.kt)("inlineCode",{parentName:"li"},"User.Read.All")),(0,r.kt)("li",{parentName:"ul"},"Write data to an organization's directory by using ",(0,r.kt)("inlineCode",{parentName:"li"},"Directory.ReadWrite.All")),(0,r.kt)("li",{parentName:"ul"},"Read all groups in an organization's directory by using ",(0,r.kt)("inlineCode",{parentName:"li"},"Groups.Read.All"))),(0,r.kt)("p",{parentName:"admonition"},"For nBold to access data in Microsoft Graph, your administrator must grant it the correct permissions via a consent process.  "),(0,r.kt)("p",{parentName:"admonition"},"Learn more:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/administrator-guide/Installation"},"nBold Install and Setup Guide...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/application-consent-experience"},"Azure AD application consent experience...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/permissions-reference"},"Microsoft Graph permissions reference...")))),(0,r.kt)("h3",{id:"basic-scope"},"Basic scope"),(0,r.kt)("p",null,"From the nBold app for Microsoft Teams, a user is authenticated using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-aad-sso"},"Tabs SSO mechanism"),". Through this SSO process, a limited set of user-level OpenID permissions is granted, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"offline_access"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"openid"),"."),(0,r.kt)("p",null,"This basic scope is requested by the nBold app once the user is authenticated, to access any of its tabs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Origin"),(0,r.kt)("th",{parentName:"tr",align:null},"Justification"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Admin Consent Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openid")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenID"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to sign-in a user."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offline_access")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenID"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to retreive a refresh token used to refresh the access token of the current user from the application web client."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenID"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to read the email address of the current user."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenID"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to read the basic profile (name, picture, user name) of the current user."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"User.ReadBasic.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to retreive the list of users from the directory, used when a user is requesting a new team and wants to add members and owners."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Team.ReadBasic.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to retreive the list of teams a user is a member of, used to show the list of teams from the ",(0,r.kt)("inlineCode",{parentName:"td"},"Home")," tab of the nBold app."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Channel.ReadBasic.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to retreive the list of channels from the teams a user is a member of, used to show the list of channels for each team from the ",(0,r.kt)("inlineCode",{parentName:"td"},"Home")," tab of the nBold app."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")))),(0,r.kt)("h3",{id:"home-scope"},"Home scope"),(0,r.kt)("p",null,"In addition to the basic scope, when a user is trying to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," tab, nBold requests the following additional permissions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Origin"),(0,r.kt)("th",{parentName:"tr",align:null},"Justification"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Admin Consent Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TeamSettings.Read.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to retreive the settings of teams a user is a member of, used to show some teams settings from the ",(0,r.kt)("inlineCode",{parentName:"td"},"Home")," tab of the nBold app."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TeamMember.Read.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to retreive the members (owners, members and guests) of teams a user is a member of, used to show teams members from the ",(0,r.kt)("inlineCode",{parentName:"td"},"Home")," tab of the nBold app."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ChannelMember.Read.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to retreive the members (owners, members and guests) of channels (private, shared) from teams a user is a member of, used to show some teams members from the ",(0,r.kt)("inlineCode",{parentName:"td"},"Home")," tab of the nBold app."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ChannelSettings.Read.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to retreive the settings of channels from teams a user is a member of, used to show some channels settings from the ",(0,r.kt)("inlineCode",{parentName:"td"},"Home")," tab of the nBold app."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TeamsTab.Read.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to retreive the tabs included in channels from teams a user is a member of, used to show some tabs settings from the ",(0,r.kt)("inlineCode",{parentName:"td"},"Home")," tab of the nBold app."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,r.kt)("h3",{id:"catalog-scope"},"Catalog scope"),(0,r.kt)("p",null,"In addition to the basic scope, when a user is trying to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"Catalog")," tab (and of course if the user was granted the ",(0,r.kt)("inlineCode",{parentName:"p"},"Catalog Manager")," role from the RBAC settings), nBold requests the following additional permissions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Origin"),(0,r.kt)("th",{parentName:"tr",align:null},"Justification"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Admin Consent Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"InformationProtectionPolicy.Read")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the catalog manager to select a sensitivity label from a list (Seeing only the labels he has access to) to associate with a collaboration template."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,r.kt)("h3",{id:"settings-scope"},"Settings scope"),(0,r.kt)("p",null,"When a user is trying to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," tab (and of course if the user was granted the ",(0,r.kt)("inlineCode",{parentName:"p"},"Global Administrator")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Teams Administrator")," role), nBold only requests the permissions from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Basic scope")," as the only required permission is ",(0,r.kt)("inlineCode",{parentName:"p"},"User.ReadBasic.All")," (already included in ",(0,r.kt)("inlineCode",{parentName:"p"},"Basic scope"),")"),(0,r.kt)("h3",{id:"service-account-scope"},"Service account scope"),(0,r.kt)("p",null,"If the application is executed in the context of a service account model, when an administrator is registering the service account from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," tab, nBold requests the following ",(0,r.kt)("inlineCode",{parentName:"p"},"delegated")," permissions as part of the admin consent process:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Origin"),(0,r.kt)("th",{parentName:"tr",align:null},"Justification"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Admin Consent Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openid")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenID"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to sign-in the service account."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offline_access")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenID"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to retreive a refresh token used to refresh the access token of the service account."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenID"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to read the email address of the service account."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenID"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows nBold to read the basic profile (name, picture, user name) of the service account."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Mail.Send")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"If an organization-level provider has been defined from the ",(0,r.kt)("inlineCode",{parentName:"td"},"Settings")," tab, the team creation approval emails will be sent by the service account itself (instead of sending emails through an external mailer service)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"User.Read.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to search for users in the directory."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Group.ReadWrite.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to perform administrative operations (especially applying sensitivity or retention labels, applying groups policies...) on the groups associated with teams."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"InformationProtectionPolicy.Read")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to retreive and apply (granted he has the required licenses) sensitivity labels to teams."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Team.Create")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to create new teams."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TeamSettings.ReadWrite.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to retreive and update teams settings."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TeamsAppInstallation.ReadWriteForTeam")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to install apps in a team to provision new tabs during the provisioning process."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TeamMember.ReadWrite.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to manage members of teams."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TeamsTab.ReadWrite.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to create and manage tabs as part of the provisioning process."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Channel.Create")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to create and manage channels as part of the provisioning process."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ChannelSettings.ReadWrite.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to manage channels settings."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ChannelMember.ReadWrite.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to manage channels members."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Notes.ReadWrite.All")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the service account to OneNote notebooks."),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")))),(0,r.kt)("h2",{id:"service-account"},"Service Account"),(0,r.kt)("p",null,"A service account is a user identity that is associated with a service executable (such as nBold) for the purpose of providing a security context for that service."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why do we NEED a service account?"),(0,r.kt)("br",{parentName:"p"}),"\n","nBold relies intensively on the Microsoft Graph API. Therefore it's important to understand its permissions model and basic requirements.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Understand delegated and application permissions"),(0,r.kt)("br",{parentName:"p"}),"\n","Microsoft Graph has two types of permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Delegated permissions"))," are used by apps that have a signed-in user present. For these apps either the user or an administrator consents to the permissions that the app requests and the app can act as the signed-in user when making calls to Microsoft Graph. Some delegated permissions can be consented by non-administrative users, but some higher-privileged permissions require administrator consent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Application permissions"))," are used by apps that run without a signed-in user present. For example, apps that run as background services or daemons. Application permissions can only be consented by an administrator.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Due to some Microsoft Graph functional and technical limitations, nBold now relies on a delegated permission model. In the future, nBold will switch to an application model.")),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/auth/auth-concepts#microsoft-graph-permissions"},"Authentication and authorization basics for Microsoft Graph...")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How we're securing it?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Least-Privilege Administrative Models"),": Every single requested permission scope is documented and justified."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentication"),": We're not storing any login / password combination, and service account configuration can only be performed by one of your administrators.")),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Minimal requirements"),(0,r.kt)("br",{parentName:"p"}),"\n","Service account minimal requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Must be able to sign-in interactively",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Why: The service account needs to sign-in from the app to retreive Microsoft Graph access and refresh token."))),(0,r.kt)("li",{parentName:"ul"},"Must have at least an active Office 365 E1 license",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Why: The service account must be a regular Office 365 user to use the Microsoft Graph API in delegated mode."))),(0,r.kt)("li",{parentName:"ul"},"Must have an active license to Microsoft Teams",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Why: To perform administrative operations on Microsoft Teams artefacts."))),(0,r.kt)("li",{parentName:"ul"},"Must be assigned at least the ",(0,r.kt)("inlineCode",{parentName:"li"},"Teams Administrator")," role",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Why: To perform administrative operations on teams/groups, especially gain the "owner" status on any existing teams/group.')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optional requirements"),(0,r.kt)("br",{parentName:"p"}),"\n","Service account optional requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Must have an active Exchange Online license and its Exchange Online mailbox provisioned, if the ",(0,r.kt)("inlineCode",{parentName:"li"},"organization-level provider")," option is enabled from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Approval")," section of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," tab.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Why: To send email notifications and actionable messages in a secure way inside customer's domain, respecting internal mail flow rules"))),(0,r.kt)("li",{parentName:"ul"},"Must have an active Azure AD P1 license, if sensitivity labels are defined in your templates",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Why: To apply sensitivity labels to your teams/groups")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Learn how to ",(0,r.kt)("a",{parentName:"p",href:"/administrator-guide/Service-Account-Setup"},"setup the service account"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Is the service account visible to end-users?"),(0,r.kt)("br",{parentName:"p"}),"\n","Even if the service account is performing actions in the background (Such as provisioning and other administrative operations), it may appear to end-user in some cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is seen as the teams and associated resources (such as planner) creator"),(0,r.kt)("li",{parentName:"ul"},"Its profile picture and name appear as the sender of notifications")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Choose the name you want, this can be the name of your IT Service for instance, and add a nice picture!")),(0,r.kt)("h3",{id:"security-best-practices"},"Security Best practices"),(0,r.kt)("p",null,"This list is for sure not exhaustive, but may give you some guidelines on how to secure your service accounts:"),(0,r.kt)("h4",{id:"enforce-service-account-security-with-mfa"},"Enforce service account security with MFA"),(0,r.kt)("p",null,"nBold service account supports Multi-Factor Authentication (MFA). MFA adds an additional layer of protection, ensuring that service account declaration or update is done by an authorized person."),(0,r.kt)("admonition",{title:"Password update and MFA (Multi-factor authentication)",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you enforce MFA for the service account or update its password AFTER it has been configured in nBold, you MUST update it from the "Settings" tab using the "\ud83c\udfad Update" button.')),(0,r.kt)("h4",{id:"keep-access-limited"},"Keep access limited"),(0,r.kt)("p",null,"Ensure you only allocate AD service accounts the minimum privileges they require for the tasks they need to carry out, and don\u2019t give them any more access than is necessary. In many cases you can remove the functionality for remote access, terminal service login, internet access, and remote control rights."),(0,r.kt)("h4",{id:"create-service-accounts-from-scratch"},"Create service accounts from scratch"),(0,r.kt)("p",null,"Don\u2019t create service accounts in Active Directory by copying old ones, as you might accidentally be copying from a service account with much higher privileges than you need. This could lead to security issues and account misuse if you give someone an account with access to resources or information they shouldn\u2019t be privy to."),(0,r.kt)("h4",{id:"dont-put-service-accounts-in-built-in-privileged-groups"},"Don\u2019t put service accounts in built-in privileged groups"),(0,r.kt)("p",null,"Putting service accounts in groups with built-in privileges can be risky, because each person in the group will have access to the service account\u2019s credentials. If there\u2019s account misuse, it can be hard to figure out who the offender is. If you need a service account for a privileged group, create a new group with the same privileges and allow access only to the service account."),(0,r.kt)("h4",{id:"control-password-configuration"},"Control password configuration"),(0,r.kt)("p",null,"You can set a service account so the user can\u2019t change their own password. You can also set it so the account can\u2019t be delegated to someone else. This ensures the administrator controls the password, and nobody other than authorized users has access to the account."),(0,r.kt)("h4",{id:"enable-auditing"},"Enable auditing"),(0,r.kt)("p",null,"Be sure to enable auditing for all service accounts and related objects. Once auditing is enabled, regularly check the logs to see who\u2019s using the accounts, when, and for what purposes. Auditing is one of the most important of the best practices: it helps ensure security, verifies internal processes and compliance measures are being followed, and can discover any issues or breaches before too much time passes."),(0,r.kt)("p",null,"You can leverage multiple sources of reports and audits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Microsoft 365 and Microsoft Teams reports: As a regular user, some aspects of the service account activity are available from the standard ",(0,r.kt)("a",{parentName:"li",href:"https://admin.microsoft.com/#/reportsUsage"},"Microsoft 365 reports")," and ",(0,r.kt)("a",{parentName:"li",href:"https://admin.teams.microsoft.com/analytics/reports"},"Microsoft Teams reports"),". This is especially useful to monitor the overall level of activity to detect unusual patterns (external file sharing, downloads...). N.B: These reports are also available from Power BI."),(0,r.kt)("li",{parentName:"ul"},"Microsoft 365 Defender: Detailed audit trails are accessible from the ",(0,r.kt)("a",{parentName:"li",href:"https://security.microsoft.com/auditlogsearch"},"Microsoft 365 Defender portal")),(0,r.kt)("li",{parentName:"ul"},"Azure AD: From the [AAD portal)(",(0,r.kt)("a",{parentName:"li",href:"https://aad.portal.azure.com"},"https://aad.portal.azure.com"),"), you have access to both signin-logs and audit logs"),(0,r.kt)("li",{parentName:"ul"},"nBold: nBold provides its own trails of all the operations performed by the service account, especially through the provisioning audit trails.")),(0,r.kt)("p",null,"These audits trails could be integrated with an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security_information_and_event_management"},"SIEM")," solution such as ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/sentinel/overview"},"Microsoft Sentinel")," for automated analysis and patterns recognition."),(0,r.kt)("h4",{id:"implement-access-rights-management-software"},"Implement access rights management software"),(0,r.kt)("p",null,"Carefully managing your Active Directory service accounts is crucial to preventing misuse of broad access and privileges. An access rights management tool can be beneficial to ensure user accounts are set up and managed with appropriate permissions and access."))}m.isMDXComponent=!0}}]);