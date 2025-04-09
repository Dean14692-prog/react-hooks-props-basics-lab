import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  const user = {
    name: "Dennis Muasya Ngui",
    city: "Nairobi", // Modify as needed
    color: "firebrick", // Used as the inline style color for Home.h1
    bio: "I am a passionate developer ready to solve real-world problems.",
    links: {
      github: "https://github.com/Dean14692-prog",
      linkedin: "https://www.linkedin.com/feed/",
    },
  };

  return (
    <div className="app-container">
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
