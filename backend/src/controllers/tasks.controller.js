import { pool } from "../db.js";

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2)",
      [title, description]
    );
    console.log(result);
    console.log(result.rows);

    res.json({ message: "Task created" }); // Envía la respuesta JSON al cliente
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(404).json({ message: "Can't create task" }); // Enviar solo una respuesta de error
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const result = await pool.query(
      "UPDATE task SET title = $1, description = $2 WHERE id = $3",
      [title, description, id]
    );
    // if (!result) return res.status(404).json({ message: "Task not found" });
    res.json(result);
    console.log(result);
    console.log("Tasks was update");
  } catch (error) {
    res.status(404).json({ mesagge: "Update task error" });
  }
};
export const getTasks = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM task");
    console.log(result);
    console.log(result);
    if (!result) return res.status(404).json({ message: "Task not found" });
    res.json(result.rows);
  } catch (error) {
    res.status(404).json({ mesagge: "Can't gets tasks" });
  }
};
export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

    res.json(result.rows); // Envía la respuesta JSON al cliente
    if (!result) return res.status(404).json({ message: "Task not found" });
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(404).json({ message: "Error fetching task" }); // Enviar solo una respuesta de error
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);
    res.json({ mesagge: "Task was delete" });
    if (!result) return res.status(404).json({ message: "Task not found" });
  } catch (error) {
    res.status(404).json({ message: "Delete error" });
  }
};
