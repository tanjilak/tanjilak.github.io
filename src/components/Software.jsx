import React from "react";
import './App.css';

function Software(){
  return(
    
     <div id="coding">
      
       <h2>Software Projects</h2>
       <div id="gallery2">
       <div className="firstproj">
        
         <img src="./assets/phone.png" id="ratio"></img>
           <div className="overlay"> 
           <p id="description">Smart Water Quality Monitoring App</p>
           <button>  <a href="https://h2owaterquality.com/" target="_blank" rel="noopener noreferrer">Learn More</a></button>
             <button><a href="https://github.com/tanjilak/waterquality_app" target="_blank" rel="noopener noreferrer">Github Project</a></button>
           </div>
         </div>
           
         </div>
       </div>
  );
}

export default Software;