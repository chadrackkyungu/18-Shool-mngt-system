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




    const [fnm, setfnm] = useState(false)
    const [lnm, setlnm] = useState(false)
    const [unm, setunm] = useState(false)
    const [city, setcity] = useState(false)
    const [stateV, setstateV] = useState(false)
  
    function handleSubmit(e) {
      e.preventDefault()
  
      var fnm = document.getElementById("validationTooltip01").value
      var lnm = document.getElementById("validationTooltip02").value
      var unm = document.getElementById("validationTooltipUsername").value
      var city = document.getElementById("validationTooltip03").value
      var stateV = document.getElementById("validationTooltip04").value
  
      if (fnm === "") {
        setfnm(false)
      } else {
        setfnm(true)
      }
  
      if (lnm === "") {
        setlnm(false)
      } else {
        setlnm(true)
      }
  
      if (unm === "") {
        setunm(false)
      } else {
        setunm(true)
      }
  
      if (city === "") {
        setcity(false)
      } else {
        setcity(true)
      }
  
      if (stateV === "") {
        setstateV(false)
      } else {
        setstateV(true)
      }
  
      var d1 = document.getElementsByName("validate")
  
      document.getElementById("tooltipForm").classList.add("was-validated")
  
      for (var i = 0; i < d1.length; i++) {
        d1[i].style.display = "block"
      }
    }
  
    //for change tooltip display propery
    function changeHandeler(event, eleId) {
      if (event.target.value !== "")
        document.getElementById(eleId).style.display = "none"
      else document.getElementById(eleId).style.display = "block"
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


                  <AvForm className="needs-validation">

                    <Row>
                      <Col md="6">

                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01"> Info Title </Label>
                          <AvField
                            name="firstname"
                            placeholder="Info Title"
                            type="text"
                            errorMessage="Enter Infor Title"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </Col>


                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">
                            Last name
                            </Label>
                          <AvField
                            name="lastname"
                            placeholder="Last name"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col>

                    </Row>


                    <Row>

                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">City</Label>
                          <AvField
                            name="city"
                            placeholder="City"
                            type="text"
                            errorMessage=" Please provide a valid city."
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom03"
                          />
                        </FormGroup>
                      </Col>

                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom04">State</Label>
                          <AvField
                            name="state"
                            placeholder="State"
                            type="text"
                            errorMessage="Please provide a valid state."
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom04"
                          />
                        </FormGroup>
                      </Col>

                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom05">Zip</Label>
                          <AvField
                            name="zip"
                            placeholder="Zip Code"
                            type="text"
                            errorMessage=" Please provide a valid zip."
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom05"
                          />
                        </FormGroup>
                      </Col>

                    </Row>
                  
                    <Button color="primary" type="submit">Submit form</Button>
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