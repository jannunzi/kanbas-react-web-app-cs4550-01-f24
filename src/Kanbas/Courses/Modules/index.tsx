import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import * as db from "../../Database";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { addModule, deleteModule, updateModule, editModule } from "./reducer";

export default function Modules() {
  // const [modules, setModules] = useState<any[]>(db.modules);
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { cid } = useParams();
  const dispatch = useDispatch();

  const [moduleName, setModuleName] = useState("");
  // const addModule = () => {
  //   setModules([
  //     ...modules,
  //     {
  //       _id: new Date().getTime().toString(),
  //       name: moduleName,
  //       course: cid,
  //       lessons: [],
  //     },
  //   ]);
  //   setModuleName("");
  // };
  // const deleteModule = (moduleId: string) => {
  //   setModules(modules.filter((m) => m._id !== moduleId));
  // };
  // const editModule = (moduleId: string) => {
  //   setModules(
  //     modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m))
  //   );
  // };
  // const updateModule = (module: any) => {
  //   setModules(modules.map((m) => (m._id === module._id ? module : m)));
  // };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(
            addModule({
              name: moduleName,
              course: cid,
            })
          );
          setModuleName("");
        }}
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
                  deleteModule={() => dispatch(deleteModule(module._id))}
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
