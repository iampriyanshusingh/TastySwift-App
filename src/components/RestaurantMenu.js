import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
  
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards ||

      //adding again because some item contain in categories or some in just after card.....
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.categories[0]?.itemCards ||
    [];

  return (
    <div className="menu">
      <h1>{name || "Restaurant Name Not Available"}</h1>
      <h3>{cuisines?.join(", ") || "Cuisines Not Available"}</h3>
      <h3>{costForTwoMessage || "Cost information not available"}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name || "Item Name Not Available"} - Rs.{" "}
            {(items.card.info.price || 0) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
