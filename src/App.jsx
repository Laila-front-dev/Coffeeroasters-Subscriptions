import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import CreatePlane from "./components/CreatePlane";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Coffeeroasters-Subscriptions/" element={<Home />}></Route>
        <Route
          path="/Coffeeroasters-Subscriptions/about"
          element={<About />}
        ></Route>
        <Route
          path="/Coffeeroasters-Subscriptions/create"
          element={<CreatePlane />}
        ></Route>
        <Route path="*" element={<h1>Page nt found</h1>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
