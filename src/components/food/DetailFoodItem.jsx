import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailFoodItem = ({ foodData }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.foodImg}
                source={{ uri: foodData.img }}
            />
            <View style={styles.infoColumn}>
                <View>
                    <Text style={styles.foodName}>{foodData.name}</Text>
                    <Text style={styles.foodDes}>{foodData.des}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.location}>{foodData.location}</Text>
                    <Text style={styles.price}>{foodData.price}</Text>
                </View>
            </View>
        </View>
    )
}

export default DetailFoodItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    foodImg: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginEnd: 8
    },
    infoColumn: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between'
    },
    foodName: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginVertical: 4
    },
    foodDes: {
        fontSize: 16,
        fontWeight: '400',
        color: 'gray'
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    location: {
        fontSize: 16,
        fontWeight: '400',
        color: 'gray',
        marginVertical: 4
    },
    price: {
        fontSize: 16,
        fontWeight: '400',
        color: 'red',
        marginVertical: 4
    }
})