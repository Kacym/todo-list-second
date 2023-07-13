import './App.css';
import Button from './components/UI/Button';

function App() {
  return (
    <div className="App">
      <Button title=">:("/>
      <Button color={{backgroundColor: "blue"}} title="|:("/>
      <Button title="):<"/>
    </div>
  );
}

export default App;
