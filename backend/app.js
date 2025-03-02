const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/connectdb.js');
dotenv.config(); // Load environment variables from .env file

const app = express();
//connect MongoDb
connectDB();

app.use(session({ 
    secret: 'this is my Proj app', 
    resave: false, 
    saveUninitialized: false, 
    cookie: { secure: false } 
}));

const indexRouter = require("./routes/indexRouter");
const adminRouter = require("./routes/adminRouter");
const userRouter = require("./routes/userRouter");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/", indexRouter);

// Use the PORT from .env or default to 8000
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server invoked at link http://localhost:${PORT}`);
});
