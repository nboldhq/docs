"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9692],{17782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));r(19959);const a={position:"5",status:"published",author:"Guillaume Meyer"},i="Anti-malware policy",s={unversionedId:"trust-center/anti-malware-policy",id:"trust-center/anti-malware-policy",title:"Anti-malware policy",description:"Please be aware that nBold is not storing nor uploading any document to your Microsoft 365 environment. nBold was designed with this requirement in mind. We\u2019re not accessing, storing nor processing any document from or to your environment, therefore antimalware requirement doesn\u2019t really apply to us.",source:"@site/contents/90-trust-center/anti-malware-policy.md",sourceDirName:"90-trust-center",slug:"/trust-center/anti-malware-policy",permalink:"/trust-center/anti-malware-policy",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/90-trust-center/anti-malware-policy.md",tags:[],version:"current",frontMatter:{position:"5",status:"published",author:"Guillaume Meyer"},sidebar:"autoSidebar",previous:{title:"Changelog",permalink:"/trust-center/CHANGELOG"},next:{title:"Authentication and access control",permalink:"/trust-center/authentication-and-access-control"}},l={},c=[{value:"How are we protecting these files?",id:"how-are-we-protecting-these-files",level:2},{value:"Integration with our SIEM",id:"integration-with-our-siem",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"anti-malware-policy"},"Anti-malware policy"),(0,n.kt)("p",null,"Please be aware that nBold is not storing nor uploading any document to your Microsoft 365 environment. nBold was designed with this requirement in mind. We\u2019re not accessing, storing nor processing any document from or to your environment, therefore antimalware requirement doesn\u2019t really apply to us."),(0,n.kt)("p",null,"The only files we\u2019re storing (as a volatile cache) is the templates pictures, the one you see in each template from your template catalog.\nThese images are generated from the team logo, and stored in Azure Blob Storage."),(0,n.kt)("h2",{id:"how-are-we-protecting-these-files"},"How are we protecting these files?"),(0,n.kt)("p",null,"Our entire Azure environment is protected by Azure Defender, and as part of Azure Defender, we\u2019re monitoring all our Storage Accounts. These storage account resources are monitored by the Azure Defender for Storage service."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Azure Defender for Storage provides:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Azure-native security - With 1-click enablement, Defender for Storage protects data stored in Azure Blob, Azure Files, and Data Lakes. As an Azure-native service, Defender for Storage provides centralized security across all data assets managed by Azure and is integrated with other Azure security services such as Azure Sentinel."),(0,n.kt)("li",{parentName:"ul"},"Rich detection suite - Powered by Microsoft Threat Intelligence, the detections in Defender for Storage cover the top storage threats such as anonymous access, compromised credentials, social engineering, privilege abuse, and malicious content."),(0,n.kt)("li",{parentName:"ul"},"Response at scale - Security Center's automation tools make it easier to prevent and respond to identified threats. Learn more in Automate responses to Security Center triggers."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"What kind of alerts does Azure Defender for Storage provide?\nSecurity alerts are triggered when there's:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Suspicious access patterns - such as successful access from a Tor exit node or from an IP considered suspicious by Microsoft Threat Intelligence"),(0,n.kt)("li",{parentName:"ul"},"Suspicious activities - such as anomalous data extraction or unusual change of access permissions"),(0,n.kt)("li",{parentName:"ul"},"Upload of malicious content - such as potential malware files (based on hash reputation analysis) or hosting of phishing content"))),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/security-center/defender-for-storage-introduction"},"Azure Defender for Storage"),"."),(0,n.kt)("h2",{id:"integration-with-our-siem"},"Integration with our SIEM"),(0,n.kt)("p",null,"As this anti-malware protection is managed by Azure Defender, it is natively connected to our ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/sentinel/overview"},"Azure Sentinel")," SIEM, which aggregates all the logs and alerts from our entire platform."))}d.isMDXComponent=!0}}]);