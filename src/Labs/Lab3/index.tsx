import Highlight from "./Highlight";
import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import House from "./House";
import IfElse from "./IfElse";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TodoList from "./todos/TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import PathParameters from "./PathParameters";

export default function Lab3() {
  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <ConditionalOutputIfElse />
      <TemplateLiterals />
      <SimpleArrays />
      <AddingAndRemovingToFromArrays />
      <MapFunction />
      <House />
      <TodoList />
      <Spreading />
      <Destructing />
      <DestructingImports />
      <Classes />
      <Styles />
      <Highlight>
        <Add a={3} b={4} />
      </Highlight>
      <Square>5</Square>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <PathParameters />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
