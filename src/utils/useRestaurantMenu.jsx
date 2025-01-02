import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurntMenu;
