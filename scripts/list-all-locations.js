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
      const addressSegments = location.address.split(", ");

      const locationDetails = {
        name: addressSegments[0],
        address: {
          address_line1: addressSegments.slice(1, -1).join(", "),
          address_line2: "",
          city: addressSegments[addressSegments.length - 1],
          state: "VIC",
          postcode: 3000,
        },
        googleMapsUrl,
      };
      locations[addressSegments[0]] = locationDetails;
    }
  }
});

const locationsSortedByName = Object.keys(locations)
  .sort()
  .reduce((sortedLocations, location) => {
    sortedLocations[location] = locations[location];
    return sortedLocations;
  }, {});

console.log(JSON.stringify(locationsSortedByName, null, 2));
