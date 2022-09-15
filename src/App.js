import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthorQuotes from "./pages/AuthorQuotes";
import QuotePage from "./pages/QuotePage";
import Try from "./pages/Try";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<QuotePage />} />
        <Route path="authorquote/:author" element={<AuthorQuotes />} />
        <Route path="try" element={<Try />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
