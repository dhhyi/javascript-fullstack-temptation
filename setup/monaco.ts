import { defineMonacoSetup } from "@slidev/types";

export default defineMonacoSetup(async (monaco) => {
  const original = monaco.editor.create;

  monaco.editor.create = (container, options, ...args) => {
    options!.fontSize = 20;
    options!.scrollbar = { vertical: "hidden", horizontal: "hidden" };
    // leave on this value as it will otherwise expand the editor unnecessarily
    options!.wordWrap = "wordWrapColumn";

    return original.call(monaco.editor, container, options, ...args);
  };
});
