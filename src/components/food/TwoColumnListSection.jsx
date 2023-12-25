import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import foodList from '../../../data/FoodList'
import PorFoodItem from '../../components/food/PorFoodItem'
import TwoColumnFoodItem from './TwoColumnFoodItem'

const TwoColumnListSection = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={foodList}
                renderItem={({ item }) => (
                    <TwoColumnFoodItem
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

export default TwoColumnListSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    }
    
})