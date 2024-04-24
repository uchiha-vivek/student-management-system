import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../service/StudentService";



function StudentRefresher(){
   
   const {id} = useParams();
   const navigate =useNavigate();
   const [student,setStudent] = useState({
    id:id,
    studentName:"",
    branchName:"",
    email:""
   })

   const updateStudent = (e) => {
    e.preventDefault();
    console.log(student);
    StudentService.updateStudentById(student,id)
      .then((res) => {
        navigate("/studentcollection");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

   function handleChange(e){
    const value = e.target.value;
    setStudent({...student,[e.target.name]:value})
    console.log(value);
}

useEffect(() =>{

    const fetchData = async () => {
        try{
                const res = await  StudentService.getStudentById(student.id);
                setStudent(res.data)
        }catch(e){
            console.log(e);
        }
    }
    fetchData()
},[student.id])

    return(
        <>
        <div className="max-w-2xl flex mx-auto shadow border-b">
            <div className="px-9 py-9">
                <div className="text-2xl font-thin tracking-wider "> 
               <h1> Update Student</h1>
                </div>
                <div className="items-center w-full h-11 my-6 justify-center">
                    <label className="mr-4">Enter Student Name</label>
                    <input type="text" name="studentName" value={student.studentName} onChange={(e) => handleChange(e)} className="h-10 w-96 px-3 py-3 mt-2 border" ></input>
                </div>
                <div className="items-center w-full h-11 my-6 justify-center">
                    <label className="mr-4">Enter your Branch</label>
                    <input type="text" name="branchName" value={student.branchName} onChange={(e) => handleChange(e)} className="h-10 w-96 px-3 py-3 mt-2 border" ></input>
                </div>
                <div className="items-center w-full h-11 my-6 justify-center">
                    <label className="mr-4">Enter your Email</label>
                    <input type="email" name="email" value={student.email} onChange={(e) => handleChange(e)} className="h-10 w-96 px-3 py-3 mt-2 border" ></input>
                </div>
                <div className="justify-center items-center w-full mt-10 my-4 h-14 ">
                    <button onClick={updateStudent} className="bg-green-400 text-black font-semibold rounded  py-2 px-6 ">
                        Update
                    </button>
                    <button onClick={() => navigate("/studentcollection")}  className="bg-red-400 text-black font-semibold ml-6 py-2 px-6 rounded">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default StudentRefresher