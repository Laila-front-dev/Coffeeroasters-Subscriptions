import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import CreatePlane from "./components/CreatePlane";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNoteFound from "./components/PageNoteFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/create" element={<CreatePlane />}></Route>
        <Route path="*" element={<PageNoteFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;