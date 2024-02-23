import React from "react";
import ModuleList from "../Modules/List";
import { FaFileImport, FaUpload, FaBullseye, FaChartBar, FaBullhorn, FaRegBell, FaInfoCircle } from "react-icons/fa";
import "./index.css";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <div className="status-div d-none d-lg-block">
                <h6>Course Status</h6>
                <button type="button" className="btn btn-grey"><i className="fa fa-ban"></i>Unpublish</button>
                <button type="button" className="btn btn-success"><i className="fa fa-circle-check"></i>Published</button>
                <ul>
                    <li><button className="btn btn-grey"><FaFileImport className="icon-padding"/>Import Existing Content</button></li>
                    <li><button className="btn btn-grey"><FaUpload  className="icon-padding"/>Import from Commons</button></li>
                    <li><button className="btn btn-grey"><FaBullseye  className="icon-padding"/>Choose Home Page</button></li>
                    <li><button className="btn btn-grey"><FaChartBar  className="icon-padding"/>View Course Stream</button></li>
                    <li><button className="btn btn-grey"><FaBullhorn  className="icon-padding"/>New Announcement</button></li>
                    <li><button className="btn btn-grey"><FaChartBar  className="icon-padding"/>New Analytics</button></li>
                    <li><button className="btn btn-grey"><FaRegBell  className="icon-padding"/>View Course Notifications</button></li>
                </ul>
                <h6>To Do</h6>
                <hr />
                <ul>
                    <li><Link to="#"><FaInfoCircle className="icon-padding"/>Grade A1 - ENV + HTML</Link></li>
                    <li><Link to="#"><FaInfoCircle className="icon-padding"/>Grade A2 - CSS</Link></li>
                </ul>  
            </div>
            <div className="col"><ModuleList /></div>
        </div>
    );
}
export default Home;