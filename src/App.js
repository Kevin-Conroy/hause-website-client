import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  withRouter,
  Routes,
  Route,
  Link,
  useParams,
 
} from "react-router-dom";
import NavBar from "./NavBar";
import NewNavBar from "./NewNavBar";
import Header from "./Header";
import TourDates from "./TourDates";
import Store from "./Store";
import Bio from "./Bio";
import Releases from "./Releases";
import Follow from "./Follow";
import Archive from "./Archive";
import News from "./News";
import NewsBox from "./NewsBox";
import SocialFollow from "./SocialFollow";
import LatestNews from "./LatestNews";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/news")
      .then((response) => response.json())
      .then((news) => {
        this.setState({ news });
      });
  }

  render() {
    return (
      <main className="App">
        <div>
          <Header />
          <NewNavBar />
          <Routes>
            <Route exact path="/" element={<LatestNews />} />
            <Route exact path="/tourdates" element={<TourDates />} />
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/bio" element={<Bio />} />
            <Route exact path="/releases" element={<Releases />} />
            <Route exact path="/archive" element={<Archive />} />
            <Route
              exact
              path="/news"
              render={this.props}
              element={<News news={this.state.news} />}
            />
            <Route
              exact
              path="/article/:id?"
              render={(props) => {
                const newsitem = this.state.news.find(
                  (a) => a.id === (Number(props.match.params.id))
                );
                console.log(newsitem);
                return <NewsBox newsitem={newsitem} />;
              }}
            />
          </Routes>
          <SocialFollow />
        </div>
      </main>
    );
  }
}

export default App;

/*


<Route
              exact
              path="/article/:id?"
              render={(props) => {
                const newsitem = this.state.news.find(
                  (a) => a.id === props.match.params.id
                );
                console.log(newsitem);
                return <NewsBox newsitem={newsitem} />;
              }}
            />




<Route
              exact
              path="/profile/:id?"
              render={(props) => {
                const profile = this.state.profiles.find(
                  (p) =>
                    p.id ===
                    (Number(props.match.params.id) || this.state.userId)
                );
                console.log(profile);
                return (
                  <Profile
                    credentialsLoaded={this.state.credentialsChecked}
                    addProfile={this.addProfile}
                    addRecommendation={this.addRecommendation}
                    addBucketListItem={this.addBucketListItem}
                    updateProfile={this.updateProfile}
                    profile={profile}
                    userId={this.state.userId}
                    recommendations={this.recommendations}
                    bucketList={this.bucketList}
                    {...props}
                  />
                );
              }}
            />
*/
