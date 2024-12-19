import Image from "next/image";

export default function AddLoan() {
    return (
        <div className="flex flex-col items-center justify-center my-12">
          <div className="w-1/3 bg-[#0F907C] rounded-lg shadow-lg">
            <h2 className="text-2xl text-center text-white font-bold my-4">Registrar Préstamo</h2>
            <Image
              src="/UTMA.svg"
              alt="Logo"
              width={120}
              height={120}
              className="m-auto mb-4"
            />
            <form className="space-y-3 overflow-y-hidden">
              <div
                className="mx-4"
              >
                <label htmlFor="studentId" className="text-white text-sm">Estudiante</label>
                <select
                    id="studentId"
                    className="w-full rounded-md h-8 px-3 text-black mt-1"
                >
                    <option value="">Seleccionar estudiante</option>
                    <option value="UTM22030587">Carlos Galindo</option>
                    <option value="UTM22020588">Erasmo Díaz</option>
                    <option value="UTM22030589">Karen Moreno</option>
                </select>
              </div>
              <div
                className="mx-4"
              >
                <label htmlFor="bookISBN" className="text-white text-sm">Libro</label>
                <select
                    id="bookISBN"
                    className="w-full rounded-md h-8 px-3 text-black mt-1"
                >
                    <option value="">Seleccionar libro</option>
                    <option value="978-84-376-0494-7">Libro 1</option>
                    <option value="978-84-376-0494-8">Libro 2</option>
                    <option value="978-84-376-0494-9">Libro 3</option>
                </select>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-5/6 bg-[#6DA5C0] rounded-md py-2 text-white font-bold my-4 hover:bg-[#5d8a99] transition"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}
