---
theme: default
title: JavaScript Fullstack Temptation
class: text-center
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# JavaScript Fullstack Temptation

## 😇 Heaven-Sent or Hell-Bound? 😈

<!--
INTRO
-->

---
title: The strange History of JavaScript
---

# JavaScript was conceived within 10 days

---

# JavaScript is weird!

```jseval {monaco-run} { autorun:false, editorOptions: { scrollbar: { vertical: 'hidden', horizontal: 'hidden' } } }
"2" + 1
```

```jseval {monaco-run} { autorun:false, editorOptions: { scrollbar: { vertical: 'hidden', horizontal: 'hidden' } } }
[] == 0
0 == "0"
```

```jseval {monaco-run} { autorun:false, editorOptions: { scrollbar: { vertical: 'hidden', horizontal: 'hidden' } } }
'b' + 'a' + +'a' + 'a'
```

<!--
1. "2" - 1 -> 0
2. [] == "0" -> false
3. baNaNa
-->

---

# JavaScript is weird! #2

```js {monaco-run} { autorun:false, editorOptions: { scrollbar: { vertical: 'hidden', horizontal: 'hidden' } } }
console.log(a);
var a = 1;
```

```jseval {monaco-run} { autorun:false, editorOptions: { scrollbar: { vertical: 'hidden', horizontal: 'hidden' } } }
[1, 5, 12, 20, 80].sort()
```

<!--
1. uncomment line with var -> ERROR
2. scrambles order

A: Wow, a lot of effort for this presentation! What is this based on?
-->

---

# JavaScript is weird! #3

<a href="https://codespaces.new/dhhyi/javascript-fullstack-temptation/tree/examples/weirdness?quickstart=1&file=example.js" target="_blank" class="m-auto h-full block flex justify-center items-center">
  <img src="https://github.com/codespaces/badge.svg" alt="Open in GitHub Codespaces" width="400">
</a>

<!--
Fix code using eslint in GitHub Codespaces
(JS Web IDE, btw.)
-->

---

<img class="mx-auto" src="./pages/mode_modules.webp" alt="Node Modules" width="600">

<!--
D: JS package manager download the entire internet for every project.
  - unknown sources
  - vulnerabilities

A: same problem for Maven and NuGet.
  - npm audit
  - exploit database
  - support on GitHub
-->
