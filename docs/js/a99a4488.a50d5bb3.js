"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3618],{86899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(78561);const o={},r="Authentication",s={unversionedId:"integrate-with-nbold/api/authentication",id:"integrate-with-nbold/api/authentication",title:"Authentication",description:"To access the nBold API, a valid Azure Active Directory access token is required, as a user or as an application.",source:"@site/contents/70-integrate-with-nbold/10-api/30-authentication.md",sourceDirName:"70-integrate-with-nbold/10-api",slug:"/integrate-with-nbold/api/authentication",permalink:"/integrate-with-nbold/api/authentication",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/70-integrate-with-nbold/10-api/30-authentication.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"autoSidebar",previous:{title:"nBold API",permalink:"/integrate-with-nbold/api/"},next:{title:"Rate limits",permalink:"/integrate-with-nbold/api/rate-limits"}},l={},d=[{value:"Supported access tokens",id:"supported-access-tokens",level:2},{value:"Required roles",id:"required-roles",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"To access the nBold API, a valid Azure Active Directory access token is required, as a user or as an application."),(0,i.kt)("h2",{id:"supported-access-tokens"},"Supported access tokens"),(0,i.kt)("p",null,"The nBold API expects a valid access token in the HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," request header with a ",(0,i.kt)("inlineCode",{parentName:"p"},"bearer")," token such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Authorization": "bearer <JWT_TOKEN>"\n}\n')),(0,i.kt)("p",null,"nBold supports ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/access-tokens"},"access tokens")," retreived from the following ",(0,i.kt)("inlineCode",{parentName:"p"},"OAuth 2.0")," grant flows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow"},"Auth Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow"},"On-behalf-of")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow"},"Client Credentials"))),(0,i.kt)("h2",{id:"required-roles"},"Required roles"),(0,i.kt)("p",null,"The nBold API implements role-based access control for each operation:\n| Role | Code | Origin |\n|------|------|--------|\n| Anonymous Access | ",(0,i.kt)("inlineCode",{parentName:"p"},"ANONYMOUS_ACCESS")," | nBold |\n| End-User | ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTHENTICATED_USER")," | nBold |\n| Authorized App | ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTHORIZED_APP")," | nBold |\n| Catalog Manager | ",(0,i.kt)("inlineCode",{parentName:"p"},"CATALOG_MANAGER")," | nBold |\n| Governance Manager | ",(0,i.kt)("inlineCode",{parentName:"p"},"GOVERNANCE_MANAGER")," | nBold |\n| Compliance Manager | ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLIANCE_MANAGER")," | nBold |\n| Integration Manager | ",(0,i.kt)("inlineCode",{parentName:"p"},"INTEGRATION_MANAGER")," | nBold |\n| Change Manager | ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE_MANAGER")," | nBold |\n| Teams Service Administrator | ",(0,i.kt)("inlineCode",{parentName:"p"},"TEAMS_SERVICE_ADMIN")," | Microsoft 365 |\n| Global Administrator | ",(0,i.kt)("inlineCode",{parentName:"p"},"GLOBAL_ADMIN")," | Microsoft 365 |"),(0,i.kt)("p",null,"Each operation in this documentation specifies its required roles (You'll need at least ONE of them) through the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-nbold-required-roles")," extension."))}p.isMDXComponent=!0}}]);