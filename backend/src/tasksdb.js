import { pool } from "./db.js";

export const getMyTasks = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM task");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
