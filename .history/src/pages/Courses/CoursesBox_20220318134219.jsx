import React from "react";
import { Col, Button } from "reactstrap";

// xs={1} md={2} className="g-4"

const CoursesBox = ({ courses }) => {
  return (
    <React.Fragment>
      {(courses || []).map((course, key) => (
        <Col lg={4} key={key}>
          <div className="mt-4">

                <div className="plan-features w-100">
                <img src={course.img} alt="" className="w-100" />
                </div>

              <h4 className="text-uppercase">{course.title}</h4>

                <p>
                    {course.desc}
                </p>
                <Button size="small">Share</Button>

          </div>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default CoursesBox;
