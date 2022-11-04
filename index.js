const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => res.json("Hello From AWS Elastic Kubernetes Service"));
app.get("/blog", (req, res) => res.redirect('https://piumsudhara.medium.com'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));