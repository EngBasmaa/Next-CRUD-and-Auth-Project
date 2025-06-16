"use client";

import { useState } from "react";
import { updateUser } from "@/_actions"; // استبدلي بالمسار الصحيح

export default function EditUserForm({ user, userId }) {
  // حالة الصورة للمعاينة
  const [imagePreview, setImagePreview] = useState(user.imageBase64 || "/uploads/client3.webp");

  // معالج تغيير الصورة
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result); // حدث المعاينة بالصورة الجديدة بصيغة base64
    };
    reader.readAsDataURL(file);
  }

  return (
    <main className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h1 className="text-center mb-4 mt-3">Edit User</h1>

        <form
          action={async formData => {
            await updateUser(userId, formData);
          }}
          encType="multipart/form-data"
          className="border rounded p-4 shadow"
        >
          {[
            { name: "name", type: "text", required: true },
            { name: "email", type: "email", required: true },
            { name: "phone", type: "text" },
            { name: "website", type: "text" },
            { name: "city", type: "text" },
            { name: "country", type: "text" },
            { name: "companyName", type: "text" },
            { name: "catchPhrase", type: "text" }
          ].map(({ name, type, required }) => (
            <div className="mb-3" key={name}>
              <input
                type={type}
                name={name}
                required={required}
                placeholder={name[0].toUpperCase() + name.slice(1)}
                className="form-control"
                defaultValue={
                  name === "companyName"
                    ? user.company?.name || ""
                    : name === "catchPhrase"
                    ? user.company?.catchPhrase || ""
                    : name === "city"
                    ? user.address?.city || ""
                    : name === "country"
                    ? user.address?.country || ""
                    : user[name] || ""
                }
              />
            </div>
          ))}

          <div className="mb-3">
            <label className="form-label">User Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="form-control"
              onChange={handleImageChange} // مهم: إضافة معالج تغيير الصورة
            />
          </div>

          <div className="mb-3 text-center">
            <img
              src={imagePreview}
              alt="User Image Preview"
              style={{ maxWidth: "150px", borderRadius: "10px" }}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn px-4 py-2"
              style={{ backgroundColor: "var(--primary)", color: "#fff" }}
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
