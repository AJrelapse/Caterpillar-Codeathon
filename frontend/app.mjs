import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use("/public",express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/motorgrader",(req,res)=>{
  res.render("motorgrader.ejs");
});

app.get("/asphaltpaver",(req,res)=>{
  res.render("asphaltpaver.ejs");
});

app.get("/backhoeloader",(req,res)=>{
  res.render("backhoeloader.ejs");
});

app.get("/excavator",(req,res)=>{
  res.render("excavator.ejs");
});

app.get("/doser",(req,res)=>{
  res.render("doser.ejs");
});

app.get("/configpage",(req,res)=>{
  res.render("configpage.ejs");
});

app.get("/solution",(req,res)=>{
  res.render("solution.ejs",{engine ,fuel,drive ,misc});
});

app.get("/consult",(req,res)=>{
  res.render("consult.ejs");
});

app.get("/book",(req,res)=>{
  res.render("contactUs.ejs");
});

app.get("/index",(req,res)=>{
  res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  