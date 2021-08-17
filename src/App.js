import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  
  return (
    <Router>

      <div className="row mt-3">
        <NavBar/>
      </div>

      <div className="row mt-5">

        <Switch>

          <Route exact path="/">
            <ItemListContainer/>
          </Route>

          <Route path="/category/shop">
            <ItemListContainer/>
          </Route>

          <Route path="/category/learn">
            <h1>Nothing yet!</h1>
          </Route>

          <Route path="/category/visitUs">
            <h1>Wait for it!</h1>
          </Route>

          <Route path="/item/:id">
            <ItemDetailContainer/>
          </Route>

        </Switch>

      </div>

    </Router>
    
  );
}

export default App;
