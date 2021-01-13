import React from "react";

const Spinner = (props) => {
      return (
         <div class="ui active dimmer">
           <div class="ui big text loader">{props.allowMessage}</div>
         </div>
      )
      };

Spinner.defaultProps = {
   allowMessage: "Loading...."
}
export default Spinner;
