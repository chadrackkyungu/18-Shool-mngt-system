import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation"

import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useAuth } from '../../Contexts/AuthContext';
import avatar from "../../assets/images/users/user-1.jpg"
import News from '../../assets/images/News-rafiki.svg';
import News2 from '../../assets/images/news.svg';

import axios from "axios";

function admin() {
    const { currentUser } = useAuth();
    const {uid, email,displayName,photoURL } = currentUser ;

    // const [title, setTitle] = useState("");
    // const [category, setCategory] = useState("");
    // const [newsArticle, setNewsArticle] = useState("");
    // const [fileName, setFileName] = useState("");

    const [error, setError] = useState(false);
    const [message, setMessage] = useState(""); 


    const handleValidSubmit = (event, values) => {
      event.preventDefault()
  
     console.log(values);
     const {title, category, newsArticle, fileName} = values;

    //  setTitle(title);
    //  setCategory(category);
    //  setNewsArticle(newsArticle);
    //  setFileName(fileName.files[0]);

     const formData = new FormData();
     formData.append('title', title);
     formData.append('category', category);
     formData.append('news', newsArticle);
     formData.append('articleImage', fileName);
 
     //! clear input after submitting to the database
    //  setTitle("");
    //  setCategory("");
    //  setNewsArticle("");
 
     //! here am submiting the user input to my database
     // axios.post('http://localhost:5000/api/add', post_data ) before
     axios.post('http://localhost:5500/api/add', formData ) //after image upload codes
     .then(res =>setMessage(res.data))
     .catch(err => setError(err))
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
              <p style={{color:"brown", textAlign:"center", marginBottom:"2em"}}>{message}</p>
              {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
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


            <Row className="d-flex justify-content-center">

                <Col xl="4" data-aos="fade-right">
                  <Card>
                    <CardBody>
                            <img src={News} alt={News} />
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                            <img src={News2} alt={News2} />
                    </CardBody>
                  </Card>
                </Col>


            <Col xl="8" data-aos="fade-up-left">
              <Card>
                <CardBody>
                  <h4 className="card-title"> Post School News, events ect... </h4>
                  <p className="card-title-desc">
                    Provide valuable, actionable feedback to your users with
                    HTML5 form validation???available in all our supported
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

                      <FormGroup className="mb-3">
                        <AvField 
                          name="select Info" 
                          type="select" 
                          label="Select Info"
                          placeholder="Select Info"
                          className="form-control"
                          required
                          id="exampleSelect">
                          <option>Events</option>
                          <option>Sport</option>
                          <option>Holiday</option>
                        </AvField>
                      </FormGroup>

                            <FormGroup>

                            <FormText color="muted">Choose an Image and upload </FormText>
                              <AvField 
                               name="file" 
                               type="file"
                               id="exampleFile" 
                               label="Choose Image"
                               placeholder="Choose Image"
                               className="form-control"
                               required 
                               />

                             
                            </FormGroup>

                      <FormGroup className="mt-4">
                        <AvField 
                          name="Message" 
                          type="textarea" 
                          id="exampleText" 
                          label="Info Message"
                          placeholder="Info Message"
                          className="form-control"
                          required 
                          rows={25}
                          />
                      </FormGroup>

                     <Row> 
                        <Col sm={6} className="text-end mt-4" >
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                            data-aos="zoom-in"
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