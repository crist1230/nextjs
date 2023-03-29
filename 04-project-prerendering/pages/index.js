import EventList from '../components/events/event-list';

import { getFeaturedEvents } from '../helpers/api-util';

function HomePage(props) {
  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const filteredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: filteredEvents,
    },
    revalidate: 1800,
  };
}
