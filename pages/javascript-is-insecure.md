---
class: devil
layout: center
title: Node Modules Gravity
---

![Node Modules Gravity](./node_modules.webp)

<!--
🟥 JS package manager download the entire internet for every project.

- unknown sources
- vulnerabilities

🟦 not unique to JavaScript

- problems in dependencies are always problems in your project

🟦 [click] -> next slide
-->

---
class: angel
---

# Heartbleed / Log4Shell

<div class="flex flex-col items-center">

<img class="max-w-[400px]" src="./openssl_logo_library.svg" />

<a href="https://www.cve.org/CVERecord?id=CVE-2014-0160">CVE-2014-0160</a>

<img class="max-w-[400px]" src="./Apache_Log4j_Logo.svg" />

<a href="https://www.cve.org/CVERecord?id=CVE-2021-44228">CVE-2021-44228</a>

</div>

<!--
🟦 *explain*

*CVE - Common Vulnerabilities and Exposure*

- Heartbleed Exploit
    - OpenSSL vulnerability
    - allows reading memory of the server

- Log4Shell
    - Log4j (Logging for Java) vulnerability
    - allows remote code execution

🟦 [click] -> next slide
-->

---
class: angel
---

# JavaScript has `npm audit`

- built-in tool for checking for vulnerabilities

- can be run manually or in CI/CD pipelines

- can automatically fix some issues

<v-click>

- `npm audit fix` applies non-breaking changes

- `--production` skips devDependencies

- `--audit-level` sets the minimum severity level

</v-click>

<!--
🟦 npm audit
  - not all vulnerabilities are critical
  - not all vulnerabilities are automatically exploitable

🟦 [click] *explain*

🟦 This should be just the first point for an audit chain.

🟦 [click] -> next slide
-->

---
class: angel
---

# More security tools

- [Snyk](https://snyk.io/)

- [Socket Security](https://socket.dev/)

- [Dependabot](https://dependabot.com/)

- ...

<v-click>

--> Malware Indicators

--> Maintenance Signals (unmaintained, no updates, etc.)

--> Risky Patterns (eval, new Function, etc.)

- Integration in CI/CD

</v-click>

<!--
🟦 *explain* [click] *explain*

🟦 See? Security can be controlled, even in JavaScript Projects.

🟥 I'm running out of arguments...

🟦 Hehe

🟥 Okay, just one more thing

🟥 [click] -> next slide
-->
