export async function getAllEvents() {  
    const response = await fetch('https://nextjs-2d431-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
  
    const events = [];
    for (const key in data) {
      events.push({ id: key, ...data[key] });
    }
  
    return events;
}

export async function getFeaturedEvents() {
    const events = await getAllEvents();

    const filteredEvents = events.filter((event) => event.isFeatured);

    return filteredEvents;
}

export async function getEventById(id) {
    const events = await getAllEvents();

    const foundEvent = events.find((event) => event.id === id);

    return foundEvent;
}

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    const events = await getAllEvents();
  
    let filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
}
  