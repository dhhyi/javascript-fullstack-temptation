const eventTypes = ["click", "mouseover"];

type InferArrayType<T> = T extends readonly (infer U)[] ? U : never;

type EventType = InferArrayType<typeof eventTypes>;

function handleEvent(eventType: EventType) {
  switch (eventType) {
    case "click":
      break;
    case "mousover":
      break;
  }
}
