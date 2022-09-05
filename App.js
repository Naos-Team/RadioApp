import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import Routes from './src/navigation'
import AuthStack from './src/navigation/AuthStack'
import MostViewStack from './src/navigation/MostViewStack'
import { AuthContext, AuthProvider } from './src/auth/AuthProvider'
const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
          {user ? <MostViewStack/> : <AuthStack/>}
    </AuthProvider>
  )
}

export default App