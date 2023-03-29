import React from 'react'; 

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error by Error Boundary" + error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center">
          <h1>Something went wrong!!!!</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
