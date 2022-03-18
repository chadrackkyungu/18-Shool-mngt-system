import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useAuth } from '../../Contexts/AuthContext';
import avatar from "../../assets/images/users/user-1.jpg"

function admin() {
    const { currentUser, logout } = useAuth()
    const { photoURL } = currentUser
  
    const [menu, setMenu] = useState(false)
  
    return (
      <React.Fragment>
        <Dropdown
          isOpen={menu}
          toggle={() => setMenu(!menu)}
          className="d-inline-block"
        >
          <DropdownToggle
            className="btn header-item waves-effect"
            id="page-header-user-dropdown"
            tag="button"
          >
            {photoURL ? (
              <img
                className="rounded-circle header-profile-user"
                src={photoURL}
                alt="Header Avatar"
              />
            ) : (
              <img
                className="rounded-circle header-profile-user"
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                alt="Header Avatar"
              />
            )}
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem tag="a" href="/dashboard">
              <i className="bx bx-user font-size-16 align-middle me-1" />
              {"Dashboard"}
            </DropdownItem>
  
            <DropdownItem tag="a" href="/profile">
              <i className="bx bx-lock-open font-size-16 align-middle me-1" />
              {"Profile"}
            </DropdownItem>
  
            <DropdownItem tag="a" href="/admin">
              <i className="bx bx-lock-open font-size-16 align-middle me-1" />
              {"Admin"}
            </DropdownItem>
  
            <div className="dropdown-divider" />
            <Link className="dropdown-item">
              <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
  
              <span
                onClick={() => {
                  logout()
                  localStorage.removeItem("token")
                }}
              >
                {"Logout"}
              </span>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    )
            }

export default admin