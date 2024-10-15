import { Routes, Route, Navigate, useParams } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";

export default function Courses() {
  const { cid } = useParams();
  return (
    <div id="wd-courses">
      <h2>Course {cid}</h2>
      <div className="d-flex">
        <div>
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<h2>Assignments</h2>} />
            <Route
              path="Assignments/:aid"
              element={<h2>Assignment Editor</h2>}
            />
            <Route path="People" element={<h2>People</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
