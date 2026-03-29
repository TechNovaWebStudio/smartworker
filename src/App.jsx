import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { UserDashboard } from "./Pages/UserDashboard";
import { TemplateView } from "./Pages/TemplateView";
import { CVEdit } from "./Pages/CVEdit";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/templateView" element={<TemplateView />} />
        <Route path="/CvEdite" element={<CVEdit />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App
