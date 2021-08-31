import PropTypes from 'prop-types';
import React, { Component, ErrorInfo } from 'react';
import styled from 'styled-components';

const ErrorBox = styled.div`
  background-color: #ffbaba;
  color: #d8000c;
  margin: 20px;
  padding: 0 10px 20px;
  border: 1px solid #d8000c;
  border-radius: 3px;
`;

type ErrorBoundaryState = {
  componentDidCatch: boolean;
  crashId?: string;
};

type ErrorBoundaryProps = {
  message: string;
};

type ErrorBoundaryFallback = JSX.Element | null;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static propTypes = {
    error: PropTypes.object,
  };

  constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = {
      componentDidCatch: false,
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { componentDidCatch: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('A component crashed', error, info);
  }

  renderFallbackMessage = (): ErrorBoundaryFallback => {
    // this logic will be executed when an unexpected error occurred.
    // it will be triggered by the error boundary.
    const { componentDidCatch } = this.state;
    const { message } = this.props;

    // This message will only be shown in the crashed part of the application.
    if (componentDidCatch) {
      return (
        <ErrorBox>
          <h1>{message || 'It seems like something went wrong.'}</h1>
        </ErrorBox>
      );
    }

    return null;
  };

  render() {
    const { componentDidCatch } = this.state;
    if (componentDidCatch) {
      return this.renderFallbackMessage();
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
