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


          <h4 className="card-title mb-4">Change User Name</h4>

<Card>
  <CardBody>
    <AvForm
      className="form-horizontal"
      onValidSubmit={(e, v) => {
        handleValidSubmit(e, v)
      }}
    >
      <div className="mb-3">
        <AvField
          name="username"
          label="User Name"
          value={displayName || ''}
          className="form-control"
          placeholder="Enter User Name"
          type="text"
          required
        />
        <AvField name="idx" value={uid || ''} type="hidden" />
      </div>
      <div className="text-center mt-4">
        <Button type="submit" color="danger">
          Edit User Name
        </Button>
      </div>
    </AvForm>
  </CardBody>
</Card>



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
