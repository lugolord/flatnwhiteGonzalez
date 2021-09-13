import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Footer from './components/Footer';


function App() {

  	return (

    	<CartProvider>

        	<Router>

          		<header className="row mt-3 border-bottom">
            		<NavBar/>
          		</header>

          		<div className="row">

            		<Switch>

              			<Route exact path="/">
                			<ItemListContainer/>
              			</Route>

              			<Route path="/category/shop">
				  			<ItemListContainer/>
              			</Route>

              			<Route path="/category/learn">
                			<div className="position-relative" id="emptyLearn">
                  				<p className="position-absolute top-50 start-50 translate-middle text-center">Nothing yet!</p>
                			</div>
              			</Route>

              			<Route path="/category/visitUs">
                			<div className="position-relative" id="emptyVisitUs">
                  				<p className="position-absolute top-50 start-50 translate-middle">Wait for it!</p>
                			</div>
              			</Route>

              			<Route path="/item/:id">
                			<ItemDetailContainer/>
              			</Route>

              			<Route path="/cart">
                			<Cart/>
              			</Route>

						<Route path="/all">
				  			<ItemListContainer/>
              			</Route>

						<Route path="/coffee">
				  			<ItemListContainer/>
              			</Route>

						<Route path="/coffeeMakers">
				  			<ItemListContainer/>
              			</Route>

						<Route path="/accessories">
				  			<ItemListContainer/>
              			</Route>  

              			<Route path="*">
                			<NotFound/>
              			</Route>

            		</Switch>

          		</div>

          		<Footer/>

        	</Router>

      	</CartProvider>
  	);
}

export default App;