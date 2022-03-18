import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "components/Common/SectionTitle";

//Import Pricing
import CourseBox from "../Courses/CoursesBox";

const coursesObj = [
  {
    title: "Slack",
    img: "https://media.flaticon.com/dist/min/img/home/slides-home/gsuite-slide.png",
  },
  {
    title: "Amazon",
    img: "https://piktochart.com/wp-content/uploads/2020/09/Infographic_benefit_templatesno-video.png",
  },
  {
    title: "Discord",
    img: "https://piktochart.com/wp-content/uploads/2021/07/Piktochart-reports.png",
  },
  {
    title: "Takealot",
    img: "https://cdn4.vectorstock.com/i/1000x1000/11/03/programming-and-coding-concept-code-on-screen-vector-35361103.jpg",
  },
  {
    title: "Alibaba",
    img: "https://cdn5.vectorstock.com/i/1000x1000/33/94/computer-monitor-screen-with-lines-program-code-vector-31813394.jpg",
  },
  {
    title: "Discord",
    img: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1998567/coding-svg-clipart-xl.png",
  },
];

const Courses = (props) => {
  return (
    <React.Fragment>
      <section className="section pt-5" id="pricing">
        <Container>
          {/* section title */}
          <SectionTitle
            title="My Projects"
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
          />

          <Row>
            <CourseBox courses={coursesObj} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Courses;
