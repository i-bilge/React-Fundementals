import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar title = "User App"/>
      <hr/>
      <div className='row'>
        <h4>App Component</h4>
      </div>
      <div>
        <User
        name = "Ismail Bilge"
        department = "IT"
        salary = "5000"
        />
        <User
        name = "Daniel Alvaro"
        department = "IT"
        salary = "6000"
        />
      </div>
    </div>
  );
}

export default App;
