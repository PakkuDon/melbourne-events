const showEventDetails = (popoverElement, event) => {
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
  // Tablet width taken from Chrome dev tools
  const tabletWidth = 768
  const popoverElement = document.querySelector('#popover')
  let calendarElement = document.getElementById('calendar')
  let calendar = new FullCalendar.Calendar(calendarElement, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGrid',
    },
    initialView: document.body.clientWidth > tabletWidth ? 'dayGridMonth' : 'timeGrid',
    // events is defined in events.js and included in index.html
    events: events,
    eventClick: function(info) {
      showEventDetails(popoverElement, info.event)
    },
  })
  calendar.render()
})