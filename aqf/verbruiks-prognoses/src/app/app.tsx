import React from 'react';
import styled from 'styled-components';

import { ErrorBoundary } from './modules/ui';
import { LayoutEl as Body } from './components/';

import './theme/theme.less';

const StyledBody = styled(Body)`
  body {
    color: #ffffff;  
  }
`;

const App = () => {
  // Adding an error boundary on the highest level,
  // to catch unexpected JS errors.
  // Because this is the highest level, we put another
  return (
    <ErrorBoundary
      message={
        'The application crashed. Please refresh your browser to proceed.'
      }
    >
      <StyledBody/>
    </ErrorBoundary>
  );
};

export default App;
