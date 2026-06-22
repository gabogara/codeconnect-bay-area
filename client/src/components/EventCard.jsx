function EventCard({ event }) {
  const eventDate = new Date(event.event_date);

  return (
    <article className="event-card">
      {event.image_url && (
        <img
          className="event-card__image"
          src={event.image_url}
          alt={event.title}
        />
      )}

      <div className="event-card__content">
        <p className="event-card__category">{event.category}</p>

        <h2>{event.title}</h2>

        <p>{event.description}</p>

        <div className="event-card__details">
          <p>
            <strong>Venue:</strong> {event.venue}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {eventDate.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <p>
            <strong>Time:</strong>{" "}
            {eventDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
