import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

// import { withTranslation } from "react-i18next"
// import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { useAuth } from "../../../Contexts/AuthContext"
import avatar from 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png';

const ProfileMenu = () => {
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
              alt={photoURL}
            />
          ) : (
            <img
              className="rounded-circle header-profile-user"
              src={avatar}
              alt={photoURL}
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
export default ProfileMenu
// ProfileMenu.propTypes = {
//   success: PropTypes.any,
//   t: PropTypes.any,
// }

// const mapStatetoProps = state => {
//   const { error, success } = state.Profile
//   return { error, success }
// }

// export default withRouter(
//   connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
// )
