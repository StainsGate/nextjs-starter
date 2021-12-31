import type { NextPage } from "next";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen">
      <h1 className="text-white">Dynamic Gravity </h1>
      <Button text="press me" />
    </div>
  );
};

export default Home;
