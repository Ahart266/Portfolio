import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Home/home.scss";


const Home = ({}) => {
  
  return (
    <div className="homepage">
      
      <section className="par">
        <img src="https://res.cloudinary.com/twin2052000/image/upload/v1595437035/bg_i0hsji.jpg" className="bkg lax"></img>
        <img src="https://res.cloudinary.com/twin2052000/image/upload/v1595437030/moon_pwmxbm.png" className="moon lax"></img>
        <img src="https://res.cloudinary.com/twin2052000/image/upload/v1595437025/mountain_bacq4s.png" className="mountain lax"></img>
        <img src="https://res.cloudinary.com/twin2052000/image/upload/v1595437017/road_is7rol.png" className="road lax"></img>
       </section>
       <br></br>
       <br></br>
       <section className="container">
       <h2 className="about">Antwain Hart</h2>
       <div  className="par2">
           <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
               Repudiandae vero labore incidunt dicta ipsam harum error nisi 
               aspernatur, modi quidem eius architecto quaerat, quos ipsum sed, 
               temporibus fugiat rem aliquid!
           </p>
       </div>
       </section>
       <br></br>
       <br></br>
       <br></br>
       <br></br>


   
  </div>
  );
};

export default Home;
