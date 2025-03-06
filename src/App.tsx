import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './components/Dashboard';
import HistoryPage from './pages/HistoryPage';
import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
