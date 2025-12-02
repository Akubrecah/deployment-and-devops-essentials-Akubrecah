const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/food-del")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error: ", err));

// API Routes
app.get("/", (req, res) => {
  res.send("API Working");
});

// Import Routes
const userRouter = require("./routes/userRoute");
const foodRouter = require("./routes/foodRoute");
// const cartRouter = require("./routes/cartRoute");
// const orderRouter = require("./routes/orderRoute");

app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

app.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
