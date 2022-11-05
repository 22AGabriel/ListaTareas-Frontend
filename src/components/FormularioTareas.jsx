import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearTareaAPI } from "./helpers/queries";
import ListaTarea from "./ListaTarea";
import Swal from "sweetalert2";

const FormularioTareas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const borrarTarea = (nombre) => {
    // let arregloModificado = arregloTareas.filter((item) => item !== nombre);
    // setArregloTareas(arregloModificado);
  };

  const onSubmit = (data) => {
    crearTareaAPI(data).then((respuesta) => {
      if(respuesta.status === 201){
        Swal.fire("Tarea creada", "La tarea se creó correctamente", "success");
        reset();
      } else {
        Swal.fire("Ocurrió un error", "Inténtelo nuevamente en unos minutos", "error");
      }
    })
  }

  return (
    <>
      <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="d-flex">
          <Form.Control
            className="me-2"
            type="tarea"
            placeholder="Tarea..."
            {...register("nombreTarea", {
              required: "campo obligatorio",
              minLength: {
                value: 5,
                message: "El mínimo de caracteres es de 5",
              },
            })}
          />
          <Button variant="success" type="submit">
            Agregar
          </Button>
        </Form.Group>
        <Form.Group>
          <Form.Text className="text-danger">
            {errors.nombreTarea?.message}
          </Form.Text>
        </Form.Group>
      </Form>
      <ListaTarea borrarTarea={borrarTarea}></ListaTarea>
    </>
  );
};

export default FormularioTareas;
