import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div className="app w-full h-full">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
      <footer className="py-4 bg-black w-full flex justify-center items-center gap-8">
        <p>
          Burnt <span className="text-primary font-medium">Resistor</span>
        </p>
        <a href="https://github.com/jzielinski47" className="text-white/[38%]">
          Made by Jakub Zieliński 2025
        </a>
      </footer>
    </div>
  );
};

export default App;
