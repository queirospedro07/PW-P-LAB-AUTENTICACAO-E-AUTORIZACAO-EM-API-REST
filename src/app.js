require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/tasks", require("./routes/tasks"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor a correr em http://localhost:${PORT}`));
