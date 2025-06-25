---
class: devil
---

# JavaScript is Single-Threaded

- the JavaScript VM runs only a **single thread**

<v-clicks>

- it can only execute **one piece** of JS **at a time**

- **no parallel execution** of JavaScript code because of event loop

</v-clicks>

<!--
🟥 *read slide starting first bullet point*

🟥 [click]

🟥 [click]

🟥 when you want to downgrade your backend speed so much...

🟥 [click] -> next slide
-->

---
title: Potatoes running DOOM
layout: center
class: devil
---

![Potatoes running DOOM](./potatoes-running-doom.jpg)

<!--
🟥 you might as well run your server on a calculator supplied by potatoes.

*laughter*

🟥 When Dahl presented Node.js, he was really motivated about the event loop.

🟥 [click] -> next slide
-->

---
class: devil
layout: center
title: Ryan Dahl motivated
---

<div class="flex flex-row justify-center items-baseline ml-10 mr-5">
    <SlidevVideo controls autoplay>
        <source src="./RyanDahl_motivated.mp4" type="video/mp4" />
    </SlidevVideo>
    <QRCode
        :width="150"
        :height="150"
        type="svg"
        data="https://youtu.be/ztspvPYybIY"
        :margin="10"
        :dotsOptions="{ type: 'extra-rounded', color: 'gray' }"
    />
</div>

<!--
🟥 *wait for video to finish*

🟥 But later at JSConf 2018 this sounded a lot different.

🟥 [click] -> next slide
-->

---
class: devil
layout: center
title: Ryan Dahl apologizes
---

<div class="flex flex-row justify-center items-baseline ml-10 mr-5">
    <SlidevVideo controls autoplay>
        <source src="./RyanDahl_regret.mp4" type="video/mp4" />
    </SlidevVideo>
    <QRCode
        :width="150"
        :height="150"
        type="svg"
        data="https://youtu.be/M3BM9TB-8yA"
        :margin="10"
        :dotsOptions="{ type: 'extra-rounded', color: 'gray' }"
    />
</div>

<!--
🟥 *wait for video to finish*

*laughter*

🟦 Aren't you taking things a bit out of context?

🟥 Of course, I am trying to make an argument here!

*laughter*

🟦 Do you even know what an event loop is? Let me explain what makes JavaScript special.

🟦 [click] -> next slide
-->

---
class: angel
layout: center
title: Definition of JavaScript
---

<div class="text-center">
    <h1>JavaScript is a</h1>
    <h2>single-threaded<br />non-blocking<br />asynchronous<br />concurrent<br /></h2>
    <h2 class="mt-4">language</h2>
</div>

<!--
🟦 *read slide*

🟦 In other words: The JavaScript Runtime runs JavaScript Code in a single thread, but provides concurrency with via asynchronity in a non-blocking way through the runtime by using the event loop.

🟥 Whut?

🟦 Let me explain by showing you the architecture of the JavaScript Runtime.

🟦 [click] -> next slide
-->

---
title: JavaScript Runtime Architecture
class: angel
---

<div class="absolute top-0 left-[50px]">
  <svg xmlns="http://www.w3.org/2000/svg" height="550" viewBox="0 0 297 210">
    <use href="./JavaScriptRuntime_2.svg#layer1" />
  </svg>
</div>
<v-click at="1">
  <div class="absolute top-0 left-[50px]">
    <svg xmlns="http://www.w3.org/2000/svg" height="550" viewBox="0 0 297 210">
      <use href="./JavaScriptRuntime_2.svg#layer2" />
    </svg>
  </div>
</v-click>
<v-click at="2">
  <div class="absolute top-0 left-[50px]">
    <svg xmlns="http://www.w3.org/2000/svg" height="550" viewBox="0 0 297 210">
      <use href="./JavaScriptRuntime_2.svg#layer3" />
    </svg>
  </div>
</v-click>
<v-click at="3">
  <div class="absolute top-0 left-[50px]">
    <svg xmlns="http://www.w3.org/2000/svg" height="550" viewBox="0 0 297 210">
      <use href="./JavaScriptRuntime_2.svg#layer4" />
    </svg>
  </div>
</v-click>

<!--
*🟦 exclusively*

On the left JavaScript VM (Google V8)
- single heap and single stack

On the right APIs
- HttpRequest, Timeout, Document
- in case of Node.js: FileSystem, Process, but no Document

Bottom:
- Task Queue
- Event Loop in green



🟦 When you now use a API like setTimeout, [click] you call the API with a callback. And continue executing code from stack.

🟦 Once the Timeout is reached, [click] the Runtime puts callback into the Task Queue.

🟦 When the stack is empty, [click] the Event Loop takes the first task from the Task Queue and puts it into the stack.

🟥 So as a result, I should push tasks into the Runtime and not do them in the JavaScript VM?

🟦 Yes, exactly! There's a lot of ways to do that.

🟦 [click] -> next slide
-->

---
class: angel
---

# Offloading to other Servers

- let other servers do the heavy lifting

- fetch data via ReST, GraphQL, gRPC, etc.

<ChuckNorris class="pt-5" v-click />

<!--
🟦 *read slide*

🟦 [click] Select Chuck Norris joke.

🟦 other one?

🟥 yes, that's a good one.

🟦 [click] -> next slide
-->

---
class: angel
---

# Use Workers

- run JavaScript in a separate thread

- communicate with the main thread via message passing

- available in the browser (Web Workers) and Node.js (Worker Threads)

<WebWorker class="pt-5" v-click />

<!--
🟦 *read slide*

🟦 [click] *start workers*

🟦 [click] -> next slide
-->

---
class: angel
---

# Using WASM

- run code in from another language that compiles to WebAssembly

- low-level bytecode that runs in the browser or Node.js

<v-click>

```wasm {monaco}
  (module
    (func (export "add") (param i32 i32) (result i32)
       local.get 0 local.get 1 i32.add
    ))
```

<WASM class="pt-5" />

</v-click>

<!--
🟦 *read slide*

🟦 [click] Example in Web Assembly Text for a function that adds two numbers. *explain how to read it*

🟥 You expect me to write code like this?

🟦 No, this just makes WASM, which is binary code, readable.

🟦 A lot of languages can compile to WASM, like Rust, C, C++, Go, etc.

🟦 [click] -> next slide
-->

---
class: angel
---

# Node.js Add-on SDK

- write C++ code that can be called from JavaScript

- can be used to access low-level system APIs

<!--
🟦 *explain slide*

🟥 No example this time?

🟦 No, C++ examples get big and complicated quickly. Besides, we can't run them in this presentation because the browser environment is sandboxed.

🟦 [click] -> next slide
-->

---
class: angel
title: Summary for Using JavaScript effectively
---

# Summary

- JavaScript is single-threaded, but can run code in the background

<v-click>

- Offloading
  - Call APIs
  - Use Workers
  - Use WASM
  - Use Native Code (Node.js)

</v-click>

<!--
🟦 *read slide* [click] *read slide*

🟥 Okay, now I see how JavaScript is supposed to be used. I'm still not convinced, because ...

🟥 [click] -> next slide
-->
