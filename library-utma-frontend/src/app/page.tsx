import { redirect } from "next/navigation";

export default function Home() {

  redirect("/login");

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
