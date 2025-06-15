import { getAllUsers } from "@/_lib/data-service";
import UserList from "@/components/userList/page";

export default async function UserListWrapper() {
  const users = await getAllUsers();

  return <UserList users={users} />;
}
