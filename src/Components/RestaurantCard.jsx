import { Component } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;    // Destructuring props object

    const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

    return (
      <div className="m-4 p-4 w-[260px] rounded-lg bg-gradient-to-r from-zinc-50 to-slate-300-200">
        <img className="rounded-lg" alt ="res-logo" src ={CDN_URL + cloudinaryImageId} /> 
        <h3 className="font-bold font-sans py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4 className="font-serif">{avgRating}⭐</h4>
        <h4 className="italic font-medium">{costForTwo} FOR TWO</h4>
        <h4>{sla?.slaString}</h4>
        </div>
    );
  };

//High order Component
//input - RestaurantCard =>> output - RestaurantCardPromoted
export const withPromotedLabel =(RestaurantCard) => {
  return () => {
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard/>
      </div>
    );
  };
};

export default RestaurantCard;