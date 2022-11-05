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