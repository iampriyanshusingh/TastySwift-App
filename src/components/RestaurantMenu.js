import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.30971167047457&lng=82.99302231520416&restaurantId=77082&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if(resInfo === null) return <Shimmer/>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

   const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories[0];

    console.log(itemCards);

  return(
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2> Thanks for Coming</h2>
    </div>
  );
};

export default RestaurantMenu;
