function CancelButton({href}) {
    return(
        <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline" type="button">
            <a href={href}>Cancelar</a>
        </button>
    );
}
export default CancelButton;