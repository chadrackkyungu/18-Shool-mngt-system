import React from "react";
import { Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const CoursesBox = ({ courses }) => {
  return (
    <React.Fragment>
      {/* {(courses || []).map((course, key) => ( */}
      { courses.map((course, key) => {
        console.log(key)

        return(
<Col lg={4} key={key}>
          <div className="mt-4 bg-white courses_cursor" data-aos="fade-left"  data-aos-duration="2000">
            <div className="plan-features w-100">
                <img src={course.img} alt="" className="w-100" />
            </div>

            <div className="p-4">
                <h4 className="text-uppercase py-4">{course.title}</h4>
                <p>{course.desc}</p>

                <Link to={`/course-detail/${key}`}>
                  <Button size="small" className="bg-primary text-white">   Read more </Button>
                </Link>

            </div>
          </div>
        </Col>
        )
        
        
        }
      
      
      )}
    </React.Fragment>
  );
};

export default CoursesBox;