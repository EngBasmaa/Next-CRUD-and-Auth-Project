import EditUserForm from "@/components/EditUserForm/page";
import { getUserById } from "@/_lib/data-service";

export default async function EditUserPage({ params }) {
  const awaitedParams = await params; // استنى params
  const id = awaitedParams.id;

  let user = await getUserById(id);

  if (!user) return <p>User not found</p>;

  user._id = user._id.toString();

  return <EditUserForm user={user} userId={id} />;
}
