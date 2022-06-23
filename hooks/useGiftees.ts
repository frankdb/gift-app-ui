import { useQuery } from "react-query";
import axios from "axios";

const getGiftees = async () => {
  const { data } = await axios.get("http://swapi.dev/api/people");
  return data.results;
};

export default function useGiftees() {
  return useQuery("giftees", () => getGiftees());
}
