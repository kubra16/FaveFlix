import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import axios from "axios";
import { UserState } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Playlist = () => {
  const {
    user,
    playlistName,
    setPlayListName,
    isCreateModal,
    setCreateModal,
    playList,
    setPlaylist,
  } = UserState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const response = await axios.get(
          `${BASE_URL}api/playlist/${user?._id}`,
          config
        );
        console.log(response);
        setPlaylist(response.data || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [user]);

  const copyPlaylistLink = (playlistId) => {
    const playlistURL = `${window.location.origin}/public/${playlistId}`;
    navigator.clipboard.writeText(playlistURL);
    alert("Playlist link copied to clipboard!");
  };

  const handlePlaylistSelect = (playlist) => {
    const playlistURL = `/public/${playlist._id}`;
    navigate(playlistURL);
  };

  return (
    <div>
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={3}>
          {playList.map((list) => (
            // <Grid item key={list.imdbID} xs={12} sm={6} md={4}>
            <Box
              onClick={() => handlePlaylistSelect(list)}
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  margin: "3rem",
                }}
              >
                {list.name}
              </Typography>
              <Button onClick={() => copyPlaylistLink(list._id)}>
                Copy link
              </Button>
            </Box>
            // </Grid>
          ))}
        </Grid>
        <MovieModal
        //   isOpen={isModalOpen}
        //   onClose={handleCloseModal}
        //   movie={selectedMovie}
        />
      </Box>
    </div>
  );
};

export default Playlist;
