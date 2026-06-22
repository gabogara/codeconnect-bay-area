import { useEffect, useState } from "react";
import { useParams } from "react-router";
import EventCard from "../components/EventCard";
import { getEventsByLocation } from "../services/eventService";

const formatLocationName = (location) => {
  return location
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const LocationPage = () => {
  const { location } = useParams();
const [events, setEvents] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState("");

const locationName = formatLocationName(location);

useEffect(() => {
  const loadEvents = async () => {
    try {
      setIsLoading(true);
      setError("");

      const data = await getEventsByLocation(locationName);

      setEvents(data);
    } catch (error) {
      console.error(error);
      setError("Unable to load events. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  loadEvents();
}, [location, locationName]);

  return (
    <main className="page">
      <section className="location-page__header">
        <p className="eyebrow">Events by location</p>
        <h1>Events in {locationName}</h1>
        <p>
          Discover technology, career, and networking opportunities in{" "}
          {locationName}.
        </p>
      </section>

      {isLoading && <p className="status-message">Loading events...</p>}

      {error && <p className="status-message status-message--error">{error}</p>}

      {!isLoading && !error && events.length === 0 && (
        <p className="status-message">
          No events are currently available for {locationName}.
        </p>
      )}

      {!isLoading && !error && events.length > 0 && (
        <section className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </section>
      )}
    </main>
  );
};

export default LocationPage;
