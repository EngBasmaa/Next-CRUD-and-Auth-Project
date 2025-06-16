"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { BiSolidBusiness } from "react-icons/bi";

export default function UserList({ users: initialUsers }) {
  const [users, setUsers] = useState(initialUsers || []);
  const [deletingId, setDeletingId] = useState(null);

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      setDeletingId(id);
      const res = await fetch(`/api/users?id=${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "An error occurred while deleting");
        setDeletingId(null);
        return;
      }

      setUsers(users.filter((user) => (user._id || user.id) !== id));
      setDeletingId(null);
    } catch (error) {
      alert("An error occurred while deleting");
      setDeletingId(null);
    }
  }

  if (!users || users.length === 0) return <div>No users found</div>;

  return (
    <div className="row row-cols-1 row-cols-md-3 g-5">
      {users.map((user) => {
        const userId = user._id || user.id;
        return (
          <div className="col" key={userId}>
            <Link
              href={`/users/${userId}`}
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div
                className="card h-100 shadow-sm border-1"
                style={{ backgroundColor: "var(--muted)", borderRadius: "10px" }}
              >
                <div className="card-body p-4 text-muted">
                  <div className="d-flex justify-content-center mb-3">
                    <img
                      src={user.imageBase64 || "uploads/client3.webp"}
                      alt={user.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <h5
                    className="card-title text-center mb-3 fw-semibold"
                    style={{ color: "var(--primary)" }}
                  >
                    <FaUser className="me-2" />
                    {user.name}
                  </h5>
                  <p className="mb-2">
                    <strong style={{ color: "var(--secondary)" }}>Email: </strong>
                    {user.email}
                  </p>
                  <p className="mb-2">
                    <strong style={{ color: "var(--secondary)" }}>Phone: </strong>
                    {user.phone}
                  </p>
                  <p className="mb-2">
                    <strong style={{ color: "var(--secondary)" }}>City: </strong>
                    {user.address?.city}
                  </p>
                  <hr className="my-3" />
                  <h6 style={{ color: "var(--primary)" }}>
                    <BiSolidBusiness className="me-2" />
                    {user.company?.name}
                  </h6>
                </div>
              </div>
            </Link>

            <Link
              href={`/users/${userId}/edit`}
              className="btn me-2"
              style={{ backgroundColor: "var(--primary)", color: "#fff" }}
            >
              Edit
            </Link>

            <button
              onClick={() => handleDelete(userId)}
              disabled={deletingId === userId}
              className="btn btn-danger"
              style={{ flex: 1 }}
            >
              {deletingId === userId ? "Deleting..." : "Delete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
