// react
import ReactDOM from "react-dom/client";

// components
import App from "./app/index";

// store
import { store } from "store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
