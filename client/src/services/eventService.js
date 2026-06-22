const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const getEventsByLocation = async (location) => {
  const response = await fetch(
    `${API_URL}/api/events?location=${encodeURIComponent(location)}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch events for this location.");
  }

  return response.json();
};
