import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalThemes';
import { themes } from './styles/Themes';
import {
  HomePage,
  AboutPage,
  ChallengesPage,
  TeamPage,
  StrategyPage,
} from '../src/pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
