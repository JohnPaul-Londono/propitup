import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <p>Prop It Up</p>
      <PersonCard lastName = "London , " firstName = "Kya"/>
      <PersonCard age = "Age: 2"/>
      <PersonCard hairColor = "Hair Color: White"/>
      <PersonCard lastName = "Patterson , " firstName = "Bumi"/>
      <PersonCard age = "Age: 1"/>
      <PersonCard hairColor = "Hair Color: Orange"/>
      <PersonCard lastName = "London , " firstName = "Jon"/>
      <PersonCard age = "Age: 29"/>
      <PersonCard hairColor = "Hair Color: Black"/>
      <PersonCard lastName = "Patterson , " firstName = "Stephen"/>
      <PersonCard age = "Age: 3o"/>
      <PersonCard hairColor = "Hair Color: Brown"/>
    </div>
  );
}

export default App;
