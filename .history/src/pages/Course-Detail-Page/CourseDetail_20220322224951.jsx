import React from 'react';
import { useParams } from "react-router-dom";
import  { getCourses } from '../../assets/Data-Object/dataObjt';

function CourseDetail() {

    const key = useParams();
    const courseDet = getCourses();
    console.log(courseDet);
    console.log(key);


  return (
    <div>
        <h1>  Course Details </h1>
    </div>
  )
}

export default CourseDetail