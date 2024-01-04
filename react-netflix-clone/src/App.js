import Nav from "./components/Nav"
import './App.css';
import Banner from "./components/Banner"
import Row from "./components/Row";
import requests from "./api/requests";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALSERVER"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="TrendingNow"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rate"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}

export default App;
