import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
  FormGroup,
  Button,
  CardSubtitle,
  Label,
  Input,
  CustomInput,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation"

import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useAuth } from '../../Contexts/AuthContext';
import avatar from "../../assets/images/users/user-1.jpg"

function admin() {
    const { currentUser } = useAuth();
    const {uid, email,displayName,photoURL } = currentUser ;


    const handleValidSubmit = (event, values) => {
      event.preventDefault()
  
     console.log(values);
    }

  
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
              title="School Management System"
              breadcrumbItem="Admin"
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
            <Col xl="8">
              <Card>
                <CardBody>
                  <h4 className="card-title"> Post School News, events ect... </h4>
                  <p className="card-title-desc">
                    Provide valuable, actionable feedback to your users with
                    HTML5 form validation–available in all our supported
                    browsers.
                  </p>


                  <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >

                      <FormGroup className="mb-3">
                        <AvField
                          name="Title"
                          type="text"
                          label="Info title"
                          placeholder="Info Title"
                          className="form-control"
                          required
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleSelect"> Select Info </Label>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Events</option>
                          <option>Sport</option>
                          <option>Holiday</option>
                          
                        </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <AvField type="textarea" name="text" id="exampleText" label="Info title"
                          placeholder="Info Title"
                          className="form-control"
                          required />
                      </FormGroup>

                     <Row> 
                        <Col sm={6} className="text-end">
                          <button
                            className="btn btn-success w-md waves-effect waves-light"
                            type="submit"
                          >
                           Submit Info
                          </button>
                        </Col>
                      </Row>

                    </AvForm>
                </CardBody>
              </Card>
            </Col>
           
          </Row>

          </Container>
        </div>
      </React.Fragment>
    )
  }

export default admin