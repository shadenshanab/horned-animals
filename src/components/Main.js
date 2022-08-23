import React from "react";
import HornedBeast from "./HornedBeast";
import image1 from "./assets/black.jpg"

class Main extends React.Component{
    render(){
        return(
            <div>
                <HornedBeast title='Blue Pegasus' img= {require('../components/assets/blue.jpg')} description='Pegasus (Greek: Πήγασος, translit. Pḗgasos; Latin: Pegasus, Pegasos) is a mythical winged divine horse, and one of the most recognized creatures in Greek mythology. Usually he is depicted as pure white. Myths about him vary as the Greek myths evolve and reflect progression through successive generations of deities.' ></HornedBeast>
                <HornedBeast title='Black Pegasus' img= {image1} description='In Archaic Greek mythology, Pegasus is the offspring of the Gorgon Medusa,[1] when she was depicted as a mare. In later myths, Pegasus was foaled by Medusa as she was dying, while being decapitated by the hero Perseus.' ></HornedBeast>
            </div>
        )
    }
}
export default Main;

