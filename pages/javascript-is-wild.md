---
title: JavaScript is wild! 1
class: devil
---

# JavaScript is wild!

```jseval {monaco-run} { autorun:false, editorOptions: { scrollbar: { vertical: 'hidden', horizontal: 'hidden' } } }
"2" + 1
```

```jseval {monaco-run} { autorun:false, editorOptions: { scrollbar: { vertical: 'hidden', horizontal: 'hidden' } } }
[] == 0
0 == "0"
```

```jseval {monaco-run} { autorun:false, editorOptions: { scrollbar: { vertical: 'hidden', horizontal: 'hidden' } } }
'b' + 'a'+ +'a' + 'a'
```

<!--
1. "2" - 1 -> 0
2. [] == "0" -> false
3. baNaNa
-->

---
title: JavaScript is wild! 2
class: devil
---

# JavaScript is wild! #2

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
title: JavaScript is wild! 3
class: angel
---

# JavaScript can be tamed!

<a href="https://codespaces.new/dhhyi/javascript-fullstack-temptation/tree/examples/weirdness?quickstart=1&file=example.js" target="_blank" class="m-auto h-full block flex justify-center items-center">
  <img src="https://github.com/codespaces/badge.svg" alt="Open in GitHub Codespaces" width="400">
</a>

<!--
Fix code using eslint in GitHub Codespaces
(JS Web IDE, btw.)
-->
