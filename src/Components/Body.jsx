import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";


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
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9135016&lng=78.0781901&collection=83667");
            const json =await data.json();
            console.log("apiData", json?.data.cards[3]);
            //below written code is not a good way to write code , please use optional chaining
            //setList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        
            //Optional chaining: 
            console.log("text", json?.data?.cards);
            for (let i = 0; i < json?.data?.cards.length; i++) {
                const element = json?.data?.cards[i];
                if (element.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                    setListOfRestaurants(element.card?.card?.gridElements?.infoWithStyle?.restaurants);
                    setFilteredRestaurant(element.card?.card?.gridElements?.infoWithStyle?.restaurants);
                    break;
                }
            }
            //optional chaining
            // setListOfRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
//conditional rendering


    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <input type ="text" className="search-box" value={searchtext}
                onChange={(e)=>{
                    setsearchtext(e.target.value);
                }}
                 />
                  
                <button onClick={()=>
                {
                  const filteredRestaurant=  listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchtext.toLowerCase()));

                    setFilteredRestaurant(filteredRestaurant);
                    //filtering the list of restaurants based on search input
                }}>Search</button>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4 );
                    setFilteredRestaurant(filteredList);
                }}       
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
           

                {filteredRestaurant.map((restaurant) => (
                   <Link to ={"/restaurants/"+restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant}/></Link>
                ))}
                </div>
        </div>
    ); 
};
export default Body;