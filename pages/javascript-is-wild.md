---
class: devil
---

# JavaScript is wild!

```jseval {monaco-run} { autorun:false }
"2" + 1
```

<div class="min-h-12"></div>

```jseval {monaco-run} { autorun:false }
"2" - 1
```

<!--
NOTES
-->

---
class: devil
---

# JavaScript is wild!

```jseval {monaco-run} { autorun:false }
[] == 0
0 == "0"
```

<div class="min-h-12"></div>

```jseval {monaco-run} { autorun:false }
[] == "0"
```

<!--
NOTES
-->

---
class: devil
---

# JavaScript is wild!

```jseval {monaco-run} { autorun:false }
'b' + 'a'+ +'a' + 'a'
```

<!--
NOTES
-->

---
class: devil
---

# JavaScript is wild!

```js {monaco-run} { autorun:false }
console.log(a);
var a = 1;
```

<!--
uncomment line with var -> ERROR
-->

---
class: devil
---

# JavaScript is wild!

```jseval {monaco-run} { autorun:false }
[1, 5, 12, 20, 80].sort()
```

<!--
scrambles order

A: Wow, a lot of effort for this presentation! What is this based on?
-->

---
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

---
class: angel
---

# ESLint is your friend!

- linter for JavaScript, TypeScript, Templates

- easily create custom rules for custom code style guides

- integrates with most editors

- fixable rules

<!-- TODO: add ESLint logo -->

<!--
NOTES
-->

---
class: angel
---

# JavaScript is awesome! -- Truthy and Falsy

- `0`, `NaN`, `""`, `null`, `undefined`, and `false` are falsy
- everything else is truthy

```js {monaco}
if (formElement.value) {
  // do something
}
```

---
class: angel
---

# JavaScript is awesome! -- Optional Chaining

```ts {monaco}
interface User {
  name: string;
  address?: {
    city: string;
    country?: string;
  };
}

const user: User = { name: "John" };

const city = user.address?.city;
```

<v-click>

> There is also an eslint rule to disallow optional chaining when unnecessary.

</v-click>

<!--
D: That's nothing special we have something like that in Kotlin and C# as well. If I remember correctly it was even introduced earlier than in JavaScript.

A: but it is still not available in Java.
-->

---
class: angel
---

# JavaScript is awesome! -- Nullish Coalescing Operator

```ts {monaco}
interface User {
  name: string;
  address?: { city: string; country?: string };
}

const user: User = { name: "John" };

const city = user.address?.city ?? "Unknown City";
```

<!--
A: *explain slide*

D: That's also nothing new. Various languages have an operator like this. Give me something unique to your language.
-->

---
class: angel
transition: view-transition
---

# TypeScript is awesome! -- Type Inference

<<< @/snippets/infer.ts ts {1|3|1-5|7-14}

---
class: angel
---

# TypeScript is awesome! -- Type Inference

<<< @/snippets/infer.ts ts {monaco}

---
class: angel
transition: view-transition
---

# TypeScript is awesome! -- Duck Typing

<<< @/snippets/duck-typing.ts ts {1-8|10-14}

<!--
NOTES
-->

---
class: angel
---

# TypeScript is awesome! -- Duck Typing

<<< @/snippets/duck-typing.ts ts {monaco}

<!--
NOTES
-->

---
class: angel
transition: view-transition
---

# TypeScript is awesome! -- String Types

<<< @/snippets/types-from-strings.ts ts {1-2|4|6-}

<!--
NOTES
-->

---
class: angel
---

# TypeScript is awesome! -- String Types

<<< @/snippets/types-from-strings.ts ts {monaco}
