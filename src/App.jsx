import React from 'react';
import './App.css';
import Spline from '@splinetool/react-spline';


function App() {
  return (

   <main> 
     
     <div className="top">
        <nav className="menu-container">

  
          <div className="menu">
            <ul>
              <li><a href="https://github.com/tanjilak" target="_blank" rel="noopener noreferrer">github</a>
              </li>
              <li><a href="https://www.linkedin.com/in/tanjila-kabir/" target="_blank" rel="noopener noreferrer">linkedin</a>
              </li>
              <li><a href="https://dribbble.com/tanjiva" target="_blank" rel="noopener noreferrer">dribble</a>
              </li>
            </ul>
           
          </div>
        </nav>
    
        <a href="#designs"> <button className ="work_button button1">designs</button></a>
       
     <a href ="#coding"><button className="work_button button2">software</button></a>
     </div>
     
     <div className="section1">
         <Spline id="first" scene="https://prod.spline.design/NQQ8fiPn-eY0cLsO/scene.splinecode" />
        <Spline id ="second" scene="https://prod.spline.design/BSlJaeqX6iyvWq1T/scene.splinecode" />
     </div>

     <div id="designs">
       <h2> Design Portfolio</h2>
       <div id="gallery">
          <img src="./assets/cakeincanmockup.png"></img>
         <img src="./assets/neemacasual.png"></img>
           <img src="./assets/roamfreebusinesscards.png"></img>
         
          <img src="./assets/faraway.png"></img>
         <img src="./assets/snip.png"></img>
          <img src="./assets/IMG_0109.png"></img>
         
          <img src="./assets/icecream_3d.png"></img>
          
        
       
         </div>
     </div>

     <div id="coding">
      
       <h2>Software Projects</h2>
       <div id="gallery2">
       <div className="firstproj">
         <img src="./assets/phone.png" id="ratio"></img>
         <p id="description">Smart Water Drinking Quality Monitor</p></div>
           
         </div>
       </div>
     
    
   </main> 
    
  );
}

export default App;



