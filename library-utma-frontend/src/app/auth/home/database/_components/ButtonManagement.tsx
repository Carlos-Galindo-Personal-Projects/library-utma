"use client"

const ButtonManagement = () => {

    const handleClick = () => {
        if(confirm("¿Estás seguro de querer eliminar estos datos?")){
            alert("Datos eliminados correctamente");
        }
    }

    return (
        <button
            className="text-white bg-red-600 hover:bg-red-700 active:bg-red-800 focus:ring-2 focus:ring-red-300 focus:outline-none p-1 transition text-lg px-16 py-1 rounded-xl shadow-md"
            onClick={handleClick}
        >
            Eliminar Datos
        </button>
    )
}

export default ButtonManagement
