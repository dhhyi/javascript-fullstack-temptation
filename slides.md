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
favicon: "https://emojiisland.com/cdn/shop/products/Smiling_Devil_Emoji_large.png?v=1571606036"
addons:
  - slidev-addon-qrcode
---

# JavaScript Fullstack Temptation

## 😇 Heaven-Sent or Hell-Bound? 😈

<!--
"Can you guys help me?"

🟦 Have faith in JavaScript, trust your fellow frontend developers!

🟥 No, don't sell your soul to somebody else! Use a proper language for the backend!

"Thank you for nothing."

🟦 Why are you so against using JavaScript?

🟥 Well, first of all, JavaScript has a very strange history.

🟥 [click] -> next slide
-->

---
src: pages/history-of-javascript.md
---

---
src: pages/javascript-is-singlethreaded.md
---

---
src: pages/javascript-is-wild.md
---

---
src: pages/javascript-is-insecure.md
---

---
src: pages/javascript-is-slow.md
---

---
src: pages/conclusion.md
---

---
layout: cover
title: Finish
---

<div class="flex flex-col justify-center items-center">
    <h1>Thank You!</h1>
    <QRCode
        :width="200"
        :height="200"
        type="svg"
        data="https://github.com/dhhyi/javascript-fullstack-temptation"
        :margin="10"
        :dotsOptions="{ type: 'extra-rounded', color: 'gray' }"
    />
    <h1>😇 ❤️ 😈</h1>
</div>
