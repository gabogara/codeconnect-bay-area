import LocationCard from "../components/LocationCard";
import locations from "../data/locations";

const HomePage = () => {
  return (
    <main>
      <section>
        <p>Bay Area technology community</p>

        <h1>Find events that move your tech career forward.</h1>

        <p>
          Explore workshops, networking events, portfolio reviews, and career
          opportunities across the Bay Area.
        </p>
      </section>

      <section>
        <div>
          <div>
            <p className="eyebrow">Choose your city</p>
            <h2>Explore by location</h2>
          </div>

          <p>
            Select a city to discover technology, career, and networking events.
          </p>
        </div>

        <div>
          {locations.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
