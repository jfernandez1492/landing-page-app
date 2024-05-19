import React from "react";
import { MainView } from "../components/main-view.component";

const Home = () => {
  return (
    <main className="flex h-full flex-col items-center justify-between md:p-24 p-10">
      <MainView />
    </main>
  );
};

export default Home;
