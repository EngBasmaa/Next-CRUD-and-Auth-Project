import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  website: String,
  address: {
    city: String,
    country: String
  },
  company: {
    name: String,
    catchPhrase: String
  },
  imageBase64: String
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
