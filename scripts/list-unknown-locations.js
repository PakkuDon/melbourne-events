// Report events that have locations that are not listed in data/locations
import events from "../events.js";
import locations from "../data/locations.js";

const eventsWithUnknownLocations = events.filter(
  (event) => !locations[event.location],
);

eventsWithUnknownLocations.forEach((event) => {
  console.log(
    `${event.start || event.startRecur || event.startTime} - ${event.title} has unrecognised location: "${event.location}"`,
  );
});
