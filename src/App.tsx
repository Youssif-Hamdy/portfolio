import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./pages/Layout";
import Home from "./pages/Home";
import { DarkModeProvider } from "./componet/DarkModeContext";
import About from "./pages/About";
import Portfolio from "./pages/Portfoilo";

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio" element={<Portfolio />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
