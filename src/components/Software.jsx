import React from "react";
import './App.css';


function Software(){
  return(
    
     <div id="coding">
     <a href="/assets/resumes/Tanjila_Kabir_Resume.pdf" target="_blank" rel="noopener noreferrer"><p id="resume">RESUME</p></a>
       <h2>Software Portfolio</h2>
       <div id="gallery2">
       <div className="firstproj">
        
         <img src="./assets/phone.png" id="ratio"></img>
           <div className="overlay"> 
           <p id="description">Smart Water Quality Monitoring App</p>
            
          <a href="https://h2owaterquality.com/" target="_blank" rel="noopener noreferrer"><button>Learn More</button></a>
            <a href="https://github.com/tanjilak/waterquality_app" target="_blank" rel="noopener noreferrer"> <button>Github Project</button></a>
           </div>
         </div>
           
         </div>
       </div>
  );
}

export default Software;