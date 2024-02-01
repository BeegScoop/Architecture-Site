import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) =>{
    res.render("index.ejs");
    
});

app.get("/about",(req,res) =>{
    res.render("about.ejs");
    
});

app.get("/churchHouses",(req,res) =>{
    res.render("churchHouses.ejs");
    
});
app.get("/NotreDameCathedral",(req,res) =>{
    res.render("NotreDameCathedral.ejs");
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });