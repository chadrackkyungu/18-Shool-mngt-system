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
import avatar from "../../assets/images/users/user-1.jpg"
import avatar_7 from "../../assets/images/users/user-7.jpg"
import avatar_10 from "../../assets/images/users/user-10.jpg"

function CourseDetail() {

    // Note this name {courseId} is the same as the one inside the <allRoutes.jsx pages> 
    const {courseId} = useParams();
    const courseDet = getCoursesDetails(parseInt(courseId), 5);
    console.log(courseDet);




    // console.log(courseId);
    // console.log(courseDet);

    // const thisCourseDet = courseDet.find(course => course.id === courseId); 
    // console.log(thisCourseDet);


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
          breadcrumbItem="Home"
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
          <Col className="xl-col-8 sm-col-12 mt-5 flex-md-column">
            <Card >
              <CardBody>
                <CardTitle className="h6">
                Site news
                </CardTitle>


               <b>  <a href="#"> Subscribe to this forum </a> </b>
                <p className="card-title-desc mt-4 bg-primary text-white p-2">
                You are not able to create a discussion because you are not a member of any group.
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