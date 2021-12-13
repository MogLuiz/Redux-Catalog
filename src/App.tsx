// Packages
import { Provider } from "react-redux";

// Store
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1>Hello world</h1>
    </Provider>
  );
}

export default App;
