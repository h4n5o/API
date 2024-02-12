const express = require("express");
const cors = require("cors");

const { PORT } = process.env;
const app = express();

app.use(cors());

app.get("/test", (req, res) => {
    res.status(200).json({ profile: { name: "Max" } });
});

app.listen(PORT, () => {
    console.log(`Huhu, App läuft über Port ${PORT}`);
});
