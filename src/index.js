const syncDb = require("./models/sync");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

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

const userRoutes = require("./routes/user-routes");
app.use("/users", userRoutes);

app.get(`/`, async (req, res) => {  
  res.send('Ok');
});

app.listen(3000, () => {
  console.log("SERVER STARTED AT 3000");
});
