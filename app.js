import express, { json, request, response } from "express";
import studentsRouter from "./routes/students.js";
const app = express();
const PORT = 5000;

app.get("/", (request, response) => {
  response.send("welcome to server");
});
app.listen(PORT, () => {
  console.log(`//-- server running @ ${PORT} --//`);
});

//to support json
app.use(express.json())

app.use('/students', studentsRouter);


