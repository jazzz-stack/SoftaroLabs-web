import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CorporateThemeProvider } from './components/providers/ThemeProvider'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'

// Import pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import CareersPage from './pages/CareersPage'
import JobApplicationPage from './pages/JobApplicationPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <CorporateThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/project/:id" element={<ProjectDetailPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/careers/apply/:jobId" element={<JobApplicationPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CorporateThemeProvider>
  )
}

export default App