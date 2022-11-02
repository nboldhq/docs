"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9376],{79161:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));t(61839);const o={author:"Guillaume Meyer",tags:["api","webhook"]},i="Webhooks Reference",s={unversionedId:"api/webhooks",id:"api/webhooks",title:"Webhooks Reference",description:"ABSTACT",source:"@site/contents/75-api/webhooks.md",sourceDirName:"75-api",slug:"/api/webhooks",permalink:"/api/webhooks",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/75-api/webhooks.md",tags:[{label:"api",permalink:"/tags/api"},{label:"webhook",permalink:"/tags/webhook"}],version:"current",frontMatter:{author:"Guillaume Meyer",tags:["api","webhook"]},sidebar:"autoSidebar",previous:{title:"Use Postman with the nBold API",permalink:"/api/use-postman"},next:{title:"Open-source",permalink:"/open-source/"}},p={},l=[{value:"Managing Webhooks",id:"managing-webhooks",level:2},{value:"Anatomy of a Webhook",id:"anatomy-of-a-webhook",level:2},{value:"Anatomy of a Request",id:"anatomy-of-a-request",level:2},{value:"Headers",id:"headers",level:3},{value:"Payload",id:"payload",level:3},{value:"User-Agent",id:"user-agent",level:3},{value:"Supported Events",id:"supported-events",level:2},{value:"Team Created",id:"team-created",level:3},{value:"Team Provisioning Completed",id:"team-provisioning-completed",level:3},{value:"Team Creation Approval Requested",id:"team-creation-approval-requested",level:3},{value:"Team Creation Approved",id:"team-creation-approved",level:3},{value:"Team Creation Rejected",id:"team-creation-rejected",level:3},{value:"Endpoints Requirements",id:"endpoints-requirements",level:2},{value:"Security",id:"security",level:3},{value:"Responses",id:"responses",level:3},{value:"Verifying Webhooks",id:"verifying-webhooks",level:3},{value:"Node",id:"node",level:4},{value:"PHP",id:"php",level:4},{value:"Java",id:"java",level:4},{value:"C#",id:"c",level:4},{value:"Go",id:"go",level:4},{value:"Ruby",id:"ruby",level:4},{value:"Python (3.x)",id:"python-3x",level:4}],d={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webhooks-reference"},"Webhooks Reference"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ABSTACT"),(0,r.kt)("br",{parentName:"p"}),"\n","Webhooks enable organizations to trigger automated operations outside of the nBold platform, such as in a custom application, or in an automation tool such as Power Automate or Zapier."),(0,r.kt)("h2",{id:"managing-webhooks"},"Managing Webhooks"),(0,r.kt)("p",null,"Organizations can manage webhooks from the nBold App UI:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"Integration")," tab"),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Webhooks")," section.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Due to the fact that data may be exchanged outside of your Microsoft 365 environment, webhooks have to be considered as ",(0,r.kt)("strong",{parentName:"p"},"highly sensitive"),". To protect these operations, the nBold platform controls webhooks management through RBAC, making any operation related to webhooks accessible only to users granted with one of the following roles:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Global admin")," (Microsoft 365) role"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Teams service admin")," (Microsoft 365) role"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Integration Manager")," (nBold) role"))),(0,r.kt)("h2",{id:"anatomy-of-a-webhook"},"Anatomy of a Webhook"),(0,r.kt)("p",null,"A wehbook is defined by the following properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "7f105c7d-2dc5-4532-97cd-4e7ae6534c07", // {string} Webhook UUID automatically generated during its creation - ReadOnly\n  "name": "Example Webhook", // {string} Webhook name - Read/Write\n  "description": "This is a new webhook", // {string} Webhook description - Read/Write\n  "active": true, // {boolean} Webhook status - Read/Write\n  "events": [ // {array} Array of events codes that will trigger the webhook - Read/Write\n    "team_provisioning_completed", // {string} Event code - Read/Write\n    ...\n  ],\n  "config": { // {object} Webhook http configuration\n    "verb": "post", // {string} Http verb used by the the webhook - ReadOnly as currently only `post` is supported\n    "url": "https://example.com/webhook", // {string} Target URL of the webhook - Read/Write\n    "content_type": "json", // {string} Http content-type used by the webhook - ReadOnly as currently only `json` (matching to `application/json`) is supported\n    "secret":"secretClientValue" // {string} Secret value used to authentify the wehbook emitter by the consumer - Read/Write\n  }\n}\n')),(0,r.kt)("h2",{id:"anatomy-of-a-request"},"Anatomy of a Request"),(0,r.kt)("p",null,"When triggered, the webhook generates an http ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to its configured url."),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)("p",null,"The following headers are included in the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "X-nBold-Webhook": "", // {string} UUID of the webhook that triggered the request.\n  "X-nBold-Event": "", // {string} Code of the event that triggered the request.\n  "X-nBold-Delivery": "", // {string} An automatically generated UUID to identify the request.\n  "X-nBold-Signature": "" // {string} This header is sent if the webhook is configured with a secret.\n}\n')),(0,r.kt)("h3",{id:"payload"},"Payload"),(0,r.kt)("p",null,"A webhook payload contains at least the following properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@odata.context": "https://docs.nbold.co/api/webhooks", // {string} Link to the webhook online help\n  "tenant": {\n    "id": "" // {string} The tenant ID from where the event originates\n  }\n}\n')),(0,r.kt)("h3",{id:"user-agent"},"User-Agent"),(0,r.kt)("p",null,"The User-Agent for the requests will have the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"nBold-Webhook/")," and include the nBold current version number.",(0,r.kt)("br",{parentName:"p"}),"\n","For instance ",(0,r.kt)("inlineCode",{parentName:"p"},"nBold-Webhook/2.1.193")),(0,r.kt)("h2",{id:"supported-events"},"Supported Events"),(0,r.kt)("p",null,"Here are sample payloads for each supported event. "),(0,r.kt)("h3",{id:"team-created"},"Team Created"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code: ",(0,r.kt)("inlineCode",{parentName:"li"},"team_created")),(0,r.kt)("li",{parentName:"ul"},"Category: ",(0,r.kt)("inlineCode",{parentName:"li"},"team")),(0,r.kt)("li",{parentName:"ul"},"Description: Triggered when a team is created, whatever the creation origin (manual, api, using a template...)."),(0,r.kt)("li",{parentName:"ul"},"Status: beta")),(0,r.kt)("p",null,"Sample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": {\n    "id": "79f874ba-8775-44eb-b4d4-b32d9b65cce8"\n  },\n  "team": {\n    "id": "3d8a075c-1226-4c1e-969b-b6d5d65700b1"\n  }\n}\n')),(0,r.kt)("p",null,"Schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "tenant": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        }\n      }\n    },\n    "team": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"team-provisioning-completed"},"Team Provisioning Completed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code: ",(0,r.kt)("inlineCode",{parentName:"li"},"team_provisioning_completed")),(0,r.kt)("li",{parentName:"ul"},"Category: ",(0,r.kt)("inlineCode",{parentName:"li"},"team")),(0,r.kt)("li",{parentName:"ul"},"Description: Triggered when a team provisioning request based on a template is complete (wether successfully or not)."),(0,r.kt)("li",{parentName:"ul"},"Status: v1.0")),(0,r.kt)("p",null,"Sample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a",\n    "initialDomainName": "contoso.onmicrosoft.com",\n    "defaultDomainName": "contoso.com"\n  },\n  "team": {\n    "id": "94735ea1-c097-4cbb-963b-f59bb586fba1",\n    "displayName": "Project Team"\n  },\n  "requester": {\n    "id": "f16c50fe-dcb7-4adc-a5ba-2f59f8f50da2",\n    "displayName": "John Doe"\n  },\n  "template": {\n    "id": "d8854819-c06f-4680-82f7-cc6d5b230c27",\n    "name": "Project Template"\n  },\n  "metadata": {}\n}\n')),(0,r.kt)("p",null,"Schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "tenant": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "initialDomainName": {\n          "type": "string"\n        },\n        "defaultDomainName": {\n          "type": "string"\n        }\n      }\n    },\n    "team": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "displayName": {\n          "type": "string"\n        }\n      }\n    },\n    "requester": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "displayName": {\n          "type": "string"\n        }\n      }\n    },\n    "template": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "name": {\n          "type": "string"\n        }\n      }\n    },\n    "metadata": {\n      "type": "object"\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"team-creation-approval-requested"},"Team Creation Approval Requested"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code: ",(0,r.kt)("inlineCode",{parentName:"li"},"team_creation_approval_requested")),(0,r.kt)("li",{parentName:"ul"},"Category: ",(0,r.kt)("inlineCode",{parentName:"li"},"approval")),(0,r.kt)("li",{parentName:"ul"},"Description: Triggered when a user is requesting the creation of a new team using a template that enforces team creation approval."),(0,r.kt)("li",{parentName:"ul"},"Status: v1.0")),(0,r.kt)("p",null,"Sample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a"\n  },\n  "requester": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a",\n    "displayName": "Alice Hawking",\n    "mail": "alice.hawking@contoso.com"\n  },\n  "approval": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a-5cbf4991-76ef-4a5d-94be-59d72d6e2d7a-5cbf4991-76ef-4a5d-94be-59d72d6e2d7a"\n  },\n  "template": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a",\n    "name": "Project Template",\n    "approvers": {},\n    "permanentMembership": {}\n  },\n  "request": {\n    "team": {\n      "name": "Construction Project",\n      "description": "Project team for the P100 project",\n      "welcomeMessage": "Welcome to the P100 project team!"\n    },\n    "membership": {}\n  }\n}\n')),(0,r.kt)("p",null,"Schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "tenant": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        }\n      }\n    },\n    "requester": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "displayName": {\n          "type": "string"\n        },\n        "mail": {\n          "type": "string"\n        }\n      }\n    },\n    "approval": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        }\n      }\n    },\n    "template": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "name": {\n          "type": "string"\n        },\n        "approvers": {\n          "type": "object",\n          "properties": {}\n        },\n        "permanentMembership": {\n          "type": "object",\n          "properties": {}\n        }\n      }\n    },\n    "request": {\n      "type": "object",\n      "properties": {\n        "team": {\n          "type": "object",\n          "properties": {\n            "name": {\n              "type": "string"\n            },\n            "description": {\n              "type": "string"\n            },\n            "welcomeMessage": {\n              "type": "string"\n            }\n          }\n        },\n        "membership": {\n          "type": "object",\n          "properties": {}\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"team-creation-approved"},"Team Creation Approved"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code: ",(0,r.kt)("inlineCode",{parentName:"li"},"team_creation_approved")),(0,r.kt)("li",{parentName:"ul"},"Category: ",(0,r.kt)("inlineCode",{parentName:"li"},"approval")),(0,r.kt)("li",{parentName:"ul"},"Description: Triggered when a team creation approval is approved."),(0,r.kt)("li",{parentName:"ul"},"Status: v1.0")),(0,r.kt)("p",null,"Sample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a"\n  },\n  "requester": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a",\n    "displayName": "Alice Hawking",\n    "mail": "alice.hawking@contoso.com"\n  },\n  "approval": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a-5cbf4991-76ef-4a5d-94be-59d72d6e2d7a-5cbf4991-76ef-4a5d-94be-59d72d6e2d7a",\n    "approver": {\n      "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a",\n      "message": "Approved!"\n    }\n  },\n  "template": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a",\n    "name": "Project Template",\n    "approvers": {},\n    "permanentMembership": {}\n  },\n  "request": {\n    "team": {\n      "name": "Construction Project",\n      "description": "Project team for the P100 project",\n      "welcomeMessage": "Welcome to the P100 project team!"\n    },\n    "membership": {}\n  },\n  "provisioning": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a"\n  }\n}\n')),(0,r.kt)("p",null,"Schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "tenant": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        }\n      }\n    },\n    "requester": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "displayName": {\n          "type": "string"\n        },\n        "mail": {\n          "type": "string"\n        }\n      }\n    },\n    "approval": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "approver": {\n          "type": "object",\n          "properties": {\n            "id": {\n              "type": "string"\n            },\n            "message": {\n              "type": "string"\n            }\n          }\n        }\n      }\n    },\n    "template": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "name": {\n          "type": "string"\n        },\n        "approvers": {\n          "type": "object",\n          "properties": {}\n        },\n        "permanentMembership": {\n          "type": "object",\n          "properties": {}\n        }\n      }\n    },\n    "request": {\n      "type": "object",\n      "properties": {\n        "team": {\n          "type": "object",\n          "properties": {\n            "name": {\n              "type": "string"\n            },\n            "description": {\n              "type": "string"\n            },\n            "welcomeMessage": {\n              "type": "string"\n            }\n          }\n        },\n        "membership": {\n          "type": "object",\n          "properties": {}\n        }\n      }\n    },\n    "provisioning": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"team-creation-rejected"},"Team Creation Rejected"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code: ",(0,r.kt)("inlineCode",{parentName:"li"},"team_creation_rejected")),(0,r.kt)("li",{parentName:"ul"},"Category: ",(0,r.kt)("inlineCode",{parentName:"li"},"approval")),(0,r.kt)("li",{parentName:"ul"},"Description: Triggered when a team creation approval is rejected."),(0,r.kt)("li",{parentName:"ul"},"Status: v1.0")),(0,r.kt)("p",null,"Sample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a"\n  },\n  "requester": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a",\n    "displayName": "Alice Hawking",\n    "mail": "alice.hawking@contoso.com"\n  },\n  "approval": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a-5cbf4991-76ef-4a5d-94be-59d72d6e2d7a-5cbf4991-76ef-4a5d-94be-59d72d6e2d7a",\n    "approver": {\n      "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a",\n      "message": "Rejected!"\n    }\n  },\n  "template": {\n    "id": "5cbf4991-76ef-4a5d-94be-59d72d6e2d7a",\n    "name": "Project Template",\n    "approvers": {},\n    "permanentMembership": {}\n  },\n  "request": {\n    "team": {\n      "name": "Construction Project",\n      "description": "Project team for the P100 project",\n      "welcomeMessage": "Welcome to the P100 project team!"\n    },\n    "membership": {}\n  }\n}\n')),(0,r.kt)("p",null,"Schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "tenant": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        }\n      }\n    },\n    "requester": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "displayName": {\n          "type": "string"\n        },\n        "mail": {\n          "type": "string"\n        }\n      }\n    },\n    "approval": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "approver": {\n          "type": "object",\n          "properties": {\n            "id": {\n              "type": "string"\n            },\n            "message": {\n              "type": "string"\n            }\n          }\n        }\n      }\n    },\n    "template": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "name": {\n          "type": "string"\n        },\n        "approvers": {\n          "type": "object",\n          "properties": {}\n        },\n        "permanentMembership": {\n          "type": "object",\n          "properties": {}\n        }\n      }\n    },\n    "request": {\n      "type": "object",\n      "properties": {\n        "team": {\n          "type": "object",\n          "properties": {\n            "name": {\n              "type": "string"\n            },\n            "description": {\n              "type": "string"\n            },\n            "welcomeMessage": {\n              "type": "string"\n            }\n          }\n        },\n        "membership": {\n          "type": "object",\n          "properties": {}\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"endpoints-requirements"},"Endpoints Requirements"),(0,r.kt)("h3",{id:"security"},"Security"),(0,r.kt)("p",null,"Your endpoint must be an HTTPS URL with a valid SSL certificate that can correctly process event notifications."),(0,r.kt)("h3",{id:"responses"},"Responses"),(0,r.kt)("p",null,"The expected success response codes from the target endpoint are ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"201"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"202"),". If any other code is received, our webhook engine will retry the request following this retry policy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"MAX_RETRY = 2 // Maximum number of retry before flagging the delivery as `failed`\nRETRY_INTERVAL = 10000 // Number of milliseconds between each retry\n")),(0,r.kt)("h3",{id:"verifying-webhooks"},"Verifying Webhooks"),(0,r.kt)("p",null,"Webhooks sent by nBold can be verified by calculating a digital signature. If a secret has been defined, the webhook requests will includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"X-nBold-Signature")," header.",(0,r.kt)("br",{parentName:"p"}),"\n","To verify that the request came from nBold, compute the HMAC hex digest of the request body, generated using the SHA-256 hash function and the secret as the HMAC key. If they match, then you can be sure that the webhook was sent from nBold."),(0,r.kt)("p",null,"Here are a comprehensive list of examples for multiple languages:"),(0,r.kt)("h4",{id:"node"},"Node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const crypto = require('crypto');\nconst hmac = crypto.createHmac('sha256', 'secret');\nhmac.update('Message');\nconsole.log(hmac.digest('hex'));\n")),(0,r.kt)("h4",{id:"php"},"PHP"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\necho hash_hmac('sha256', 'Message', 'secret');\n?>\n")),(0,r.kt)("h4",{id:"java"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import javax.crypto.Mac;\nimport javax.crypto.spec.SecretKeySpec;\n\npublic class Test {\n  public static void main(String[] args) {\n  try {\n      String secret = "secret";\n      String message = "Message";\n\n      Mac sha256_HMAC = Mac.getInstance("HmacSHA256");\n      SecretKeySpec secret_key = new SecretKeySpec(secret.getBytes(), "HmacSHA256");\n      sha256_HMAC.init(secret_key);\n\n      byte[] hash = (sha256_HMAC.doFinal(message.getBytes()));\n      StringBuffer result = new StringBuffer();\n      for (byte b : hash) {\n        result.append(String.format("%02x", b)); \n      }\n      System.out.println(result.toString());\n    }\n    catch (Exception e){\n      System.out.println("Error");\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"c"},"C#"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Security.Cryptography;\n\nnamespace Test\n{\n    public class MyHmac\n    {\n        public static void Main(string[] args){\n            var hmac = new MyHmac ();\n            System.Console.WriteLine(hmac.CreateToken ("Message", "secret"));\n        }\n        private string CreateToken(string message, string secret)\n        {\n            secret = secret ?? "";\n            var encoding = new System.Text.ASCIIEncoding();\n            byte[] keyByte = encoding.GetBytes(secret);\n            byte[] messageBytes = encoding.GetBytes(message);\n            using (var hmacsha256 = new HMACSHA256(keyByte))\n            {\n                byte[] hashmessage = hmacsha256.ComputeHash(messageBytes);\n\n                var sb = new System.Text.StringBuilder();\n                for (var i = 0; i <= hashmessage.Length - 1; i++)\n                {\n                    sb.Append(hashmessage[i].ToString("x2"));\n                }\n                return sb.ToString();\n            }\n        }\n    }\n}\n')),(0,r.kt)("h4",{id:"go"},"Go"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/hmac"\n    "crypto/sha256"\n    "encoding/hex"\n    "fmt"\n)\n\nfunc ComputeHmac256(message string, secret string) string {\n    key := []byte(secret)\n    h := hmac.New(sha256.New, key)\n    h.Write([]byte(message))\n    return hex.EncodeToString(h.Sum(nil))\n}\n\nfunc main() {\n    fmt.Println(ComputeHmac256("Message", "secret"))\n}\n')),(0,r.kt)("h4",{id:"ruby"},"Ruby"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'openssl'\nOpenSSL::HMAC.hexdigest('sha256', \"secret\", \"Message\")\n")),(0,r.kt)("h4",{id:"python-3x"},"Python (3.x)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import hashlib\nimport hmac\n\nKEY = \"secret\"\nKEY_BYTES=KEY.encode('ascii')\nMESSAGE = \"Message\"\nMESSAGE_BYTES=MESSAGE.encode('ascii')\nresult = hmac.new(KEY_BYTES, MESSAGE_BYTES, hashlib.sha256).hexdigest()\n\nprint (result)\n")))}c.isMDXComponent=!0}}]);