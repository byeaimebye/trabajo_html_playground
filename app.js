const express = require("express");
const app = express();
const path = require("path")


app.listen(3050, ()=>console.log("Running"))
app.get("/", (req, res)=>res.sendFile(path.join(__dirname,"/views/home.html"))); // Primer barra es la raiz osea pagina principal 

app.use(express.static(path.resolve(__dirname, 'public')));