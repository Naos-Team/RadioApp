import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { CustomButton, InputField } from '../../components'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../auth/AuthProvider'
import { Color } from '../../utils'
import Icon from 'react-native-vector-icons/Feather'

const ForgotPassScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const { forgotPassword } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
        <Icon 
            name='arrow-left' 
            size={30} 
            style={styles.backBtn} 
            color={Color.primary_color}
            onPress={()=>{
                navigation.goBack()
            }}
            />
        <View>
                <Image 
                    style={styles.login_image} 
                    source={require('../../assets/images/login_img.png')}
                />
                <Text style={styles.text1}>Forgot Password</Text>
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
        
                <CustomButton 
                    label={'Send'}
                    onPress={()=>{
                        forgotPassword(email)
                        setEmail('')
                    }}
                />
    
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
        
    },
    backBtn:{
        position: 'absolute',
        top: 20,
        left: 30
    }
})

export default ForgotPassScreen