import { Link } from "react-router";

const Navbar = () => {
  return (
    <header>
      <Link to="/">CodeConnect Bay Area</Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">All Events</Link>
      </nav>
    </header>
  );
};

export default Navbar;
