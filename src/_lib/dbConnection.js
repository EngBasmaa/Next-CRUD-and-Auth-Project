import mongoose from "mongoose";

export default async function dbConnection() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect("mongodb://localhost:27017/usersDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}
