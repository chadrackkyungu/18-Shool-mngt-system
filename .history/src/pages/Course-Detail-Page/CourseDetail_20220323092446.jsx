import React from 'react';
import { useParams } from "react-router-dom";
import  { getCoursesDetails } from '../../assets/Data-Object/dataObjt';

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
import { GrAnnounce } from '@heroicons/react/solid'


function CourseDetail() {

    const { currentUser } = useAuth();
    const {uid, email,displayName,photoURL } = currentUser 

    //* Note this name {courseId} is the same as the one inside the <allRoutes.jsx pages> 
    const {courseId} = useParams();
    const courseDet = getCoursesDetails(parseInt(courseId), 5);

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
                <CardTitle className="course__title">
                  {courseDet.title}
                </CardTitle>

                <div className="image__details">
                    <img src={courseDet.img} alt="" />
                </div>

                {/* <p className="card-title-desc mt-4 bg-primary text-white p-2">
                </p> */}

                <ul>
                  <h1>   
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 179.6C498.6 188.4 512 212.1 512 240C512 267.9 498.6 291.6 480 300.4V448C480 460.9 472.2 472.6 460.2 477.6C448.3 482.5 434.5 479.8 425.4 470.6L381.7 426.1C333.7 378.1 268.6 352 200.7 352H192V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V352C28.65 352 0 323.3 0 288V192C0 156.7 28.65 128 64 128H200.7C268.6 128 333.7 101 381.7 53.02L425.4 9.373C434.5 .2215 448.3-2.516 460.2 2.437C472.2 7.39 480 19.06 480 32V179.6zM200.7 192H192V288H200.7C280.5 288 357.2 317.8 416 371.3V108.7C357.2 162.2 280.5 192 200.7 192V192z"/></svg> 
                  <p> Announcements </p> </h1>
                  <li> <a> Lecture forum </a></li>
                  <li> <a> Academic faculty forum </a></li>
                  <li> <a> Real-time Chat room </a></li>
                  <li> <a> Glossary of terms </a></li>
                  <li> <a> Key definitions used in this moduleGlossary </a></li>
                  <li> <a> Contextual application of SAQA level descriptorsPage </a></li>
                  <li> <a>Assessment and examinations for this modulePage </a></li>
                  <li><a>Past Year PapersFolder </a></li>
                  <li> <a>Quantitative Techniques 600_2022File</a></li>
                </ul>

                
                <hr />
                <h5>______Semester one_2022______ </h5>
                <a href="">2022 - Contact - Written Assignment 2</a>

                <h5>_________CA TEST ONE_2022______</h5>

                <a href="">2022_REVIEW QUESTIONQuiz</a>


                <p>
                {courseDet.desc}
                </p>
               
                
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