import React from "react";
import ReactDom from "react-dom";
import SeasonDisplayed from "./seasonDisplay/SeasonDisplayed";
import Spinner from "./Spinner"

class App extends React.Component {
  state = {
   lat: null,
   errorMessage: "",
 };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
   if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    } 
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplayed lat={this.state.lat}/>
    }
    return <Spinner allowMessage="please accept location request..."/>;
  }

  render() {
    return(
    <div className="border red">{this.renderContent()}</div>
    )
  }
}
ReactDom.render(<App />, document.getElementById("root"));
