import React from "react"

class Store extends React.Component {
 componentDidMount(){
     window.location.href = "https://store.davehause.com/";
  }

  render() {
    return (
      <div>
       <h2>Redirecting...</h2>
      </div>
    )
  }
}

export default Store;