import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <div className="col-12">
              © {new Date().getFullYear()} Richfiel{" "}
              <span className="d-none d-sm-inline-block">
                {" "}
                System Management
                <i className="mdi mdi-heart text-danger"></i> by Themesbrand.
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
