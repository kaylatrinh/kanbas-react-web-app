import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaDesktop, FaArrowCircleRight, FaQuestionCircle } from "react-icons/fa";
import northeastern_logo from "./northeastern_logo.png";
function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2 user fixed-height" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 fixed-height" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 fixed-height" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 fixed-height" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2 fixed-height" /> },
    { label: "History",  icon: <FaRegClock className="fs-2 fixed-height" /> },
    { label: "Studio",  icon: <FaDesktop className="fs-2 fixed-height" /> },
    { label: "Commons",  icon: <FaArrowCircleRight className="fs-2 fixed-height" /> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2 fixed-height" /> },
  ];
  
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li><img src={northeastern_logo} alt="Northeastern Logo" /></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> 
          <span className="icon-wrapper">{link.icon}</span>
          <span className="label-wrapper">{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;