import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";



// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
                </div>
        </div>
    );
};

export default Body;