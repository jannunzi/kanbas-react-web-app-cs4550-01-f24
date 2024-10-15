import { ReactNode } from "react";

export default function Square({ children }: { children: ReactNode }) {
  const a = parseInt(children as string);
  return (
    <div id="wd-square">
      <h4>Square</h4>
      <br />a = {a}
      <br />a * a = {a * a} <hr />
    </div>
  );
}
