const mongoose = require("mongoose");

const db = `mongodb+srv://pandeyvidya013:Ashu%401972@cluster.mongodb.net/admin?retryWrites=true&w=majority
`

mongoose
  .connect(db)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });