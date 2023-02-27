import { Routes, Route } from 'react-router-dom';
import AboutUsPage from "./pages/AboutUsPage";
import DatabasePage from "./pages/DatabasePage";
import LoginPage from "./pages/LoginPage";
import Navigation from './components/Navigation/navigation';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<DatabasePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
