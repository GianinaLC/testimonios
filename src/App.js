import './App.css';
import Testimonio from './components/Testimonio';
import datosTestimonios from './data/data'


function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      {
        datosTestimonios.map(dato => <Testimonio
          key={dato.id} {...dato}
        />)
      }
    </div>
  );
}

export default App;
