import React, { useState } from "react"
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

function SiteHome() {

  const { currentUser } = useAuth();
  const {uid, email,displayName,photoURL } = currentUser 

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

                  <p>Visible groups: All participants </p>
                  
                </CardBody>
              </Card>
            </Col>
            <Col className="col-4 sm-col-12 mt-5">
              <Card >
                <CardBody>
                  <CardTitle className="h6">
                  Today's Quote
                  </CardTitle>
                  <p className="card-title-desc">
                  Pennies do not come from heaven. They have to be earned here on earth.
                  </p>
                  <a href="#"> Margaret Thatcher </a>
                  <a href="#"> more Quotes </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
         
        </Container>
      </div>
    </React.Fragment>
  )
}

export default SiteHome


