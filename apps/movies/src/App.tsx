import React from "react";
import { AppShell } from "ui";
import { MoviesContent } from "movies-content";
import { Playlist } from "playlist-content";

function App() {
  return (
    <AppShell
      title="Movies"
      routes={[
        {
          path: "/",
          element: MoviesContent,
        },
        {
          path: "/playlist",
          element: Playlist,
        },
      ]}
      navLinks={[
        {
          path: "/",
          label: "Home",
        },
        {
          path: "/playlist",
          label: "Playlist",
        },
      ]}
      colorScheme="light"
    />
  );
}

export default App;
