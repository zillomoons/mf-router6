import React from "react";
import "./App.css";
import { AppShell } from "ui";

function App() {
  return (
    <AppShell
      title="Movies"
      routes={[
        {
          path: "/",
          element: () => <div>Is this really Home</div>,
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
