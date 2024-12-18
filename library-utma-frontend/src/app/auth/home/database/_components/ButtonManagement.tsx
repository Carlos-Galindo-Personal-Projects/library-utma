"use client"

const ButtonManagement = () => {

    const handleClick = () => {
        if(confirm("¿Estás seguro de querer eliminar estos datos?")){
            alert("Datos eliminados correctamente");
        }
    }

    return (
        <button
            className="bg-red-600 hover:bg-red-700 text-lg px-16 py-1 rounded-xl shadow-md"
            onClick={handleClick}
        >
            Eliminar Datos
        </button>
    )
}

export default ButtonManagement
