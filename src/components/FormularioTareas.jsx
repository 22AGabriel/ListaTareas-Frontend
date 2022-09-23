import React from 'react';
import { Form, Button } from 'react-bootstrap'

const FormularioTareas = () => {
    return (
        <Form>
            <Form.Group className='d-flex'>
                <Form.Control className='me-2' type='tarea' placeholder='Tarea...' />
                <Button variant='success' type='submit'>Agregar</Button>
            </Form.Group>
        </Form>
    );
};

export default FormularioTareas;