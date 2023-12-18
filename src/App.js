import './App.css';
import image from './shopping.jpg';
import image1 from "./man.jpg";
import { Grocery } from './Grocery';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <img src={image} alt="shopping" width="200px"/>
      </div>
      <div className='container'>
     <h1>Grocery List</h1>
     </div>
     <Grocery />
     <div className='container'>
     <img src={image1} width="200px" alt="man"/>
     </div>
    </div>
  );
}

export default App;
