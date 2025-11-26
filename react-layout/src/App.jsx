import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WebLayout from "./layouts/WebLayout";
import About from "./pages/web/About";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Settings from "./pages/admin/Settings";
import Home from "./pages/web/Home";

function App() {
  return (

    <>
      <Router>

        <Routes>

          <Route path="/" element={<WebLayout />}>
            <Route path="" element={<Home />}/>
            <Route path="about" element={<About />} />
          </Route>

          <Route path="/dashboard" element={<AdminLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Route>

        </Routes>


      </Router>

    </>


  );
}

export default App;