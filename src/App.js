import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Qns from './components/Qns';
import Qn from './components/qns-folder/Qn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/qns' element={<Qns />} />
      <Route path='/qn/:id' element= {<Qn />} />
    </Routes>
  );
}

export default App;
