// react
import { BrowserRouter, Route, Routes } from "react-router-dom";

// styles
import "./index.scss";

// components
import Tag from "pages/Tag/Tag";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tag />} />
      </Routes>
    </BrowserRouter>
  );
}
