import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Button>My Button</Button>
    </>
  );
};

export default Home;
