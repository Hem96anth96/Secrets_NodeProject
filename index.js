//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import ejs from 'ejs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

app.get("/", (req, res) => {
  res.render("index.ejs", { error: req.query.error }); 
  
});

app.post("/check", (req, res) => {
  if (req.body.password === "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");
  } else{
    res.redirect("/?error=true");
  }
});



