import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import * as db from "../../Database";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import {
  addModule,
  deleteModule,
  updateModule,
  editModule,
  setModules,
} from "./reducer";
import * as courseClient from "../client";
import * as moduleClient from "./client";

export default function Modules({ course }: { course?: any }) {
  // const [modules, setModules] = useState<any[]>(db.modules);
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { cid } = useParams();
  const dispatch = useDispatch();

  const [moduleName, setModuleName] = useState("");
  const createModule = async () => {
    const newModule = await courseClient.createModuleForCourse(cid || "", {
      name: moduleName,
      course: cid,
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };
  const fetchModules = async () => {
    const modules = await courseClient.findModulesForCourse(cid || "");
    dispatch(setModules(modules));
  };
  const removeModule = async (moduleId: string) => {
    const status = await moduleClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
    // setModules(modules.filter((m) => m._id !== moduleId));
  };
  // const editModule = (moduleId: string) => {
  //   setModules(
  //     modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m))
  //   );
  // };
  // const updateModule = (module: any) => {
  //   setModules(modules.map((m) => (m._id === module._id ? module : m)));
  // };

  const suggestModule = async () => {
    const moduleNames = modules.map((m: any) => m.name);
    const suggestedModuleName = await moduleClient.suggestModule(
      course.name,
      course.description,
      moduleNames
    );
    const newModule = await courseClient.createModuleForCourse(cid || "", {
      name: suggestedModuleName,
      course: cid,
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createModule}
        suggestModule={suggestModule}
      />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 text-white bg-secondary">
                {!module.editing && module.name}
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    value={module.name}
                  />
                )}

                <ModuleControlButtons
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  moduleId={module._id}
                  editModule={() => dispatch(editModule(module._id))}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
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
