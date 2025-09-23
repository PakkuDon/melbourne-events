// One-off script to list all locations in data set
import events from "../events.js";

const locations = {};
events.forEach((event) => {
  const location = event.location;

  if (!locations[location]) {
    const googleMapsUrl = event.links.find(
      (link) => link.label === "Google Maps",
    )?.url;
    if (googleMapsUrl) {
      const locationDetails = {
        address: location.address,
        googleMapsUrl,
      };
      locations[location.address] = locationDetails;
    }
  }
});

console.log(JSON.stringify(locations, null, 2));
