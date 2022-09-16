import React from "react";
import { View, Text } from "react-native";
import { HEIGHT, WIDTH } from "../utils/Constant";

const HeaderTitle = ({title}) => {
    return (
        <View>
            <Text style={{
                color: 'black',
                fontSize: HEIGHT * 0.048,
                fontWeight: 'bold',
                marginLeft: WIDTH * 0.05,
                marginBottom: HEIGHT * 0.005,
                marginTop: HEIGHT * 0.043
            }}>{title}</Text>
        </View>
    )
}

export default HeaderTitle