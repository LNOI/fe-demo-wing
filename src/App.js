import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login/Login';
import Document from './components/Documents/Document';
import Content from './components/Content/Content';
import Employee from './components/Employee/Employee';

function App() {
  const [page,setPage] = useState(1)
  return (
    <>
      {
        page ===1 ? <Login setPage={setPage}></Login>:null
      }
      <Document setPage={setPage}></Document>
      {
        page ===2 ? <>
        <Content></Content>
        {/* <Employee></Employee> */}
        </>:null
      }
      {
        page ===3 ? <>
        <Employee></Employee>
        </>:null
      }
     
    </>
  )
}

export default App;
