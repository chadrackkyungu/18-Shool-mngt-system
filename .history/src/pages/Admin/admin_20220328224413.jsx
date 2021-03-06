import React, { useState} from "react"
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  FormGroup,
  ButtonGroup,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation"
import ToggleButton from 'react-bootstrap/ToggleButton'

import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useAuth } from '../../Contexts/AuthContext';
import avatar from "../../assets/images/users/user-1.jpg"
import News from '../../assets/images/News-rafiki.svg';
import News2 from '../../assets/images/news.svg';

import axios from "axios";
import { Link } from 'react-router-dom'


function admin() {
    const { currentUser } = useAuth();
    const {uid, email,displayName,photoURL } = currentUser ;

    const [error, setError] = useState(false);
    const [message, setMessage] = useState(""); 
    const [radioValue, setRadioValue] = useState('1');

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [news, setNews] = useState("")
  
    const radios = [
      { name: 'See All User', value: '1', link:"/user-auth-table-details" },
      { name: 'Radio', value: '2', link:"/user-auth-table-details" },
      { name: 'Radio', value: '3', link:"/user-auth-table-details" },
    ];
  


    const handleValidSubmit = (event, values) => {
      event.preventDefault()
     console.log(values);

     setTitle(values.title);
     setCategory(values.category);
     setNews(values.news);

     const post_data = {title, category, news}

     console.log(title)

    //  const formData = new FormData();
    //  formData.append('title', Title);
    //  formData.append('category', selectInfo);
    //  formData.append('news', Message);
    //  formData.append('articleImage', file);

     //! here am submiting the user input to my database
     axios.post('http://localhost:5500/api/add', values ) //before
    //  axios.post('http://localhost:5500/api/add', formData ) //after image upload codes
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



          <ButtonGroup className="btn-tab">
              {radios.map((radio, idx) => (
               
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                <Link to={radio.link} style={{color:'black'}}>
                  {radio.name}
                </Link>
                </ToggleButton>
              ))}
            </ButtonGroup>
            
            <Row>
              <Col lg="12">
              <p style={{color:"brown", textAlign:"center", marginBottom:"2em"}}>{message}</p>
              
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

                  {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}


                  <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >

                      <FormGroup className="mb-3">
                        <AvField
                          name="title"
                          type="text"
                          label="Info title"
                          placeholder="Info Title"
                          className="form-control"
                          required
                        />
                      </FormGroup>

                      <FormGroup className="mb-3">
                        <AvField 
                          name="category" 
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

                            {/* <FormGroup>
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
                            </FormGroup> */}

                      <FormGroup className="mt-4">
                        <AvField 
                          name="news" 
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