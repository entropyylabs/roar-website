import "./App.css";
import useWindowDimensions from "./utils/useWindowDimensions";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App">
      <Section1 height={height} width={width} />
      <Section2 height={height} width={width} />
      <Section3 height={height} width={width} />
      <Section4 height={height} width={width} />
    </div>
  );
}

export default App;
