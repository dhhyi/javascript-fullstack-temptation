---
class: devil
---

# JavaScript is Single-Threaded

<v-clicks>

- the JavaScript VM runs only a **single thread**

- it can only execute **one piece** of JS **at a time**

- **no parallel execution** of JavaScript code because of event loop

</v-clicks>

<!--
D: stress out that it is single-threaded
D: when you want to downgrade your backend speed... *click*
-->

---
title: Potatoes running DOOM
layout: center
class: devil
---

![Potatoes running DOOM](./potatoes-running-doom.jpg)

<!--
D: you might as well run your server on a calculator supplied by potatoes.

D: When Dahl presented Node.js, he was really motivated about the event loop. *click*
-->

---
class: devil
layout: center
title: Ryan Dahl motivated
---

<SlidevVideo controls autoplay>
    <source src="./RyanDahl_motivated.mp4" type="video/mp4" />
</SlidevVideo>

<!--
*wait for video to finish*

D: But later at JSConf 2018 this sounded a lot different. *click*
-->

---
class: devil
layout: center
title: Ryan Dahl apologizes
---

<SlidevVideo controls autoplay>
    <source src="./RyanDahl_regret.mp4" type="video/mp4" />
</SlidevVideo>

<!--
*wait for video to finish*

A: Aren't you taking things very out of context here?

D: Of course, I am trying to make an argument here!

A: Do you even know what an event loop is?
-->

---
class: angel
layout: center
---

<div class="text-center">
    <h1>JavaScript is a</h1>
    <h2>single-threaded<br />non-blocking<br />asynchronous<br />concurrent<br /></h2>
    <h2 class="mt-4">language</h2>
</div>

<!--
A: The JavaScript Runtime runs JavaScript Code in a single thread, but provides concurrency with via asynchronity in a non-blocking way through the runtime by using the event loop.

D: Whut?
-->

---
title: JavaScript Runtime Architecture
class: angel
---

<!-- TODO: insert diagram of JavaScript Runtime -->

<!--
- explain architecture of JavaScript Runtime
-->

---
class: angel
---

# Offloading to other APIs

<!-- TODO: insert component loading Chuck Norris Joke -->

<!--
NOTES
-->

---
class: angel
---

# Using WASM / WASI

<!-- TODO: come up with a running WebAssembly example -->

<!--
NOTES
-->
