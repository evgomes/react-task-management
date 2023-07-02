

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/task/:id" element={<HomePage />} />
      </Route>
    </Routes>

  );
}

export default App;
