


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditUserForm({ user, userId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: { city: "" },
    company: { name: "" }
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || { city: "" },
        company: user.company || { name: "" }
      });
    }
  }, [user]);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["city", "country"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value }
      }));
    } else if (
      ["name", "catchPhrase"].includes(name) &&
      e.target.closest(".company")
    ) {
      setFormData((prev) => ({
        ...prev,
        company: { ...prev.company, [name]: value }
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/users?id=${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      router.push("/users");
    } else {
      alert("Failed to update user");
    }
  };

  return (
    <div className="container py-5">
    <h2>Edit User</h2>
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          type="email"
          required
        />
      </div>

      <div className="mb-3">
        <label>Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label>City</label>
        <input
          name="city"
          value={formData.address?.city || ""}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label>Company</label>
        <input
          name="company"
          value={formData.company.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
  </div>
  );
}
