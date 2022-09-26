import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTarea = ({arregloTareas}) => {
    return (
        <ListGroup>
            {
              arregloTareas.map((tarea, posicion)=><ItemTarea key={posicion} nombreTarea={tarea}></ItemTarea>)
            }
        </ListGroup>
    );
};

export default ListaTarea;