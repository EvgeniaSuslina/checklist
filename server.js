const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const DATA_FILE = "./data.json";

app.get("/api/data", (req, res) => {
  const data = fs.readFileSync(DATA_FILE, "utf8");
  res.json(JSON.parse(data));
});

app.post("/api/data", (req, res) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✔ Сервер запущен на порту ${PORT}`);
});
