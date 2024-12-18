import CustomTable from "../_components/CustomTable";
import { Activity } from "@/types/types";
import { activities } from "@/mocks/activities";

export default function EntrancePage() {

    const columns: (keyof Activity)[] = ['studentId', 'studentName', 'initialHour', 'finalHour', 'insideLibrary'];
    const headers = ['Matrícula', 'Nombre', 'Hora de entrada', 'Hora de salida', 'Dentro de la biblioteca'];

    return (
      <div
      className="flex flex-col items-center justify-center h-full my-12"
    >
      <div>
        <h2
          className="text-4xl font-semibold text-center"
        >
          Entradas y Salidas
        </h2>
      </div>
      <div>
        <button
          className="my-4 px-4 py-2 text-white bg-blue-500 rounded"
        >
          Registar Entrada
        </button>
      </div>
      <div>
        <CustomTable columns={columns} headers={headers} data={activities} />
      </div>
    </div>
    );
  }
