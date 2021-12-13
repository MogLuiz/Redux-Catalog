// Packages
import { Provider } from "react-redux";

// Store
import store from "./store";

// Components
import Catalog from "./components/Catalog";

function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
