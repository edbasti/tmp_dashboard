import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

import { ErrorBoundary } from "./app/modules/ui";

ReactDOM.render(
  <ErrorBoundary
          message={
            'The application crashed. Please refresh your browser to proceed.'
          }
        ><StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode></ErrorBoundary>,
  document.getElementById('root')
);
