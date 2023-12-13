import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
    //local State variable
    let [resList , setResList] = useState([ {
            "info": {
            "id": "125878",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Old Railway Road",
            "areaName": "Sector 4",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "Burgers",
            "American"
            ],
            "avgRating": 4,
            "feeDetails": {
            "restaurantId": "125878",
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
            "parentId": "166",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-13 03:30:00",
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
            "header": "ITEMS",
            "subHeader": "AT ₹129"
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-old-railway-road-sector-4-gurgaon-125878",
            "type": "WEBLINK"
            }
            },
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-32nd-avenue-milestone-gurgaon-145541",
            "type": "WEBLINK"
            }
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-huda-market-sector-14-gurgaon-39292",
            "type": "WEBLINK"
            }
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-sector-48-sohna-road-gurgaon-411518",
            "type": "WEBLINK"
            }
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/bakingo-old-dlf-colony-sector-14-gurgaon-27891",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "11748",
            "name": "Subway",
            "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
            "locality": "New Colony",
            "areaName": "Sector 7",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
            "restaurantId": "11748",
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
            "parentId": "2",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 1.5,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "1.5 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-13 04:00:00",
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
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-new-colony-sector-7-gurgaon-11748",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "34843",
            "name": "Nazim's Kathi Roll",
            "cloudinaryImageId": "ew3n5gi5xzgxnqwvicsp",
            "locality": "Huda Market",
            "areaName": "Sector 14",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "Snacks",
            "Mughlai",
            "Indian"
            ],
            "avgRating": 4,
            "feeDetails": {
            "restaurantId": "34843",
            "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 4500
            },
            "parentId": "5326",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-13 02:00:00",
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/nazims-kathi-roll-huda-market-sector-14-gurgaon-34843",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "297571",
            "name": "Greenr Cafe",
            "cloudinaryImageId": "2ef9d4bc03a57aba4662cc23d4fa14da",
            "locality": "Sector 15",
            "areaName": "Sector 15",
            "costForTwo": "₹500 for two",
            "cuisines": [
            "Cafe",
            "Salads",
            "Pizzas",
            "Healthy Food",
            "Italian",
            "Desserts",
            "Beverages"
            ],
            "avgRating": 4.1,
            "veg": true,
            "feeDetails": {
            "restaurantId": "297571",
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
            "parentId": "10915",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+",
            "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "34 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-12 22:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
            {
              "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
              "description": "gourmet"
            }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "gourmet",
                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/greenr-cafe-sector-15-gurgaon-297571",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "20138",
            "name": "Harish Bakery",
            "cloudinaryImageId": "jkuj5aui7wwmwc0eidog",
            "locality": "Huda Shopping Center",
            "areaName": "Sadar Bazar",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "North Indian",
            "South Indian",
            "Desserts"
            ],
            "avgRating": 4.1,
            "veg": true,
            "feeDetails": {
            "restaurantId": "20138",
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
            "parentId": "1676",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 0.1,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "0.1 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-12 22:30:00",
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/harish-bakery-huda-shopping-center-sadar-bazar-gurgaon-20138",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "68318",
            "name": "Chaayos Chai+Snacks=Relax",
            "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
            "locality": "DLF Colony",
            "areaName": "Sector 14",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "Bakery",
            "Beverages",
            "Chaat",
            "Desserts",
            "Home Food",
            "Italian",
            "Maharashtrian",
            "Snacks",
            "Street Food",
            "Sweets"
            ],
            "avgRating": 4.3,
            "feeDetails": {
            "restaurantId": "68318",
            "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 4500
            },
            "parentId": "281782",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-13 04:00:00",
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
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-dlf-colony-sector-14-gurgaon-68318",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "41995",
            "name": "Theobroma",
            "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
            "locality": "DLF Phase - 4",
            "areaName": "DLF Phase - 4",
            "costForTwo": "₹800 for two",
            "cuisines": [
            "Bakery",
            "Desserts"
            ],
            "avgRating": 4.5,
            "feeDetails": {
            "restaurantId": "41995",
            "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 7600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 7600
            },
            "parentId": "1040",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 7.3,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "7.3 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-12 23:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
            {
              "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
              "description": "gourmet"
            }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "gourmet",
                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL"
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/theobroma-dlf-phase-4-gurgaon-41995",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "7895",
            "name": "FreshMenu",
            "cloudinaryImageId": "6c4de7b481d3614370e5062b2f33e7d6",
            "locality": "Huda Main Market",
            "areaName": "Sector 45",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "Continental",
            "Chinese",
            "Oriental",
            "Asian",
            "Healthy Food",
            "Fast Food",
            "Indian",
            "Desserts"
            ],
            "avgRating": 4,
            "feeDetails": {
            "restaurantId": "7895",
            "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 6200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 6200
            },
            "parentId": "398",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "33 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-13 00:00:00",
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
            "header": "EVERY ITEM",
            "subHeader": "@ ₹129"
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/freshmenu-huda-main-market-sector-45-gurgaon-7895",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "228351",
            "name": "House of Chow",
            "cloudinaryImageId": "6e97ac8f5c89213610309ef1940afa05",
            "locality": "Jharsa",
            "areaName": "Sector 39",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "Pan-Asian",
            "Chinese",
            "Thai",
            "Oriental"
            ],
            "avgRating": 4.1,
            "feeDetails": {
            "restaurantId": "228351",
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
            "parentId": "9064",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-12 23:59:00",
            "opened": true
            },
            "badges": {
            
            },
            "isOpen": true,
            "type": "C",
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
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/house-of-chow-jharsa-sector-39-gurgaon-228351",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "446543",
            "name": "Dhaba 1947",
            "cloudinaryImageId": "xv8tch8ndiy45zbmcpbe",
            "locality": "Huda City",
            "areaName": "Huda City",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "North Indian",
            "Snacks"
            ],
            "avgRating": 4.1,
            "feeDetails": {
            "restaurantId": "446543",
            "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 5600
            },
            "parentId": "14248",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-13 00:00:00",
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
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/dhaba-1947-huda-city-gurgaon-446543",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "89556",
            "name": "Urban Tandoor",
            "cloudinaryImageId": "amhewecesj0lshepdytl",
            "locality": "Huda Market",
            "areaName": "Sector 31",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "Mughlai",
            "North Indian",
            "Indian"
            ],
            "avgRating": 4,
            "feeDetails": {
            "restaurantId": "89556",
            "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 4500
            },
            "parentId": "15632",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-13 00:00:00",
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
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹749",
            "discountTag": "FLAT DEAL"
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/urban-tandoor-huda-market-sector-31-gurgaon-89556",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "76060",
            "name": "Nirula's",
            "cloudinaryImageId": "a66fa8f5befa65947d9e20f29a863ce0",
            "locality": "Sector 14",
            "areaName": "Sector 14",
            "costForTwo": "₹500 for two",
            "cuisines": [
            "Pizzas",
            "Burgers",
            "Ice Cream",
            "North Indian",
            "Fast Food",
            "Pastas",
            "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
            "restaurantId": "76060",
            "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 4400
            },
            "parentId": "1738",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "23 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-13 04:00:00",
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/nirulas-sector-14-gurgaon-76060",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "355339",
            "name": "Grameen Kulfi",
            "cloudinaryImageId": "nrqjhlsss9iadlaaqrqm",
            "locality": "Acharyapuri Mode",
            "areaName": "Sector 14",
            "costForTwo": "₹120 for two",
            "cuisines": [
            "Ice Cream",
            "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "feeDetails": {
            "restaurantId": "355339",
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
            "parentId": "12175",
            "avgRatingString": "4.7",
            "totalRatingsString": "100+",
            "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-13 00:00:00",
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
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/grameen-kulfi-acharyapuri-mode-sector-14-gurgaon-355339",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "42958",
            "name": "Faasos - Wraps, Rolls & Shawarma",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "locality": "Huda Complex",
            "areaName": "Sector 12",
            "costForTwo": "₹200 for two",
            "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "North Indian",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
            "restaurantId": "42958",
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
            "parentId": "21809",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-12 23:59:00",
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
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-huda-complex-sector-12-gurgaon-42958",
            "type": "WEBLINK"
            }
            },
            {
            "info": {
            "id": "21742",
            "name": "Wow! Momo",
            "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
            "locality": "Huda Market",
            "areaName": "Sector 31",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "Tibetan",
            "Healthy Food",
            "Asian",
            "Chinese",
            "Snacks",
            "Continental",
            "Desserts",
            "Beverages"
            ],
            "avgRating": 3.9,
            "feeDetails": {
            "restaurantId": "21742",
            "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 4500
            },
            "parentId": "1776",
            "avgRatingString": "3.9",
            "totalRatingsString": "5K+",
            "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-12-13 02:00:00",
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
            
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-huda-market-sector-31-gurgaon-21742",
            "type": "WEBLINK"
            }
            }
        
    
]);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                 const filteredList = resList.filter((res) => res.info.avgRating>4);
                 setResList(filteredList);
                console.log(resList);
            }}
            
            
            >Top Rated Restaurants</button>
            </div>
            <div className="resContainer">
                {
                    resList.map((restro) => (
                        <RestaurentCard key={restro.info.id} resData={restro} />
                    ))}

                {/* not using key(not acceptable)<<<<<< index as key <<<< unique key */}
            </div>
        </div>
    )
}

export default Body;