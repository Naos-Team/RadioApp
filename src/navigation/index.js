import React from 'react';
import { AuthProvider } from '../providers/AuthProvider';
import Routes from './Routes';


export default function Providers() {
  return (

    <
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}