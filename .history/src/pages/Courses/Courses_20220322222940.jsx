import React from "react";
import { Container, Row } from "reactstrap";

import CourseBox from "../Courses/CoursesBox";
import { getCourses } from '../../assets/Data-Object/dataObjt'


const Courses = (props) => {
  const coursesObj = getCourses();
  return (
    <React.Fragment>
      <section className="section pt-5" id="pricing">
        <Container>        
          <Row>
            <CourseBox courses={coursesObj} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Courses;
