let express = require("express");
let path = require("path");
let hbs = require("hbs");
let app = express();
const Register = require("./model/model");
app.set("view engine", "hbs");
let staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
// app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let viewsPath = path.join(__dirname, "../templates/views");
let partialspath = path.join(__dirname, "../templates/partials");

app.set("views", viewsPath);
hbs.registerPartials(partialspath);
app.get("/register", function (req, res) {
  res.render("register", {});
});
// create a new user

app.post("/register", async function (req, res) {
  try {
    const Signup_user = new Register({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });
    const name = req.body.firstname;
    const registered = await Signup_user.save();
    res.status(201).render("homejson");
  } catch (error) {
    res.status(400).render("login");
  }
});

app.get("/", function (req, res) {
  res.render("index2json", {});
});
app.get("/btshome", function (req, res) {
  res.render("homejson", {});
});
app.get("/ham", function (req, res) {
  res.render("hamjson", {});
});
app.get("/rm", function (req, res) {
  res.render("bts_RM", {});
});
app.get("/jin", function (req, res) {
  res.render("bts_jin", {});
});
app.get("/suga", function (req, res) {
  res.render("bts_suga", {});
});
app.get("/jhope", function (req, res) {
  res.render("bts_jhope", {});
});
app.get("/jimin", function (req, res) {
  res.render("bts_jimin", {});
});
app.get("/jk", function (req, res) {
  res.render("bts_jk", {});
});
app.get("/V", function (req, res) {
  res.render("bts_V", {});
});
app.get("/jhope_main", function (req, res) {
  res.render("jhope", {});
});
app.get("/rm_main", function (req, res) {
  res.render("rm", {});
});
app.get("/jin_main", function (req, res) {
  res.render("jin", {});
});
app.get("/jimin_main", function (req, res) {
  res.render("jimin", {});
});
app.get("/suga_main", function (req, res) {
  res.render("suga", {});
});
app.get("/jk_main", function (req, res) {
  res.render("jk", {});
});
app.get("/v_main", function (req, res) {
  res.render("v", {});
});
app.get("/login", function (req, res) {
  res.render("login", {});
});
app.get("/aboutus", function (req, res) {
  res.render("aboutus", {});
});

//login validation
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    const user_email = await Signup.findOne({ email: email });
    if (user_email.password == password) {
      res.status(201).render("homejson");
    } else {
      res.send("Invalid ID or Password");
    }
  } catch (err) {
    res.status(400).send("error");
  }
});
app.use((req, res) => {
  // if file not found
  res.status(404).send("Page not found");
});

app.listen("3000", (req, res) => {
  console.log("connected to server...");
});

let connectdb = require(path.join(__dirname, "../public/js/connectdb.js"));
connectdb();
