import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import GenerateIdeasPage from './pages/GenerateIdeasPage';
import ContentCalendarPage from './pages/ContentCalendarPage';
import TrendsPage from './pages/TrendsPage';
import SavedIdeasPage from './pages/SavedIdeasPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route element={<Layout />}>
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/generate" 
            element={
              <ProtectedRoute>
                <GenerateIdeasPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/calendar" 
            element={
              <ProtectedRoute>
                <ContentCalendarPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/trends" 
            element={
              <ProtectedRoute>
                <TrendsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/saved-ideas" 
            element={
              <ProtectedRoute>
                <SavedIdeasPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
};

export default App;