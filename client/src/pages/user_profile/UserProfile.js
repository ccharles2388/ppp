import React,{Component} from "react";
import Navbar from "./src/components/navbar/NavBar";

export default class UserProfile extends Component{
    constructor(props){
        super(props);
        this.state={}
   
    }
    render() {
        return(
        <div>
            <Navbar/>
        </div>)
    } 

    
}