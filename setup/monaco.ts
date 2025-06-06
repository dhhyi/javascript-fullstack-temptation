import { defineMonacoSetup } from "@slidev/types";

export default defineMonacoSetup(async (monaco) => {
  const original = monaco.editor.create;

  monaco.editor.create = (container, options, ...args) => {
    options!.fontSize = 20;

    return original.call(monaco.editor, container, options, ...args);
  };
});
