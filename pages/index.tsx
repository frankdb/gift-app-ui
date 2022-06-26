import type { NextPage } from "next";
import { useEffect } from "react";
import { Navbar } from "../components/navbar";
import { GifteeCard } from "../components/giftee-card/GifteeCard";
import useGiftees from "../hooks/useGiftees";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  const { data, isLoading, isError } = useGiftees();

  useEffect(() => {
    console.log("data", data);
  }, [data, isLoading]);

  return (
    <>
      <Box bg="purple.100">
        <Navbar />
        {data?.map((giftee) => {
          return <GifteeCard key={giftee.id} name={giftee.name} />;
        })}
      </Box>
    </>
  );
};

export default Home;
