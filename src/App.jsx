import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import DrinksPage from "./pages/DrinksPage";
import HungerPage from "./pages/HungerPage";
import SuggestionsPage from "./pages/SuggestionsPage";
import PhotosPage from "./pages/PhotosPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactUs/ContactPage";
import ReadMore from "./pages/ReadMore"; // ✅ добавил

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="drinks" element={<DrinksPage />} />
        <Route path="hunger" element={<HungerPage />} />
        <Route path="suggestions" element={<SuggestionsPage />} />
        <Route path="photos" element={<PhotosPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="read-more" element={<ReadMore />} /> {/* ✅ добавил */}
      </Route>
    </Routes>
  );
}

export default App;
