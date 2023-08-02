
function InputNumber({label,placeholder}) {
    return(
        <div className="mb-6">
            <label className="text-left block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" min={0} placeholder={placeholder}/>
        </div>
    );
}
export default InputNumber;