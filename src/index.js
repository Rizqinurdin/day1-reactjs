import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/style.css"
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import CounterAdvanced from './pages/CounterAdvanced';
import CounterPro from './pages/CounterPro';
import Counter from './pages/Counter'
import Profile from './pages/Profile'
import Content from './pages/Content';
import {BrowserRouter, Route, Routes} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/counter-pro" element={<CounterPro />}/>
        <Route path="/counter-advanced" element={<CounterAdvanced intialValue={1} />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/content" element={<Content/>}/>
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
