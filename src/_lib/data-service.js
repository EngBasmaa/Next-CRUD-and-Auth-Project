import dbConnection from "./dbConnection";
import User from "@/models/user";

// export async function getAllUsers() {
//   await dbConnection();
//   return User.find({});
  
// }

// في src/_lib/index.js أو أينما كان
export async function getAllUsers() {
  await dbConnection();
  const users = await User.find({});

  return users.map((user) => ({
    id: user._id.toString(), // نستخدم _id كـ string آمن
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
    imageBase64: user.imageBase64 || "",

    address: {
      city: user.address?.city || "",
      country: user.address?.country || ""
    },
    company: {
      name: user.company?.name || "",
      catchPhrase: user.company?.catchPhrase || ""
    }
  }));
}


export async function getUserById(id) {
  await dbConnection();
  if (!id) return null;
  return User.findById(id).lean().exec();  // <-- هنا استخدمنا lean()
}


export async function addUser(newUser) {
  await dbConnection();
  const user = new User(newUser);
  await user.save();
  return user;
}

export async function updateUser(id, updatedUser) {
  await dbConnection();
  return User.findByIdAndUpdate(id, updatedUser, { new: true }).exec();
}

export async function deleteUser(id) {
  await dbConnection();
  return User.findByIdAndDelete(id).exec();
}