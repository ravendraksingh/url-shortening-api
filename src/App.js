import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Header className="app-header" />
      <MainContent className="app-content" />
      <Footer className="app-footer" />
    </div>
  );
}

export default App;
