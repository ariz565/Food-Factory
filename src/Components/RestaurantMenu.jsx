import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu=()=>{
const[resInfo, setResInfo]=useState([null]);
const{resId}=useParams();  


useEffect(() => {
        fetchMenu();
    },[]);

const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
            // + "&submitAction=ENTER"
        
        const json=await data.json();
        // console.log(json);
        setResInfo(json.data);
        };

if(resInfo===null) return <Shimmer/>;


const {name,cuisines,sla}=resInfo?.cards[2]?.card?.card?.info;

const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")}-{sla}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((itemCard) => (
                    <li>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;