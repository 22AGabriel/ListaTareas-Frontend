import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import ListaTarea from './ListaTarea';

const FormularioTareas = () => {
    const [tarea, setTarea] = useState('');
    const [arregloTareas, setArregloTareas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setArregloTareas([...arregloTareas, tarea]);
        setTarea('');
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
            <ListaTarea arregloTareas={arregloTareas}></ListaTarea>
        </>
    );
};

export default FormularioTareas;