
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import TempRep from './pages/tempRep/TempRep';
function App() {
  return (
    <div >
      {/* <Homepage /> */}
      <Routes>
    
        <Route path='/' element = {<Homepage />}    />

        <Route path='/temp_reps' element = {<TempRep />}    />

      </Routes>
    </div>
  );
}

export default App;
