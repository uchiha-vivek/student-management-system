import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import StudentService from "../service/StudentService";


function StudentCollection(){
     
    const navigate = useNavigate()
    const [students,setStudent]= useState(null);
    const [load,setLoad] =useState(true);

    useEffect(() => {
         const fetchData = async () =>{
            setLoad(true);
            try{
            const res= await StudentService.fetchStudent()
            setStudent(res.data);
            }catch(e){
                console.log(e);
            }
            setLoad(false)
         }
         fetchData()
    },[])

    return(

         

        <>
         
   <div className="my-8 mx-auto container" >
         <div className="h-10">
            <button  onClick={() => navigate("/registerstudent") } className="rounded text-white px-6 py-8  bg-slate-700 " >
                Register Student
            </button>
            <div className="shadow flex mt-8 ">
                <table className="min-w-full"> 
                    <thead className="text-left">
                        <tr>
                            <th className="font-medium tracking-wide text-gray-600 ">Student Name</th>
                            <th className="font-medium tracking-wide text-gray-600">Branch Name</th>
                            <th className="font-medium tracking-wide text-gray-600">Email Name</th>
                            <th className="text-center  font-medium tracking-wide text-gray-600">Action</th>
                        </tr>
                    </thead>

                    {! load && (
                         <tbody className="bg-white">
                              {students.map((student) =>(

                                
                               
                         // eslint-disable-next-line react/jsx-key
                         <tr key={student.id} >

                             <td className="whitespace-nowrap text-left px-6 py-4">
                             <div className="text-sm text-gray-600" >
                                     {student.studentName}
                             </div>
                             </td>
                             <td className="whitespace-nowrap text-left px-6 py-4">
                             <div className="text-sm text-gray-600" >
                                     {student.branchName}
                             </div>
                             </td>
                             <td className="whitespace-nowrap text-left px-6 py-4">
                             <div className="text-sm text-gray-600" >
                                     {student.email}
                             </div>
                             </td>
                             <td className="whitespace-nowrap text-left px-6 py-4 font-medium text-sm">
                                 <a href="#" className="text-black-400 hover:text-black-400 px-4 ml-8" >Edit</a>
                                 <a href="#"  className="text-black-400 hover:text-black-400 " >Delete</a>
                             </td>
                               
                         </tr>
                         ) )}
                     </tbody>

                    )}
                    {/* <tbody className="bg-white">

                        <tr>
                            <td className="whitespace-nowrap text-left px-6 py-4">
                            <div className="text-sm text-gray-600" >
                                    Vivek
                            </div>
                            </td>
                            <td className="whitespace-nowrap text-left px-6 py-4">
                            <div className="text-sm text-gray-600" >
                                    Vivek
                            </div>
                            </td>
                            <td className="whitespace-nowrap text-left px-6 py-4">
                            <div className="text-sm text-gray-600" >
                                    Vivek
                            </div>
                            </td>
                            <td className="whitespace-nowrap text-left px-6 py-4 font-medium text-sm">
                                <a href="#" className="text-black-400 hover:text-black-400 px-4 ml-8" >Edit</a>
                                <a href="#"  className="text-black-400 hover:text-black-400 " >Delete</a>
                            </td>
                              
                        </tr>
                    </tbody> */}
                </table>
            </div>
         </div>
   </div>

        </>
    )
}

export default StudentCollection