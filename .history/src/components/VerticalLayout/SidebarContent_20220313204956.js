import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()

  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            {/* <li className="menu-title">{props.t("Dashboard")} </li> */}
            {/* <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="ti-home"></i>
                <span className="badge rounded-pill bg-primary float-end">
                  2
                </span>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li> */}

            {/* <li>
              <Link to="/calendar" className=" waves-effect">
                <i className="ti-calendar"></i>
                <span>{props.t("Calendar")}</span>
              </Link>
            </li> */}

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-email"></i>
                <span>{props.t("Email")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/email-inbox">{props.t("Inbox")}</Link>
                </li>
                <li>
                  <Link to="/email-read">{props.t("Email Read")} </Link>
                </li>
                <li>
                  <Link to="/email-compose">{props.t("Email Compose")} </Link>
                </li>
              </ul>
            </li> */}

            {/* <li className="menu-title">{props.t("Components")}</li> */}
            {/* <li className="menu-title">{props.t("Navigation")}</li> */}

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-package"></i>
                <span>{props.t("My Courses")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <i className="bi bi-box2-fill"></i>
                  <Link to="/ui-alerts">
                    {props.t("BUSINESS ANALYSIS 631(2022S1BAS631)")}
                  </Link>
                </li>
                <li>
                  <Link to="/ui-buttons">
                    {props.t("BUSINESS ANALYSIS 631(2022S1BAS632)")}
                  </Link>
                </li>
                <li>
                  <Link to="/ui-cards">
                    {props.t("HUMAN COMPUTER INTERACTION 600(2022S1HCI600)")}
                  </Link>
                </li>
                <li>
                  <Link to="/ui-carousel">
                    {props.t("IT PROJECT 600(2022S2ITP600B)")}
                  </Link>
                </li>
                <li>
                  <Link to="/ui-dropdowns">
                    {props.t("IT PROJECT 600(2022S2ITP600B)")}
                  </Link>
                </li>
                <li>
                  <Link to="/ui-grid">
                    {props.t("MANAGEMENT INFO SYSTEMS 600(2022S2MIS600B)")}
                  </Link>
                </li>
                <li>
                  <Link to="/ui-images">
                    {props.t("OPERATING SYSTEMS 600(2022S2OPS600)")}
                  </Link>
                </li>
                <li>
                  <Link to="/ui-lightbox">
                    {props.t("QUANTITATIVE TECHNIQUES 600(2022S1QTS600)")}
                  </Link>
                </li>
                <li>
                  <Link to="/ui-modals">
                    {props.t("SOFTWARE ENGINEERING 600(2022S1SEM600)")}
                  </Link>
                </li>
                <li>
                  <Link to="/ui-rangeslider">
                    {props.t("SOFTWARE ENGINEERING 600(2022S1SEM600)")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="waves-effect">
                <i className="ti-receipt"></i>
                <span className="badge rounded-pill bg-success float-end">
                  6
                </span>
                <span>{props.t("Site Home")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/form-elements">{props.t("Form Elements")}</Link>
                </li>
                <li>
                  <Link to="/form-validation">
                    {props.t("Form Validation")}
                  </Link>
                </li>
                <li>
                  <Link to="/form-advanced">{props.t("Form Advanced")}</Link>
                </li>
                <li>
                  <Link to="/form-editors">{props.t("Form Editors")}</Link>
                </li>
                <li>
                  <Link to="/form-uploads">{props.t("Form File Upload")} </Link>
                </li>
                <li>
                  <Link to="/form-xeditable">{props.t("Form Xeditable")}</Link>
                </li>
                <li>
                  <Link to="/form-repeater">{props.t("Form Repeater")}</Link>
                </li>
                <li>
                  <Link to="/form-wizard">{props.t("Form Wizard")}</Link>
                </li>
                <li>
                  <Link to="/form-mask">{props.t("Form Mask")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-pie-chart"></i>
                <span>{props.t("Calendar")}</span>
              </Link>

              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/chartist-charts">{props.t("Chartist Chart")}</Link>
                </li>
                <li>
                  <Link to="/e-charts">{props.t("E Chart")}</Link>
                </li>
                <li>
                  <Link to="/chartjs-charts">{props.t("Chartjs Chart")}</Link>
                </li>
                <li>
                  <Link to="apex-charts">{props.t("Apex charts")}</Link>
                </li>
                <li>
                  <Link to="sparkline-charts">
                    {props.t("Sparkline Chart")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-view-grid"></i>
                <span>{props.t("Private Files")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/tables-basic">{props.t("Basic Tables")}</Link>
                </li>
                <li>
                  <Link to="/tables-datatable">{props.t("Data Tables")}</Link>
                </li>
                <li>
                  <Link to="/tables-responsive">
                    {props.t("Responsive Table")}
                  </Link>
                </li>
                <li>
                  <Link to="/tables-editable">{props.t("Editable Table")}</Link>
                </li>
              </ul>
            </li>
            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-face-smile"></i>
                <span>{props.t("Icons")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/icons-materialdesign">
                    {props.t("Material Design")}
                  </Link>
                </li>
                <li>
                  <Link to="/icons-fontawesome">{props.t("Font awesome")}</Link>
                </li>
                <li>
                  <Link to="/icons-ion">{props.t("Ion Icons")}</Link>
                </li>
                <li>
                  <Link to="/icons-themify">{props.t("Themify Icons")}</Link>
                </li>
                <li>
                  <Link to="/icons-dripicons">{props.t("Dripicons")}</Link>
                </li>
                <li>
                  <Link to="/icons-typicons">{props.t("Typicons Icons")}</Link>
                </li>
              </ul>
            </li> */}

            {/* <li>
              <Link to="/#">
                <i className="ti-location-pin"></i>
                <span className="badge rounded-pill bg-danger float-end">
                  2
                </span>
                <span>{props.t("Maps")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/maps-google">{props.t("Google Maps")}</Link>
                </li>
                <li>
                  <Link to="/maps-vector">{props.t("Vector Maps")}</Link>
                </li>
                <li>
                  <Link to="/maps-leaflet">{props.t("Leaflet Maps")}</Link>
                </li>
              </ul>
            </li> */}

            {/* <li className="menu-title">Extras</li> */}

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-archive"></i>
                <span>{props.t("Authentication")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/pages-login">{props.t("Login")}</Link>
                </li>
                <li>
                  <Link to="/pages-login-2">{props.t("Login")} 2</Link>
                </li>
                <li>
                  <Link to="/pages-register">{props.t("Register")}</Link>
                </li>
                <li>
                  <Link to="/pages-register-2">{props.t("Register")} 2</Link>
                </li>
                <li>
                  <Link to="/page-recoverpw">
                    {props.t("Recover Password")}
                  </Link>
                </li>
                <li>
                  <Link to="/page-recoverpw-2">
                    {props.t("Recover Password")} 2
                  </Link>
                </li>
                <li>
                  <Link to="/auth-lock-screen">{props.t("Lock screen")}</Link>
                </li>
                <li>
                  <Link to="/auth-lock-screen-2">
                    {props.t("Lock screen")} 2
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-support"></i>
                <span>{props.t("Extra Pages")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="pages-timeline">{props.t("Timeline")}</Link>
                </li>
                <li>
                  <Link to="pages-invoice">{props.t("Invoice")}</Link>
                </li>
                <li>
                  <Link to="pages-directory">{props.t("Directory")}</Link>
                </li>
                <li>
                  <Link to="/pages-starter">{props.t("Starter Page")}</Link>
                </li>
                <li>
                  <Link to="pages-404">{props.t("Error 404")}</Link>
                </li>
                <li>
                  <Link to="pages-500">{props.t("Error 500")}</Link>
                </li>
                <li>
                  <Link to="pages-pricing">{props.t("Pricing")}</Link>
                </li>
                <li>
                  <Link to="pages-gallery">{props.t("Gallery")}</Link>
                </li>
                <li>
                  <Link to="pages-maintenance">{props.t("Maintenance")}</Link>
                </li>
                <li>
                  <Link to="pages-comingsoon">{props.t("Coming Soon")}</Link>
                </li>
                <li>
                  <Link to="pages-faqs">{props.t("FAQs")}</Link>
                </li>
              </ul>
            </li> */}

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-bookmark-alt"></i>
                <span> {props.t("Email Templates")} </span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/email-template-basic">
                    {props.t("Basic Action Email")}
                  </Link>
                </li>
                <li>
                  <Link to="/email-template-Alert">
                    {props.t("Alert Email")}
                  </Link>
                </li>
                <li>
                  <Link to="/email-template-Billing">
                    {props.t("Billing Email")}
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-more"></i>
                <span>{props.t("Multi Level")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <Link to="/#">{props.t("Level 1.1")}</Link>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    {props.t("Level 1.2")}
                  </Link>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <Link to="/#">{props.t("Level 2.1")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Level 2.2")}</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
