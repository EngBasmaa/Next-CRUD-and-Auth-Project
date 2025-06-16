"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { BiSolidBusiness } from "react-icons/bi";

export default function UserPage() {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`/api/users?id=${id}`);
        if (!res.ok) throw new Error("User not found");

        const data = await res.json();

        // Replace empty or missing fields with null
        data.name = data.name || null;
        data.email = data.email || null;
        data.phone = data.phone || null;
        data.website = data.website || null;
        data.address = {
          city: data.address?.city || null,
          country: data.address?.country || null,
        };
        data.company = {
          name: data.company?.name || null,
          catchPhrase: data.company?.catchPhrase || null,
        };

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
        className="d-flex justify-content-center gap-5"
        style={{ maxWidth: "900px", margin: "0 auto", alignItems: "stretch" }}
      >
     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
  <img
    src={user.imageBase64 || "/uploads/client3.webp"}
    alt={user.name || "User Image"}
    style={{
      width: "380px",
      height: "auto",
      borderRadius: "12px",
      objectFit: "cover",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      flexShrink: 0,
    }}
  />

  <Link href="/users" className="btn btn-secondary mt-4">
    Back to Users
  </Link>
</div>

        <div
          className="card shadow-sm border-1"
          style={{
            backgroundColor: "var(--muted)",
            borderRadius: "12px",
            flex: 1,
            padding: "1.5rem",
            overflowY: "auto",
            maxHeight: "600px",
          }}
        >
          <div className="card-body text-muted">
            <h4 className="fw-bold mb-4" style={{ color: "var(--primary)" }}>
              <FaUser className="me-2" />
              {user.name ?? "null"}
            </h4>

            <p>
              <strong style={{ color: "var(--secondary)" }}>Email:</strong> {user.email ?? "null"}
            </p>
            <p>
              <strong style={{ color: "var(--secondary)" }}>Phone:</strong> {user.phone ?? "null"}
            </p>
            <p>
              <strong style={{ color: "var(--secondary)" }}>Website:</strong> {user.website ?? "null"}
            </p>

            <hr className="my-3" />

            <p>
              <strong style={{ color: "var(--secondary)" }}>City:</strong> {user.address.city ?? "null"}
              <br />
              <strong style={{ color: "var(--secondary)" }}>Country:</strong> {user.address.country ?? "null"}
            </p>

            <hr className="my-3" />

            <h6 style={{ color: "var(--primary)" }}>
              <BiSolidBusiness className="me-2" />
              {user.company.name ?? "null"}
            </h6>
            <p className="fst-italic">{user.company.catchPhrase ?? "null"}</p>
          </div>
        </div>
        
      </div>

     
    </div>
  );
}
