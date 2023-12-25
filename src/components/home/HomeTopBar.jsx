import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const HomeTopBar = ({ onLocationSelect }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelTxt}>Giao hàng tới</Text>
            <View style={styles.row}>
                <Text style={styles.locationTxt}>Đ. Lương Định ... </Text>
                <TouchableOpacity onPress={onLocationSelect}>
                    <Feather name={'chevron-down'} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeTopBar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        flexDirection: 'column',
        alignItems: 'center'
    },
    labelTxt: {
        fontSize: 20,
        fontWeight: '600',
        color: 'red',
    },
    locationTxt: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        fontWeight: '300'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})