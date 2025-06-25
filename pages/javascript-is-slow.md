---
class: devil
---

# JavaScript Websites are slow

- pages use heavy frameworks

- a lot of JavaScript is needed to run the pages

- Studies show that users will leave if a page takes more than 3 seconds to load

<!--
🟥 *read slide*

🟥 Wouldn't it be safer to do more on the server?

🟦 Tooling around Webpages has drastically improved in the last decade.

🟦 [click] -> next slide
-->

---
class: angel
---

# Webpages can be optimized

<v-clicks>

- use tools like Lighthouse to analyze performance

- if used correctly, frameworks use code-splitting and tree-shaking

- use CDN to deliver static assets

- configure caching correctly

- use SSR (server-side rendering) or SSG (static site generation)

- ship less initial JavaScript
  - use server components (React)

  - incremental hydration (Angular)

</v-clicks>

<!--
🟦 *explain*
-->
