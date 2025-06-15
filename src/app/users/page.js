import Link from "next/link";
import { Suspense } from "react";
import UserListWrapper from "../../components/UserListWrapper/page";
import Loading from "../loading";

export default function UsersPage() {
  return (
    <div className="container pt-5 pb-5">
      <h2
        className="text-center mb-5 fw-bold"
        style={{ color: "var(--primary)" }}
      >
        All Users
      </h2>

      <Link
        href="/users/new"
        className="btn btn-primary"
        style={{
          backgroundColor: "var(--primary)",
          borderColor: "var(--primary)",
          padding: "0.5rem 1.5rem",
          marginBottom: "3rem"
        }}
      >
        Add User
      </Link>

      <Suspense
        fallback={
          <Loading className="d-flex justify-content-center align-items-center" />
        }
      >
        <UserListWrapper />
      </Suspense>
    </div>
  );
}
