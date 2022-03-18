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
  console.log(currentUser);

  const {uid, email,displayName,photoURL } = currentUser ? currentUser : undefined

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
            maintitle="School Management"
            title="Home"
            breadcrumbItem="Site-Home"
          />
          <Row>
            <Col className="xl-col-8 sm-col-12 mt-5 flex-md-column">
              <Card >
                <CardBody>
                  <CardTitle className="h6">
                    Read Your Site
                  </CardTitle>
                  <p className="card-title-desc">
                    Please make sure before uploading your files to double check
                    you work and everything else
                  </p>
                  
                </CardBody>
              </Card>
            </Col>
            <Col className="col-4 sm-col-12 mt-5">
              <Card >
                <CardBody>
                  <CardTitle className="h6">
                    Read Your Site
                  </CardTitle>
                  <p className="card-title-desc">
                    Please make sure before uploading your files to double check
                    you work and everything else
                  </p>
                </CardBody>
              </Card>
            </Col>

              {/* <div>
                  <h5>user profile from React Context</h5>
                  <p>{JSON.stringify(currentUser, null, 2)}</p>
              </div> */}

          </Row>


          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="ms-3">
                      <img
                        src={currentUser ? photoURL : ""}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="align-self-center flex-1">
                      <div className="text-muted">
                        <h5>{currentUser ? displayName : ""}</h5>
                        <p className="mb-1">{currentUser ? email : " "}</p>
                        <p className="mb-0">Id no: #{ currentUser ? uid : ""}</p>
                      </div>
                    </div>
                  </div>
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


