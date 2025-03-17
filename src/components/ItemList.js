import { useDispatch } from "react-redux";

import { RES_LOGO } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = () => {
    //dispatch an action
    dispatch(addItem("pizza"));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.title}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 rounded-lg bg-black text-white shadow-lg absolute m-auto"
                onClick={ // just written the function above for better readability
                  handleAddItems
                }
              >
                Add+
              </button>
            </div>
            <img
              src={RES_LOGO + item.card.info.imageId}
              className="w-full rounded-lg"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
