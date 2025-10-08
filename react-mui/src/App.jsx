import ResponsiveAppBar from "./components/ResponsiveAppBar";

import AboutPage from "./views/AboutPage";
import HomePage from "./views/HomePage";
import ServicesPage from "./views/ServicesPage";
import ContactPage from "./views/ContactPage";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {

    return (
        <>

            <Router>
                <ResponsiveAppBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>

            </Router>
        </>
    )

}

export default App;