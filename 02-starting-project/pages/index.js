import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list.component';

const HomePage = () => {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <h1>This is Featured Events Page</h1>
            <EventList items={featuredEvents} />
        </div>
    );
};

export default HomePage;