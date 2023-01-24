import './App.css';
import Navbar from "./components/NavBar";
import { Routes , Route } from 'react-router-dom'

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
            {/*<Route path="/cards" element={<Home />} />*/}
            {/*<Route path="/deck-builder" element={<NotFound />} />*/}
            {/*<Route path="/my-decks" element={<NotFound />} />*/}
        </Routes>
    </>
  );
}

export default App;
