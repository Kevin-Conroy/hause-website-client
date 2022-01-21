import React from "react";
import "./App.css";

class ArchiveDateListing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="box">
        <div>
          <h5>{this.props.archivedate.year}</h5>
          <h5>{this.props.archivedate.venue}</h5>
        </div>
      </main>
    );
  }
}

export default ArchiveDateListing;