import React from "react";
import { AppShell } from "ui";
import MoviesContent from "./MoviesContent";

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
          element: () => <div>This is Playlist</div>,
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
