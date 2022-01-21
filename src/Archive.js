import React from "react";
import ArchiveDateListing from "./ArchiveDateListing";

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedates: [],
    };
  }
  componentDidMount() {
    fetch(`http://localhost:8000/archive/2017`)
      .then((response) => response.json())
      .then((archivedates) => {
        this.setState({ archivedates });
      });
  }

  render() {
    return (
      <div>
        <h2>Archive</h2>
        {this.state.archivedates.map((archivedate) => {
          return <ArchiveDateListing archivedate={archivedate} />;
        })}
      </div>
    );
  }
}

export default Archive