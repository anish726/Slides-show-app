import logo from './logo.svg';
import './App.css';
import Slides from './Components/Slides';

function App({slides}) {
  return (
    <div className="App">
     <h1>Hello Slides</h1>
     <Slides slides={slides}/>
    </div>
  );
}

export default App;
