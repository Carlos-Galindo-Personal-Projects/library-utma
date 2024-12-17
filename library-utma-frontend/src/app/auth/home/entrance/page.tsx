import CustomTable from "../_components/CustomTable";
import { Activity } from "@/types/types";
import { activities } from "@/mocks/activities";

export default function EntrancePage() {

    const columns: (keyof Activity)[] = ['studentId', 'studentName', 'initialHour', 'finalHour', 'insideLibrary'];
    const headers = ['Matrícula', 'Nombre', 'Hora de entrada', 'Hora de salida', 'Dentro de la biblioteca'];

    return (
      <div
      className="flex flex-col items-center justify-center h-full"
    >
      <div>
        <h2
          className="text-2xl font-semibold text-center"
        >
          Entrances Page
        </h2>
      </div>
      <div>
        <button
          className="my-4 px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add entrance
        </button>
      </div>
      <div>
        <CustomTable columns={columns} headers={headers} data={activities} />
      </div>
    </div>
    );
  }
