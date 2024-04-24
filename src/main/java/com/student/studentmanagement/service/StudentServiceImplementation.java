package com.student.studentmanagement.service;

 
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.student.studentmanagement.entity.StudentEntity;
 
import com.student.studentmanagement.repository.StudentRepository;

@Service
public class StudentServiceImplementation implements StudentService {

    private StudentRepository studentRepository;

    // constructor

    public StudentServiceImplementation(StudentRepository studentRepository){
        this.studentRepository=studentRepository;
    }

   @Override    
    public StudentEntity createStudent(StudentEntity studentEntity){
        
        // BeanUtils.copyProperties(studentModel, studentEntity);
        // studentRepository.save(studentEntity);
        // return studentModel;
     return studentRepository.save(studentEntity);
      
    }

   @Override
   public List<StudentEntity> getAllStudents(){
        //    return studentRepository.findAll();

        List<StudentEntity> studentEntities = studentRepository.findAll();
         List<StudentEntity>  studentEntities2 = studentEntities.stream().map(std -> new StudentEntity(std.getId(),
         std.getStudentName(),
         std.getBranchName(),
         std.getEmail()
         )).collect(Collectors.toList());
        return studentEntities2;

   }

   @Override
   public boolean deleteStudent(Long id){
    StudentEntity studentEntity = studentRepository.findById(id).get();
    studentRepository.delete(studentEntity);
    return true;
   }
 
  @Override
  public StudentEntity getStudentById(Long id){

    StudentEntity studentEntity = studentRepository.findById(null).get();
    StudentEntity studentEntity2 =new StudentEntity();
    BeanUtils.copyProperties(studentEntity, studentEntity2);
    return studentEntity2;
  }


  @Override
  public StudentEntity updateStudentById(Long id,StudentEntity studentEntity){
    StudentEntity studentEntity2 = studentRepository.findById(id).get();
    studentEntity2.setStudentName(studentEntity.getStudentName());
    studentEntity2.setBranchName(studentEntity.getBranchName());
    studentEntity2.setEmail(studentEntity.getEmail());
    studentRepository.save(studentEntity2);
    return studentEntity;
  }

}
