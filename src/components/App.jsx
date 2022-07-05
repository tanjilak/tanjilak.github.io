import React from 'react';
import './App.css';
import Spline from '@splinetool/react-spline';
import { NavLink } from "react-router-dom";


function App() {
  return (
     <div>
     <div className="section1">
         <Spline id="first" scene="https://prod.spline.design/NQQ8fiPn-eY0cLsO/scene.splinecode" />
        <Spline id ="second" scene="https://prod.spline.design/1PkeBp1VSp75F9iu/scene.splinecode" />
     </div>

       <div className="greeting">
         <p id="one">Hi! I'm</p>
         <p id="two">Tanjila Kabir</p>
         <button> <a href="/designs">Design Work</a></button>
         <button> <a href="/software">Software Work</a></button>
    </div>

</div>
    
  );
}

export default App;



