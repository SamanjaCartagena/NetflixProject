import './App.css';
import Row from './Row';
import requests from './requests';
function App() {
  return (
    <div className="App">
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    
    
    </div>
  );
}

export default App;
