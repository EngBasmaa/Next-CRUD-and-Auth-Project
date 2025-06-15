import { getAllUsers } from "@/_lib/data-service";
import UserList from "@/components/userList/page";

export default async function UserListWrapper() {
  try {
    const users = await getAllUsers();
    return <UserList users={users} />;
  } catch (error) {
    console.error("Error loading users:", error);
    return (
      <div className="alert alert-danger mt-4 text-center" role="alert">
        Failed to load users. Please try again later.
      </div>
    );
  }
}
