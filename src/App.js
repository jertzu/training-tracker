import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation'
import TrainingList from './components/TrainingList';
import CustomerList from './components/CustomerList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<CustomerList />} />
            <Route path="TrainingList" element={<TrainingList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;