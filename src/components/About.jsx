import React from "react";
import img from "../assets/about.svg";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";
import "./about.css";


const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-4 md:mx-41 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>


      <div className="w-full md:w-2/4 text-center space-y-2">
              <Heading title1="About" title2="Us" />
              <h1 className="bo" ><b className="animate:front"><i>"We Deliver The Best , After Deep Researching , Eye Witnessing and Hand Crafting All the Tech-Content"</i></b></h1>
        <p className=" text-lightText"><img src="https://i.ibb.co/7ChYGH3/profile-pic-9.png" className="png1" />
        
        <h1 className= "animate-pulse"> PRITAM MAZUMDAR<h1 className= "animate-bounce" color="red"><b><i>FOUNDER & MENTOR</i></b> </h1> </h1>
        </p>
        <p className=" text-lightText"><img src="https://i.ibb.co/3CLC31P/tamal.png" className="png1" />
          <h1 className= "animate-pulse">TAMAL MAITY<h1 className= "animate-bounce" color="red"><b><i>TECH ASSIST</i></b> </h1> </h1>
        </p>

        <p className=" text-lightText"><img src="https://avatars.githubusercontent.com/u/122034818?s=400&u=b523d382d0aab4c8cb177f1f31debf7e7d99a5e3&v=4"className="png1" />
        <h1 className= "animate-pulse">SUPRIYO MAJI <h1 className= "animate-bounce" color="red"><b><i>WEB WIZARD</i></b></h1> </h1>
        </p>
        
         
        <p className=" text-lightText"><img src="https://i.ibb.co/tZRNmQm/tinywow-profile-photo-40988806-1.png" className="png1" />
        <h1 className= "animate-pulse">SUPRIYA GHAR <h1 className= "animate-bounce" color="red"><b><i>INSIGHT ILLUMINATOR</i></b> </h1> </h1>

          
        </p>
        <p className=" text-lightText"><img src="https://i.ibb.co/GntqScw/tinywow-profile-photo-40993588-1.png" className="png1" />
        
        <h1 className= "animate-pulse">SABIR MALLICK<h1 className= "animate-bounce" color="red"><b><i>SOCIAL MAVEN</i></b></h1> </h1>

          
        </p>
        
       
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
