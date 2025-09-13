import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./Pages/PetOwner_Pages/Home/Home";
import About from "./Pages/PetOwner_Pages/About/About";
import Products from "./Pages/PetOwner_Pages/Products/Products";
import Emergency from "./Pages/PetOwner_Pages/Emergency/Emergency";
import Feedback from "./Pages/PetOwner_Pages/Feedback/Feedback";
import Contact from "./Pages/PetOwner_Pages/Contact/Contact";
import PetProfile from "./Pages/PetOwner_Pages/PetCare/PetCare_Pages/Pet_Profile/PetProfile";
import FeedingGuides from "./Pages/PetOwner_Pages/PetCare/PetCare_Pages/Feeding_Guides/FeedingGuides";
import GroomingVideos from "./Pages/PetOwner_Pages/PetCare/PetCare_Pages/Grooming_Videos/GroomingVideos";
import HealthTips from "./Pages/PetOwner_Pages/PetCare/PetCare_Pages/Health_Tips/HealthTips";
import TrainingTips from "./Pages/PetOwner_Pages/PetCare/PetCare_Pages/Training_Tips/TrainingTips";
import VetProfile from "./Pages/Vet_Pages/VetProfile";
import TreatmentHistory from "./Pages/Vet_Pages/TreatmentHistory";
import CaseStudies from "./Pages/Vet_Pages/CaseStudies";
import Appointments from "./Pages/Vet_Pages/Appointments";
import ProductDetails from "./Pages/PetOwner_Pages/Products/ProductDetails";
import ShelterAdopt from "./Pages/Shelter/pages/shelterAdopt";
import ShelterStories from "./Pages/Shelter/pages/shelterSuccessStories";
import ShelterEvents from "./Pages/Shelter/pages/shelterEvents";
import ShelterContact from "./Pages/Shelter/pages/shelterContact";
import Checkout from "./Pages/PetOwner_Pages/Products/Checkout";
import AdoptionPage from "./Pages/Shelter/pages/AdoptionPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/petcare" element={<PetProfile />} />
        <Route path="/petprofile" element={<PetProfile />} />
        <Route path="/petcare/feedingguides" element={<FeedingGuides />} />
        <Route path="/petcare/groomingvideos" element={<GroomingVideos />} />
        <Route path="/petcare/healthtips" element={<HealthTips />} />
        <Route path="/petcare/trainingtips" element={<TrainingTips />} />

        {/* Vet Routes */}
        <Route path="/vet-dashboard" element={<VetProfile />} />
        <Route path="/vet-appointments" element={<Appointments />} />
        <Route path="/vet-case-studies" element={<CaseStudies />} />
        <Route path="/vet-treatment-history" element={<TreatmentHistory />} />

        {/* Shelter Routes */}
        <Route path="/shelter" element={<ShelterAdopt />} />
        <Route path="/shelter/stories" element={<ShelterStories />} />
        <Route path="/shelter/events" element={<ShelterEvents />} />
        <Route path="/shelter/contact" element={<ShelterContact />} />
        <Route path="/adopt/:id" element={<AdoptionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
