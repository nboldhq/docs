# Webhooks

Webhooks enable organizations to trigger automated operations outside of the nBold platform, such as in a custom application, or in an automation tool such as Microsoft Power Automate, Azure Logic Apps or Zapier.

⚠️ Note:  
Due to the fact that data may be exchanged outside of your Microsoft 365 environment, webhooks have to be considered as **highly sensitive**. To protect these operations, the nBold platform controls webhooks management through RBAC, making any operation related to webhooks accessible only to users granted with one of the following roles:
- `Global admin` (Microsoft 365) role
- `Teams service admin` (Microsoft 365) role
- `Integration Manager` (nBold) role

## Anatomy of a Webhook
A wehbook is defined by the following properties:
```json
{
    "id": "7f105c7d-2dc5-4532-97cd-4e7ae6534c07", // {string} Webhook UUID automatically generated during its creation - ReadOnly
    "name": "Example Webhook", // {string} Webhook name - Read/Write
    "description": "This is a new webhook", // {string} Webhook description - Read/Write
    "active": true, // {boolean} Webhook status - Read/Write
    "events": [ // {array} Array of events codes that will trigger the webhook - Read/Write
        "team_provisioning_completed", // {string} Event code - Read/Write
        ...
    ],
    "config": { // {object} Webhook http configuration
        "verb": "post", // {string} Http verb used by the the webhook - ReadOnly as currently only `post` is supported
        "url": "https://example.com/webhook", // {string} Target URL of the webhook - Read/Write
        "content_type": "json", // {string} Http content-type used by the webhook - ReadOnly as currently only `json` (matching to `application/json`) is   supported
        "secret":"secretClientValue" // {string} Secret value used to authentify the wehbook emitter by the consumer - Read/Write
    }
}
```

## Anatomy of a Request
When triggered, the webhook generates an http `POST` request to its configured url.

### Headers
The following headers are included in the request:
```json
{
    "X-nBold-Webhook": "", // {string} UUID of the webhook that triggered the request.
    "X-nBold-Event": "", // {string} Code of the event that triggered the request.
    "X-nBold-Delivery": "", // {string} An automatically generated UUID to identify the request.
    "X-nBold-Signature": "" // {string} This header is sent if the webhook is configured with a secret.
}
```

### Payload
A webhook payload contains at least the following properties:
```json
{
    "tenant": {
        "id": "" // {string} The tenant ID from where the event originates
    }
}
```

### User-Agent
The User-Agent for the requests will have the prefix `nBold-Webhook/` and include the nBold current version number.  
For instance `nBold-Webhook/2.1.193`

## Endpoints Requirements

### Security
Your endpoint must be an HTTPS URL with a valid SSL certificate that can correctly process event notifications.

### Responses
The expected success response codes from the target endpoint are `200`, `201`, `202`. If any other code is received, our webhook engine will retry the request following this retry policy:
```js
MAX_RETRY = 2 // Maximum number of retry before flagging the delivery as `failed`
RETRY_INTERVAL = 10000 // Number of milliseconds between each retry
```

### Verifying Webhooks
Webhooks sent by nBold can be verified by calculating a digital signature. If a secret has been defined, the webhook requests will includes a `X-nBold-Signature` header.  
To verify that the request came from nBold, compute the HMAC hex digest of the request body, generated using the SHA-256 hash function and the secret as the HMAC key. If they match, then you can be sure that the webhook was sent from nBold.

Here are a comprehensive list of examples for multiple languages:

#### Node
```js
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secret');
hmac.update('Message');
console.log(hmac.digest('hex'));
```

#### PHP
```php
<?php
echo hash_hmac('sha256', 'Message', 'secret');
?>
```

#### Java
```java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class Test {
public static void main(String[] args) {
    try {
        String secret = "secret";
        String message = "Message";

        Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
        SecretKeySpec secret_key = new SecretKeySpec(secret.getBytes(), "HmacSHA256");
        sha256_HMAC.init(secret_key);

        byte[] hash = (sha256_HMAC.doFinal(message.getBytes()));
        StringBuffer result = new StringBuffer();
        for (byte b : hash) {
            result.append(String.format("%02x", b)); 
        }
        System.out.println(result.toString());
    }
    catch (Exception e){
        System.out.println("Error");
    }
}
}
```

#### C#
```csharp
using System.Security.Cryptography;

namespace Test
{
public class MyHmac
{
    public static void Main(string[] args){
    var hmac = new MyHmac ();
    System.Console.WriteLine(hmac.CreateToken ("Message", "secret"));
    }
    private string CreateToken(string message, string secret)
    {
    secret = secret ?? "";
    var encoding = new System.Text.ASCIIEncoding();
    byte[] keyByte = encoding.GetBytes(secret);
    byte[] messageBytes = encoding.GetBytes(message);
    using (var hmacsha256 = new HMACSHA256(keyByte))
    {
        byte[] hashmessage = hmacsha256.ComputeHash(messageBytes);

        var sb = new System.Text.StringBuilder();
        for (var i = 0; i <= hashmessage.Length - 1; i++)
        {
        sb.Append(hashmessage[i].ToString("x2"));
        }
        return sb.ToString();
    }
    }
}
}
```

#### Go
```go
package main

import (
    "crypto/hmac"
    "crypto/sha256"
    "encoding/hex"
    "fmt"
)

func ComputeHmac256(message string, secret string) string {
    key := []byte(secret)
    h := hmac.New(sha256.New, key)
    h.Write([]byte(message))
    return hex.EncodeToString(h.Sum(nil))
}

func main() {
    fmt.Println(ComputeHmac256("Message", "secret"))
}
```

#### Ruby
```ruby
require 'openssl'
OpenSSL::HMAC.hexdigest('sha256', "secret", "Message")
```

#### Python (3.x)
```python
import hashlib
import hmac

KEY = "secret"
KEY_BYTES=KEY.encode('ascii')
MESSAGE = "Message"
MESSAGE_BYTES=MESSAGE.encode('ascii')
result = hmac.new(KEY_BYTES, MESSAGE_BYTES, hashlib.sha256).hexdigest()

print (result)
```