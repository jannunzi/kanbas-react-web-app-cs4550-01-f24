import BackgroundColors from "./BackgroundColors";
import BootstrapGrids from "./BootstrapGrids";
import BootstrapTables from "./BootstrapTables";
import Borders from "./Borders";
import Dimensions from "./Dimensions";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import "./index.css";
import Padding from "./Padding";
import Positions from "./Positions";
import ScreenSizeLabel from "./ScreenSizeLabel";
import Zindex from "./Zindex";
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p id="wd-first-p">
        Style attribute allows configuring look and feel right on the element.
        Although it's very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Dimensions />
      {/* <Positions /> */}
      <Zindex />
      <Float />
      <GridLayout />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Flex /> */}
      <BootstrapGrids />
      <br />
      <br />
      <ScreenSizeLabel />
      <div className="row">
        <div className="col-3 bg-warning fs-1 d-none d-sm-block">Side bar</div>
        <div className="col-12 col-sm-9 bg-primary fs-1 text-white">
          Main content
        </div>
      </div>
      <br />
      <br />
      <div id="wd-screen-size-label" className="fs-1">
        <div className="d-block d-sm-none">XS - Extra Small (&lt;576px)</div>
        <div className="d-none d-sm-block d-md-none">S - Small (≥576px)</div>
        <div className="d-none d-md-block d-lg-none">M - Medium (≥768px)</div>
        <div className="d-none d-lg-block d-xl-none">L - Large (≥992px)</div>
        <div className="d-none d-xl-block d-xxl-none">
          XL - Extra Large (≥1200px)
        </div>
        <div className="d-none d-xxl-block">
          XXL - Extra Extra Large (≥1400px)
        </div>
      </div>
      <BootstrapTables />
    </div>
  );
}
