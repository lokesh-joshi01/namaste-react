import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 * -Logo
 * - Nav Items
 * Body
 * -Search
 * RestroContainer
 * -RestroCard
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesDZUlquC1TaGwbHrDaAGnzAq_1bkh6Ew2w&usqp=CAU" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const RestaurentCard = (props) => {
    const { resData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,slaString,costForTwo} = resData?.info


    return (
        <div className="res-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Restro-logo" className="restroLogo" ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h5>{resData.info.sla.slaString}</h5>
            <h4>{costForTwo}</h4>
        </div>
    )
}

const resList = [
    
    {
        "info": {
            "id": "145541",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "0c958153eeb436db6d515ca36e47e8a4",
            "locality": "32nd Avenue",
            "areaName": "Milestone",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "145541",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5000
            },
            "parentId": "195515",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-12 23:30:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-4b3e727c-5870-4e9b-8d37-87f2955794b9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-32nd-avenue-milestone-gurgaon-145541",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "27891",
            "name": "Bakingo",
            "cloudinaryImageId": "mdkbnw5orkqj5ektnts6",
            "locality": "Old DLF Colony",
            "areaName": "Sector 14",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages",
                "Snacks"
            ],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "27891",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5200
            },
            "parentId": "3818",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-13 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-4b3e727c-5870-4e9b-8d37-87f2955794b9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bakingo-old-dlf-colony-sector-14-gurgaon-27891",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "39292",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Huda Market",
            "areaName": "Sector 14",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "39292",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5200
            },
            "parentId": "547",
            "avgRatingString": "3.9",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-13 03:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-4b3e727c-5870-4e9b-8d37-87f2955794b9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-huda-market-sector-14-gurgaon-39292",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "411518",
            "name": "McDonald's",
            "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
            "locality": "Sector 48",
            "areaName": "Sohna Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American"
            ],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "411518",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5100
            },
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-13 02:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-4b3e727c-5870-4e9b-8d37-87f2955794b9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-sector-48-sohna-road-gurgaon-411518",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "612059",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "uxmdoori46ztxe0pfpwf",
            "locality": "Sadar Bazar",
            "areaName": "Sector 11",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "612059",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3900
            },
            "parentId": "2456",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-13 00:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-4b3e727c-5870-4e9b-8d37-87f2955794b9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-sadar-bazar-sector-11-gurgaon-612059",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }]





const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resContainer">
                {
                    resList.map((restro ) => (
                    <RestaurentCard key={restro.info.id} resData={restro}/>
                ))}

            {/* not using key(not acceptable)<<<<<< index as key <<<< unique key */}
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footerList">
                <li>@Copyright</li>
                <li>@Links</li>
                <li>Contacts</li>
                <li>References</li>
                <li>Back to Top</li>

            </ul>


        </div>

    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )

}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);



