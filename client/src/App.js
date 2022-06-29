import './App.css';
import Login from './components/Login/Login';

function App() {

  fetch('http://localhost:8888/').then((res) => res.json())
    .then((json) => {
      console.log(json);
    });

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
