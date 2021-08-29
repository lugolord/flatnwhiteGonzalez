import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';


function App() {

  return (
    <CartProvider>
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

            <Route path="/cart">
              <Cart/>
            </Route>

          </Switch>

        </div>

      </Router>
    </CartProvider>
  );
}

export default App;
