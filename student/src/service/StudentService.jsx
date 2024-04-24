import axios from "axios";

const STUDENT_URI = "http://localhost:8080/student/v1/students";

class StudentService {

 registerStudent(student){
    return axios.post(STUDENT_URI,student);
 }
  fetchStudent(){
    return axios.get(STUDENT_URI);
  }

  deleteStudent(id){
     return axios.delete(STUDENT_URI + "/" +id);
  }

 getStudentById(id){
  return axios.get(STUDENT_URI + "/" + id);
 }

 updateStudentById(student,id){
  return axios.put(STUDENT_URI + "/" + id, student);
 }

}

export default new StudentService();