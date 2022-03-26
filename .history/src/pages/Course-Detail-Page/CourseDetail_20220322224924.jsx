import React from 'react';
import { useParams } from "react-router-dom";
import  { getCoursesDetails } from '../../assets/Data-Object/dataObjt';

function CourseDetail() {

    const key = useParams();
    const courseDet = getCoursesDetails();
    console.log(courseDet);
    console.log(key);


  return (
    <div>
        <h1>  Course Details </h1>
    </div>
  )
}

export default CourseDetail