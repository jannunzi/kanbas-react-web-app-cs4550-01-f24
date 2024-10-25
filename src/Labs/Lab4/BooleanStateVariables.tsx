import React, { useState } from "react";
export default function BooleanStateVariables() {
  const [qwe, wer] = useState(true);
  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{qwe ? "Done" : "Not done"}</p>
      <label className="form-control">
        <input type="checkbox" checked={qwe} onChange={() => wer(!qwe)} /> Done
      </label>
      {qwe && <div className="alert alert-success">Yay! you are done</div>}
      <hr />
    </div>
  );
}
