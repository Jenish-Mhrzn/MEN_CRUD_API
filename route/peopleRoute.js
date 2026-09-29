import express from "express";

import {
  getPeople,
  getPeopleById,
  createPeople,
  updatePeople,
  deletePeople,
  searchPeople,
} from "../controller/PeopleController.js";

const router = express.Router();

// //get all
// router.get("/", getPeople);

// //get by id
// router.get("/:id", getPeopleById);

// //create
// router.post("/", createPeople);

// //update
// router.patch("/:id", updatePeople);

// //delete
// router.delete("/:id", deletePeople);

// // search by name
// router.get("/query", searchPeople);
//using router direclty

router.route("/").get(getPeople).post(createPeople);
router.route("/query").get(searchPeople);
router
  .route("/:id")
  .get(getPeopleById)
  .patch(updatePeople)
  .delete(deletePeople);

export default router;
