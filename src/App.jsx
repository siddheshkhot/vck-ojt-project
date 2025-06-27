// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header/Navbar1';
import Footer1 from './components/Footer/Footer1';
import AdmissionsPage from './pages/Admissions';
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import { useState } from 'react';

function App() {
  const [showPopup, setShowPopup] = useState(true);
 
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Siddhesh Prakash Khot"
          studentPhotoUrl="/images/sidd.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
      </Routes>
      <ChatbotComponent/>
      <Footer1/>
    </Router>
    </>
  );
}

export default App;