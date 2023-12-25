import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FulFoodItem = ({ foodData }) => {
    const width = Dimensions.get('window').width // Get screen width
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

export default FulFoodItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    foodImg: {
        height: 200,
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