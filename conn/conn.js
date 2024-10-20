const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://darshanhp1611:darshan1611@cluster0.a6jat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("Connected");

      });
  } catch (error) {
    console.log(error);
  }
};
conn();
