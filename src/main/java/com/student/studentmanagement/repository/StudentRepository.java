package com.student.studentmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.student.studentmanagement.entity.StudentEntity;
 

@Repository
public interface StudentRepository extends JpaRepository<StudentEntity,Long> {

    // StudentModel saveAll(StudentModel studentModel);

}
