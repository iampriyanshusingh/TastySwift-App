import { RES_LOGO } from "../utils/constants";

const RestroCard = (props) => {
    const { resData } = props;
  
    const {
      name,
      cuisines,
      avgRating,
      costForTwo,
    } = resData?.info;
  
    return (
      <div className="res-card m-4 p-4 w-[245px] bg-[#f0f0f0] rounded-lg">
        <img
          className="res-logo h-[160px] w-[220px] rounded-md"
          alt="res-logo"
          src={
            RES_LOGO +
            resData.info.cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime}minutes</h4>
      </div>
    );
  };

export default RestroCard;
