import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import singleFoodData from '../../../data/SingleFoodData'
import AddToppingSection from '../../components/food/AddToppingSection'

const AddToOrder = () => {
    const data = singleFoodData

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.foodImg}
                source={{ uri: data.img }}
            />
            <View style={styles.restaurantContainer}>
                <Text style={styles.restaurantName}>{data.name}</Text>
                <Text style={styles.retaurantAdd}>{data.des}</Text>
                <AddToppingSection data={data.toppings} label={'Lựa chọn món ăn thêm'}/>
                <AddToppingSection data={data.drinks} label={'Lựa chọn thức uống'}/>
            </View>
        </ScrollView>
    )
}

export default AddToOrder

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    foodImg: {
        width: '100%',
        height: 260,
    },
    restaurantContainer: {
        margin: 16,
        flexDirection: 'column'
    },
    restaurantName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    retaurantAdd: {
        fontSize: 16,
        fontWeight: '400',
        color: 'darkgray',
        marginVertical: 8
    },
})