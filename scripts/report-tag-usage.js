// Report tag usage across all events
import events from "../events.js";

const tags = new Set(events.flatMap((event) => event.tags).toSorted());
const tally = {};
tags.forEach((tag) => {
  tally[tag] = events.filter((event) => event.tags.includes(tag)).length;
});

console.table(tally);
