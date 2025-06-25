---
class: devil
---

# JavaScript is wild!

```jseval {monaco-run} { autorun:false }
"2" + 1
```

<div class="min-h-12"></div>

<v-click>

```jseval {monaco-run} { autorun:false }
"2" - 1
```

</v-click>

<!--
🟥 someone invented a language, where

🟥 *First example*

🟥 [click] *Second example*

[click] -> next slide
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

<v-click>

```jseval {monaco-run} { autorun:false }
[] == "0"
```

</v-click>

<!--
🟥 There is an equal operator, that behaves really strange

🟥 *Example*

🟥 [click] But this operator is not symmetric!

[click] -> next slide
-->

---
class: devil
---

# JavaScript is wild!

```jseval {monaco-run} { autorun:false }
'b' + 'a'+ +'a' + 'a'
```

<!--
🟥 If you add a couple of characters *... run example ...*

🟥 ...you get bananas!
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
🟥 If you run this code, it works, but doesn't print the correct value.

*uncomment line with var*

🟥 And now it doesn't run anymore.
-->

---
class: devil
---

# JavaScript is wild!

```jseval {monaco-run} { autorun:false }
[1, 5, 12, 20, 80].sort()
```

<!--
🟥 If you take a sorted Array of numbers and sort it *... run example ...*

🟥 ...it gets scrambled

🟦 Okay, yes, JavaScript has a couple of really strange things ...

🟦 [click] -> next slide
-->

---
class: angel
---

# JavaScript can be tamed!

<a href="https://codespaces.new/dhhyi/javascript-fullstack-temptation/tree/examples/weirdness?quickstart=1&file=example.js" target="_blank" class="m-auto h-full block flex justify-center items-center">
  <img src="https://github.com/codespaces/badge.svg" alt="Open in GitHub Codespaces" width="400">
</a>

<!--
🟦 Fix code using eslint in GitHub Codespaces
(JS Web IDE, btw.)

🟦 [click] -> next slide
-->

---
class: angel
---

# ESLint is your friend!

<div class="flex justify-between">
    <ul class="max-w-2/3">
        <li>linter for JavaScript, TypeScript, Templates</li>
        <v-click>
            <li>easily create custom rules for custom code style guides</li>
        </v-click>
        <v-click>
            <li>integrates with most editors</li>
            <li>fixable rules</li>
        </v-click>
    </ul>
    <div class="flex flex-wrap gap-5 justify-evenly *:h-[200px]">
        <img src="./ESLint_logo.svg" />
    </div>
</div>

<!--
🟦 *read slide* [click] *read* [click] *read*

🟦 Btw, what did you use as code formatter in your last project?

🟥 Nothing really, we just used the default code style of our IDE. It was not very consistent. It was a beautiful mess.

*laughter*

🟦 [click] -> next slide
-->

---
class: angel
---

# Prettier is your friend!

<div class="flex justify-between">
    <ul class="max-w-2/3">
        <li>opinionated code formatter for JavaScript, TypeScript, HTML, CSS, JSON, Markdown</li>
        <v-click>
            <li>integrates with most editors (or ESLint)</li>
            <li>fixes code style issues automatically</li>
        </v-click>
    </ul>
    <div class="flex flex-wrap gap-5 justify-center *:h-[200px]">
        <img src="./prettier-1.svg" />
    </div>
</div>

<!--
🟦 *read slide* [click] *read*

🟦 How do you like that?

🟥 No more useless arguments about where the curly braces go? - I don't like that at all!

*laughter*

🟦 [click] -> next slide
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

<!--
🟦 *read and explain*

🟦 [click] -> next slide
-->

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
🟦 *read* [click] *read*

🟥 That's nothing special we have something like that in Kotlin and C# as well.

🟥 If I remember correctly it was even introduced earlier than in JavaScript.

🟦 but it is still not available in Java.

🟦 [click] -> next slide
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
🟦 *explain slide*

🟥 That's also nothing new. Various languages have an operator like this.

🟥 Give me something unique to your language.

🟦 okay [click] -> next slide
-->

---
class: angel
transition: view-transition
---

# TypeScript is awesome! -- Type Inference

<<< @/snippets/infer.ts ts {1|3|1-5|7-14}

<!--
🟦 *explain* [click] *explain* [click] *explain* [click] *explain*

🟦 [click] -> next slide
-->

---
class: angel
---

# TypeScript is awesome! -- Type Inference

<<< @/snippets/infer.ts ts {monaco}

<!--
🟦 *hover and show*

🟦 add number to array

🟦 show problem with soft inference

🟦 use `as const`

🟦 [click] -> next slide
-->

---
class: angel
transition: view-transition
---

# TypeScript is awesome! -- Duck Typing

<<< @/snippets/duck-typing.ts ts {1-8|10-14}

<!--
🟦 If it "walks like a duck" and "quacks like a duck", it probably is a duck.

🟦 *explain* [click] *explain*

🟦 [click] -> next slide
-->

---
class: angel
---

# TypeScript is awesome! -- Duck Typing

<<< @/snippets/duck-typing.ts ts {monaco}

<!--
🟦 *change union type to `{ name: string }`

🟦 [click] -> next slide
-->

---
class: angel
transition: view-transition
---

# TypeScript is awesome! -- String Types

<<< @/snippets/types-from-strings.ts ts {1-2|4|6-}

<!--
🟦 *explain short* [click] *explain short* [click] *explain short*

🟦 let's see how this works in the editor

🟦 [click] -> next slide
-->

---
class: angel
---

# TypeScript is awesome! -- String Types

<<< @/snippets/types-from-strings.ts ts {monaco}

<!--
🟦 *explain*

🟦 [click] -> next slide
-->

---
class: angel
---

# TypeScript is awesome!

- TypeScript is a superset of JavaScript

- lots of unique features to add proper types to your code

- Use ESLint and Prettier to keep your code clean

<!--
🟦 *read slide*

🟦 Do you have another topic you want to talk about?

🟥 YES, how about...

🟥 [click] -> next slide
-->
