import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list.component';
import EventsSearch from '../../components/events/events-search.module';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
        <EventsSearch onSearch={findEventsHandler} />
        <EventList items={events} />
    </>
  );
}

export default AllEventsPage;