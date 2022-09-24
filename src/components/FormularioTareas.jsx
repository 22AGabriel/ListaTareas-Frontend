import React from 'react';
import { Form, Button } from 'react-bootstrap'
import ListaTarea from './ListaTarea';

const FormularioTareas = () => {
    return (
        <>
            <Form className='my-5'>
                <Form.Group className='d-flex'>
                    <Form.Control className='me-2' type='tarea' placeholder='Tarea...' />
                    <Button variant='success' type='submit'>Agregar</Button>
                </Form.Group>
            </Form>
            <ListaTarea></ListaTarea>
        </>
    );
};

export default FormularioTareas;