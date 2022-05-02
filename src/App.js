import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { NewsContextProvider } from './component/news/NewsContext';
import Footer from './component/pagecomponents/Footer';
import Navigation from './component/pagecomponents/Navigation';


import AboutUsPage from './pages/AboutUsPage';
import DiscussionPage from './pages/DiscussionPage';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';



class App extends React.Component {
  render() {
    return (

      <Router>
        <NewsContextProvider>
          <Navigation />
          <div className="container px-0">
            <div className="row d-flex justify-content-center">
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/trending" element={<TrendingPage />} />
                <Route path="/discussion" element={<DiscussionPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                {/* Route to landing page for testing*/}
                {/* <Route path="/landing" element={<LandingPage />} /> */}
              </Routes>
            </div>
          </div>
          <Footer />
        </NewsContextProvider>
      </Router>
    );
  }
}

export default App;
