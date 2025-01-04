import { Suspense } from "react";
import Users from "./_components/Users";
import RegisterFormSkeleton from "./_components/Skeleton/RegisterFormSkeleton";

export default function UsersPage() {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <Suspense fallback={<RegisterFormSkeleton />}>
        <Users />
      </Suspense>
    </div>
  );
}
