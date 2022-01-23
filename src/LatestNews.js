import React from "react";

class LatestNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  render() {
    return (
      <div>
        <h2 className="text-center">The latest...</h2>
      </div>
    );
  }
}
export default LatestNews;

/*
{this.state.tourdates.map((tourdate) => {
          return <TourDateListing tourdate={tourdate} />;
        })}
        */
