import React from "react";
import HornedBeast from "./HornedBeast";
import Data from './data.json'


let animalData = Data.map(element =>
    <HornedBeast
        key = {element._id}
        title= {element.title}
        img = {element.image_url}
        description = {element.description}
        
    />
    );


class Main extends React.Component{
    render(){
        return(
            animalData
        )
    }
}
export default Main;

