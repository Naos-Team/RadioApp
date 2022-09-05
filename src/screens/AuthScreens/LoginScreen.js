import React, { useState, useEffect, useContext } from 'react'
import { 
    View, 
    Text , 
    Image, 
    StyleSheet, 
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { AuthContext } from '../../auth/AuthProvider'
import Icon from 'react-native-vector-icons/Feather'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import { InputField, CustomButton } from '../../components'
import { Color } from '../../utils'
function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, googleLogin } = useContext(AuthContext);
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image 
                    style={styles.login_image} 
                    source={require('../../assets/images/login_img.png')}
                />
                <Text style={styles.text1}>Login</Text>
                <InputField 
                  label={'Email'}  
                  inputType={'email'}
                  onChangeText={text => setEmail(text)}
                  value={email}
                  icon={<Icon 
                        name='mail'
                        size={22} 
                        color={Color.primary_color}
                        style={styles.emailIcon}
                  keyboardType={'email-address'}
                    />}
                />
    
                <InputField 
                  label={'Password'}
                  inputType={'password'}  
                  onChangeText = {text=>setPassword(text)}
                  value={password}
                  icon={<Icon 
                        name='lock'
                        size={22} 
                        color={Color.primary_color}
                        style={styles.emailIcon}
                    />}
                    fieldButtonLabel={'Forgot'}
                    pressForgot={()=>{
                        navigation.navigate('ForgotPass')
                    }}
                />
        
                <CustomButton 
                    label={'Login'}
                    onPress={()=>{
                        login(email,password)
                        setEmail('')
                        setPassword('')
                    }}
                />
    
                <Text style={styles.orText}>Or, login with</Text>
    
                <View style={styles.otherView}>
                    <TouchableOpacity 
                        style={styles.googleButton}
                        onPress={()=>{
                            googleLogin()
                        }}
                    >
                        <FontAwesomeIcon name='google' size={24} color={'red'}/>
                    </TouchableOpacity>
                </View>
    
                <View style={styles.registerView}>
                    <Text style={{fontSize: 14}}>New to the app?</Text>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Signup')}>
                        <Text style={styles.signUpText}>Register</Text>
                    </TouchableOpacity>
                </View>
    
                
                
            </View>
        </SafeAreaView>
      )
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    login_image:{
        height: 230,
        width: 350,
        resizeMode: 'cover'
        //transform: [{rotate: '-5deg'}]
    },
    text1:{
        fontSize: 28,
        fontWeight: '500',
        color: Color.primary_color,
        marginTop: 20,
        marginBottom: 25,
    },
    emailView:{
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth:1,
        paddingBottom: 2,
        alignItems: 'center',
        marginBottom: 25
    },
    emailIcon:{
        marginEnd: 5
    },
    inputEmail:{
        flex:1,
        paddingVertical: 5,
        fontSize: 15
    },
    forgotText:{
        color: Color.primary_color,
        fontWeight: '700'
    },
    loginButton:{
        backgroundColor: Color.primary_color,
        padding: 15,
        borderRadius: 20,
        marginBottom: 30
    },
    loginText:{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        color: 'white',
    },
    orText:{
        textAlign: 'center',
        marginBottom: 30
    },
    otherView:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30
    },
    googleButton:{
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginHorizontal: 10,
    },
    signUpText:{
        color: Color.primary_color,
        fontWeight: '700',
        marginStart: 5,
        fontSize: 14
    },
    registerView:{
        flexDirection: 'row',
        justifyContent: 'center',
        
    }
})

export default LoginScreen