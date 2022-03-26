import React from 'react';
import { useParams } from "react-router-dom";
import  { getCoursesDetails } from '../../assets/Data-Object/dataObjt';

function CourseDetail() {

    // Note this name {courseId} is the same as the one inside the <allRoutes.jsx pages> 
    const {courseId} = useParams();
    const courseDet = getCoursesDetails(parseInt(courseId), 5);
    console.log(courseDet);




    // console.log(courseId);
    // console.log(courseDet);

    // const thisCourseDet = courseDet.find(course => course.id === courseId); 
    // console.log(thisCourseDet);


  return (
    <div>
        <h1>  Course Details </h1>
    </div>
  )
}

export default CourseDetail