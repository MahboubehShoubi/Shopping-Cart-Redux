import './App.css';
import {Provider} from "react-redux";

//Redux
import store from "./redux/store";


//Components
import Store from "./components/Store";


function App() {
  return (
      <Provider store={store}>
          <Store />
      </Provider>
  );
}

export default App;
