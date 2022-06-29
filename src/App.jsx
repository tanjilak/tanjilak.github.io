import React from 'react';
import './App.css';


import Spline from '@splinetool/react-spline';

function App() {
  return (
    

    
   <main> 

    <nav className="menu-container">

  
  <div className="menu">
    <ul>
      <li>
        <a href="https://github.com/tanjilak" target="_blank" rel="noopener noreferrer">
          github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/tanjila-kabir/" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/tanjiva" target="_blank" rel="noopener noreferrer">
          dribble
        </a>
      </li>
    </ul>
    <ul>
    </ul>
  </div>
</nav>
    
     <a href="#section2"><button className ="work_button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 9L12 17L20 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


</button></a>
     
     <div className="section1">
        <Spline id="first" scene="https://draft.spline.design/tbi07Y8kTTx1e1nq/scene.splinecode" />
        <Spline id ="second" scene="https://prod.spline.design/BSlJaeqX6iyvWq1T/scene.splinecode" />

            
 

     </div>

     
     <div id="section2">
  
     <p className="links">designs</p>
     <p className ="links"> software</p>
       </div>
   </main> 
    
  );
}

export default App;



