import './App.css';
import { Routes, Route } from "react-router-dom";
import paths from "./enums/paths";
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path={paths.HOME} element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
