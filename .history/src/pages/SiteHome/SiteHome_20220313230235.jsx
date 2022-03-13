import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  Form,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap"
import Dropzone from "react-dropzone"

import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link } from "react-router-dom"

function SiteHome() {
  const [selectedFiles, setselectedFiles] = useState([])
  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Form File Upload | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
            maintitle="School Management"
            title="Home"
            breadcrumbItem="Site-Home"
          />

          <Row>
          {/* d-flex justify-content-center   */}
            <Col className="col-12 mt-10">
              <Card >
                <CardBody>
                  <CardTitle className="h6">
                    Read Your Site
                  </CardTitle>
                  <p className="card-title-desc">
                    Please make sure before uploading your files to double check
                    you work and everything else
                  </p>
                  

                 
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default SiteHome
