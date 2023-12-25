import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PorFoodItem = ({ foodData }) => {
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

export default PorFoodItem

const width = Dimensions.get('window').width - 24
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    foodImg: {
        width: width / 2 - 10,
        height: 300,
        borderRadius: 8
    },
    foodName: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginVertical: 4
    },
    location: {
        fontSize: 14,
        fontWeight: '400',
        color: 'gray'
    }
})