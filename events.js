// Available properties for events defined in https://fullcalendar.io/docs/event-object
// Note that end date is exclusive
/* Example events
{
  title: 'All day event',
  start: '2024-06-14',
  end: '2024-06-15',
  description: 'Description',
  location: {
    address: "",
    googleMapsUrl: "",
  },
},

{
  title: 'Event with times included',
  start: '2024-06-14T10:30:00+11:00',
  end: '2024-06-15T11:30:00+11:00',
  description: 'Description',
  location: {
    address: "",
    googleMapsUrl: "",
  },
},

{
  title: 'Recurring event',
  startTime: '09:00:00+11:00',
  endTime: '23:00:00+11:00',
  startRecur: '2024-06-01',
  endRecur: '2024-07-15',
  daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
  description: 'Description',
  location: {
    address: "",
    googleMapsUrl: "",
  },
},
*/

import events2024 from "./data/2024.js"
import events2025 from "./data/2025.js"

const events = [
  ...events2024,
  ...events2025,
]

export default events
