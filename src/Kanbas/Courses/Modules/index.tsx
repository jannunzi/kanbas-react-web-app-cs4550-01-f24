import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const modules = db.modules;
  const { cid } = useParams();

  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 text-white bg-secondary">
                {module.name}
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <span className="wd-title">{lesson.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
