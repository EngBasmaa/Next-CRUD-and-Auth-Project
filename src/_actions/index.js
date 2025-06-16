"use server";
import { redirect } from "next/navigation";
import User from "@/models/user";
import dbConnection from "@/_lib/dbConnection";

export async function handleSubmit(formData) {
  await dbConnection();

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const website = formData.get("website");
  const city = formData.get("city");
  const country = formData.get("country");
  const companyName = formData.get("companyName");
  const catchPhrase = formData.get("catchPhrase");

  // image
  const file = formData.get("image");

  let imageBase64 = "";
  if (file && typeof file.arrayBuffer === "function") {
    const buffer = await file.arrayBuffer();
    imageBase64 = `data:${file.type};base64,${Buffer.from(buffer).toString(
      "base64"
    )}`;
  }
  // pring in server console
  console.log(formData);

  // save in my mongooDB
  await User.create({
    name,
    email,
    phone,
    website,
    address: { city, country },
    company: { name: companyName, catchPhrase },
    imageBase64
  });

  redirect("/users");
}

export async function updateUser(id, formData) {
  await dbConnection();

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const website = formData.get("website");
  const city = formData.get("city");
  const country = formData.get("country");
  const companyName = formData.get("companyName");
  const catchPhrase = formData.get("catchPhrase");

  const imageFile = formData.get("image");

  let imageBase64 = null;
  if (imageFile && imageFile.size > 0) {
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    imageBase64 = `data:${imageFile.type};base64,${buffer.toString("base64")}`;
  }

  const updateData = {
    name,
    email,
    phone,
    website,
    address: { city, country },
    company: { name: companyName, catchPhrase }
  };

  if (imageBase64) {
    updateData.imageBase64 = imageBase64;
  }

  const updatedUser = await User.findByIdAndUpdate(id, updateData, {
    new: true
  });

  if (!updatedUser) {
    throw new Error("User not found");
  }

  redirect(`/users/${id}`);
}
