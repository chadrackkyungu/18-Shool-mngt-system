import React from 'react';
import { useParams } from "react-router-dom";
import  { getCourses } from '../../assets/Data-Object/dataObjt';

function CourseDetail() {

    const {courseId} = useParams();
    const courseDet = getCourses();

    const thisCourseDet = courseDet.find(course => course.id === courseId);

    console.log(thisCourseDet);
    console.log(course);


  return (
    <div>
        <h1>  Course Details </h1>
    </div>
  )
}

export default CourseDetail