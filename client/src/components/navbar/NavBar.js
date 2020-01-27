import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={}
   
    }
    render() {
        return(
        <div className="navbar">
            <Link to="/dashboard"><button className="home">Home</button></Link>
            <Link to="/user_profile"><button className="editprofile">User Profile</button></Link>
            <Link to="/editprofile"><button className="editprofile">Edit User Profile</button></Link>
            <Link to="/jobtasks"><button className="jobtasks">Job Tasks</button></Link>
            <Link to="/traininginfo"><button className="traininginfo">Training</button></Link>
            <Link to="/knowledgecenter"><button className="knowledgecenter">Knowledge Center</button></Link>
        </div>)
    } 

    
}