import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
// import resList from "../utils/mockData";
import {useEffect, useState, useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

const Body = () => {
    //Local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchtext, setsearchtext] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
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
const onlineStatus = useOnlineStatus();
if (onlineStatus === false) return (
    <h1>Looks like you're offline!! Please check your internet Connection</h1>
);

const {loggedInUser,setUserName} = useContext(UserContext)

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type ="text" className="border border-solid border-black " value={searchtext}
                onChange={(e)=>{
                    setsearchtext(e.target.value);
                }}
                 />
                  
                <button className="px-4 py-2 ml-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" 
                onClick={()=>{
                    //filter the restaurant cards and update the UI
                    //search text
                  const filteredRestaurant=  listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchtext.toLowerCase()));

                    setFilteredRestaurant(filteredRestaurant);
                    //filtering the list of restaurants based on search input
                }}>Search</button>
                </div>

                <div className="search m-4 p-4 flex items-center"> 
                {/* <label>UserName : </label>
                <input className="border border-black p-2"
                value={loggedInUser}
                onChange={(e)} => setUserName(e.target.value)} /> */}
                <button className="px-4 py-2 ml-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-400 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4 );
                    setFilteredRestaurant(filteredList);
                }}       
                >Top Rated Restaurants</button>
                </div>
                </div>
            <div className="flex flex-wrap bg-gradient-to-r from-zinc-50 to-orange-100">
           

                {filteredRestaurant.map((restaurant) => (
                //    <Link to ={"/restaurants/"+restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant}/></Link>
                // ))}
                <Link key ={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}
                >
                    {restaurant.info.promoted ? (
                        <RestaurantCardPromoted resData={restaurant} />
                    ) : (
                        <RestaurantCard resData={restaurant} />
                    )}
                    </Link>
                ))}
                </div>
                
        </div>
    ); 
};
export default Body;