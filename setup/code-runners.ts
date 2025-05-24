import { defineCodeRunnersSetup } from "@slidev/types";

export default defineCodeRunnersSetup(() => {
  return {
    async jseval(code, ctx) {
      try {
        const result = code
          .split("\n")
          .map((line) => line.trim())
          .map((line) => eval(line));
        return {
          text: result.join("\n"),
          html: result.join("<br>"),
        };
      } catch (error) {
        return {
          text: `Error: ${error.message}`,
          html: `<span style="color: red;">${error.name}: ${error.message}</span>`,
        };
      }
    },
  };
});
