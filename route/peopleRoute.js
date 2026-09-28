import express from "express";

import { getPeople, getPeopleById } from "../controller/PeopleController.js";

const router = express.Router();

//get all
router.get("/", getPeople);

//get by id
router.get("/:id", getPeopleById);

export default router;
