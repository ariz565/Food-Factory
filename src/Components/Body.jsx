import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";


// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

const Body = () => {
    //Local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchtext, setsearchtext] = useState("");
    // console.log("Body rendered"); //for debugging purpose re render the component
    //whenever state variable update, react triggers a reconciliation cycle (re-render the component)
    //useEffect hook to fetch data from API
    useEffect(() => {
        fetchData();
    }, []);

    //Function to fetch data from API
    const fetchData = async () => {
        const data = await fetch (
            "https://www.swiggy.com/mapi/homepage/getCards?lat=27.8973944&lng=78.0880129"
);
            const json =await data.json();

            

            //optional chaining
            setListOfRestaurants(json?.data?.cards[3]?.card?.card?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    };
//conditional rendering


    return listOfRestaurants.length ===0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <input type ="text" className="search-box" value={searchtext}
                onChange={(e)=>{
                    setsearchtext(e.target.value);
                }}
                
                />
                <button onClick={()=>
                {
                  const filteredRestaurant=  listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchtext.toLowerCase()));

                    setFilteredRestaurant(filteredRestaurant);
                    //filtering the list of restaurants based on search input
                }}>Search</button>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.rating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}       
                >Top Rated Restaurants</button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
                </div>
        </div>
    ); 
};
export default Body;