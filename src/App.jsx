import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<h1>Iniciando</h1>} />
      </Routes>
    </>
  );
}

export default App;
