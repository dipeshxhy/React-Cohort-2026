import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import VideoDetailsPage from './pages/VideoDetailsPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<VideoDetailsPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
