import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <div className="col-12">
              copyright © {new Date().getFullYear()} Richfield
              <span className="d-none d-sm-inline-block">
                <i className="mdi mdi-heart text-danger"></i> System Management
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
