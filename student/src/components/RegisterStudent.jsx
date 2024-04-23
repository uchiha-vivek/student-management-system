import { useState } from "react"
import StudentService from "../service/StudentService";


function RegisterStudent(){
    const[student,setStudent] = useState({
        id:"",
        studentName:"",
        branchName:"",
        email:""
    })

    function handleChange(e){
        const value = e.target.value;
        setStudent({...student,[e.target.name]:value})
        console.log(value);
    }

    function registerStudent(e){
        e.preventDefault();
        StudentService.registerStudent(student).then(function(res){
                console.log(res);
        }).catch(function(err){
            console.log(err);
        })
    }

    function resetStudent(){
        console.log("student successfully registered")
    }

    return(
        <>
        <div className="max-w-2xl flex mx-auto shadow border-b">
            <div className="px-9 py-9">
                <div className="text-2xl font-thin tracking-wider "> 
               <h1> Register Student</h1>
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
                    <button onClick={registerStudent} className="bg-green-400 text-black font-semibold rounded  py-2 px-6 ">
                        Register
                    </button>
                    <button onClick={resetStudent} className="bg-red-400 text-black font-semibold ml-6 py-2 px-6 rounded">
                        Reset
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default RegisterStudent