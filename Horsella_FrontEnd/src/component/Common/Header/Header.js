import AboutUs from '../../AboutUs/AboutUs';
import ContactUs from '../../ContactUs/ContactUs';
import Login from '../../Login/Login';
import Breeding from '../../Breeding/Breeding';
import Trotting from '../../Trotting/Trotting';
import Training from '../../Training/Training';
import Ownership from '../../Ownership/Ownership';
import Home from '../../Home/Home';
import {Route,NavLink } from 'react-router-dom';
import './Header.css';
import imageName from '../../../assets/img/logo_bg.png';
//import classes from './Header.module.css';

const Header = () =>{
    return(
        <div>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top" >
            <a class="navbar-brand" id="ac" href="#">
            <img src={imageName} style={{width:"150px",height:"50px"}} className="imgHeader"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link">
                <NavLink 
                    to="/"
                    style={{color:"black",
                    fontSize: "15px",
                    margin: "0",
                    padding: "0",
                    lineHeight: "1",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",}}
                    activeStyle={{
                        color: '#1bbd36',    
                    }} 
                    exact>Home</NavLink></a>
                </li>
                <li class="nav-item"><a class="nav-link">
                <NavLink 
                    to="/about-us"
                    style={{color:"black",
                    fontSize: "15px",
                    margin: "0",
                    padding: "0",
                    lineHeight: "1",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",}}
                    activeStyle={{
                        color: '#1bbd36',    
                    }} 
                    exact>AboutUs</NavLink>
                </a>               
                </li>
                <li class="nav-item"><a class="nav-link">
                <NavLink 
                    to="/contact-us"
                    style={{color:"black",
                    fontSize: "15px",
                    margin: "0",
                    padding: "0",
                    lineHeight: "1",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",}}
                    activeStyle={{
                        color: '#1bbd36',    
                    }} 
                    exact>ContactUs</NavLink></a>
                </li>
                <li class="nav-item"><a class="nav-link">
                <NavLink 
                    to="/breeding"
                    style={{color:"black",
                    fontSize: "15px",
                    margin: "0",
                    padding: "0",
                    lineHeight: "1",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",}}
                    activeStyle={{
                        color: '#1bbd36',    
                    }} 
                    exact>Breeding</NavLink></a>
                </li>
                <li class="nav-item"><a class="nav-link">
                <NavLink 
                    to="/trotting"
                    style={{color:"black",
                    fontSize: "15px",
                    margin: "0",
                    padding: "0",
                    lineHeight: "1",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",}}
                    activeStyle={{
                        color: '#1bbd36',    
                    }} 
                    exact>Trotting</NavLink></a>
                </li>
                <li class="nav-item"><a class="nav-link">
                <NavLink 
                    to="/training"
                    style={{color:"black",
                    fontSize: "15px",
                    margin: "0",
                    padding: "0",
                    lineHeight: "1",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",}}
                    activeStyle={{
                        color: '#1bbd36',    
                    }} 
                    exact>Training</NavLink></a>
                </li>
                <li class="nav-item"><a class="nav-link">
                <NavLink 
                    to="/ownership"
                    style={{color:"black",
                    fontSize: "15px",
                    margin: "0",
                    padding: "0",
                    lineHeight: "1",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",}}
                    activeStyle={{
                        color: '#1bbd36',    
                    }} 
                    exact>Ownership</NavLink></a>
                </li>
                <li class="nav-item"><a class="nav-link">
                <NavLink 
                to="/login"
                style={{color:"black",
                    fontSize: "15px",
                    margin: "0",
                    padding: "0",
                    lineHeight: "1",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",}}
                activeStyle={{
                    color: '#1bbd36',    
                }} 
                exact>Login</NavLink></a>
                </li>    
            </ul>
        </div>  
    </nav>
        <Route path="/" exact component={Home}/> 
        <Route path="/about-us" exact component={AboutUs}/>             
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/breeding" exact component={Breeding}/> 
        <Route path="/trotting" exact component={Trotting}/> 
        <Route path="/training" exact component={Training}/> 
        <Route path="/ownership" exact component={Ownership}/> 
        <Route path="/login" exact component={Login}/>
        </div>
        </div>
    );
}
export default Header;
