package com.student.studentmanagement.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.student.studentmanagement.entity.StudentEntity;
 
import com.student.studentmanagement.service.StudentService;

@CrossOrigin(origins = "http://localhost:5175")
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


}
