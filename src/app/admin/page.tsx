import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminDashboardCLient from "./AdminDashboardCLient";

async function AdminPage() {
  const user = await currentUser();
  //user is not logged in
  if (!user) redirect("/");

  const adminEmail = process.env.ADMIN_EMAIL;
  const userEmail = user.emailAddresses[0]?.emailAddress;

  // user is not an admin
  if (!adminEmail || adminEmail !== userEmail) redirect("/dashboard");
  return <AdminDashboardCLient />;
}

export default AdminPage;
