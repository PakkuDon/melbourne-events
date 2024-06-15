document.addEventListener('DOMContentLoaded', function() {
  let calendarElement = document.getElementById('calendar')
  let calendar = new FullCalendar.Calendar(calendarElement, {
    initialView: 'dayGridMonth',
    events: [],
  })
  calendar.render()
})