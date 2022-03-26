import React from 'react';
import { useParams } from "react-router-dom";
import  { getCoursesDetails } from '../../assets/Data-Object/dataObjt';

function CourseDetail() {
    const params = useParams();
    const courseDet = getCoursesDetails(2);
    console.log(courseDet);
  return (
    <div>
        <h1>  Course Details </h1>
    </div>
  )
}

export default CourseDetail