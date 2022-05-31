import React from "react";
import { AppShell } from "ui";

//@ts-ignore
import MoviesContent from "movies/Movies";
import { Playlist } from "playlist-content";

function App() {
  return (
    <AppShell
      title="Playlist"
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
      colorScheme="dark"
    />
  );
}

export default App;
