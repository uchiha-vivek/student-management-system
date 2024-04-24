package com.student.studentmanagement.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.student.studentmanagement.entity.StudentEntity;
 
import com.student.studentmanagement.service.StudentService;

@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequestMapping("/student/v1")
public class StudentController {
    private final StudentService studentService;

    // constructor
    public StudentController(StudentService studentService){
         this.studentService=studentService;
    }

    // setting up controller for setting up new student
    @PostMapping("/students")
    public StudentEntity createStudent(@RequestBody StudentEntity studentEntity){
             return studentService.createStudent(studentEntity);

    }
    @GetMapping("/students")
    public List<StudentEntity> getAllStudents(){
        return studentService.getAllStudents();
    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteStudent(@PathVariable Long id){
               boolean remove = false;
               remove = studentService.deleteStudent(id);
               Map<String,Boolean> response = new HashMap<>();
               response.put("Student removed",remove);
               return ResponseEntity.ok(response);
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<StudentEntity> getStudentById(@PathVariable Long id){
        StudentEntity studentEntity = null;
        studentEntity = studentService.getStudentById(id);
        return ResponseEntity.ok(studentEntity);
    }

    @PutMapping("/students/{id}")
    public ResponseEntity<StudentEntity> updateStudentById(@PathVariable Long id, @RequestBody StudentEntity studentEntity ){
        studentEntity= studentService.updateStudentById(id,studentEntity);
        return ResponseEntity.ok(studentEntity);
    }


}
