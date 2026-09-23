import { useState } from "react";

function pila({
    const [stack, setStack]=useState([]);
    const [InputValue, setInputValue]=useState("");

    //agregar valores a la pila o arreglo
    const handlePush=(e)=>{
        e.preventDefault();
        if(InputValue.trim()==="") return;
        setStack([InputValue,...stack])
        setInputValue('');
    }

    //eliminar valores de un arreglo
    const handlePop=()=>{
        if(stack.length===0) return;

        //filtrar los elementos y eliminamos el tope de la pila
        const nuevoStack=stack.slice(1);
        setStack(nuevoStack);
    }

    const elementoTope=stack.length>0 ? stack[0]:'la pila esta vacia'
 return (
    <>
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth:'400px', margin:'0 auto'}}>
    <h2>Visualizar los datos de la pila</h2>
    {/**nicializamo el formulario para intrducir datos */}

    <div s>
    </>
    <>
    </>


    </div>
    </>
)
}

export default pila