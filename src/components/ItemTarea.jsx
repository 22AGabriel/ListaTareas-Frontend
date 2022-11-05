import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarTareaAPI, consultarAPI } from "./helpers/queries";

const ItemTarea = ({ tarea, setTareas }) => {
  const borrarTarea = () => {
    Swal.fire({
      title: "Eliminar Producto",
      text: "¿Estás seguro de eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      CancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarTareaAPI(tarea.id).then((respuesta) => {
          if (respuesta.status === 200){
            Swal.fire(
              "Tarea eliminada",
              "La tarea fue eliminada correctamente",
              "success"
            );
            consultarAPI().then((respuesta) => {
                setTareas(respuesta);
              })
          } else {
            Swal.fire(
              "Ocurrió un error",
              "Inténtelo nuevamente en unos minutos",
              "error"
            )
          }
        })
      }
    })
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea.nombreTarea}
      <Button variant="danger" onClick={borrarTarea}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
