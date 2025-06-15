"use client";
import { handleSubmit } from "@/_actions";

export default function AddUserPage() {
  return <main className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h1 className="text-center mb-4 mt-3">Add New User</h1>

        <form action={handleSubmit} className="border rounded p-4 shadow">
          {[{ name: "name", type: "text", required: true }, { name: "email", type: "email", required: true }, { name: "phone", type: "text" }, { name: "website", type: "text" }, { name: "city", type: "text" }, { name: "country", type: "text" }, { name: "companyName", type: "text" }, { name: "catchPhrase", type: "text" }].map(
            ({ name, type, required }) =>
              <div className="mb-3" key={name}>
                <input
                  type={type}
                  name={name}
                  required={required}
                  placeholder={name[0].toUpperCase() + name.slice(1)}
                  className="form-control"
                />
              </div>
          )}

          <div className="mb-3">
            <input type="file" name="image" accept="image/*" className="form-control" />
          </div>

          <div className="text-center">
            <button type="submit" className="btn px-4 py-2" style={{ backgroundColor: "var(--primary)", color: "#fff" }}>
              Add User
            </button>
          </div>
        </form>
      </div>
    </main>;
}
