import express from "express";

import {
  getPeople,
} from "../controller/PeopleController.js";

const router = express.Router();

//get all
router.get("/", getPeople);


export default router;
