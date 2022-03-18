import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
// import SectionTitle from "components/Common/SectionTitle";

//Import Pricing
import CourseBox from "../Courses/CoursesBox";

const coursesObj = [
  {
    title: "Flutter",
    img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2020/07/flutter-mobile-web-desktop.jpg",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "ReactJS",
    img: "https://crowdbotics.ghost.io/content/images/2021/05/React-Native-Img.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "PHP",
    img: "https://stackify.com/wp-content/uploads/2019/02/How-to-Log-to-Console-in-PHP-01-881x461.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Redux",
    img: "https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/5186775737696256/image/download/6611525209948160",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "NextJS",
    img: "https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Tailwindcss",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--6G3dXtLX--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/0gbfcs5a2q7punlgd1b3.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "JavaScript",
    img: "https://www.hitxgh.com/php_system/uploads/2021/05/learn-java.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "C++",
    img: "https://hackr.io/blog/what-is-cpp/thumbnail/large",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },
  {
    title: "Phyton",
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
