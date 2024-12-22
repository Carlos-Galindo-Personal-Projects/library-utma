import { FC } from "react";
import Edit from "../../_components/Form/Edit";
import { DynamicPageProps } from "@/types/components";

const Page: FC<DynamicPageProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="flex flex-col items-center justify-center my-12">
      <Edit isbn={id} />
    </div>
  )
};
export default Page;
