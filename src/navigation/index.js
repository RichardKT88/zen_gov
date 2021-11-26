import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Route';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Providers;