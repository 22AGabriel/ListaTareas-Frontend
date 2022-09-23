import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import FormularioTareas from './components/FormularioTareas';

function App() {
  return (
    <>
      <Container className='my-5 text-center'>
        <div>
          <h1>Bienvenido</h1>
          <p>Ingresa tus tareas</p>
        </div>
        <FormularioTareas></FormularioTareas>
      </Container>
    </>
  );
}

export default App;