import Tour from "../../components/Tour/Tour";
import "../../components/TourList/TourList.scss";
import { tourData } from '../tourData';
import { useState } from "react";

//To get our individual Tours displayed as a list irrespective of the size,
//here we import the tourData file into TourList and then use the map() to 
//loop through the array and get the Tours for display, firstly by creating
//state.

function TourList() {
    const [tour, setTour] = useState([tourData]);

}

export default TourList