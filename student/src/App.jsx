 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import RegisterStudent from './components/RegisterStudent'
import StudentCollection from './components/StudentCollection'
 

function App() {

 

  return(
    <>
     
        <BrowserRouter>
        <Navbar/>

         <Routes>
          <Route index element={<StudentCollection/>}></Route>
          <Route path="/" element={<StudentCollection/>}></Route>
          <Route path="/studentcollection" element={<StudentCollection/>}></Route>
          <Route path="/registerstudent" element={<RegisterStudent/>} ></Route>
         </Routes>

      
        </BrowserRouter>


      
        
    </>
  )

}

export default App