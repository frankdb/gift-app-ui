import type { NextPage } from "next";
import { useEffect } from "react";
import { Navbar } from "../components/navbar";
import useGiftees from "../hooks/useGiftees";

const Home: NextPage = () => {
  const { data, isLoading, isError } = useGiftees();

  useEffect(() => {
    console.log("data", data);
  }, [data, isLoading]);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
