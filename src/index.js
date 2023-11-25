const syncDb = require("./models/sync");

const express = require("express");
const app = express();

const session = require("express-session");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(
  session({
    secret: "segredo",
    resave: false,
    saveUninitialized: true
  })
);

const authRoutes = require("./routes/auth-routes");
app.use("/auth", authRoutes);

const postRoutes = require("./routes/post-routes");
app.use("/posts", postRoutes);

app.get(`/`, async (req, res) => {  
  res.send('Ok');
});

app.listen(3000, () => {
  console.log("SERVER STARTED AT 3000");
});
