const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({
  path: path.join(__dirname, "./config/config.env"),
});
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const cookieParser = require("cookie-parser");
const cors = require("cors");
const user = require("./routes/User");
const provider = require("./routes/provider");
const food = require("./routes/foods");
const order = require("./routes/order");
const address = require("./routes/address");
const review = require("./routes/review");
const moment = require("moment");
const CronJob = require("cron").CronJob;
const initialData = require("./routes/initialData");
const foodModel = require("./models/food");
const app = express();
// env.config();
// app.use(cors());
app.use(cors({
  origin: ['http://localhost:3000', 'https://gharwala-khana.vercel.app', 'https://gharwalakhana.onrender.com'],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token', "Access-Control-Allow-Origin"],
  credentials: true,
  maxAge: 5000,
  exposedHeaders: ['*', 'Authorization', "https://gharwalakhana.onrender.com"]
}))


app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGODB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected");
  });
const updateFood = async () => {
  const foods = await foodModel.find();
  for (let i = 0; i < foods.length; i++) {
    await foodModel.findByIdAndUpdate(foods[i]._id, {
      $set: { quantity: foods[i].enteredQuantity },
    });
  }
};
const timeInSec = moment().endOf("day").valueOf();
new CronJob(
  "0 0 * * *",
  async () => {
    await updateFood();
  },
  null,
  true,
  "Asia/Kolkata"
);

// app.get('/', (req, res) => {
//   res.send('This is our Gharwala khana web api web App api');
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//   next();
// });


// app.use("/api/v1/user", user);
// app.use("/api/v1/provider", provider);
// app.use("/api/v1/food", food);
// app.use("/api/v1/order", order);
// app.use("/api/v1/address", address);
// app.use("/api/v1/review", review);
// app.use("/api/v1/initialData", initialData);
app.use("/user", user);
app.use("/provider", provider);
app.use("/food", food);
app.use("/order", order);
app.use("/address", address);
app.use("/review", review);
app.use("/initialData", initialData);
app.listen(process.env.PORT, () => {
  console.log("Server is Running on port " + process.env.PORT);
});
