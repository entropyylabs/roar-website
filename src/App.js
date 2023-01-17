import "./App.css";
import useWindowDimensions from "./utils/useWindowDimensions";
import Section1 from "./Components/Section1";

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App">
      <Section1 height={height} width={width} />
    </div>
  );
}

export default App;
