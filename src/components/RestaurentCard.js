import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info


    return (
        <div className="res-card">
            <img src={CDN_URL + cloudinaryImageId} alt="Restro-logo" className="restroLogo" ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h5>{resData.info.sla.slaString}</h5>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurentCard;