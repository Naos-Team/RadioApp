import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Color } from '../../utils'
export default function InputField(props) {
    const {value, label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction, ...rest} = props
    return (
    
        <View style={styles.emailView}>
            {icon}
            <TextInput
                placeholder={label}
                style={styles.inputEmail}
                keyboardType={keyboardType}
                secureTextEntry={inputType == 'password' ? true : false}
                {...rest}
            />
            <TouchableOpacity
                onPress={fieldButtonFunction}
            >
                <Text style={styles.forgotText}>
                    {fieldButtonLabel}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputEmail:{
        flex:1,
        paddingVertical: 5,
        fontSize: 15
    },
    forgotText:{
        color: Color.primary_color,
        fontWeight: '700'
    },
    emailView:{
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth:1,
        paddingBottom: 2,
        alignItems: 'center',
        marginBottom: 25
    },
})