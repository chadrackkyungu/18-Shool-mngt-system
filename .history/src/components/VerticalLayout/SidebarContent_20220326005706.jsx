import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react";
import { FaGraduationCap } from 'react-icons/fa';
import { AiFillFileAdd, AiFillDashboard } from 'react-icons/ai';
import { FcCalendar } from 'react-icons/fc';
import { ImHome } from 'react-icons/im';

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

import { getCourses } from "../../assets/Data-Object/dataObjt"

const SidebarContent = props => {
  const coursesObj = getCourses()

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
            

            <li>
              <Link
                to="/dashboard"
                className="waves-effect d-flex justify-content-start align-items-center sidebar_course"
              >
                <AiFillDashboard size={30} />
                <span className="p-2">{props.t("Dashboard")}</span>
              </Link>

              <Link to="/site-home" className="waves-effect sidebar_course ">
                <ImHome size={40} />
                <span className="p-2">{props.t("Site Home")}</span>
              </Link>
            </li>

            <li>
              {/* <Link to="/calendar" className="has-arrow waves-effect sidebar_course"> */}
              <Link to="/calendar" className="waves-effect sidebar_course">
                <FcCalendar size={30}/> 
                <span>{props.t("Calendar")}</span>
                {/* <span className="badge rounded-pill bg-danger float-end ">
                  6
                </span> */}
              </Link>
            </li>

            <li>
              <Link
                to="/file-upload"
                className="d-flex justify-content-start align-items-center sidebar_course"
              >
               <AiFillFileAdd size={40}/>
                <span className="p-2">{props.t("Private Files")}</span>
              </Link>
            </li>

            <li>
              <Link className="waves-effect sidebarDivider ">
              <FaGraduationCap size={40} />
                <span>{props.t("All Courses")}</span>
              </Link>
            </li>

            {coursesObj.map(course => {
              return (
                <li>
                  <Link
                    to={`/course-detail/${course.id}`}
                    className="waves-effect sidebar_course"
                  >
                    <FaGraduationCap size={40} />
                    <span>{course.title}</span>
                  </Link>
                </li>
              )
            })}
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
