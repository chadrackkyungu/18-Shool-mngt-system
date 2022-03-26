import React from "react";
import { Col, Button } from "reactstrap";

const CoursesBox = ({ courses }) => {
  return (
    <React.Fragment>
      {(courses || []).map((course, key) => (
        <Col lg={4} key={key}>

          <div className="mt-4 bg-white" data-aos="fade-left"  data-aos-duration="2000">

            <div className="plan-features w-100">
                <img src={course.img} alt="" className="w-100" />
            </div>

            <div className="p-4">
                <h4 className="text-uppercase py-4">{course.title}</h4>
                <p>{course.desc}</p>
                <a href="">
                  <Button size="small" className="bg-primary text-white">   Read more </Button>
                </a>
            </div>
          </div>

        </Col>
      ))}
    </React.Fragment>
  );
};

export default CoursesBox;
