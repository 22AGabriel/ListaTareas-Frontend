const URL = process.env.REACT_APP_API_TAREAS;

export const consultarAPI = async() => {
    try {
        const respuesta = await fetch(URL);
        const listaTareas = await respuesta.json();
        return listaTareas;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const crearTareaAPI = async(tarea) => {
    try {
        const respuesta = await fetch(URL, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarea)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}