import "./App.css";
import useWindowDimensions from "./utils/useWindowDimensions";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App">
      <Section1 height={height} width={width} />
      <Section2 height={height} width={width} />
    </div>
  );
}

export default App;
