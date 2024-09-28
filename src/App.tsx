import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '@/pages';
import Game from '@/pages/Game';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game/:id" element={<Game />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
