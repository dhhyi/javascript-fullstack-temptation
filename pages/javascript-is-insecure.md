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

<!-- TODO: add Links to Exploits / Logos to Libraries -->

<!--
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

# JavaScript has `audit`

<!--
A: npm audit
  - checks for known vulnerabilities in dependencies
  - can be used to fix issues automatically (`npm audit fix`)
  - not all vulnerabilities are critical
  - not all vulnerabilities are automatically exploitable

A: This should be just the first point for an audit chain.
  - run in Docker container (isolated environment)
  - check with Docker security tools
  - run Serverless / run on checked infrastructure
-->
