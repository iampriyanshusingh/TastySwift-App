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
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            RES_LOGO +
            resData.info.cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime}minutes</h4>
      </div>
    );
  };

export default RestroCard;
