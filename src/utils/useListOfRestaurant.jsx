import { useEffect, useState } from "react";
import { BODY_URL } from "./constants";

const useListOfRestaurant = (listOfRestaurant) => {
  const [listofRes, setListofRes] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BODY_URL);
    const json = await data.json();

    setListofRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  return listofRes;
};

export default useListOfRestaurant;