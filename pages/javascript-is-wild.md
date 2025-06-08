---
class: devil
---

# JavaScript is wild!

```jseval {monaco-run} { autorun:false }
"2" + 1
```

```jseval {monaco-run} { autorun:false }
[] == 0
0 == "0"
```

```jseval {monaco-run} { autorun:false }
'b' + 'a'+ +'a' + 'a'
```

<!--
1. "2" - 1 -> 0
2. [] == "0" -> false
3. baNaNa
-->

---
class: devil
---

# JavaScript is wild! #2

```js {monaco-run} { autorun:false }
console.log(a);
var a = 1;
```

```jseval {monaco-run} { autorun:false }
[1, 5, 12, 20, 80].sort()
```

<!--
1. uncomment line with var -> ERROR
2. scrambles order

A: Wow, a lot of effort for this presentation! What is this based on?
-->

---
class: angel
---

# JavaScript can be tamed!

<a href="https://codespaces.new/dhhyi/javascript-fullstack-temptation/tree/examples/weirdness?quickstart=1&file=example.js" target="_blank" class="m-auto h-full block flex justify-center items-center">
  <img src="https://github.com/codespaces/badge.svg" alt="Open in GitHub Codespaces" width="400">
</a>

<!-- TODO: extend example with typescript linting to check with https://typescript-eslint.io/rules/require-array-sort-compare/ -->

<!--
Fix code using eslint in GitHub Codespaces
(JS Web IDE, btw.)
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

# JavaScript is awesome! -- Optional Chaining with Elvis Operator

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

---
class: angel
---

# TypeScript is awesome!

```ts {monaco}
const eventTypes = ["click", "mouseover"];

type InferArrayType<T> = T extends (infer U)[] ? U : never;

type EventType = InferArrayType<typeof eventTypes>;

function handleEvent(eventType: EventType) {
  switch (eventType) {
    case "click":
      break;
    case "mousover":
      break;
  }
}
```

---
class: angel
---

# TypeScript is awesome! -- Duck Typing

<!-- prettier-ignore -->
```ts {monaco} { editorOptions: { wordWrap: 'on' } }
type User = { name: string; age: number; }
const user: User = { name: "John", age: 30 };

interface Car { name: string; model: string; }
const car: Car = { name: "Toyota", model: "Corolla" };

class Monument { constructor(public name: string) {} }
const monument = new Monument("Eiffel Tower");

function printName(obj: User | Car | Monument) { /* stuff */ }

printName(user);
printName(car);
printName(monument);
```

<!--
NOTES
-->
