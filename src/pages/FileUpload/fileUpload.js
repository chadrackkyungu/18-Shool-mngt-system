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

const FileUpload = () => {
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
            maintitle="Dashboard"
            title="School Management"
            breadcrumbItem="Upload Files"
          />

          <Row>
            <Col className="d-flex justify-content-center  col-12 m-5">
              <Card className="w-75 h-100 ">
                <CardBody>
                  <CardTitle className="h6">
                    Uploads Your Assigsnement
                  </CardTitle>
                  <p className="card-title-desc">
                    Please make sure before uploading your files to double check
                    you work and everything else
                  </p>
                  <div className="mb-5">
                    <Form>
                      <Dropzone
                        onDrop={acceptedFiles => {
                          handleAcceptedFiles(acceptedFiles)
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div className="dropzone">
                            <div
                              className="dz-message needsclick"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="mb-3">
                                <i className="mdi mdi-cloud-upload display-4 text-muted"></i>
                              </div>
                              <h4>Drop files here or click to upload.</h4>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                      <div
                        className="dropzone-previews mt-3"
                        id="file-previews"
                      >
                        {selectedFiles.map((f, i) => {
                          return (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={i + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={f.name}
                                      src={f.preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {f.name}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          )
                        })}
                      </div>
                    </Form>
                  </div>

                  <div className="text-center mt-4">
                    <button
                      type="button"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      Submit Your Files
                    </button>
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

export default FileUpload
