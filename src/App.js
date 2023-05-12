import logo from './logo.svg';
import './App.css';
import Essay from './components/Essay/Essay';
import StableDiffusion from './components/Essay/StableDiffusion';
import { useState } from 'react';

function App() {
  const [page,setPage] = useState(0)
  return (
    
    <div className="App">
      {
        page ===0 ? <Essay setPage={setPage}></Essay> : <StableDiffusion setPage={setPage}></StableDiffusion>
      }
    
    </div>
  );
}

export default App;
