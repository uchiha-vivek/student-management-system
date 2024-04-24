/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

 




 function Student({student,deleteStudent}){
        const navigate =useNavigate();
    function editStudent(e,id){
      e.preventDefault();
      navigate(`/editStudent/${id}`);
    }

    return (
        <>
        
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
                                 <a onClick={(e,id) => editStudent(e,student.id) }  className=" hover:cursor-pointer text-black-400 hover:text-black-400 px-4 ml-8" >Edit</a>
                                 <a onClick={(e,id) => deleteStudent(e,student.id) }  className=" hover:cursor-pointer text-black-400 hover:text-black-400 " >Delete</a>
                             </td>
                               
                         </tr>
        
        
        </>
    )
 }

 export default Student