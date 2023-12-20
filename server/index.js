const express = require("express");
const app = express();

const databaseConnect = require("./config/database");
const cors = require("cors");
require("dotenv").config();
const { userProfile } = require("./controllers/userProfile");

const PORT = process.env.PORT || 4000;

databaseConnect.connect();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.post("/enroll", userProfile);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is listening at the port ${PORT}`);
});
