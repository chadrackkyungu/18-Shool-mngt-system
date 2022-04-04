import React, {useState, useEffect} from 'react';
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
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

    console.log(news);

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
          breadcrumbItem="Notification"
        />

        

            {
                news.map(each_news =>{
                const {title, category, articleImage, news, createdAt} = each_news;
                return(
                <Row className="news__container">
                    <Col lg="8">
                    <Card>
                      <CardBody data-aos="zoom-out-right">
                        <div>
                          <h3>{title}</h3>

                            <p>{createdAt.date. getDate()}</p>

                            <div className="news__img_container">
                            <img src={articleImage} alt={articleImage} />
                            </div>

                            <p>{category}</p>

                          <p className="para-graph" >{news}</p>

                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                    )
                })
            }
         


          {/* <Col lg="3">
          
            <Card>
              <CardBody>
                <div className="d-flex" data-aos="zoom-out-right">
                  

                 
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
          
            <Card>
              <CardBody>
                <div className="d-flex" data-aos="zoom-out-right">
                  

                 
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
          
            <Card>
              <CardBody>
                <div className="d-flex" data-aos="zoom-out-right">
                  

                 
                </div>
              </CardBody>
            </Card>
          </Col> */}


       


      </Container>
    </div>
  </React.Fragment>
  )
}

export default News_Notification