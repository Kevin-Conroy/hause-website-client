import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  withRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import NewNavBar from "./NewNavBar";
import Header from "./Header";
import TourDates from "./TourDates";
import Store from "./Store";
import Bio from "./Bio";
import Releases from "./Releases";
import Archive from "./Archive";
import News from "./News";
import NewsBox from "./NewsBox";
import SocialFollow from "./SocialFollow";
import LatestNews from "./LatestNews";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

const history = createBrowserHistory();

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
          <BrowserRouter history={history}>
            <Route exact path="/" component={LatestNews} />
            <Route exact path="/tourdates" component={TourDates} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/releases" component={Releases} />
            <Route exact path="/archive" component={Archive} />
            <Route
              exact
              path="/news"
              render={(props) => <News news={this.state.news} />}
            />
            <Route
              exact
              path="/article/:id?"
              render={(props) => {
                const newsitem = this.state.news.find(
                  (a) => a.id === Number(props.match.params.id)
                );
                console.log(newsitem);
                return <NewsBox newsitem={newsitem} />;
              }}
            />
          </BrowserRouter>
          <SocialFollow />
        </div>
      </main>
    );
  }
}

export default withRouter(App);

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

            "homepage": "https://kevin-conroy.github.io/hause-website-client/",

            */
