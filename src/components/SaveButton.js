function SaveButton({onClick}) {
    return(
        <button onClick={onClick} className="px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline" type="button">
            Guardar
        </button>
    );
}
export default SaveButton;