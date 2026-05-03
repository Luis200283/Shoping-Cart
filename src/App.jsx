import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HeroHeader from "./components/HeroHeader.jsx";
import MarkettingCard from "./components/marketingCard.jsx";
import ListScroll from "./components/listscroll.jsx";
import Product from "./routes/Product.jsx";

function App() {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <HeroHeader />
      <Product />
      <MarkettingCard />
      <ListScroll />
    </div>
  );
}

export default App;
