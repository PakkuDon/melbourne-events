let popoverElement

const showEventDetails = (event) => {
  popoverElement.hidePopover()
  popoverElement.innerHTML = `
    <h2>${event.title}</h2>
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

document.addEventListener('DOMContentLoaded', function() {
  popoverElement = document.querySelector('#popover')
  let calendarElement = document.getElementById('calendar')
  let calendar = new FullCalendar.Calendar(calendarElement, {
    headerToolbar: {
      right: 'today dayGridMonth,timeGrid prev,next'
    },
    initialView: 'dayGridMonth',
    // events is defined in events.js and included in index.html
    events: events,
    eventClick: function(info) {
      showEventDetails(info.event)
    },
  })
  calendar.render()
})