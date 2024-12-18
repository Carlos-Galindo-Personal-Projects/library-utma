import ButtonManagement from "./_components/ButtonManagement";

export default function DatabasePage() {
    return (
        <div className="flex flex-col justify-center items-center h-full my-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
                Mantenimiento de Base de Datos
            </h2>
            <div className="bg-primary p-6 rounded-lg shadow-md text-white w-full max-w-lg">
                <p className="text-lg font-semibold mb-4">
                    Al presionar el botón, se realizarán las siguientes acciones:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        Se eliminarán las entradas y salidas cuya fecha de salida haya excedido un mes.
                    </li>
                    <li>
                        Se eliminarán los préstamos de libros que ya han sido devueltos y cuya fecha de devolución haya superado un mes.
                    </li>
                </ul>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">
                        Consideraciones al eliminar datos:
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            La información eliminada no podrá ser recuperada, ya que se elimina de forma permanente.
                        </li>
                        <li>
                            Esta acción es irreversible, por lo que debe realizarse con cuidado.
                        </li>
                    </ul>
                </div>
                <div className="mt-6 flex justify-center">
                    <ButtonManagement />
                </div>
            </div>
        </div>
    );
}
