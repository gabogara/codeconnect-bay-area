import { Link } from "react-router";

function LocationCard({ location }) {
  return (
    <article className="location-card">
      <img
        className="location-card__image"
        src={location.image}
        alt={`View of ${location.name}`}
      />

      <div className="location-card__content">
        <h3>{location.name}</h3>

        <p>{location.description}</p>

        <Link
          className="location-card__link"
          to={`/locations/${location.slug}`}
        >
          Explore events
        </Link>
      </div>
    </article>
  );
}

export default LocationCard;
