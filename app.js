import express, { urlencoded } from "express";
import connectDB from "./config/db.js";
import people from "./route/peopleRoute.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
await connectDB();

app.use("/api/people", people);

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
