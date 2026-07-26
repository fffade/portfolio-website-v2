import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

// Suppress harmless ResizeObserver loop errors in development
const suppressResizeObserverErrors = (e) => {
    const errMessage = e?.message || e?.error?.message || e?.reason?.message || '';
    if (
        errMessage.includes('ResizeObserver loop completed with undelivered notifications') ||
        errMessage.includes('ResizeObserver loop limit exceeded')
    ) {
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        if (e.preventDefault) e.preventDefault();
        return true;
    }
};
window.addEventListener('error', suppressResizeObserverErrors);
window.addEventListener('unhandledrejection', suppressResizeObserverErrors);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
