import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HeroHeader from "./components/HeroHeader.jsx";
import MarkettingCard from "./components/marketingCard.jsx";
import ListScroll from "./components/listscroll.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <HeroHeader />
      <Outlet />
      <MarkettingCard />
      <ListScroll />
    </div>
  );
}

export default App;
