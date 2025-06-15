import EditUserForm from "@/components/EditUserForm/page";
import { getUserById } from "@/_lib/data-service";

export default async function EditUserPage({ params }) {
  const user = await getUserById(params.id);
  console.log(user);
  console.log(params.id);

  return <EditUserForm user={user} />;
}
