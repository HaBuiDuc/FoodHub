import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CheckoutItem = ({label, value, color='black'}) => {
  return (
    <View style={styles.container}>
        <Text style={{color: color}}>{label}</Text>
        <Text style={{color: color}}>{value}</Text>
    </View>
  )
}

export default CheckoutItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 4
    }
})