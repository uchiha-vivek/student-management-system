package com.student.studentmanagement.service;

import java.util.List;

import com.student.studentmanagement.entity.StudentEntity;


public interface StudentService {

 

     StudentEntity createStudent(StudentEntity studentEntity);

     List<StudentEntity> getAllStudents();

}
