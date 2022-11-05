import React, { useState } from 'react';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { consultarAPI } from './helpers/queries';
import ItemTarea from './ItemTarea';

const ListaTarea = ({tareas, setTareas}) => {

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setTareas(respuesta);
    })
  }, [])

    return (
        <ListGroup>
          {
            tareas.map((tarea) => <ItemTarea key={tarea.id} tarea={tarea} setTareas={setTareas}></ItemTarea>)
          }
        </ListGroup>
    );
};

export default ListaTarea;