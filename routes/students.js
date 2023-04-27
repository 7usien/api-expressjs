import express from "express";

import { getstudents, addStduent, editStudent, deleteStuent } from "../controllers/students.js";

const router = express.Router();

const students = [
  {
    id: "1",
    name: "husien adel",
    age: 39,
  },
  {
    id: "2",
    name: "Amira maher",
    age: 37,
  },
  {
    id: "3",
    name: "Reetal husien adel",
    age: 9,
  },
  {
    id: "4",
    name: "Roaa husien adel",
    age: 6,
  },
  {
    id: "5",
    name: "Asser husien adel",
    age: 1,
  },
];

// get all
router.get("/", (request, response) => {
  response.json(students);
});




//get by id
router.get("/:id", getstudents);



//delete
router.delete("/:id", deleteStuent);



// add student
router.post("/", addStduent);



//edit
router.patch("/:id", editStudent);

export default router;
