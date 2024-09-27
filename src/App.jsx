import React from "react";
import { Header } from "./pages/header/header";
import { Hero } from "./pages/hero/hero";
import { Manage } from "./pages/Manage/manage";
import { Comment } from "./pages/Comment";

function App() {
  return (
    <div className="body">
      <div className="container">
        <Header />
        <Hero />
        <Manage />
        <Comment />
      </div>
    </div>
  );
}

export default App;
