import React, { useState } from 'react';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { consultarAPI } from './helpers/queries';
import ItemTarea from './ItemTarea';

const ListaTarea = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setTareas(respuesta);
    })
  }, [tareas])

    return (
        <ListGroup>
          {
            tareas.map((tarea) => <ItemTarea key={tarea.id} tarea={tarea}></ItemTarea>)
          }
        </ListGroup>
    );
};

export default ListaTarea;