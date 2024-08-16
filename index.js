import express from "express";
import connectDB from "./Config/connection.js";
import indexRouter from "./Routes/indexRouter.js";
import cors from "cors"

const app = express();

connectDB();
const port = 5000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Cors Configuration
app.use((req,res,next)=>{
  res.header(`Access-Control-Aloow-Origin`,`*`);
  res.header(`Access-Control-Aloow-Methods`,`GET,PUTH,POST,DELETE`);
  res.header(`Access-Control-Aloow-Headers`,`Content-Type`);
  next();
})




app.get("/", (req, res) => {
  res.send("Hello World");
});
// ======================== Routes =========================
app.use("/user", indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
