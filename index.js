// Imports from packages
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRoute = require("./routes/products");
const userRouter = require("./routes/user");

// INitialzations
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://mohammad:M1233210-9M@cluster0.bingc2g.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRoute);
app.use(userRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successfully");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
