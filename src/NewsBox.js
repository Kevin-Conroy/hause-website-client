import React from "react";
//import { useParams, withRouter } from "react-router-dom";

class NewsBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="box" key={this.props.id}>
        <div>
          <h4>{this.props.newsitem.title}</h4>
          <p>{this.props.newsitem.content}</p>
        </div>
      </main>
    );
  }
}

export default NewsBox;

/*


  const NewsBox = ({ news }) => {
  const id = useParams();

  return (
    <div>
      {news.filter(newsitem => newsitem.id === id).map((newsitem, id) => (
        <div key={id} className="box">
          <h3>{newsitem.title}</h3>
          <p>{newsitem.content}</p>
        </div>
      )
    
      )}

    </div>
  )
}


export default NewsBox
*/
