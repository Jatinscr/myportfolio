import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import ProjectPage from "./pages/Projectpage.jsx";  // tumhara ProjectPage
import Projecthandicraft from "./components/Projecthandicraft.jsx";
import Workpage from "./pages/Workpage.jsx";
import Workdetail from "./components/Workdetail.jsx";
import ArticalPages from "./pages/ArticalPages.jsx";
import ContactPage from "./pages/Contactpage.jsx";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/projecthandicraft" element={<Projecthandicraft />} />
          <Route path="/Workpage/Workdetail" element={<Workdetail />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/ArticalPage" element={<ArticalPages />} />
          <Route path="/Work" element={<Workpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
