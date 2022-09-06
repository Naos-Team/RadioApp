import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Icon  from 'react-native-vector-icons/Feather'
import { Color } from '../../utils'
export default function CustomButton(props) {
    const {label, onPress, isEnable} = props
    return (
        <TouchableOpacity 
            disabled={isEnable}
            style={styles.loginButton}
            onPress={onPress}>
                <Text style={styles.loginText}>{label}</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    loginButton:{
        backgroundColor: Color.primary_color,
        padding: 15,
        borderRadius: 20,
        marginBottom: 30,
        marginTop: 20
    },
    loginText:{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        color: 'white',
    },
})
