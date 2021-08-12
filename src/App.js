import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <header className="row mt-3">
        <NavBar/>
      </header>

      <main className="row mt-3" id="main">
        <ItemListContainer greeting="Bienvenido a flatnwhite"/>
        <ItemDetailContainer/>
      </main>
    </>
  );
}

export default App;
