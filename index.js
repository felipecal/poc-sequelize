const express = require("express");
const { router } = require("./src/routes/defaultRoutes");

const app = express();
const port = 3001;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("Server running on port 3001🚀");
});
