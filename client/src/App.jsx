import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Playlist from "./Pages/Playlist";
import PlayListDetails from "./components/PlayListDetails";
import Navbar from "./components/Navbar";
import { UserState } from "./Context/UserProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import darkTheme from './theme';
import lightTheme from './lightTheme';

function App() {
  const [themeMode, setThemeMode] = useState('light'); 
  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };
  const theme = themeMode === 'light' ? lightTheme : darkTheme;
  const { user } = UserState();

   const location = useLocation();
    const hideNavbarRoutes = ["/"]
  return (
   <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
         {!hideNavbarRoutes.includes(location.pathname) && user && (
          <Navbar themeMode={themeMode} toggleTheme={toggleTheme} />
        )}
        <div className="content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={user && <Home />} />
            <Route path="/search" element={user && <Search />} />
            <Route path="/playlist" element={user && <Playlist />} />
            <Route path="/public/:id" element={<PlayListDetails />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
