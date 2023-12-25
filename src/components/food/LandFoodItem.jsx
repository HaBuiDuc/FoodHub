import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LandFoodItem = ({ foodData }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.foodImg}
                source={{uri: foodData.img}}
            />
            <Text style={styles.foodName}>{foodData.name}</Text>
            <Text style={styles.location}>{foodData.location}</Text>
        </TouchableOpacity>
    )
}

export default LandFoodItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    foodImg: {
        width: 200,
        height: 168,
        borderRadius: 8
    },
    foodName: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginVertical: 4
    },
    location: {
        fontSize: 16,
        fontWeight: '400',
        color: 'gray'
    }
})