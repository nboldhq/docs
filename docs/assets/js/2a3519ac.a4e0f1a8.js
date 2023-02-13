"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3825],{58248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var a=n(87462),o=(n(67294),n(3905));n(78561);const r={},s="Webhooks",i={unversionedId:"integrate-with-nbold/api/webhooks",id:"integrate-with-nbold/api/webhooks",title:"Webhooks",description:"Webhooks enable organizations to trigger automated operations outside of the nBold platform, such as in a custom application, or in an automation tool such as Microsoft Power Automate, Azure Logic Apps or Zapier.",source:"@site/contents/70-integrate-with-nbold/10-api/55-webhooks.md",sourceDirName:"70-integrate-with-nbold/10-api",slug:"/integrate-with-nbold/api/webhooks",permalink:"/integrate-with-nbold/api/webhooks",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/70-integrate-with-nbold/10-api/55-webhooks.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{},sidebar:"autoSidebar",previous:{title:"Errors",permalink:"/integrate-with-nbold/api/errors"},next:{title:"Use Postman",permalink:"/integrate-with-nbold/api/use-postman"}},l={},h=[{value:"Anatomy of a Webhook",id:"anatomy-of-a-webhook",level:2},{value:"Anatomy of a Request",id:"anatomy-of-a-request",level:2},{value:"Headers",id:"headers",level:3},{value:"Payload",id:"payload",level:3},{value:"User-Agent",id:"user-agent",level:3},{value:"Endpoints Requirements",id:"endpoints-requirements",level:2},{value:"Security",id:"security",level:3},{value:"Responses",id:"responses",level:3},{value:"Verifying Webhooks",id:"verifying-webhooks",level:3},{value:"Node",id:"node",level:4},{value:"PHP",id:"php",level:4},{value:"Java",id:"java",level:4},{value:"C#",id:"c",level:4},{value:"Go",id:"go",level:4},{value:"Ruby",id:"ruby",level:4},{value:"Python (3.x)",id:"python-3x",level:4}],c={toc:h};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webhooks"},"Webhooks"),(0,o.kt)("p",null,"Webhooks enable organizations to trigger automated operations outside of the nBold platform, such as in a custom application, or in an automation tool such as Microsoft Power Automate, Azure Logic Apps or Zapier."),(0,o.kt)("p",null,"\u26a0\ufe0f Note:",(0,o.kt)("br",{parentName:"p"}),"\n","Due to the fact that data may be exchanged outside of your Microsoft 365 environment, webhooks have to be considered as ",(0,o.kt)("strong",{parentName:"p"},"highly sensitive"),". To protect these operations, the nBold platform controls webhooks management through RBAC, making any operation related to webhooks accessible only to users granted with one of the following roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Global admin")," (Microsoft 365) role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Teams service admin")," (Microsoft 365) role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Integration Manager")," (nBold) role")),(0,o.kt)("h2",{id:"anatomy-of-a-webhook"},"Anatomy of a Webhook"),(0,o.kt)("p",null,"A wehbook is defined by the following properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "7f105c7d-2dc5-4532-97cd-4e7ae6534c07", // {string} Webhook UUID automatically generated during its creation - ReadOnly\n    "name": "Example Webhook", // {string} Webhook name - Read/Write\n    "description": "This is a new webhook", // {string} Webhook description - Read/Write\n    "active": true, // {boolean} Webhook status - Read/Write\n    "events": [ // {array} Array of events codes that will trigger the webhook - Read/Write\n        "team_provisioning_completed", // {string} Event code - Read/Write\n        ...\n    ],\n    "config": { // {object} Webhook http configuration\n        "verb": "post", // {string} Http verb used by the the webhook - ReadOnly as currently only `post` is supported\n        "url": "https://example.com/webhook", // {string} Target URL of the webhook - Read/Write\n        "content_type": "json", // {string} Http content-type used by the webhook - ReadOnly as currently only `json` (matching to `application/json`) is   supported\n        "secret":"secretClientValue" // {string} Secret value used to authentify the wehbook emitter by the consumer - Read/Write\n    }\n}\n')),(0,o.kt)("h2",{id:"anatomy-of-a-request"},"Anatomy of a Request"),(0,o.kt)("p",null,"When triggered, the webhook generates an http ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to its configured url."),(0,o.kt)("h3",{id:"headers"},"Headers"),(0,o.kt)("p",null,"The following headers are included in the request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "X-nBold-Webhook": "", // {string} UUID of the webhook that triggered the request.\n    "X-nBold-Event": "", // {string} Code of the event that triggered the request.\n    "X-nBold-Delivery": "", // {string} An automatically generated UUID to identify the request.\n    "X-nBold-Signature": "" // {string} This header is sent if the webhook is configured with a secret.\n}\n')),(0,o.kt)("h3",{id:"payload"},"Payload"),(0,o.kt)("p",null,"A webhook payload contains at least the following properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tenant": {\n        "id": "" // {string} The tenant ID from where the event originates\n    }\n}\n')),(0,o.kt)("h3",{id:"user-agent"},"User-Agent"),(0,o.kt)("p",null,"The User-Agent for the requests will have the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"nBold-Webhook/")," and include the nBold current version number.",(0,o.kt)("br",{parentName:"p"}),"\n","For instance ",(0,o.kt)("inlineCode",{parentName:"p"},"nBold-Webhook/2.1.193")),(0,o.kt)("h2",{id:"endpoints-requirements"},"Endpoints Requirements"),(0,o.kt)("h3",{id:"security"},"Security"),(0,o.kt)("p",null,"Your endpoint must be an HTTPS URL with a valid SSL certificate that can correctly process event notifications."),(0,o.kt)("h3",{id:"responses"},"Responses"),(0,o.kt)("p",null,"The expected success response codes from the target endpoint are ",(0,o.kt)("inlineCode",{parentName:"p"},"200"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"201"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"202"),". If any other code is received, our webhook engine will retry the request following this retry policy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"MAX_RETRY = 2 // Maximum number of retry before flagging the delivery as `failed`\nRETRY_INTERVAL = 10000 // Number of milliseconds between each retry\n")),(0,o.kt)("h3",{id:"verifying-webhooks"},"Verifying Webhooks"),(0,o.kt)("p",null,"Webhooks sent by nBold can be verified by calculating a digital signature. If a secret has been defined, the webhook requests will includes a ",(0,o.kt)("inlineCode",{parentName:"p"},"X-nBold-Signature")," header.",(0,o.kt)("br",{parentName:"p"}),"\n","To verify that the request came from nBold, compute the HMAC hex digest of the request body, generated using the SHA-256 hash function and the secret as the HMAC key. If they match, then you can be sure that the webhook was sent from nBold."),(0,o.kt)("p",null,"Here are a comprehensive list of examples for multiple languages:"),(0,o.kt)("h4",{id:"node"},"Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const crypto = require('crypto');\nconst hmac = crypto.createHmac('sha256', 'secret');\nhmac.update('Message');\nconsole.log(hmac.digest('hex'));\n")),(0,o.kt)("h4",{id:"php"},"PHP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\necho hash_hmac('sha256', 'Message', 'secret');\n?>\n")),(0,o.kt)("h4",{id:"java"},"Java"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import javax.crypto.Mac;\nimport javax.crypto.spec.SecretKeySpec;\n\npublic class Test {\npublic static void main(String[] args) {\n    try {\n        String secret = "secret";\n        String message = "Message";\n\n        Mac sha256_HMAC = Mac.getInstance("HmacSHA256");\n        SecretKeySpec secret_key = new SecretKeySpec(secret.getBytes(), "HmacSHA256");\n        sha256_HMAC.init(secret_key);\n\n        byte[] hash = (sha256_HMAC.doFinal(message.getBytes()));\n        StringBuffer result = new StringBuffer();\n        for (byte b : hash) {\n            result.append(String.format("%02x", b)); \n        }\n        System.out.println(result.toString());\n    }\n    catch (Exception e){\n        System.out.println("Error");\n    }\n}\n}\n')),(0,o.kt)("h4",{id:"c"},"C#"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Security.Cryptography;\n\nnamespace Test\n{\npublic class MyHmac\n{\n    public static void Main(string[] args){\n    var hmac = new MyHmac ();\n    System.Console.WriteLine(hmac.CreateToken ("Message", "secret"));\n    }\n    private string CreateToken(string message, string secret)\n    {\n    secret = secret ?? "";\n    var encoding = new System.Text.ASCIIEncoding();\n    byte[] keyByte = encoding.GetBytes(secret);\n    byte[] messageBytes = encoding.GetBytes(message);\n    using (var hmacsha256 = new HMACSHA256(keyByte))\n    {\n        byte[] hashmessage = hmacsha256.ComputeHash(messageBytes);\n\n        var sb = new System.Text.StringBuilder();\n        for (var i = 0; i <= hashmessage.Length - 1; i++)\n        {\n        sb.Append(hashmessage[i].ToString("x2"));\n        }\n        return sb.ToString();\n    }\n    }\n}\n}\n')),(0,o.kt)("h4",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/hmac"\n    "crypto/sha256"\n    "encoding/hex"\n    "fmt"\n)\n\nfunc ComputeHmac256(message string, secret string) string {\n    key := []byte(secret)\n    h := hmac.New(sha256.New, key)\n    h.Write([]byte(message))\n    return hex.EncodeToString(h.Sum(nil))\n}\n\nfunc main() {\n    fmt.Println(ComputeHmac256("Message", "secret"))\n}\n')),(0,o.kt)("h4",{id:"ruby"},"Ruby"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'openssl'\nOpenSSL::HMAC.hexdigest('sha256', \"secret\", \"Message\")\n")),(0,o.kt)("h4",{id:"python-3x"},"Python (3.x)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import hashlib\nimport hmac\n\nKEY = \"secret\"\nKEY_BYTES=KEY.encode('ascii')\nMESSAGE = \"Message\"\nMESSAGE_BYTES=MESSAGE.encode('ascii')\nresult = hmac.new(KEY_BYTES, MESSAGE_BYTES, hashlib.sha256).hexdigest()\n\nprint (result)\n")))}p.isMDXComponent=!0}}]);