 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import RegisterStudent from './components/RegisterStudent'
import StudentCollection from './components/StudentCollection'
import StudentRefresher from './components/StudentRefresher'
 

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
          <Route path='/editStudent/:id'  element={<StudentRefresher/>} ></Route>
         </Routes>

      
        </BrowserRouter>


      
        
    </>
  )

}

export default App