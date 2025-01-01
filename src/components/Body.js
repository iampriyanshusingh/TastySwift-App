import RestroCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.30971167047457&lng=82.99302231520416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    //optional chaining ?.[]?.[]

    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional Rendering
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer/>
  // }

  //used terninary operator
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((res) => {
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setListOfRestaurant(filteredRestaurant);
              console.log(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter restaurants with avgRating > 4
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
