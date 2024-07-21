const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");

//intializing app
const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({
    extended: true
}))


app.set("view engine", "ejs");

function register(req, res) {
    res.render("layout", { content: "registration" });
}
app.get("/", register);

function getteamleader(req, res) {
    res.render("layout", { content: "teamleaderdetails" });
}
app.get("/teamleader", getteamleader);


let data = [];

function getEvent(req, res) {
    data = req.body;
    res.render("layout", { content: "eventdetails" })

}
app.post("/eventdetails", getEvent);

app.listen(3050, () => {
    console.log("Server Listening on port 3050");
});