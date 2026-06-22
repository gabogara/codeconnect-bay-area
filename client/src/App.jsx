import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locations/:location" element={<LocationPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
