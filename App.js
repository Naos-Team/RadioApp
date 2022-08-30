import { View, Text } from 'react-native'
import React from 'react'
import Routes from './src/navigation'
import AuthStack from './src/navigation/AuthStack'
import { AuthProvider } from './src/auth/AuthProvider'
const App = () => {
  return (
    <AuthProvider>
          <AuthStack/>
    </AuthProvider>
  )
}

export default App