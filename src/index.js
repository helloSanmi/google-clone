import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import { ResultContextProvider } from './context/ResultContextProvider';
import './css/global.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>
      <Router>
        <App />
      </Router>
  </ResultContextProvider>
    
);

// ReactDOM.render(<App />, document.getElementById('root'));