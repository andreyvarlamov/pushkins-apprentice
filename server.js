require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("Ok");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port " + port + "..."));
