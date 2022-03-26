const coursesObj = [
    {
      id:1,
      title: "Flutter",
      img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2020/07/flutter-mobile-web-desktop.jpg",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      chapters:{
        chapter_1:{
          one:"Learning Objectives",
          p_1:"Describe business analysis and the role of the business analyst.",
          p_2:"Explain the Business Analysis Core Concept Model (BACCM™).",
          p_3:"Explore the six business analysis knowledge areas.",
          p_4:"Recognize the basic contents, structure, and intent of the BABOK ® Guide.", 
          p_5:"Map business analysis activities to a generic project life cycle.",
          p_6:"Understand the content and intent of the BABOK ® Guide. "
        },
        chapter_2:{
          one:"Learning Objectives",
          p_1:"Plan business analysis approach.",
          p_2:"Plan stakeholder engagement.",
          p_3:"Plan business analysis governance.",
          p_4:"Plan business analysis information management process.", 
          p_5:"Identify business analysis performance improvements.", 
        },
        chapter_3:{
          one:"Learning Objectives",
          p_1:"Understand the current state of the business.",
          p_2:"Define the desired future state of the business.",
          p_3:"Assess the risks inherent to the change.",
          p_4:"Develop a change strategy to achieve the desired business outcome.", 
        },
        chapter_4:{
          one:"Learning Objectives",
          p_1:"Tracing requirements and designs",
          p_2:"Maintaining requirements for reuse",
          p_3:"Prioritizing requirements",
          p_4:"Assessing requirements changes Approving requirements", 
        },
        chapter_5:{
          one:"Learning Objectives",
          p_1:"Prepare for elicitation.",
          p_2:"Conduct elicitation activity.",
          p_3:"Confirm elicitation results.",
          p_4:"Communicate business analysis information.", 
          p_5:"Manage stakeholder collaboration.", 
        }
      }
    },




    {
      id:2,
      title: "ReactJS",
      img: "https://crowdbotics.ghost.io/content/images/2021/05/React-Native-Img.png",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
     
    },
    {
      id:3,
      title: "PHP",
      img: "https://stackify.com/wp-content/uploads/2019/02/How-to-Log-to-Console-in-PHP-01-881x461.png",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id:4,
      title: "Redux",
      img: "https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/5186775737696256/image/download/6611525209948160",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
     
    },
    {
      id:5,
      title: "NextJS",
      img: "https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      id:6,
      title: "Tailwind-css",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--6G3dXtLX--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/0gbfcs5a2q7punlgd1b3.png",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      id:7,
      title: "JavaScript",
      img: "https://www.hitxgh.com/php_system/uploads/2021/05/learn-java.png",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      
    },
    {
      id:8,
      title: "C++",
      img: "https://hackr.io/blog/what-is-cpp/thumbnail/large",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      id:9,
      title: "Phyton",
      img: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687413/retina_1708x683_cover-0402-an-introduction-to-mocking-in-python-Waldek_Newsletter-fdc7cce1eda95aee17e25b769a2bd183.png",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
  ];


  //* This will be used on the Courses page screen
  export function getCourses() {
    return coursesObj;
  }

  //* this will be used on the Courses Details Page Screen
  export function getCoursesDetails(id) {
    return coursesObj.find(
      (course) => course.id === id
    );
  }
