import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap"
import SimpleBar from "simplebar-react"
import { IoSchoolSharp } from "react-icons/io5"

//i18n
import { withTranslation } from "react-i18next"

const NotificationDropdown = props => {
  const [menu, setMenu] = useState(false)
  const [news, setNews] = useState([])

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5500/api/")
      const data = await response.json()
      setNews(data)
    } catch (error) {
      console.log(error, "message")
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon waves-effect"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="mdi mdi-bell-outline"></i>
          <span className="badge bg-danger rounded-pill">{news.length}</span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0 font-size-16">
                  {props.t("Notifications")} ({news.length})
                </h6>
              </Col>
            </Row>
          </div>

          <SimpleBar style={{ height: "230px" }}>
            {news.slice(0, 5).map(each_news => {
              const { title, category, createdAt } = each_news

              return (
                <Link
                  to="/notifications"
                  className="text-reset notification-item"
                >
                  <div className="d-flex">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title bg-danger rounded-circle font-size-16">
                        <IoSchoolSharp size={24} />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h6 className="mt-0 mb-1">New Message received</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">{title}</p>
                        <p className="mb-1">{category}</p>
                        <p className="mb-1">{createdAt}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </SimpleBar>

          <div className="p-2 border-top d-grid">
            <Link
              className="btn btn-sm btn-link font-size-14 btn-block text-center"
              to="/notifications"
            >
              <i className="mdi mdi-arrow-right-circle me-1"></i>
              {props.t("View all")}
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

export default withTranslation()(NotificationDropdown)

NotificationDropdown.propTypes = {
  t: PropTypes.any,
}
