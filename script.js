import events from "./events.js"

const showEventDetails = (popoverElement, event) => {
  let dateRangeStr = ""
  let timeRangeStr = ""

  if (event.allDay) {
    // Subtract offset time from end date as date ranges in events.js are padded out
    // Offset end date by two hours to accommodate Daylight Savings
    const END_DATE_OFFSET = 2 * 60 * 60 * 1000 // 2 hours
    let actualEndTime = new Date(event.end)
    actualEndTime.setTime(event.end - END_DATE_OFFSET)
    // Remove time from ISO string
    dateRangeStr = `${event.startStr.split("T")[0]} - ${actualEndTime.getFullYear()}-${(actualEndTime.getMonth() + 1 + "").padStart(2, "0")}-${(actualEndTime.getDate() + "").padStart(2, "0")}`
  }
  else {
    // Display start + end time if available
    dateRangeStr = event.startStr.split("T")[0]
    timeRangeStr = `<div>${event.start.toLocaleTimeString()} - ${event.end.toLocaleTimeString()}</div>`
  }

  popoverElement.hidePopover()
  popoverElement.innerHTML = `
    <h2>${event.title}</h2>
    <div>
      ${dateRangeStr}
    </div>
    ${timeRangeStr}
    <div>
      ${event.extendedProps.location.address}
      (View in <a href="${event.extendedProps.location.googleMapsUrl}" target="_blank" rel="noopener noreferrer">Google Maps</a>)
    </div>
    <p>
      ${marked.parse(event.extendedProps.description)}
    </p>
  `
  popoverElement.showPopover()
}

document.addEventListener('DOMContentLoaded', () => {
  // Tablet width taken from Chrome dev tools
  const tabletWidth = 768
  const popoverElement = document.querySelector('#popover')
  let calendarElement = document.getElementById('calendar')
  let calendar = new FullCalendar.Calendar(calendarElement, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGrid',
    },
    initialView: document.body.clientWidth > tabletWidth ? 'timeGridWeek' : 'timeGrid',
    // events is defined in events.js and included in index.html
    events: events,
    eventClick: (info) => {
      showEventDetails(popoverElement, info.event)
    },
  })
  calendar.render()
})