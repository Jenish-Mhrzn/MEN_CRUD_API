import express from "express";

import { getPeople, getPeopleById,createPeople } from "../controller/PeopleController.js";

const router = express.Router();

//get all
router.get("/", getPeople);

//get by id
router.get("/:id", getPeopleById);

//create
router.post("/", createPeople);

export default router;
