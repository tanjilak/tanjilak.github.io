import React from "react";
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function Designs(){
  return(

  <div id="designs">
   <h2> Design Portfolio</h2>
        <Tabs>
      <TabList id ="tablist">
        <Tab id="tab">Product Design / Logos</Tab>
        <Tab id="tab">Posters</Tab>
        <Tab id="tab">Illustrations</Tab>
      </TabList>  

      <TabPanel>
        
       <div id="gallery">
          <img src="./assets/cakeincanmockup.png"></img>
         <img src="./assets/neemacasual.png"></img>
           <img src="./assets/roamfreebusinesscards.png"></img></div>
      </TabPanel>
        <TabPanel></TabPanel>
          <TabPanel>
             <div id="gallery">
          <img src="./assets/faraway.png"></img>
         <img src="./assets/snip.png"></img>
          <img src="./assets/IMG_0109.png"></img>
         
          <img src="./assets/icecream_3d.png"></img></div>
          </TabPanel>
    </Tabs>


    
    
          
        
       
         
     </div>
  );
}

export default Designs;