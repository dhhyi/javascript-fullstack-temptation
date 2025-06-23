---
class: devil
layout: center
---

![Node Modules Gravity](./node_modules.webp)

<!--
D: JS package manager download the entire internet for every project.
  - unknown sources
  - vulnerabilities

A: same problem for Maven and NuGet.
  - npm audit
  - exploit database
  - support on GitHub
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
CVE - Common Vulnerabilities and Exposure

A: Problem is not unique to JavaScript
  - Heartbleed Exploit
    - OpenSSL vulnerability
    - allows reading memory of the server
  - Log4Shell
    - Log4j (Logging for Java) vulnerability
    - allows remote code execution
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
A: npm audit
  - not all vulnerabilities are critical
  - not all vulnerabilities are automatically exploitable

A: This should be just the first point for an audit chain.
  - run in Docker container (isolated environment)
  - check with Docker security tools
  - run Serverless / run on checked infrastructure
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
