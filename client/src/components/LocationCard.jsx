import { Link } from "react-router";

function LocationCard({ location }) {
  return (
    <article>
      <img src={location.image} alt={`View of ${location.name}`} />

      <div>
        <h3>{location.name}</h3>

        <p>{location.description}</p>

        <Link to={`/locations/${location.slug}`}>Explore events</Link>
      </div>
    </article>
  );
}

export default LocationCard;
