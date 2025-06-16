import EditUserForm from "@/components/EditUserForm/page";
import { getUserById } from "@/_lib/data-service";

export default async function EditUserPage({ params }) {
  // انتظر الـ params لأنه Promise
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const user = await getUserById(id);

  if (!user) return <p>User not found</p>;

  return <EditUserForm user={user} userId={id} />;
}
