import React from 'react';
import "./SeasonDisplayed.css"

const getSeason = (lat, month) => {
      if(month > 2 && month < 9) {
         return lat > 0 ? "summer" : "winter"
      } else {
         return lat > 0 ? "winter" : "summer"
      }
}
const seasonConfig = {
   summer : { 
      text: "it's a sunny season",
      iconName: "sun"
   },
   winter : {
      text: "it is a chilly season",
      iconName: "snowflake"
   }
}

const SeasonDisplayed = (props) => {
   const currentSeason = getSeason(props.lat, new Date().getMonth());
   const {text, iconName} = seasonConfig[currentSeason];
   return (
      <div className={`season-displayed ${currentSeason}`}>
         <i className={`icon-left massive ${iconName} icon`}></i>
               <h1>{text}</h1>
         <i className={`icon-right massive ${iconName} icon`}></i>
      </div>
   )
}

export default SeasonDisplayed;
