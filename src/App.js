import logo from './logo.svg';
import './App.css';
import './style.css'
import Profile from './components/profile'
import Interests from './components/interests';
import Learn from './components/learn';
import Expectations from './components/expectations';

function App() {
  let name = prompt('Cual es tu nombre')
  let country = prompt('De que pais eres')
  return (
    <div className="App">
      <div className="container container--w-80 container--m-center container--mt-20">
        <div className="row row--grid row--templ-rep-3-1fr">
          <Profile name={name} country={country} />
          <Interests />
          <Learn />
        </div>
        <div className="row row--grid row--templ-1fr-2fr">
          <Expectations />
          <div className="row__excess row__excess--bg-grey"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
