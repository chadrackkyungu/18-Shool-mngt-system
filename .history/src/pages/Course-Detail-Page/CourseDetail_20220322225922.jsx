import React from 'react';
import { useParams } from "react-router-dom";
import  { getCourses } from '../../assets/Data-Object/dataObjt';

function CourseDetail() {

    // Note this name {courseId} is the same as the one inside the <allRoutes.jsx pages> 
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