# Secure Software Development Lifecycle (SSDLC)

---

**TABLE OF CONTENTS**
[[toc]]

---

## Secure Development Principles

We at nBold know you care about how your personal information is used and shared, and we take your privacy seriously by implementing the most rigorous practices for our developments.

These best practices are gounded by the [OWASP Security Design Principles](https://www.owasp.org):
* Minimize attack surface area : The aim for secure development is to reduce the overall risk by reducing the attack surface area.
* Establish secure defaults: By default, the experience should be secure, and it should be up to the user to reduce their security – if they are allowed.
* Principle of Least privilege: The principle of least privilege recommends that accounts have the least amount of privilege required to perform their business processes. See [Microsoft Graph Permissions](./apppermissions.md) as an example.
* Principle of Defense in depth: The principle of defense in depth suggests that where one control would be reasonable, more controls that approach risks in different fashions are better.
* Fail securely: Applications regularly fail to process transactions for many reasons. How they fail can determine if an application is secure or not.
* Don’t trust services: Many organizations utilize the processing capabilities of third party partners, who more than likely have differing security policies and posture than you. Therefore, implicit trust of externally run systems is not warranted. All external systems should be treated in a similar fashion.
* Separation of duties: Certain roles have different levels of trust than normal users. In particular, administrators are different to normal users. In general, administrators should not be users of the application.
* Avoid security by obscurity: Security through obscurity is a weak security control, and nearly always fails when it is the only control.
* Keep security simple: Developers should avoid the use of double negatives and complex architectures when a simpler approach would be faster and simpler.
* Fix security issues correctly: Once a security issue has been identified, it is important to develop a test for it, and to understand the root cause of the issue. When design patterns are used, it is likely that the security issue is widespread amongst all code bases, so developing the right fix without introducing regressions is essential.
* Secure Release Process: Aside from the Secure Development Principles, we're using several tools during our release process as a gateway before each release and deployment, to reduce risks and avoid common pitfalls.

## Standard JavaScript Style

**[JavaScript Standard Style](https://standardjs.com)**

This module enforces JavaScript development best practices in different ways:
* Automatically format code: Ease code maintenance and prevents messy or inconsistent code.
* Catch style issues & programmer errors early: Save precious code review time by eliminating back-and-forth between reviewer & contributor, avoiding common style issues that may impact security.

::: tip
See our latest JavaScript Style Report: [![JavaScript Style Report](https://img.shields.io/badge/code_style-standard-success.svg)](https://dist.salestim.io/audits/code/code_linting_report.log)
:::

Learn more about [Standard JavaScript Style](https://www.npmjs.com/package/standard#usage) and its [Enforced Rules](https://github.com/standard/standard/blob/HEAD/RULES.md)

## ESLint Security

This security plugin helps us to identify potential security hotspots during development, take proactive countermeasure and therefore enforce our security best practices.  
::: tip
See our latest ESLint Security Report: [![ESLint Security](https://img.shields.io/badge/eslint_security-audited-success.svg)](https://dist.salestim.io/audits/code/code_security_report.log)
:::

Learn more about [ESLint Security Plugin](https://github.com/nodesecurity/eslint-plugin-security) and [Security Rules](https://github.com/nodesecurity/eslint-plugin-security#rules)

## NPM Audit

This tool from [Node Package Manager](https://www.npmjs.com/) performs a moment-in-time security review of our project’s dependency tree and looks for known vulnerabilities.  
Audit reports contain information about potential security vulnerabilities in our dependencies and helps us fix a potential vulnerability by providing recommendations for further troubleshooting.  

::: tip
See our latest NPM Audit Report: [![NPM Audit Report](https://img.shields.io/badge/npm_audit-audited-success.svg)](https://dist.salestim.io/audits/third_party/third_party_security_report.log)
:::

Learn more about [NPM Audit](https://docs.npmjs.com/cli/audit)

## GitHub Security Alerts

The nBold Platform sources and build tools are hosted on a secure GitHub enterprise environment.  
GitHub automatically tracks public vulnerabilities in packages from supported languages on MITRE's [Common Vulnerabilities and Exposures (CVE) List](https://cve.mitre.org/), and use a combination of machine learning and human review to detect vulnerabilities that are not published in the CVE list.  
When GitHub discovers or is notified of a new vulnerability, the nBold team is notified with a security alert. Each security alert includes a severity level and a link to the affected file in our projects. When available, the alert will include further details about the vulnerability and a suggested fix.  
::: tip
Any alert of any severity breaks our build and deployment process until resolution.
:::
Learn more about [GitHub Security Alerts](https://docs.github.com/en/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)

