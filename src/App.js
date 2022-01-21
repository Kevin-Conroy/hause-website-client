import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import NewNavBar from "./NewNavBar";
import Header from "./Header";
import TourDates from "./TourDates";
import Store from "./Store";
import Bio from "./Bio";
import Releases from "./Releases";
import Follow from "./Follow";
import Archive from "./Archive";
import News from "./News";
import SocialFollow from "./SocialFollow"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <main className="App"> 
      <div>
        <Header />
        <NewNavBar/>
        <Routes>
          <Route exact path="/" element={<News />} />
          <Route exact path="/tourdates" element={<TourDates />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/bio" element={<Bio />} />
          <Route exact path="/releases" element={<Releases />} />
          <Route exact path="/archive" element={<Archive />} />
        </Routes>
        <SocialFollow />
      </div>
    </main>
  );
}

export default App;