import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap"



// Redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import Breadcrumb from "../../components/Common/Breadcrumb"
import { editProfile, resetProfileFlag } from "../../store/actions"
import { useAuth } from "../../Contexts/AuthContext"

const UserProfile = props => {
  const { currentUser } = useAuth()
  const { uid, email, displayName, photoURL } = currentUser

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>School Management System</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumb
            title="School Management System"
            breadcrumbItem="Profile"
          />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="d-flex" data-aos={"fade-left"}>
                    <div className="ms-3">
                      <img
                        src={photoURL}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="align-self-center flex-1">
                      <div className="text-muted">
                        <h5>{displayName}</h5>
                        <p className="mb-1">{email}</p>
                        <p className="mb-0">Id no: #{uid}</p>
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

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any,
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, { editProfile, resetProfileFlag })(UserProfile)
)
