import InputText from '../InputText';
import CancelButton from '../CancelButton';
import SaveButton from '../SaveButton';
import * as React from 'react';

function Forms() {
    return(
        <div>
            <h1 className='mt-4 text-3xl font-semibold text-center '>Login</h1>
            <div className="mt-8">
                <div></div>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                    <InputText
                        label={"Usuario"}
                        placeholder={"Ingrese el usuario"}
                    />
                    <InputText
                        label={"Contraseña"}
                        placeholder={"Ingrese Contraseña"}
                        type="password"
                    />
                    <div className="flex items-center justify-between">
                    <SaveButton
                        onClick={()=>{console.log("se guardó")}}
                    />
                    <CancelButton
                        href={"#"}
                    />
                    </div>
                </form>
                </div>
                </div>
    );
}
export default Forms;  