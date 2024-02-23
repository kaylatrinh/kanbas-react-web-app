import React from "react";
import "./index.css"
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            { }
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <div><FaEllipsisV className="me-2" /></div>
                                    <div className="flex-grow-1">
                                        <Link
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="assignment-title">{assignment.title}</Link>
                                        <br />
                                        <Link to={`/Kanbas/Courses/${courseId}/Modules`} className="assignment-description">Multiple Modules</Link><span> | Due | 100 pts</span>
                                    </div>
                                    <div>
                                        <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                                    </div>
                                </div>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;