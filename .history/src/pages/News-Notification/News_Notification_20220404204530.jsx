import React, {useState, useEffect} from 'react';
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  ButtonGroup,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb"

function News_Notification() {
    const [news, setNews] = useState([]);

    const getData = async() =>{
        try {
            const response = await fetch('http://localhost:5500/api/');
            const data = await response.json();
            setNews(data);
        } catch (error) {
            console.log(error, "message");
        }
    }
    useEffect(() => {
        getData()
    }, []);


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

       

      </Container>
    </div>
  </React.Fragment>
  )
}

export default News_Notification