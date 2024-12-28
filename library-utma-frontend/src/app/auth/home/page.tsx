export default function HomePage() {
    return (
        <div className="bg-[#05161A] flex flex-col items-center justify-center h-full">
            <div className="max-w-4xl text-center">
                <h1 className="text-5xl font-extrabold text-[#6DA5C0] mb-6">
                    Bienvenido al Sistema de Biblioteca UTMA
                </h1>
                <p className="text-lg text-[#0F907C] mb-8">
                    Gestiona tus libros, usuarios y registros fácilmente con nuestro sistema moderno y eficiente.
                </p>
                <div className="space-y-4">
                    <div className="px-6 py-3 bg-[#0F907C] text-[#05161A] rounded-lg text-lg font-medium shadow-md">
                        Catálogo: Explora y administra los libros disponibles.
                    </div>
                    <div className="px-6 py-3 bg-[#6DA5C0] text-[#05161A] rounded-lg text-lg font-medium shadow-md">
                        Usuarios: Administra los usuarios de la biblioteca.
                    </div>
                    <div className="px-6 py-3 bg-[#05161A] border-2 border-[#6DA5C0] text-[#6DA5C0] rounded-lg text-lg font-medium shadow-md">
                        Actividad: Revisa los registros de préstamos y devoluciones.
                    </div>
                </div>
            </div>
        </div>
    );
}
