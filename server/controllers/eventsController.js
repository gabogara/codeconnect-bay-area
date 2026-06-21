const db = require("../db/db");

const getEvents = async (req, res) => {
  try {
    const { location } = req.query;

    let query = `
      SELECT *
      FROM events
    `;

    const values = [];

    if (location) {
      query += `
        WHERE LOWER(location) = LOWER($1)
      `;

      values.push(location);
    }

    query += `
      ORDER BY event_date ASC
    `;

    const result = await db.query(query, values);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error getting events:", error);

    res.status(500).json({
      error: "Unable to get events",
    });
  }
};

module.exports = {
  getEvents,
};
