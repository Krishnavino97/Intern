require("dotenv").config();

const express = require('express');
const res = require('express/lib/response');
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);



/*
app.get("/api", (req, res)=> {
    res.json({
        success:1,
        message:"This is rest apis working"
    });
});
*/
app.listen(process.env.APP_PORT, () => {
    console.log("Server Up and Running on PORT :", process.env.APP_PORT);
});

// nodemon - automatically run without restarting each time

