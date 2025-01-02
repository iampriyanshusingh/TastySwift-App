import { useState, useEffect } from "react";

const useFilteredRestaurant = (listOfRestaurant) => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    // Initialize with the original list when it's available
    if (listOfRestaurant) {
      setFilteredList(listOfRestaurant);
    }
  }, [listOfRestaurant]);

  const filterBySearch = (searchText) => {
    const filtered = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filtered);
  };

  const filterByRating = (minRating) => {
    const filtered = listOfRestaurant.filter(
      (res) => res.info.avgRating >= minRating
    );
    setFilteredList(filtered);
  };

  return { filteredList, filterBySearch, filterByRating };
};

export default useFilteredRestaurant;
