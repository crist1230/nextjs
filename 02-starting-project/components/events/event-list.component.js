import EventItem from './event-item.component';

const EventList = (props) => {
    const { items } = props;
    return (
        <ul>
            {items.map((item) => {
                return (
                    <EventItem key={item.id} title={item.title} />
                );
            })}
        </ul>
    );
};

export default EventList;