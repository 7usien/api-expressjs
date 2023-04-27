import express, { json, request, response } from "express";
import { v4 as uuidv4 } from "uuid";

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


export const getstudents = (request, response) => {
  const id = request.params.id;
  const student = students.find((student) => student.id === id);
  if (student) {
    response.json(student);
  } else {
    response.send(404);
  }
};


export const deleteStuent = (request, response) => {
  const id = request.params.id;
  const student = students.filter((student) => student.id !== id);
  response.json(student);
};


export const addStduent = (request, response) => {
  const student = request.body;
  const sendBody = { id: uuidv4(), ...student };

  students.push(sendBody);
  console.log(` a new student with name ${sendBody.name} has been added`);
  response.json(students);
};



export const editStudent = (request, response) => {
  const id = request.params.id;

  const student = students.find((student) => student.id === id);
  const modifiedStudnt = request.body;
  const { name, age } = modifiedStudnt;

  if (name) {
    student.name = name;
  }

  if (age) {
    student.age = age;
  }
  console.log(
    `stduent with name ${student.name} has been modified successfully tobe ${name}`
  );

  response.json(students);
};