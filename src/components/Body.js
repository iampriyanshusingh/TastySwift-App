import RestroCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./shimmer";
import useListOfRestaurant from "../utils/useListOfRestaurant";
import useFilteredRestaurant from "../utils/useFilteredRestaurant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  // Fetch the original list of restaurants
  const listOfRestaurant = useListOfRestaurant();

  console.log("listOfRestaurant:", listOfRestaurant);

  // Manage filtered list using custom hook
  const { filteredList, filterBySearch, filterByRating } =
    useFilteredRestaurant(listOfRestaurant);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline! Please Check your internet connection</h1>
    );

  if (!listOfRestaurant || listOfRestaurant.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className=" search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-sm"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-200 m-4 rounded-md"
            onClick={() => filterBySearch(searchText)}
          >
            Search
          </button>
        </div>
        <div className=" flex items-center">
        <button className="px-4 py-1 bg-gray-100 rounded-md"
          onClick={() => filterByRating(4.5)}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap px-2">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestroCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
