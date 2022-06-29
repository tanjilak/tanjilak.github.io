import React from 'react';
import './App.css';

import Spline from '@splinetool/react-spline';

function App() {
  return (
   <main> 
     <div className="section1">
        <Spline scene="https://prod.spline.design/NQQ8fiPn-eY0cLsO/scene.splinecode" />
      
     </div>
 <a href="#section2"><button className ="work_button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 9L12 17L20 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</button></a>
     <div id="section2">
  
     <p className="links">designs</p>
     <p className ="links"> software</p>
       </div>
   </main> 
    
  );
}

export default App;



