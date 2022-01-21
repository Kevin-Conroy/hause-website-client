import React from "react";
import "./App.css";

class TourDateListing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="box">
        <div>
          <h5>{this.props.tourdate.date}</h5>
          <h5>{this.props.tourdate.venue}</h5>
          <h5>{this.props.tourdate.city}</h5>
        </div>
      </main>
    );
  }
}

export default TourDateListing;
