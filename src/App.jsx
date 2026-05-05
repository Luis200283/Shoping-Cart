import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HeroHeader from "./components/HeroHeader.jsx";
import Product from "./components/Product.jsx";

function App() {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <HeroHeader />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default App;
