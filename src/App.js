import "./App.css";
import useWindowDimensions from "./utils/useWindowDimensions";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Section6";

import iPhone from "./Assets/iPhone.png";

function App() {
  const { height, width } = useWindowDimensions();
  const isMobile = width <= 480;
  if (isMobile)
    return (
      <div className="App">
        <Section1 height={height} width={width} />
        <Section2 height={height} width={width} />
        <Section3 height={height} width={width} />
        <Section4 height={height} width={width} />
        <Section5 height={height} width={width} />
        <Section6 height={height} width={width} />
      </div>
    );
  return (
    <div
      className="flex justify-around h-screen"
      style={{ alignItems: "center" }}
    >
      <div class="mobile-dark">
        <div className="w-[370px]">
          <div
            style={{ height: "650px" }}
            className="height-[650px] w-[370px] absolute overflow-y-scroll overflow-x-hidden top-10"
          >
            <Section1 height={650} width={370} />
            <Section2 height={650} width={370} />
            <Section3 height={650} width={370} />
            <Section4 height={650} width={370} />
            <Section5 height={650} width={370} />
            <Section6 height={650} width={370} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
