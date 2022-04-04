import React from 'react';
import { useParams } from "react-router-dom";

import  { getCoursesDetails } from '../../assets/Data-Object/dataObjt';


import { FcOpenedFolder, FcQuestions } from 'react-icons/fc';
import { MdForum } from 'react-icons/md';
import { VscFileSubmodule } from 'react-icons/vsc';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { GiUsbKey } from 'react-icons/gi';
import { AiFillFileText } from 'react-icons/ai';
import { BsFileEarmarkZipFill } from 'react-icons/bs';
import { FaFilePdf } from 'react-icons/fa';

import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useAuth } from '../../Contexts/AuthContext';
// import { HiVolumeUp } from "react-icons/hi";


function CourseDetail() {

    const { currentUser } = useAuth();
    const {uid, email,displayName,photoURL } = currentUser 

    //* Note this name {courseId} is the same as the one inside the <allRoutes.jsx pages> 
    const {courseId} = useParams();
    const courseDet = getCoursesDetails(parseInt(courseId));

    console.log(courseDet);

  return (
    <React.Fragment>
    <div className="page-content">
      <MetaTags>
        <title>
         School Management System
        </title>
      </MetaTags>
      <Container fluid={true}>
        <Breadcrumbs
          maintitle="Dashboard"
          title="School Management"
          breadcrumbItem={`Course-Details/${courseId}`}
        />

        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <div className="d-flex" data-aos="zoom-out-right">
                  <div className="ms-3">
                  {
                      photoURL ? ( <img
                        src={photoURL}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />) : ( <img
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />)
                    }
                  </div>
                  <div className="align-self-center flex-1 px-3">
                    <div className="text-muted">
                      <h5>{displayName}</h5>
                      <p className="mb-1">{ email }</p>
                      <p className="mb-0">Id no: #{  uid }</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="xl-col-12 sm-col-12 mt-5 flex-md-column">
            <Card >
               <CardBody>
                <CardTitle className="course__title" data-aos="zoom-in-right">
                  {courseDet.title}
                </CardTitle>
                <div className="image__details">
                    <img src={courseDet.img} alt="" data-aos="zoom-in-right"/>
                </div>
                {/* <p className="card-title-desc mt-4 bg-primary text-white p-2">
                </p> */}
              <Row>
              <Col className="xl-col-6 sm-col-12 mt-5 flex-md-column">
                {/* <Card > */}
                <ul>
                  <h1> <MdForum size={25} /> Announcements  </h1>
                  <li> <a href="#"> <VscFileSubmodule size={25} /> Lecture forum </a></li>
                  <li> <a href="#"> <VscFileSubmodule size={25} /> Academic faculty forum </a></li>
                  <li> <a href="#"> <BsFillChatLeftTextFill size={22} /> Real-time Chat room </a></li>
                  <li> <a href="#"> <BsFillChatLeftTextFill size={22} /> Glossary of terms </a></li>
                  <h3> Material </h3>
                  <li> <a href="#"> <GiUsbKey size={25} /> Key definitions used in this moduleGlossary </a></li>
                  <li> <a href="#"> <AiFillFileText size={25} /> Contextual application of SAQA level descriptorsPage </a></li>
                  <li> <a href="#"> <AiFillFileText size={25} /> Assessment and examinations for this modulePage </a></li>
                  <li><a href="#"> <FcOpenedFolder size={25} />Past Year PapersFolder </a></li>
                  <li> <a href="#"> <BsFileEarmarkZipFill size={25} />Quantitative Techniques 600_2022File</a></li>
                </ul>
                {/* </Card> */}
                </Col>

                <Col className="xl-col-6 sm-col-12 mt-5 flex-md-column assignment">
                  <h2>  Semester one_2022 </h2>
                  <a href="#"> <FaFilePdf size={25} /> 2022 - Contact - Written Assignment 2</a>

                  <div className="catest">
                    <h2>Ca Test One 2022</h2>
                    <a href=""> <FcQuestions size={25} /> 2022_REVIEW QUESTIONQuiz</a>
                  </div>
                </Col>

                </Row >

                  {
                    courseDet.chapters.map(chap => {
                      return(
                        <> 
                        <hr />
                        <Row className="mt-5 flex__topic" >
                          <Col className="xl-col-6 sm-col-12 mt-5 flex-md-column" >
                            <ul> 
                              <h3 >Chapter {chap.id} : {chap.title}</h3>
                              <h5 >{chap.one}</h5>
                              <li>{chap.p_1}</li>
                              <li>{chap.p_2}</li>
                              <li>{chap.p_3}</li>
                              <li>{chap.p_4}</li>
                              <li>{chap.p_5}</li>
                              <li>{chap.p_6}</li>
                              <b>  <a href={chap.pdf}> <FcOpenedFolder size={30} color="red" /> Downloadable Learning Resource </a> </b>
                            </ul>
                          </Col>

                        <Col className="xl-col-6 sm-col-12 mt-5 flex-md-column img_pf">
                          <div className="image__con">
                            <img src={chap.img} alt="" />
                          </div>
                        </Col>

                        </Row>
                        
                        </>
                      )
                    })
                  }
               
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
  )
}

export default CourseDetail