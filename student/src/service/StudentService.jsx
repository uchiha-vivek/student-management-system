import axios from "axios";

const STUDENT_URI = "http://localhost:8080/student/v1/students";

class StudentService {

 registerStudent(student){
    return axios.post(STUDENT_URI,student);
 }
  fetchStudent(){
    return axios.get(STUDENT_URI);
  }

}

export default new StudentService();