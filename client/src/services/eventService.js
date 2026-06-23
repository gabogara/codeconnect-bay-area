const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const request = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API request failed: ${endpoint}`, error);
    throw error;
  }
};

const getEvents = () => request("/api/events");

const getEventsByLocation = (location) => {
  return request(`/api/events?location=${encodeURIComponent(location)}`);
};

export { getEvents, getEventsByLocation };
