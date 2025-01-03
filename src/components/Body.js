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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => filterBySearch(searchText)}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={() => filterByRating(4.5)}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
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
