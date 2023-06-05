const { sequelize } = require("./models");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const express = require("express");
const port = 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("helloooooooo");
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.listen(port, async () => {
  //await sequelize.sync({ force: true }); // if alter table is true then it will show us an alter table
  await sequelize.authenticate();
  console.log("Server is running");
  console.log("Database Synced");
});
