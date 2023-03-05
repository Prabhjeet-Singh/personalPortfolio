import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Pl from './components/Pl';
import Read from './components/Read';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/pl' element={<Pl/>}></Route>
      <Route path='/read' element={<Read/>}></Route>
     </Routes>
      </header>
    </div>
  );
}

export default App;
