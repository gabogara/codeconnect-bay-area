import { useParams } from "react-router";

const LocationPage = () => {
  const { location } = useParams();

  return (
    <main className="page">
      <h1>Events in {location}</h1>

      <p>
        This page will display technology, career, and networking events for
        this location.
      </p>
    </main>
  );
};

export default LocationPage;
