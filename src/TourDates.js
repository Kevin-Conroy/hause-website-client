import React from "react";
import TourDateListing from "./TourDateListing";

class TourDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourdates: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/tour")
      .then((response) => response.json())
      .then((tourdates) => {
        this.setState({ tourdates });
      });
  }

  render() {
    return (
      <div>
        <h2>Tour Dates</h2>
        {this.state.tourdates.map((tourdate) => {
          return <TourDateListing tourdate={tourdate} />;
        })}
      </div>
    );
  }
}
export default TourDates;