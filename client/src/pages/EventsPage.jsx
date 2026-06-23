import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { getEvents } from "../services/eventService";

const locations = [
  "All Locations",
  "Oakland",
  "Berkeley",
  "San Francisco",
  "Emeryville",
];

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        setError("");

        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  const filteredEvents =
    selectedLocation === "All Locations"
      ? events
      : events.filter((event) => event.location === selectedLocation);
  return (
    <main className="page">
      <section className="events-page__header">
        <p className="eyebrow">CodeConnect calendar</p>

        <h1>All Events</h1>

        <p>
          Browse technology, career, and networking events across the Bay Area.
        </p>
      </section>

      <section className="events-filter-section">
        <label htmlFor="location-filter">Filter by location</label>

        <select
          id="location-filter"
          value={selectedLocation}
          onChange={(event) => setSelectedLocation(event.target.value)}
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </section>

      {isLoading && <p className="status-message">Loading events...</p>}

      {error && <p className="status-message status-message--error">{error}</p>}

      {!isLoading && !error && filteredEvents.length === 0 && (
        <p className="status-message">
          No events are available for this location.
        </p>
      )}

      {!isLoading && !error && filteredEvents.length > 0 && (
        <section className="events-grid">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </section>
      )}
    </main>
  );
};

export default EventsPage;
