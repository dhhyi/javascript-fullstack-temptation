const eventTypes = ["click", "mouseover"];

type InferArrayT<T> = T extends readonly (infer U)[] ? U : never;

type EventType = InferArrayT<typeof eventTypes>;

function handleEvent(eventType: EventType) {
  switch (eventType) {
    case "click":
      break;
    case "mousover":
      break;
  }
}
