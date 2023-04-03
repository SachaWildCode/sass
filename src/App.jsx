import Cards from "./components/cards/cards";
import albumCover from "./assets/album.jpg";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <div className="card">
        <Cards
          author="Rozes"
          title="Under the Grave"
          date="2016"
          imgSrc={albumCover}
        />
      </div>
    </div>
  );
}

export default App;
