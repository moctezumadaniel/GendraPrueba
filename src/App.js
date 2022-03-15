import "./App.css";
import Content from "./Components/Content";
import Filters from "./Components/Filters";
import Navbar from "./Components/Navbar";
import PagesBar from "./Components/PagesBar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Filters />
      <Content />
      <PagesBar />
    </div>
  );
}

export default App;
