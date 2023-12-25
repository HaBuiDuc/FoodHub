import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import foodList from '../../../data/FoodList'
import PorFoodItem from '../../components/food/PorFoodItem'

const FullDishPage = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={foodList}
                renderItem={({ item }) => (
                    <PorFoodItem
                        foodData={item}
                    />
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 }}
            />
        </View>
    )
}

export default FullDishPage

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 16
    }
})