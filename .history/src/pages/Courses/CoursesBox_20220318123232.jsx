import React from "react";
import { Col } from "reactstrap";


const CoursesBox = ({ courses }) => {
  return (
    <React.Fragment>
      {/* {(courses || []).map((course, key) => (
        <Col lg={4} key={key}>
          <div className="mt-4">
            <div
              className={
                course.isActive
                  ? "text-center pricing-box bg-white hover-effect price-active"
                  : "text-center pricing-box hover-effect"
              }
            >
              <h4 className="text-uppercase">{course.title}</h4>

              <div className="plan-features w-100">
                <img src={course.img} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </Col>
      ))} */}

{/* <Row > */}
  {(courses || []).map((course, key) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
{/* </Row> */}
    </React.Fragment>
  );
};

export default CoursesBox;
