import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer  from './components/itemListContainer/itemListContainer';

function App() {

  return (
  <div className= "App">


    <Navbar />
    <ItemListContainer greeting='hola comision 34695 ' />
  </div>
  )
  
}

export default App;
