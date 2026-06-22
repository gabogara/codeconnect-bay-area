import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link className="navbar__brand" to="/">
        CodeConnect Bay Area
      </Link>

      <nav className="navbar__links" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/events">All Events</Link>
      </nav>
    </header>
  );
};

export default Navbar;
