import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './shared/NavBar';
import HomePage from './pages/HomePage';
import PacientesPage from './pages/PacientesPage';
import TareasPage from './pages/TareasPage';
import PagosPage from './pages/PagosPage';

function App() {
  return (
    <div className="">
      <BrowserRouter className="App">
        <NavBar/>
          <Routes>
            <Route exact strict path='' element={ <HomePage/> }/>
            <Route exact strict path='/pacientes' element={ <PacientesPage/> }/>
            <Route exact strict path='/pacientes/:id' element={ <div>Paciente X</div> }/>
            <Route exact strict path='/pacientes/:id/notas' element={ <div>Notas</div> }/>
            <Route exact strict path='/pacientes/:id/historias' element={ <div>Historias</div> }/>
            <Route exact strict path='/pacientes/:id/conceptualizaciones' element={ <div>Conceptualizaciones</div> }/>
            <Route exact strict path='/pacientes/:id/compartidos' element={ <div>Compartidos</div> }/>
            <Route exact strict path='/tareas' element={ <TareasPage/> }/>
            <Route exact strict path='/pagos' element={ <PagosPage/> }/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
