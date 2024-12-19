import { Activity } from "@/types/types";
import { activities } from "@/mocks/activities";
import { Suspense } from "react";
import SkeletonTable from "../_components/UI/CustomTableSkeleton";
import Link from "next/link";
import EntrancesTable from "./_components/EntrancesTable";

export default function EntrancePage() {

  const columns: (keyof Activity)[] = ['studentId', 'studentName', 'initialHour', 'finalHour', 'insideLibrary'];
  const headers = ['Matrícula', 'Nombre', 'Hora de entrada', 'Hora de salida', 'Dentro de la biblioteca'];

  return (
    <>
      <div className="max-w-fit mx-auto my-8 flex flex-col items-center">
        <h2 className="text-center text-4xl font-semibold">
          Entradas y Salidas
        </h2>
        <Link href="/auth/home/entrances/add">
          <button className="my-4 px-4 py-2 text-white bg-blue-500 rounded">
            Registrar Entrada
          </button>
        </Link>
      </div>

      <div className="w-4/5 max-w-fit mx-auto mb-8">
        <Suspense fallback={<SkeletonTable columns={columns.length} />} >
          <EntrancesTable columns={columns} headers={headers} data={activities} />
        </Suspense>
      </div>
    </>
  );
}
