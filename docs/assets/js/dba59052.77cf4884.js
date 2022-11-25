"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8664],{27147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(87462),s=(n(67294),n(3905));n(19959);const o={author:"Guillaume Meyer"},a="How to use Active Directory Schema Extensions",r={unversionedId:"governance-policies/use-ad-schema-extensions",id:"governance-policies/use-ad-schema-extensions",title:"How to use Active Directory Schema Extensions",description:"ABSTRACT",source:"@site/contents/50-governance-policies/use-ad-schema-extensions.md",sourceDirName:"50-governance-policies",slug:"/governance-policies/use-ad-schema-extensions",permalink:"/governance-policies/use-ad-schema-extensions",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/50-governance-policies/use-ad-schema-extensions.md",tags:[],version:"current",frontMatter:{author:"Guillaume Meyer"},sidebar:"autoSidebar",previous:{title:"Serve Private Channels in Microsoft Teams only through Collaboration Templates",permalink:"/governance-policies/serve-private-channels"},next:{title:"Business scenarios",permalink:"/business-scenarios/"}},p={},c=[{value:"Understanding Extension Attributes",id:"understanding-extension-attributes",level:2},{value:"On-premises Extension Attributes",id:"on-premises-extension-attributes",level:2},{value:"Application-managed Extension Attributes",id:"application-managed-extension-attributes",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-to-use-active-directory-schema-extensions"},"How to use Active Directory Schema Extensions"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"ABSTRACT"),(0,s.kt)("br",{parentName:"p"}),"\n","This article describes how you can leverage the nBold platform to create ",(0,s.kt)("a",{parentName:"p",href:"/governance-policies/naming-conventions"},"naming conventions")," and ",(0,s.kt)("a",{parentName:"p",href:"/governance-policies/audience-targeting"},"audience targeting")," rules based on user profiles Active Directory schema extensions (aka ",(0,s.kt)("inlineCode",{parentName:"p"},"extension attributes"),")."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This article only applies to ",(0,s.kt)("inlineCode",{parentName:"p"},"Azure Active Directory Schema Extensions"),", that are different from the Microsoft Graph specific ",(0,s.kt)("inlineCode",{parentName:"p"},"Open extensions")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Schema extensions"),". To learn more about Microsoft Graph extensions, see ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/extensibility-overview"},"Add custom data to resources using extensions"),".")),(0,s.kt)("h2",{id:"understanding-extension-attributes"},"Understanding Extension Attributes"),(0,s.kt)("p",null,"Azure AD extension attributes may be accessed from two different locations depending on their origin:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Synchronized from an on-premises Active Directory. See ",(0,s.kt)("a",{parentName:"li",href:"#on-premises-extension-attributes"},"On-premises Extension Attributes"),"."),(0,s.kt)("li",{parentName:"ol"},"Managed by an application. See ",(0,s.kt)("a",{parentName:"li",href:"#application-managed-extension-attributes"},"Application-managed Extension Attributes"),".")),(0,s.kt)("h2",{id:"on-premises-extension-attributes"},"On-premises Extension Attributes"),(0,s.kt)("p",null,"On-premises extension attributes are synchronized with Azure Active Directory from an on-premises Active Directory."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"These extension attributes are also known as ",(0,s.kt)("inlineCode",{parentName:"p"},"Exchange custom attributes 1-15"),", and can also be accessed from the Microsoft 365 Exchange Admin UI as mailbox properties.")),(0,s.kt)("p",null,"On-premises extension attributes may be accessed from the ",(0,s.kt)("inlineCode",{parentName:"p"},"onPremisesExtensionAttributes")," property of the user profile. This property is comprised of fifteen custom extension attribute properties:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "@odata.context": "https://graph.microsoft.com/beta/$metadata#users/$entity",\n  "id": "e463251c-f0c1-42ce-a8f0-e09f89895323",\n  ...\n  "onPremisesExtensionAttributes": {\n    "extensionAttribute1": "REDACTED",\n    "extensionAttribute2": "REDACTED",\n    "extensionAttribute3": "REDACTED",\n    "extensionAttribute4": "REDACTED",\n    "extensionAttribute5": "REDACTED",\n    "extensionAttribute6": null,\n    "extensionAttribute7": "M",\n    "extensionAttribute8": "10/03/1982",\n    "extensionAttribute9": null,\n    "extensionAttribute10": "REDACTED",\n    "extensionAttribute11": null,\n    "extensionAttribute12": null,\n    "extensionAttribute13": null,\n    "extensionAttribute14": null,\n    "extensionAttribute15": null\n  }\n}\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"To see the available extensions in your tenant, you can use this link from the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.microsoft.com/en-us/graph/graph-explorer?request=me&method=GET&version=beta&GraphUrl=https://graph.microsoft.com"},"Microsoft Graph Explorer")," that list all the user profile properties for the current user.")),(0,s.kt)("admonition",{title:"Note",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"For an ",(0,s.kt)("inlineCode",{parentName:"p"},"onPremisesSyncEnabled")," user, the source of authority for this set of properties is the on-premises Active Directory which is synchronized to Azure AD, and is read-only. For a cloud-only user (where ",(0,s.kt)("inlineCode",{parentName:"p"},"onPremisesSyncEnabled")," is false), these properties may be set during creation or update.")),(0,s.kt)("p",null,"Usage example in naming conventions and audience targeting:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"user.onPremisesExtensionAttributes.extensionAttribute10\n")),(0,s.kt)("h2",{id:"application-managed-extension-attributes"},"Application-managed Extension Attributes"),(0,s.kt)("p",null,"Application-managed extension attributes may be accessed from the root of the user profile:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "@odata.context": "https://graph.microsoft.com/beta/$metadata#users/$entity",\n  "id": "e463251c-f0c1-42ce-a8f0-e09f89895323",\n  ...\n  "extension_e3049e305790413ca1b11bb53526f057_extensionAttribute10": "REDACTED"\n}\n')),(0,s.kt)("p",null,"These attributes are named by using the convention ",(0,s.kt)("inlineCode",{parentName:"p"},"extension_<extensions-app-id>_attributename"),", and note that the ",(0,s.kt)("inlineCode",{parentName:"p"},"<extensions-app-id>")," is specific to each tenant."),(0,s.kt)("p",null,"Usage example in naming conventions and audience targeting:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"user.extension_e3049e305790413ca1b11bb53526f057_extensionAttribute10\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"To see the available extensions in your tenant, you can use this link from the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.microsoft.com/en-us/graph/graph-explorer?request=me&method=GET&version=beta&GraphUrl=https://graph.microsoft.com"},"Microsoft Graph Explorer")," that list all the user profile properties for the current user.")))}u.isMDXComponent=!0}}]);