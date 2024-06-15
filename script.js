document.addEventListener('DOMContentLoaded', function() {
  let calendarElement = document.getElementById('calendar')
  let calendar = new FullCalendar.Calendar(calendarElement, {
    initialView: 'dayGridMonth',
    // events is defined in events.js and included in index.html
    events: events,
  })
  calendar.render()
})