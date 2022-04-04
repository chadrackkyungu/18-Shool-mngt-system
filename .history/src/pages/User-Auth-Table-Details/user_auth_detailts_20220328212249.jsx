import React, { useState, useEffect} from "react"
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
Button
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation"

import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useAuth } from '../../Contexts/AuthContext';
import avatar from "../../assets/images/users/user-1.jpg"
import News from '../../assets/images/News-rafiki.svg';
import News2 from '../../assets/images/news.svg';

// * Firebase Collection Data using on Snapeshot
import { Db } from"../../Database/init-firebase";
import { onSnapshot } from 'firebase/firestore';
import { collection, getDocs } from "firebase/firestore/lite";

import {Link} from 'react-router-dom';


import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";


function user_auth_detailts() {

  const { currentUser } = useAuth();
  const {uid, email,displayName,photoURL } = currentUser ;

  const [error, setError] = useState(false);
  const [message, setMessage] = useState(""); 


  const [useDetails, setUseDetails] = useState([]); 
  const [errorUserDetails, setErrorUserDetails] = useState(""); 

  console.log(useDetails);



  async function getData() {
    try {
      const data = collection(Db, "User-Login");
      let allData = await getDocs(data);

      const userRes = allData.docs.map(doc => doc.data())
      setUseDetails(userRes);        

    } catch (error) {
      setErrorUserDetails(" could not fetch the data from firebase")
    }
  }
  //this simple mean run once, if u don't use it will keep on runing
  useEffect(() =>{
    getData()
  }, [])

  console.log(useDetails);
  console.log(errorUserDetails);

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
            breadcrumbItem="User Table Details"
          />

          <Button  className="btn btn-primary mb-4"> <Link to="/admin">  Back </Link></Button>
          
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



 {/* {
                      useDetails.map((user, i) =>{
                        return(
                          <div key={i} >
                            <p> {user.email} </p>
                            <p> {user.password} </p>
                            <p> {user.date.toString()} </p>
                            <img src={user.image}  alt={user.image} />
                          </div>
                        )
                      })
                    } */}


        <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Latest Transaction</h4>
                  <div className="table-responsive">
                    <table className="table table-hover table-centered table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col">(#) Id</th>
                          <th scope="col">Pic</th>
                          <th scope="col">Email</th>
                          <th scope="col">Date</th>
                          {/* <th scope="col">Password</th> */}
                        </tr>
                      </thead>
                      <tbody>

                      {
                        useDetails.map((user) => 
                        <tr>
                                                <th scope="row">#{user.id}</th>
                                                <td>
                                                  <div>
                                                    <img
                                                      src={user.image}
                                                      alt=""
                                                      className="avatar-xs rounded-circle me-2"
                                                    />
                                                  
                                                  </div>
                                                </td>

                                                <td> {user.email}</td>
                                                <td>15/1/2018</td>
                                                {/* <td>{user.password}</td> */}
                                              </tr>
                        )
                      }

                        
                       


                      </tbody>
                    </table>
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

export default user_auth_detailts