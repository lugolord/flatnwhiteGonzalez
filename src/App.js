import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <header className="row mt-3">
        <NavBar/>
      </header>

      <main className="row mt-3">
        <ItemListContainer greeting="Aqui va a estar el SABOR! PRRRRR" />
      </main>
    </>
  );
}

export default App;
