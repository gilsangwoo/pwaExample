const express = require("express"),
  http = require("http"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(morgan("dev"));
<<<<<<< HEAD
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000
  })
);
=======
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));
>>>>>>> 98c393b66957fdb1ca067443ad8bd7b94b68ce6a
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type, Authorization, Content-Type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "client/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
=======
app.use("/api", require("./routes/index"));
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
>>>>>>> 98c393b66957fdb1ca067443ad8bd7b94b68ce6a
});
http.createServer(app).listen(PORT, () => {
  console.log(`SERVER MESSAGE : HTTP Server running on PORT: ${PORT}`);
});
