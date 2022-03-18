import React from "react";
import { Col } from "reactstrap";
import Link from "next/link";


const CoursesBox = ({ courses }) => {
  return (
    <React.Fragment>
      {(courses || []).map((pricing, key) => (
        <Col lg={4} key={key}>
          <div className="mt-4">
            <div
              className={
                pricing.isActive
                  ? "text-center pricing-box bg-white hover-effect price-active"
                  : "text-center pricing-box hover-effect"
              }
            >
              <h4 className="text-uppercase">{pricing.title}</h4>

              <div className="plan-features w-100">
                <img src={pricing.img} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default CoursesBox;
