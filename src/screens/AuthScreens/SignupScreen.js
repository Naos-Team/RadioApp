import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { HEIGHT, WIDTH } from '../../utils/Constant'
import { Color } from '../../utils'
import Icon from 'react-native-vector-icons/Feather'
import { InputField, CustomButton } from '../../components'
import { AuthContext } from '../../auth/AuthProvider'
import { isValidEmail, isValidPassword, isConfirmPassword } from '../../utils/Validation'
function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const { signup } = useContext(AuthContext);

  const isValidationOK = () => {
    if( email.length > 0 
        && password.length > 0 
        && isValidEmail == true 
        && isValidPassword == true
        && isConfirmPassword == true)
          return true
    else return false
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.login_image}
          source={require('../../assets/images/login_img.png')}
        />
        <Text style={styles.text1}>Register</Text>

        <InputField
          label={'Email'}
          inputType={'email'}
          icon={<Icon
            name='mail'
            size={22}
            color={Color.primary_color}
            style={styles.emailIcon}
            keyboardType={'email-address'}
          />}
          onChangeText={(text) => {
            setErrorEmail(isValidEmail(text) == true ? 
                          '' : 'Email is not valid')
            setEmail(text)
          }}
          value={email}
        />
        <Text style={{color: 'red', fontSize: 13, marginBottom: 5}}>{errorEmail}</Text>

        <InputField
          value={password}
          label={'Password'}
          inputType={'password'}
          onChangeText={(text) => {
            setErrorPassword(isValidPassword(text) == true ? 
                            '' : 'Password length must be at least 6 characters')
            setPassword(text)
          }}
          icon={<Icon
            name='lock'
            size={22}
            color={Color.primary_color}
            style={styles.emailIcon}
          />}
        />
        <Text style={{color: 'red', fontSize: 13, marginBottom: 5}}>{errorPassword}</Text>

        <InputField
          value ={confirmPassword}
          label={'Confirm Password'}
          inputType={'password'}
          onChangeText={(text) => 
          {
            setErrorConfirmPassword(isConfirmPassword(password, text) == true ?
                                    '' : 'Password is not correct')
            setConfirmPassword(text)
          }}
          icon={<Icon
            name='lock'
            size={22}
            color={Color.primary_color}
            style={styles.emailIcon}
          />}
        />
        <Text style={{color: 'red', fontSize: 13, marginBottom: 5}}>{errorConfirmPassword}</Text>

        <CustomButton
          label={'Register'}
          isEnable={isValidationOK()}
          onPress={()=>{
                signup(email,password)
                setEmail('')
                setPassword('')
                setConfirmPassword('')
          }} 
          
        />


        <View style={styles.registerView}>
          <Text style={{ fontSize: 15 }}>Already Register?</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_image: {
    height: HEIGHT*0.3,
    width: WIDTH*0.8,
    resizeMode: 'cover',
    //transform: [{rotate: '-5deg'}]
  },
  text1: {
    fontSize: 28,
    fontWeight: '500',
    color: Color.primary_color,
    marginTop: 20,
    marginBottom: 25,
  },
  emailIcon: {
    marginEnd: 5
  },

  orText: {
    textAlign: 'center',
    marginBottom: 30
  },
  otherView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  googleButton: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  signUpText: {
    color: Color.primary_color,
    fontWeight: '700',
    marginStart: 5,
    fontSize: 15
  },
  registerView: {
    flexDirection: 'row',
    justifyContent: 'center',

  }
})

export default SignupScreen