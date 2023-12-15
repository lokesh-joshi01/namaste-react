import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    console.log("body rendered");
    //local State variable
    const [listOfRestro , setListOfRestro] = useState([]);

    const [listFilteredRestro , setListFilteredRestro] = useState([]);

    const [searchText,setSearchText] = useState("");
    // useEffect(() => {
    //     clearData();
    // },[]);

    // const clearData = () =>{
    // setListOfRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async() => {
        const data =  await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        //convert to json

        const json = await data.json();
        console.log(json);

        //optional chaining

        setListOfRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListFilteredRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
     //conditional rendering

    if(listOfRestro.length === 0){
        return <Shimmer/>;
    }

    return listOfRestro.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter">
            <div className="seach">
             <input type="text" placeholder="search here" className="search-box" value={searchText} onChange={(e) => {
             setSearchText(e.target.value);
             }}></input>
             <button onClick={() =>{
               //filter the restro cards and update the card
               //need search text here of input text
               //need value of input box.
               const filteredRestro = listOfRestro.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
               setListFilteredRestro(filteredRestro);
               console.log(searchText);
               
             }} className="login-btn">Search</button>
             <button className="filter-btn" onClick={() => {
                 const filteredList = listOfRestro.filter((res) => res.info.avgRating>4.2);
                 setListOfRestro(filteredList);
                console.log(resList);
            }}
            
            
            >Top Rated Restaurants</button>
            </div>
                
            </div>
            
            <div className="resContainer">
                {
                    listFilteredRestro.map((restro) => (
                        <RestaurentCard key={restro.info.id} resData={restro} />
                    ))}

                {/* not using key(not acceptable)<<<<<< index as key <<<< unique key */}
            </div>
        </div>
    )
}

export default Body;