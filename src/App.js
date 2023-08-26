import './App.css';
import { Provider } from "react-redux";
import { Route , Redirect , Switch } from "react-router-dom";

//Redux
import store from "./redux/store";

//Components
import Store from "./components/Store";
import ProductsDetials from "./components/ProductsDetials";
import Navbar from "./components/Navbar";


function App() {
  return (
      <div class="App">
          <Provider store={store}>
              <Navbar />
              <Switch>
                  <Route path="/products/:id" component={ProductsDetials} />
                  <Route path="/products" component={Store} />
                  {/*<Route path="/cart" component={ShopCart} />*/}
                  <Redirect to="/products" />
              </Switch>
          </Provider>
      </div>
  );
}

export default App;
