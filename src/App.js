import './App.css';
import PersonCard from './components/PersonCard';
import Functional from './components/functional';


function App() {
  return (
    <div className="App">
      <p>Prop It Up</p>
      {/* <PersonCard lastName = "London , " firstName = "Kya" age = {2} hairColor = "Hair Color: White"/>
      <PersonCard lastName = "Patterson , " firstName = "Bumi" age = {1} hairColor = "Hair Color: Orange"/>
      <PersonCard lastName = "London , " firstName = "Jon" age = {29} hairColor = "Hair Color: Black"/>
      <PersonCard lastName = "Patterson , " firstName = "Stephen" age = {30} hairColor = "Hair Color: Brown"/> */}
      <Functional/>
    </div>
  );
}

export default App;
