import React from "react"
import user6 from "../../assets/images/ckLogo.jpg"
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  FormGroup
} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation"
import Breadcrumbs from "../../components/Common/Breadcrumb"
  import { Link, useHistory, useLocation } from "react-router-dom"


function AccessAdmin() {

    const history = useHistory()
    const location = useLocation()

    // console.log(process.env.ADMIN_PIN_PAGE_ACCESS);

    const handleValidSubmit = (event, values) => {
        event.preventDefault()
        // localStorage.setItem("aminAccess", JSON.stringify(values.pin))
        // const access_admin = localStorage.getItem("aminAccess")
        // console.log(Number(access_admin));

        if(values.pin === "1234"){
            history.replace(location.state?.from ?? "/admin")
        }
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
              breadcrumbItem="Access To Admin Page"
            />

            <Row className=" mt-5 d-flex justify-content-center align-items-center">
              <Col lg="4" >
                <Card>
                  <CardBody>
                  <h4 className="font-size-18 mt-5 text-center"> Only Admin Can Access To this Page </h4>
                      <p className="text-muted text-center">
                        Hello Chad, Mske sure you have the pin with you in order to have acces to the admin Page
                      </p>
    
                      <AvForm 
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                      >
                        <div className="pt-3 text-center">
                          <img
                            src={user6}
                            className="rounded-circle img-thumbnail avatar-lg"
                            alt="thumbnail"
                          />
                          <h6 className="font-size-16 mt-3">Chadrack Kyungu</h6>
                        </div>
                         
                        <FormGroup className="mb-3">
                            <AvField
                            name="pin"
                            type="text"
                            placeholder="Enter Your Pin To Access The Admin page"
                            className="form-control"
                            required
                            />
                      </FormGroup>          
                        
    
                        <div className="row">
                          <div className="col-12 text-center">
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Unlock
                            </button>
                          </div>
                        </div>
                      </AvForm>
    
                      <div className="mt-5 pt-4 text-center">
                        <p>
                         
                          <Link
                            to="dashboard"
                            className="fw-medium text-primary"
                          >
                           Go back to the dashboard
                          </Link>
                        </p>
                    
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

export default AccessAdmin