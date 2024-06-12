import { Router } from "express";
const app = Router();

app.get("/", (req, res) => res.send("Server Running 🚀"));

export default app;
