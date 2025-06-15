"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { BiSolidBusiness } from "react-icons/bi";

export default function UserPage() {
  const router = useRouter();
  const pathname = usePathname(); // e.g. "/users/6423..."
  const id = pathname.split("/").pop();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`/api/users?id=${id}`); // pass id as query param
        if (!res.ok) throw new Error("User not found");

        const data = await res.json();
        setUser(data);
      } catch {
        router.push("/users");
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchUser();
  }, [id, router]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div className="container pt-5 pb-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "var(--primary)" }}>
        User Details
      </h2>

      <div
        className="card mx-auto shadow-sm border-1"
        style={{ maxWidth: "600px", backgroundColor: "var(--muted)", borderRadius: "12px" }}
      >
        <div className="card-body p-4 text-muted">
          <h4 className="fw-bold mb-4" style={{ color: "var(--primary)" }}>
            <FaUser className="me-2" />
            {user.name}
          </h4>

          <p><strong style={{ color: "var(--secondary)" }}>Email:</strong> {user.email}</p>
          <p><strong style={{ color: "var(--secondary)" }}>Phone:</strong> {user.phone}</p>
          <p><strong style={{ color: "var(--secondary)" }}>Username:</strong> {user.username}</p>
          <p><strong style={{ color: "var(--secondary)" }}>Website:</strong> {user.website}</p>

          <hr className="my-3" />

          <p><strong style={{ color: "var(--secondary)" }}>City:</strong> {user.address?.city}</p>
       

          <hr className="my-3" />

          <h6 style={{ color: "var(--primary)" }}>
            <BiSolidBusiness className="me-2" />
            {user.company?.name}
          </h6>
          <p className="fst-italic">{user.company?.catchPhrase}</p>
        </div>
      </div>

      <Link href="/users" className="btn btn-secondary mt-4">Back to Users</Link>
    </div>
  );
}
