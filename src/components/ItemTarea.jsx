import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const ItemTarea = ({tarea, borrarTarea}) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {tarea.nombreTarea}
            <Button variant="danger" onClick={() => borrarTarea(tarea.nombreTarea)}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;