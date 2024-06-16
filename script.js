let popoverElement

const showEventDetails = (event) => {
  popoverElement.hidePopover()
  popoverElement.innerHTML = `
    <h2>${event.title}</h2>
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
    initialView: 'dayGridMonth',
    // events is defined in events.js and included in index.html
    events: events,
    eventClick: function(info) {
      showEventDetails(info.event)
    },
  })
  calendar.render()
})