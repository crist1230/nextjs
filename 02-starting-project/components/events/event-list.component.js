import EventItem from './event-item.component';

const EventList = (props) => {
    const { items } = props;
    return (
        <ul>
            {items.map((item) => {
                return (
                    <EventItem key={item.id} event={item} />
                );
            })}
        </ul>
    );
};

export default EventList;