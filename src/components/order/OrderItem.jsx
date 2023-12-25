import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacer from '../common/Spacer'

const OrderItem = ({ foodData }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.quantityContainer}>
                    <Text style={styles.quantityTxt}>1</Text>
                </View>
                <View style={styles.inforContainer}>
                    <Text style={styles.foodName}>{foodData.name}</Text>
                    <Spacer height={8}/>
                    <Text style={styles.foodDes}>{foodData.des}</Text>
                </View>
            </View>
            <Text style={styles.price}>25.000d</Text>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    inforContainer: {
        flexDirection: 'column',
        marginStart: 8,
        width: '80%'
    },
    quantityContainer: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 4,
        width: 22,
        height: 22
    },
    quantityTxt: {
        color: 'red',
        fontSize: 16,
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row'
    },
    foodName: {
        fontSize: 16,
        fontWeight: '700',
    },
    foodDes: {
        fontSize: 14,
        fontWeight: '500',
        color: 'gray'
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: 'red',
        position: 'absolute',
        end: 0,
    }
})