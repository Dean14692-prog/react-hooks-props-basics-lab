import React from "react";

function Home({ name, city, color }) {
  return (
    <section id="home" className="home-section">
      <h1 style={{ color: color }}>
        {`${name} is a Web Developer from ${city}`}
      </h1>
    </section>
  );
}

export default Home;
