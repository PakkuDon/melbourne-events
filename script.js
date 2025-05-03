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
    <button aria-label="close" style="float: right;">x</button>
    <h2>${event.title}</h2>
    <div>
      ${event.extendedProps.tags.map(tag => `<span style="text-decoration: underline">${tag}</span>`).join(", ")}
    </div>
    <div>
      ${dateRangeStr}
    </div>
    ${timeRangeStr}
    <div>
      ${event.extendedProps.location.address}
    </div>
    <p>
      ${event.extendedProps.description}
    </p>
    <ul>
      ${event.extendedProps.links.map(link => (
        `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a></li>`
      )).join("")}
    </ul>
  `
  popoverElement.querySelector("button")
    .addEventListener("click", () => popoverElement.hidePopover())

  popoverElement.showPopover()
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialise FullCalendar instance
  const mdBreakpoint = 1024
  const popoverElement = document.querySelector('#popover')
  const calendarElement = document.getElementById('calendar')
  const calendar = new FullCalendar.Calendar(calendarElement, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGrid,listWeek',
    },
    initialView: document.body.clientWidth > mdBreakpoint ? 'timeGridWeek' : 'listWeek',
    // events is defined in events.js and included in index.html
    eventClick: (info) => {
      showEventDetails(popoverElement, info.event)
    },
  })

  // Render calendar with events that match selected criteria
  const renderCalendar = () => {
    const searchQuery = new URLSearchParams(location.search)
    const tagQuery = searchQuery.get("tag")
    let eventsToRender = events

    if (tagQuery) {
      eventsToRender = events.filter(event => event.tags.includes(tagQuery))
    }
    calendar.batchRendering(() => {
      calendar.getEvents().forEach(event => event.remove())
      eventsToRender.forEach(event => calendar.addEvent(event))
    })

    calendar.render()
  }

  // Populate filter dropdown
  const tagDropdown = document.querySelector("#tag-list")
  const defaultOption = document.createElement("option")
  defaultOption.textContent = "Show all"
  defaultOption.value = ""
  tagDropdown.appendChild(defaultOption)

  const tags = [...new Set(events.flatMap(event => event.tags))].toSorted()
  tags.forEach(tag => {
    const searchQuery = new URLSearchParams(location.search)
    const tagQuery = searchQuery.get("tag")
    const option = document.createElement("option")
    if (tag === tagQuery) {
      option.selected = true
    }
    option.value = tag
    option.textContent = tag

    tagDropdown.appendChild(option)
  })

  // Filter events by selected tag
  tagDropdown.addEventListener("change", event => {
    const selectedTag = event.target.value
    const url = new URL(location)
    if (selectedTag) {
      url.searchParams.set("tag", selectedTag)
    } else {
      url.searchParams.delete("tag")
    }
    window.history.pushState({},  "", url)
    renderCalendar()
  })

  // Show calendar
  renderCalendar()
})