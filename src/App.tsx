// Packages
import { Provider } from "react-redux";

// Store
import store from "./store";

// Components
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
