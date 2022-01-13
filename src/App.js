import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <p>Prop It Up</p>
      <PersonCard lastName = "London , " firstName = "Kya" age = "Age: 2" hairColor = "Hair Color: White"/>
      <PersonCard lastName = "Patterson , " firstName = "Bumi" age = "Age: 1" hairColor = "Hair Color: Orange"/>
      <PersonCard lastName = "London , " firstName = "Jon" age = "Age: 29" hairColor = "Hair Color: Black"/>
      <PersonCard lastName = "Patterson , " firstName = "Stephen" age = "Age: 30" hairColor = "Hair Color: Brown"/>
    </div>
  );
}

export default App;
