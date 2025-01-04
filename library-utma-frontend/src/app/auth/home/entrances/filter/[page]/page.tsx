import Entrances from "../../_components/Entrances";
import Link from "next/link";

export default async function EntrancePage({ params }: { params: Promise<{ page: string }> }) {

  const { page } = await params;
  const currentPage = Number(page);

  return (
    <>
      <div className="max-w-fit mx-auto mt-8 flex flex-col items-center">
        <h2 className="text-center text-4xl font-semibold">
          Entradas y Salidas
        </h2>
        <Link href="/auth/home/entrances/add">
          <button className="my-6 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none rounded p-1 transition">
            Registrar Entrada
          </button>
        </Link>
      </div>

      <div className="w-4/5 max-w-fit mx-auto mb-8">
        <Entrances currentPage={currentPage} />
      </div>
    </>
  );
}
