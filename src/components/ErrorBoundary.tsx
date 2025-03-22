// ABOUTME: This file contains a React Error Boundary component
// ABOUTME: It catches JavaScript errors in child components and displays a fallback UI

import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { 
      hasError: true,
      error 
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // If a custom fallback is provided, use that
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Otherwise, use our default error UI
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-rainbow-orange to-rainbow-yellow rounded-full flex items-center justify-center mb-6 opacity-70">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Algo salió mal</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            Ha ocurrido un error en esta sección. Intentá volver a cargar la página.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => window.location.reload()} 
              className="px-5 py-2 bg-gradient-to-r from-rainbow-orange to-rainbow-yellow text-white rounded-md hover:opacity-90 transition text-center"
            >
              Recargar página
            </button>
            
            <Link 
              href="/"
              className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;