import { useSelector } from "react-redux";

export default function ForegroundColors() {
  const { count } = useSelector((state: any) => state.counterReducer);

  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h2>Current Count: {count}</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but
        <span className="wd-fg-color-green">this text is green</span>
      </p>
    </div>
  );
}
