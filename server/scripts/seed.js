require("dotenv").config();

const fs = require("fs");
const path = require("path");
const db = require("../db/db");

const seedDatabase = async () => {
  try {
    const sqlFilePath = path.join(__dirname, "seed.sql");
    const sql = fs.readFileSync(sqlFilePath, "utf8");

    await db.query(sql);

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Unable to seed database:", error);
  } finally {
    await db.end();
  }
};

seedDatabase();
