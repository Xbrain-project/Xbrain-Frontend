import React from "react";
import Blog from "./components/Blog";
import Feed from "./components/Feed";
import CoverHero from "./components/CoverHero";

const Community = () => {
  return (
    <div className="w-full justify-center my-12">
      <CoverHero />
      <Blog />
      <Feed />
    </div>
  );
};

export default Community;
