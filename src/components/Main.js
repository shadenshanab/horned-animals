import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
    render(){
        return(
            <div>
                <HornedBeast id= '1' title='UniWhal' img='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description='A unicorn and a narwhal nuzzling their horns.' 
                keyword ="narwhal"
                horns='1' ></HornedBeast>
                <HornedBeast id = '2'
                title='Rhino Family' 
                img='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' 
                description='Mother (or father) rhino with two babies.'
                keyword="rhino"
                horns="2" ></HornedBeast>
                <HornedBeast id="3" 
                title="Unicorn Head"
                img="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
                description="Someone wearing a creepy unicorn head mask"
                keyword="unicorn"
                horns="1"></HornedBeast>
                <HornedBeast id="4" 
                title="UniLego"
                img="https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80"
                description=""
                keyword=""
                horns=""></HornedBeast>

            </div>
        )
    }
}
export default Main;