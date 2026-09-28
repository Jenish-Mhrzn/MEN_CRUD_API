import express, { urlencoded } from "express";

import connectDB from "./config/db.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
await connectDB();


app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
