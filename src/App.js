import './App.css';
import Table from './Table';

import { BrowserRouter , Routes, Route } from "react-router-dom";

import Employee from './Employee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Table />} />
        <Route exact path="/employee" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
