import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import ListaTarea from './ListaTarea';

const FormularioTareas = () => {
    const tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareasStorage')) || [];
    const [tarea, setTarea] = useState('');
    const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage);

    useEffect(() => {
        localStorage.setItem('listaTareasStorage', JSON.stringify(arregloTareas))
    }, [arregloTareas])


    const handleSubmit = (e) => {
        e.preventDefault();
        setArregloTareas([...arregloTareas, tarea]);
        setTarea('');
    }

    const borrarTarea = (nombre) => {
        let arregloModificado = arregloTareas.filter((item) => item !== nombre);
        setArregloTareas(arregloModificado);
    }

    return (
        <>
            <Form className='my-5' onSubmit={handleSubmit}>
                <Form.Group className='d-flex'>
                    <Form.Control 
                    className='me-2' 
                    type='tarea' 
                    placeholder='Tarea...' 
                    onChange={(e) => setTarea(e.target.value)}
                    value={tarea}
                    minLength={5}
                    />
                    <Button variant='success' type='submit'>Agregar</Button>
                </Form.Group>
            </Form>
            <ListaTarea arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTarea>
        </>
    );
};

export default FormularioTareas;