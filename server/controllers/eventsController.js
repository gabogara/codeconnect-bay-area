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

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      `
        SELECT *
        FROM events
        WHERE id = $1
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Event not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error getting event:", error);

    res.status(500).json({
      error: "Unable to get event",
    });
  }
};

module.exports = {
  getEvents,
  getEventById,
};
