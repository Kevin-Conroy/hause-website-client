import React from "react";
import NewsBox from "./NewsBox";
import { Link } from "react-router-dom";

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">News</h2>
        <ul>
          {this.props.news.map((newsItem) => {
            return (
              <li key={newsItem.id}>
                <Link to={`/article/${newsItem.id}`}>
                  <h3>{newsItem.title}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default News;

/*
        {this.state.news.map((newsitem) => {
          return <NewsBox newsitem={newsitem} />;
        })}

        <ul className='PoemList'>
        {POEMS.map(poem =>
          <li key={poem.id}>
            <Link to={`/poem/${poem.id}`}>
              {poem.title}
              </Link>
          </li>
        )}
      </ul>
        */
