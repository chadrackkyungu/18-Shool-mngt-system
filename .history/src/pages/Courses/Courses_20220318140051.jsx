import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
// import SectionTitle from "components/Common/SectionTitle";

//Import Pricing
import CourseBox from "../Courses/CoursesBox";

const coursesObj = [
  {
    title: "Slack",
    img: "https://media.flaticon.com/dist/min/img/home/slides-home/gsuite-slide.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Amazon",
    img: "https://piktochart.com/wp-content/uploads/2020/09/Infographic_benefit_templatesno-video.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Discord",
    img: "https://piktochart.com/wp-content/uploads/2021/07/Piktochart-reports.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Takealot",
    img: "/static/images/cards/paella.jpg",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Alibaba",
    img: "https://hackr.io/blog/what-is-cpp/thumbnail/large",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Discord",
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687413/retina_1708x683_cover-0402-an-introduction-to-mocking-in-python-Waldek_Newsletter-fdc7cce1eda95aee17e25b769a2bd183.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
];

const Courses = (props) => {
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
