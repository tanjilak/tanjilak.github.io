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
       
     <a href ="#coding"><button className="work_button button2">coding</button></a>
     </div>
     
     <div className="section1">
        <Spline id="first" scene=" https://draft.spline.design/zpc5tjQt8p-3zGOC/scene.splinecode" />
        <Spline id ="second" scene="https://prod.spline.design/BSlJaeqX6iyvWq1T/scene.splinecode" />
     </div>

     <div id="designs">
      <a href="/"><svg id ="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11H7.14L10.77 6.64003C10.9397 6.43581 11.0214 6.17253 10.997 5.90811C10.9726 5.64368 10.8442 5.39977 10.64 5.23003C10.4358 5.06029 10.1725 4.97863 9.90808 5.00301C9.64365 5.02739 9.39974 5.15581 9.23 5.36003L4.23 11.36C4.19636 11.4078 4.16628 11.4579 4.14 11.51C4.14 11.56 4.14 11.59 4.07 11.64C4.02467 11.7547 4.00094 11.8767 4 12C4.00094 12.1233 4.02467 12.2454 4.07 12.36C4.07 12.41 4.07 12.44 4.14 12.49C4.16628 12.5422 4.19636 12.5923 4.23 12.64L9.23 18.64C9.32402 18.7529 9.44176 18.8437 9.57485 18.9059C9.70793 18.9681 9.85309 19.0003 10 19C10.2337 19.0005 10.4601 18.9191 10.64 18.77C10.7413 18.6861 10.825 18.583 10.8863 18.4666C10.9477 18.3503 10.9855 18.223 10.9975 18.092C11.0096 17.961 10.9957 17.829 10.9567 17.7034C10.9176 17.5777 10.8542 17.4611 10.77 17.36L7.14 13H19C19.2652 13 19.5196 12.8947 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4805 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" fill="black"/>
</svg>
</a>
     </div>

     <div id="coding">
      <a href="/"><svg id ="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11H7.14L10.77 6.64003C10.9397 6.43581 11.0214 6.17253 10.997 5.90811C10.9726 5.64368 10.8442 5.39977 10.64 5.23003C10.4358 5.06029 10.1725 4.97863 9.90808 5.00301C9.64365 5.02739 9.39974 5.15581 9.23 5.36003L4.23 11.36C4.19636 11.4078 4.16628 11.4579 4.14 11.51C4.14 11.56 4.14 11.59 4.07 11.64C4.02467 11.7547 4.00094 11.8767 4 12C4.00094 12.1233 4.02467 12.2454 4.07 12.36C4.07 12.41 4.07 12.44 4.14 12.49C4.16628 12.5422 4.19636 12.5923 4.23 12.64L9.23 18.64C9.32402 18.7529 9.44176 18.8437 9.57485 18.9059C9.70793 18.9681 9.85309 19.0003 10 19C10.2337 19.0005 10.4601 18.9191 10.64 18.77C10.7413 18.6861 10.825 18.583 10.8863 18.4666C10.9477 18.3503 10.9855 18.223 10.9975 18.092C11.0096 17.961 10.9957 17.829 10.9567 17.7034C10.9176 17.5777 10.8542 17.4611 10.77 17.36L7.14 13H19C19.2652 13 19.5196 12.8947 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4805 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" fill="black"/>
</svg>
</a>
       </div>
     
    
   </main> 
    
  );
}

export default App;



