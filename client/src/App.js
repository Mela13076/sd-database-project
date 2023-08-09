import { Routes, Route, useLocation } from 'react-router-dom';
import AboutUsPage from "./pages/AboutUsPage";
import DatabasePage from "./pages/DatabasePage";
import LoginPage from "./pages/LoginPage";
import Navigation from './components/Navigation/navigation';
import NotFound from './pages/NotFound';
import AnalyzePage from './pages/AnalyzePage';


function App() {

  const isLoginPage = useLocation().pathname === '/';

  return (
    <div>
      {/* <Navigation /> */}
      {!isLoginPage && <Navigation />}
      <Routes>
        {/* <Route path="/" element={<DatabasePage />} />
        <Route path="/login" element={<LoginPage />} /> */}
        
       
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<DatabasePage />} />
        {/* <Route path="/analyze" element={<AnalyzePage data={data}/>} /> */}
        {/* <Route exact path="/analyze">
            <AnalyzePage data={data} />
          </Route> */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
