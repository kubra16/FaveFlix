import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
   <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        {user && <Navbar themeMode={themeMode} toggleTheme={toggleTheme}/>}
        <div className="content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/playlist/:id" element={<PlayListDetails />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
