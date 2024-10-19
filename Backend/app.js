const express= require("express");
const app= express();
const dotenv=require("dotenv");
const cors= require("cors");
const connectDB= require("./config/db.js");
dotenv.config();
connectDB();
const session = require("express-session");
const cookieParser = require('cookie-parser');
const flash = require("connect-flash");
const port= process.env.PORT;

const authRoute= require("./routes/auth.js");
const bookRoute= require("./routes/book.js");
const issueRoute= require("./routes/issue.js");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    credentials: true // Allow credentials (cookies)
  }));
app.use(session({secret:"mysecret", resave: false, saveUninitialized:true}));
app.use(flash());

// Middleware for flash message
app.use((req, res, next)=>{
    res.locals.success= req.flash("success");
    res.locals.failure = req.flash("failure");
    next();
})

app.use('/', authRoute);
app.use("/books", bookRoute);
app.use("issue", issueRoute);
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});
