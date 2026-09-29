import express from "express";

import { getPeople, getPeopleById,createPeople,updatePeople } from "../controller/PeopleController.js";

const router = express.Router();

//get all
router.get("/", getPeople);

//get by id
router.get("/:id", getPeopleById);

//create
router.post("/", createPeople);

//update
router.patch("/:id", updatePeople);

export default router;
